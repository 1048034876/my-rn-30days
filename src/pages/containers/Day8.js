/**
 * Day 8
 * Swipe left
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableHighlight,
    PanResponder,
    LayoutAnimation,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { className } from '../../css/common.js';

const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;

class Menu extends Component {
    render() {
        return (
            <View style={{...className("g-h-full g-bg-white"), width: 0.7 * dimensionWidth, shadowColor: "#000", shadowOpacity: 0.3, shadowRadius: 5, shadowOffset: { height: 0, width: 2}}}>
                <Image source={require('../../img/day3.png')} style={{width: 0.7 * dimensionWidth, resizeMode: "contain", height: 0.7 * dimensionHeight / 1.754}} />
                <View style={{...className("g-pd-t-10"), borderBottomWidth: 1, borderBottomColor: "#bbb"}}>
                    <TouchableHighlight underlayColor="#888" onPress={() => {true}}>
                        <View style={className("g-fd-r g-ai-c g-pd-v-15 g-bg-white")}>
                            <Icon style={{...className("g-col g-ta-c"), color: "#555"}} name="map-marker" size={15} />
                            <Text style={{...className("g-col-3 g-fs-14 g-pd-l-20"), fontWeight: "500", color: "#454545"}}>你的地点</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={() => {true}}>
                        <View style={className("g-fd-r g-ai-c g-pd-v-15 g-bg-white")}>
                            <Icon style={{...className("g-col g-ta-c"), color: "#555"}} name="pencil-square" size={15} />
                            <Text style={{...className("g-col-3 g-fs-14 g-pd-l-20"), fontWeight: "500", color: "#454545"}}>你的贡献</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={() => {true}}>
                        <View style={className("g-fd-r g-ai-c g-pd-v-15 g-bg-white")}>
                            <Icon style={{...className("g-col g-ta-c"), color: "#555"}} name="product-hunt" size={15} />
                            <Text style={{...className("g-col-3 g-fs-14 g-pd-l-20"), fontWeight: "500", color: "#454545"}}>离线区域</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={() => {true}}>
                        <View style={className("g-fd-r g-ai-c g-pd-v-15 g-bg-white")}>
                            <Icon style={{...className("g-col g-ta-c"), color: "#555"}} name="road" size={15} />
                            <Text style={{...className("g-col-3 g-fs-14 g-pd-l-20"), fontWeight: "500", color: "#454545"}}>实时路况</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={() => {true}}>
                        <View style={className("g-fd-r g-ai-c g-pd-v-15 g-bg-white")}>
                            <Icon style={{...className("g-col g-ta-c"), color: "#555"}} name="bus" size={15} />
                            <Text style={{...className("g-col-3 g-fs-14 g-pd-l-20"), fontWeight: "500", color: "#454545"}}>公交路线</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={() => {true}}>
                        <View style={className("g-fd-r g-ai-c g-pd-v-15 g-bg-white")}>
                            <Icon style={{...className("g-col g-ta-c"), color: "#555"}} name="bicycle" size={15} />
                            <Text style={{...className("g-col-3 g-fs-14 g-pd-l-20"), fontWeight: "500", color: "#454545"}}>骑车路线</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={() => {true}}>
                        <View style={className("g-fd-r g-ai-c g-pd-v-15 g-bg-white")}>
                            <Icon style={{...className("g-col g-ta-c"), color: "#555"}} name="photo" size={15} />
                            <Text style={{...className("g-col-3 g-fs-14 g-pd-l-20"), fontWeight: "500", color: "#454545"}}>卫星图像</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={() => {true}}>
                        <View style={className("g-fd-r g-ai-c g-pd-v-15 g-bg-white")}>
                            <Icon style={{...className("g-col g-ta-c"), color: "#555"}} name="tree" size={15} />
                            <Text style={{...className("g-col-3 g-fs-14 g-pd-l-20"), fontWeight: "500", color: "#454545"}}>地形</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default class extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showDrop: false
        }
    }
    _previousLeft = -0.7 * dimensionWidth - 10;
    _previousOpacity = 0;
    _minLeft = -0.7 * dimensionWidth - 10;
    _menuStyles = {};
    _dropStyle = {};
    _CustomLatoutLinear = LayoutAnimation.Presets.linear;
    menu = {};
    drop = {};
    _updatePosition() {
        this.menu && this.menu.setNativeProps(this._menuStyles);
        // this.drop && this.drop.setNativeProps(this._dropStyles);
    }
    _endMove(evt, gestureState) {
        if (gestureState.vx < 0 || gestureState.dx < 0) {
            this._menuStyles.style.left = this._minLeft;
            this._dropStyles.style.opacity = 0;
            this._previousLeft = this._minLeft;
            this._previousOpacity = 0;
            this.setState({
                showDrop: false
            });
        }
        if (gestureState.vx > 0 || gestureState.dx < 0) {
            this._menuStyles.style.left = 0;
            this._dropStyles.style.opacity = 1;
            this._previousLeft = 0;
            this._previousOpacity = 1;
        }
        this._updatePosition();
        LayoutAnimation.configureNext(this._CustomLayoutLinear);
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return gestureState.dy / gestureState.dx != 0;
            },
            onPanResponderGrant: (evt, gestureState) => {
                this.setState({
                    showDrop: true
                });
            },
            onPanResponderMove: (evt, gestureState) => {
                this._menuStyles.style.left = this._previousLeft + gestureState.dx;
                this._dropStyles.style.opacity = this._previousOpacity + Math.pow(gestureState.dx / (-this._minLeft), 0.5);
                if (this._menuStyles.style.left > 0) {
                    this._menuStyles.style.left = 0;
                    this._dropStyles.style.opacity = 1;
                }
                if (this._menuStyles.style.left < this._minLeft) {
                    this._menuStyles.style.left = this._minLeft;
                    this._dropStyles.style.opacity = 0;
                }
                this._updatePosition();
                LayoutAnimation.configureNext(this._CustomLayoutLinear);
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
            onPanResponderTerminate: (evt, gstureState) => this._endMove(evt, gestureState),
            onShouldBlockNativeResponder: (event, gestureState) => true,
        });
        this._menuStyles = {
            style: {
                left: this._previousLeft,
            },
        };
        this._dropStyles = {
            style: {
                opacity: this._previousOpacity,
            },
        };
    }
    componentDidMount() {
        this._updatePosition();
    }
    render() {
        return (
            <View style={className("g-w-full g-h-full")}>
                {
                    this.state.showDrop 
                    ? <View 
                        style={{...className("g-h-full g-w-full g-ps-a"), top: 0, left: 0, opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.6)"}} 
                        ref={(drop) => {this.drop = drop;}}
                    />
                    : <View />
                }
                <View 
                    {...this._panResponder.panHandlers}
                    style={{...className("g-h-full g-ps-a g-bg-trans"), width: 0.7 * dimensionWidth + 20, top: 0, left: -0.7 * dimensionWidth - 10}}
                    ref={(menu) => {this.menu = menu;}}
                >
                    <Menu />
                </View>
            </View>
        )
    }
}