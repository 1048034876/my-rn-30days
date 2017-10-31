/**
 * Day 15
 * pickerAndroid, Modal
 */
'use strict';

import  React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Modal,
    DatePickerAndroid
} from 'react-native';
import { className, dimensionHight, dimensionWidth } from '../../css/common';

export default class extends Component {
    constructor(props, context) {
        super(props, context);
        const date = new Date();
        const time = this._getTime(date);
        const timeZoneOffsetInHours = (-1) * (new Date()).getTimezoneOffset() / 60;
        let setDate = new Date();
        let showModal = false;
        this.state = {
            time,
            showModal,
            setDate,
            timeZoneOffsetInHours
        };
    }
    _getTime(date) {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const day = date.getDate(),
            monthIndex = date.getMonth(),
            year = date.getFullYear(),
            hour = date.getHours(),
            minute = date.getMinutes();
        return day + " " + monthNames[monthIndex] + " " + year + " at" + (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute);
    }
    _pickTime() {
        this.setState({
            showModal: true,
        });
    }
    _setTime() {
        this.setState({
            time: this._getTime(this.state.setDate),
            showModal: false,
        });
    }
    _closeModal() {
        this.setState({
            showModal: false
        });
    }
    _onDateChange(date) {
        this.setStaet({
            setDate: date
        });
    }
    render() {
        return (
            <View style={{...className("g-ai-c g-jc-c g-h-full g-w-full g-bg-white"), paddingBottom: 60}}>
                <Text style={{...className("g-fs-25")}}>{this.state.time}</Text>
                <TouchableHighlight underlayColor="#f3f3f3" onPress={() => this._pickTime()}>
                    <Text style={{...className("g-fs-16 g-pd-t-10"), color: "#4285f4"}}>change time</Text>
                </TouchableHighlight>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => {}}
                >
                    <View style={{...className("g-w-full g-h-full"), backgroundColor: "#f1f1f1"}}>
                        <View style={{...className("g-ps-a g-w-full g-bg-white g-fd-r g-jc-sb g-pd-t-20 g-pd-h-15"), height: 60}}>
                            <TouchableHighlight underlayColor="#fff" onPress={() => this._closeModal()}>
                                <Text style={{...className("g-fs-16 g-pd-t-10"), color: "#4285f4"}}>Cancel</Text>
                            </TouchableHighlight>
                            <Text style={{...className("g-fs-18"), paddingTop: 18, fontWeight: "500", color: "#222"}}>Choose a time</Text>
                            <TouchableHighlight underlayColor="#fff" onPress={() => this._closeModal()}>
                                <Text style={{...className("g-fs-16 g-pd-t-10"), color: "#4285f4"}}>Cancel</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{...className("g-ai-c g-jc-c g-w-full"), height: dimensionHight - 60, marginTop: 60}}>
                            <DatePickerAndroid
                                date={this.state.setDate}
                                mode="time"
                                onDateChange={this._onDateChange}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}