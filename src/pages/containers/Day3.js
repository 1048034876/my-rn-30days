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
    Animated,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
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

class TwitterTab extends Component {
     constructor(props, context) {
         super(props, context);
     }
     render() {
         return (
            <ScrollableTabView
                tabBarPosition="overlayBottom"
            >
                <Text tabLabel="ios-home">1234</Text>
                <Text tabLabel="ios-notifications">123</Text>
                <Text tabLabel="ios-mail">123</Text>
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
                    this.state.show ? <Entrance hide={() => this.hideEntrance()} /> : <View />
                }
            
            </View>
        )
    }
}