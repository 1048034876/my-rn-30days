/**
 * Day 10
 * 
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Animated,
    Easing
} from 'react-native';
import { className, dimensionHeight, dimensionWidth } from '../../css/common';

export default class extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            shift: new Animated.Value(-120),
            show: false,
        };
    }
    _pushMenu() {
        this.setState({
            show: true,
        });
        Animated.timing(
            this.state.shift,
            {
                toValue: dimensionWidth === 375 ? 50 : 30,
                duration: 200,
                delay: 100,
                easing: Easing.elastic(1),
            }
        ).start();
    }
    _popMenu() {
        Animated.timing(
            this.state.shift,
            {
                toValue: -120,
                duration : 200,
                delay: 100,
                easing: Easing.elastic(1),
            },
        ).start();
        setTimeout(() => {
            this.setState({
                show: false,
            })
        }, 500);
    }
    render() {
        return (
            <View style={{backgroundColor: "#37465c"}}>
                <TouchableWithoutFeedback style={{...className("g-w-full g-h-full g-ps-a"), top: 0, left: 0}} onPress={() => this._pushMenu()}>
                    <Image source={{uri: 'tumblr'}} style={{...className("g-m-t-15 g-w-full"), resizeMode: "contain", height: dimensionHeight - 10}} />
                </TouchableWithoutFeedback>
                {
                    this.state.show
                        ? (
                            <Image source={{uri: 'tumblrblur'}} style={{...className("g-h-full g-w-full g-ps-a"), top: 0, left: 0, resizeMode: "cover"}}>
                                <Animated.View style={{...className("g-ps-a"), top: 80, left: this.state.shift}}>
                                    <Image style={{width: 120, height: 100, resizeMode: "contain"}} source={{uri: 'tumblr-text'}} />
                                    <Text style={{...className("g-ta-c g-bg-trans g-f-c-white"), width: 120}}>Text</Text>
                                </Animated.View>
                                <Animated.View style={{...className("g-ps-a"), top: 80, right: this.state.shift}}>
                                    <Image style={{width: 120, height: 100, resizeMode: "contain"}} source={{uri: 'tumblr-photo'}} />
                                    <Text style={{...className("g-ta-c g-bg-trans g-f-c-white"), width: 120}}>Photo</Text>
                                </Animated.View>
                                <Animated.View style={{...className("g-ps-a"), top:250, left: this.state.shift}}>
                                    <Image style={{width: 120, height: 100, resizeMode: "contain"}} source={{uri: 'tumblr-quote'}} />
                                    <Text style={{...className("g-ta-c g-bg-trans g-f-c-white"), width: 120}}>Quote</Text>
                                </Animated.View>
                                <Animated.View style={{...className("g-ps-a"), top: 250, right: this.state.shift}}>
                                    <Image style={{width: 120, height: 100, resizeMode: "contain"}} source={{uri: 'tumblr-link'}} />
                                    <Text style={{...className("g-ta-c g-bg-trans g-f-c-white"), width: 120}}>Link</Text>
                                </Animated.View>
                                <Animated.View style={{...className("g-ps-a"), top: 420, left: this.state.shift}}>
                                    <Image style={{width: 120, height: 100, resizeMode: "contain"}} source={{uri: 'tumblr-chat'}} />
                                    <Text style={{...className("g-ta-c g-bg-trans g-f-c-white"), width: 120}}>Chatt</Text>
                                </Animated.View>
                                <Animated.View style={{...className("g-ps-a"), top: 420, right: this.state.shift}}>
                                    <Image style={{width: 120, height: 100, resizeMode: "contain"}} source={{uri: 'tumblr-audio'}} />
                                    <Text style={{...className("g-ta-c g-bg-trans g-f-c-white"), width: 120}}>Audio</Text>
                                </Animated.View>
                                <TouchableHighlight
                                    underlayColor="rgba(0, 0, 0, 0)"
                                    activeOpacity={0}
                                    style={{...className("g-ps-a g-w-full"), left: 0, bottom: 50}}
                                    onPress={() => this._popMenu()}
                                >
                                    <Text style={{...className("g-ta-c g-bg-trans"), color: "rgba(255, 255, 255, 0.2)", fontWeight: "700"}}>Never Mind</Text>
                                </TouchableHighlight>
                            </Image>
                        )
                        : <View />
                }
            </View>
        )
    }
}