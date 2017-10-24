/**
 * Day 1
 * A stop watch
 */
'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	ListView,
	TouchableHighlight
} from 'react-native';
import { className } from '../../css/common.js';

class WatchFace extends Component {
	static propTypes = {
		sectionTime: React.PropTypes.string.isRequired,
		totalTime: React.PropTypes.string.isRequired,
	};
	render() {
		return (
			<View style={{ ...className("g-bg-white g-bb-light"), width: "100%", height: 170, paddingHorizontal: 50, paddingVertical: 30, }}>
				<Text style={{ ...className("g-fs-20 g-pd-h-30 g-f-c-dark") }}>{this.props.sectionTime}</Text>
				<Text style={{ ...className("g-pd-h-20 g-f-c-dark"), fontSize: 70 }}>{this.props.totalTime}</Text>
			</View>
		)
	}
}

class WatchControl extends Component {
	static propTypes = {
		stopWatch: React.PropTypes.func.isRequired,
		clearRecord: React.PropTypes.func.isRequired,
		startWatch: React.PropTypes.func.isRequired,
		addRecord: React.PropTypes.func.isRequired,
	};
	constructor(props) {
		super(props);
		this.state = {
			watchOn: false,
			startBtnText: "启动",
			startBtnColor: "#60B644",
			stopBtnText: "计次",
			underlayColor: "#fff",
		};
	}
	_startWatch() {
		if (!this.state.watchOn) {
			this.setState({
				startBtnText: "停止",
				startBtnColor: "#ff0044",
				stopBtnText: "计次",
				underlayColor: "#eee",
				watchOn: true
			});
			this.props.startWatch();
		} else {
			this.setState({
				startBtnText: "启动",
				startBtnColor: "#60B644",
				stopBtnText: "复位",
				underlayColor: "#eee",
				watchOn: false
			});
			this.props.stopWatch();
		}
	}
	_addRecord() {
		if (this.state.watchOn) {
			this.props.addRecord();
		} else {
			this.props.clearRecord();
			this.setState({
				stopBtnText: "计次"
			})
		}
	}

	render() {
		return (
			<View style={{ ...className("g-fd-r g-bg-light g-pd-v-30"), width: "100%", height: 100, paddingHorizontal: 60 }}>
				<View style={className("g-col")}>
					<TouchableHighlight style={{ ...className("g-bd-c g-bg-white g-jc-c g-ai-c"), width: 70, height: 70 }} underlayColor={this.state.underlayColor} onPress={() => this._addRecord()}>
						<Text style={{ ...className("g-bg-trans g-fs-14"), color: "#555" }}>{this.state.stopBtnText}</Text>
					</TouchableHighlight>
				</View>
				<View style={className("g-col g-ai-fe")}>
					<TouchableHighlight style={{ ...className("g-bd-c g-bg-white g-jc-c g-ai-c"), width: 70, height: 70 }} underlayColor="#eee" onPress={() => this._startWatch()}>
						<Text style={{ ...className("g-fs-14 g-bg-trans"), color: this.state.startBtnColor }}>{this.state.startBtnText}</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

class WatchRecord extends Component {
	static propTypes = {
		record: React.PropTypes.array.isRequired,
	};
	render() {
		let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
			theDataSource = ds.cloneWithRows(this.props.record);
		return (
			<ListView
				style={{ ...className("g-w-full g-pd-h-15"), height: 400 }}
				dataSource={theDataSource}
				renderRow={(rowData) =>
					<View style={{ ...className("g-fd-r g-ai-c g-bb-light"), height: 50 }}>
						<Text style={{ ...className("g-col g-bg-trans g-pd-h-20"), color: "#777", textAlign: "left" }}>{rowData.title}</Text>
						<View style={className("g-ai-c")}>
							<Text style={{ ...className("g-col g-bg-trans g-pd-h-20"), color: "#222", textAlign: "right" }}>{rowData.time}</Text>
						</View>
					</View>
				} />
		);
	}
}

export default class extends Component {
	constructor() {
		super();
		this.state = {
			stopWatch: false,
			resetWatch: true,
			intialTime: 0,
			currentTime: 0,
			recordTime: 0,
			timeAccumulation: 0,
			totalTime: "00:00.00",
			sectionTime: "00:00.00",
			recordCounter: 0,
			record: [
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" }
			],
		};
	}
	componentWillUnmount() {
		this._stopWatch();
		this._clearRecord();
	}
	_startWatch() {
		if (this.state.resetWatch) {
			this.setState({
				stopWatch: false,
				resetWatch: false,
				timeAccumulation: 0,
				initialTime: (new Date()).getTime()
			})
		} else {
			this.setState({
				stopWatch: false,
				initialTime: (new Date()).getTime()
			})
		}
		let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
		let interval = setInterval(() => {
			this.setState({
				currentTime: (new Date()).getTime()
			})
			countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
			minute = Math.floor(countingTime / (60 * 1000));
			second = Math.floor((countingTime - 6000 * minute) / 1000);
			milSecond = Math.floor((countingTime % 1000) / 10);
			seccountingTime = countingTime - this.state.recordTime;
			secminute = Math.floor(seccountingTime / (60 * 1000));
			secsecond = Math.floor((seccountingTime - 6000 * secminute) / 1000);
			secmilSecond = Math.floor((seccountingTime % 1000) / 10);
			this.setState({
				totalTime: (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + "." + (milSecond < 10 ? "0" + milSecond : milSecond),
				sectionTime: (secminute < 10 ? "0" + secminute : secminute) + ":" + (secsecond < 10 ? "0" + secsecond : secsecond) + "." + (secmilSecond < 10 ? "0" + secmilSecond : secmilSecond),
			})
			if (this.state.stopWatch) {
				this.setState({
					timeAccumulation: countingTime
				})
				clearInterval(interval)
			};
		}, 10);
	}
	_stopWatch() {
		this.setState({
			stopWatch: true
		})
	}
	_addRecord() {
		let { recordCounter, record } = this.state;
		let secmilSecond, secsecond, secminute, seccountingTime;
		recordCounter++;
		if (recordCounter < 8) {
			record.pop();
		}
		seccountingTime = this.state.currentTime - this.state.initialTime;
		secminute = Math.floor(seccountingTime / (60 * 1000));
		secsecond = Math.floor((seccountingTime - 6000 * secminute) / 1000);
		secmilSecond = Math.floor((seccountingTime % 1000) / 10);
		record.unshift({
			title: "计次" + recordCounter,
			time: (secminute < 10 ? "0" + secminute : secminute) + ":" + (secsecond < 10 ? "0" + secsecond : secsecond) + "." + (secmilSecond < 10 ? "0" + secmilSecond : secmilSecond),
		});
		this.setState({
			recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
			recordCounter: recordCounter,
			record: record,
		});
	}
	_clearRecord() {
		this.setState({
			stopWatch: false,
			resetWatch: true,
			intialTime: 0,
			currentTime: 0,
			recordTime: 0,
			timeAccumulation: 0,
			totalTime: "00:00.00",
			sectionTime: "00:00.00",
			recordCounter: 0,
			record: [
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" }
			],
		});
	}
	render() {
		return (
			<View style={className("g-ai-c g-bg-light g-fd-c")}>
				<WatchFace
					totalTime={this.state.totalTime}
					sectionTime={this.state.sectionTime}
				/>
				<WatchControl
					addRecord={() => this._addRecord()}
					clearRecord={() => this._clearRecord()}
					startWatch={() => this._startWatch()}
					stopWatch={() => this._stopWatch()}
				/>
				<WatchRecord record={this.state.record} />
			</View>
		)
	}
}
