/**
 * Day 3
 * Twitter entrance animation
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Easing,
    Image,
    Animated,
    ScrollView,
    RefreshControl,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { className, dimensionHeight, dimensionWidth } from '@css/common';

class Entrance extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            transformAnim: new Animated.Value(1)    // 动画初始值设为1
        };
    }
	componentDidMount() {
		Animated.timing(							// 随时间变化而执行的动画类型
			this.state.transformAnim,				// 动画中的变量值
			{
                toValue: 0,
                duration: 1000,
                easing: Easing.elastic(1),
			}
        ).start();
        setTimeout(() => {
            this.props.hide();
        }, 1900);
    }
    render() {
        return (
            <Animated.View style={className("g-ps-a g-w-full g-h-full g-ai-c g-jc-c g-bg-middle-blue")}>
                <Icon name="logo-twitter" size={60} style={className("g-f-c-white g-ta-c")} />
            </Animated.View>
        )
    }
}

class TwitterPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isRefreshing: false
        }
    }
    onRefresh() {
        this.setState({
            isRefreshing: true
        });
        setTimeout(() => {
            this.setState({
                isRefreshing: false
            });
        }, 1000);
    }
    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this.onRefresh()}
                        progressBackgroundColor="#ddd"
                    />
                }
            >
                <Image source={require("../../img/day3.png")} style={{...className("g-w-full"), height: dimensionHeight - 140 }} />
                <Image source={require("../../img/day3.png")} style={{...className("g-w-full"), height: dimensionHeight - 140 }} />
            </ScrollView>
        )
    }
}

class CustomTabBar extends Component {
    constructor(props, context) {
        super(props, context);
    }
    changeTab(i) {
        this.props.goToPage(i);
    }
    render() {
        return (
            <View style={{...className("g-fd-r g-w-full g-bg-white"), height: 50}}>
                {
                    this.props.tabs.map((tab, i) => {
                        return (
                            <TouchableOpacity key={i} onPress={() => {this.changeTab(i)}} style={className("g-col g-ai-c g-jc-c g-bt-light")}>
                                <Icon
                                    name={tab}
                                    size={30}
                                    color={this.props.activeTab == i ? "#1b95e0" : "#ddd"}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}

class TwitterTab extends Component {
     constructor(props, context) {
         super(props, context);
     }
     render() {
         return (
            <ScrollableTabView
                tabBarPosition="overlayBottom"
                renderTabBar={() => <CustomTabBar />}
                // tabBarBackgroundColor="#fff"
                // tabBarTextStyle={className("g-f-c-dark g-fs-20 g-m-t-10")}
                // tabBarUnderlineStyle={{...className("g-bg-gray g-ai-c g-as-c"), width: "20%",height: 5, marginLeft: "2.5%"}} 为默认tab设置样式
            >
                <TwitterPage tabLabel="ios-home" />
                <TwitterPage tabLabel="ios-notifications" />
                <TwitterPage tabLabel="ios-mail" />
                <TwitterPage tabLabel="ios-person" />
            </ScrollableTabView>
         )
     }
}

export default class extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true
        };
    }
    hideEntrance() {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <View style={{...className("g-w-full"), height: "100%"}}>
                <TwitterTab />
                {
                    //this.state.show ? <Entrance hide={() => this.hideEntrance()} /> : <View />
                }
            </View>
        )
    }
}