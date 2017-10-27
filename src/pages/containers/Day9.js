/**
 * Day 9
 * Layout of twitter user page
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
    ScrollView,
    TabBarIOS,
    SegmentedControlIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { className } from '../../css/common';

const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;

class TwitterUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            scrollEnable: false,
            scale: 1,
            iconTop: 95,
            bannerTop: 0,
            opacity: 0
        };
    }
    _scrollEnabled = false;
    _previousTop = 0;
    _iconTop = 95;
    _scale = 1;
    _bannerTop = 0;
    _opacity = 0;
    _minTop = -192;
    _userStyle = {};
    user = (
        null: ? {
            setNativeProps(props: Object): void
        }
    );
    _updatePosition() {
        this.user && this.user.setNativeProps(this._userStyles);
    }
    _endMove(evt, gestureState) {
        this._previousTop = this._userStyles.style.top;
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return gestureState.dy / gestureState.dx != 0;
            },
            onPanResponderGrant: (evt, gestureState) => {

            },
            onPanResponderMove: (evt, gestureState) => {
                this._userStyles.style.top = this._previousTop + gestureState.dy;
                this._scale = 1 + this._userStyles.style.top / 162.5;
                this._iconTop = 95 - this._userStyles.style.top / 4.16;
                this._bannerTop = 0;
                this._opacity = 0;
                if (this._userStyles.style.top < -62.5) {
                    this._scale = 0.6;
                    this._iconTop = 110;
                    this._bannerTop = -this._userStyles.style.top - 62.5;
                    this._opacity = Math.pow((-this._userStyles.style.top - 62.5) / 129.5, 0.5);
                }
                if (this._userStyles.style.top > 0) {
                    this._userStyles.style.top = 0;
                    this._scale = 1;
                    this._iconTop = 95;
                }
                if (this._userStyles.style.top < this._minTop) {
                    this._userStyles.style.top = this._minTop;
                    this._opacity = 1;
                    this._bannerTop = 129.5;
                }
                this.setState({
                    scale: this._scale,
                    iconTop: this._iconTop,
                    bannerTop: this._bannerTop,
                    opacity: this._opacity
                });
                this._updatePosition();
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
            onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
            onShouldBlockNativeResponder: (event, gestureState) => true,
        });
        this._userStyles = {
            style: {
                top: this._previousTop,
            },
        };
    }
    componentDidMount() {
        this._updatePosition();
    }
    render() {
        let panProps = this.state.scrollEnable ? {} : {...this._panResponder.panHandlers};
        return (
            <View
                ref={(user) => {this.user = user;}} 
                style={{...className("g-ps-a g-w-full g-bg-white"), top: 0, left: 0, height: dimensionHeight - 50}}
                {...panProps}
            >
                <View style={{...className("g-col"), height: 300}}>
                    <Image style={{...className("g-w-full g-ps-a"), height: 125, top: this.state.bannerTop, left: 0}} source={require('../../img/day3.png')} />
                    <View style={{...className("g-ps-a"), left: 10, top: this.state.iconTop, borderWidth: 5, borderColor: "#fff", borderRadius: 5, transform:[{scale:this.state.scale}]}}>
                        <Image style={{height: 68, width: 68}} source={require('../../img/day3.png')} />
                    </View>
                    <View style={{...className("g-ps-a g-fd-r g-ai-c g-jc-sb"), height: 55, top: 125, width: 200, right: 10}}>
                        <TouchableHighlight style={{...className("g-ai-c g-jc-c g-pd-l-5 g-pd-r-5"), paddingVertical: 3, borderColor: "#8999a5", borderWidth: 1, borderRadius: 3, width: 40, height: 30}}>
                            <Icon name="ios-people" color="#8999a5" size={20} />
                        </TouchableHighlight>
                        <TouchableHighlight style={{...className("g-ai-c g-jc-c g-pd-l-5 g-pd-r-5"), paddingVertical: 3, borderColor: "#8999a5", borderWidth: 1, borderRadius: 3, width: 120, height: 30}}>
                            <Text style={{...className("g-fs-14"), color: "#8999a5"}}>编辑个人资料</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{...className("g-w-full g-ps-a g-pd-v-15 g-pd-l-15"), top: 165, left: 0, height: 90}}>
                        <Text style={{...className("g-fs-20 g-pd-b-5"), color: "#292f33", fontWeight: "500"}}>Github</Text>
                        <Text style={{...className("g-pd-b-5"), color: "#66757f"}}>@Github</Text>
                        <View style={className("g-fd-r")}>
                            <Text style={{color: "#95a4ae", width: 110}}>
                                <Text style={{color: "#292f33", fontWeight: "500"}}>183</Text>正在关注
                            </Text>
                            <Text style={{color: "#95a4ae", width: 110}}>
                                <Text style={{color: "#292f33", fontWeight: "500"}}>830k</Text>关注者
                            </Text>
                        </View>
                    </View>
                    {
                        this.state.bannerTop <= 0 ? <View />
                            : <Image style={{...className("g-w-full g-ps-a"), height: 125, top: this.state.bannerTop, left: 0}} source={require('../../img/day3.png')} />
                    }
                    {
                        this.state.bannerTop <= 0 ? <View />
                            : <Image style={{...className("g-w-full g-ps-a"), height: 125, top: this.state.bannerTop, left: 0, opacity: this.state.opacity}} source={require('../../img/day3.png')} />
                    }
                    <Text style={{...className("g-ps-a g-fs-20 g-bg-trans g-f-c-white"), left: dimensionWidth / 2 - 30, fontWeight: "500", top: this.state.bannerTop + 90, opacity: this.state.opacity}}>Github</Text>
                    <View style={{...className("g-ps-a g-pd-l-15"), top: 263, left: 0, width: dimensionWidth - 15, height: 40}}>
                        <SegmentedControlIOS values={['推文', '媒体', '喜欢']}  selectedIndex={0} tintColor="#2aa2ef"/>
                    </View>
                </View>
                <ScrollView contentInset={{top: 0}} style={{...className("g-ps-a g-w-full"), top: 300, backgroundColor: "#f5f8fa", height: dimensionHeight - 350, left: 0, borderTopWidth: 1, borderTopColor: "#9eacb6"}}>
                    <View style={{...className("g-w-full"), backgroundColor: "#f5f8fa"}}>
                        <Image style={{...className("g-w-full"), height: 0.835 * dimensionWidth, resizeMode: "contain"}} source={require('../../img/day3.png')} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

class TwitterTab extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedTab: "我",
        };
    }
    changeTab(tabName) {
        this.setState({
            selectedTab: tabName
        });
    }
    render() {
        return (
            // <TabBarIOS
            //     barTintColor="#fff"
            //     tintColor="#1b95e0"
            // >
            //     <Icon.TabBarItem
            //         title="主页"
            //         iconName="ios-home-outline"
            //         selectedIconName="ios-home"
            //         onPress={() => this.changeTab("主页")}
            //         selected={this.state.selectedTab === "主页"}
            //     >
            //         <TwitterUser />
            //     </Icon.TabBarItem>
            //     <Icon.TabBarItem
            //         title="通知"
            //         iconName="ios-notification-outline"
            //         selectedIconName="ios-notification"
            //         onPress={() => this.changeTab("通知")}
            //         selected={this.state.selectedTab === "通知"}
            //     >
            //         <TwitterUser />
            //     </Icon.TabBarItem>
            //     <Icon.TabBarItem
            //         title="私信"
            //         iconName="ios-mail-outline"
            //         selectedIconName="ios-mail"
            //         onPress={() => this.changeTab("私信")}
            //         selected={this.state.selectedTab === "私信"}
            //     >
            //         <TwitterUser />
            //     </Icon.TabBarItem>
            //     <Icon.TabBarItem
            //         title="我"
            //         iconName="ios-person-outline"
            //         selectedIconName="ios-person"
            //         onPress={() => this.changeTab("我")}
            //         selected={this.state.selectedTab === "我"}
            //     >
            //         <TwitterUser />
            //     </Icon.TabBarItem>
            // </TabBarIOS>
            <TwitterUser />
        )
    }
}

export default class extends Component {
    render() {
        return (
            <View style={{...className("g-w-full g-h-full"), backgroundColor: "#f5f8fa"}}>
                <TwitterTab />
            </View>
        )
    }
}