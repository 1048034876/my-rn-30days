/**
 * Day 3
 * twitter entrance animation
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,   // 动画
    Easing,
    Image,
    Dimensions,
    RefreshControl,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { className } from '../../css/common.js';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;
class Entrance extends Component {
    static propTypes = {
        hideThis: React.PropTypes.func.isRequired,
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            transformAnim: new Animated.Value(1),
            opacityAnim: new Animated.Value(1),
        };
    }
    componentDidMount() {
        Animated.timing(
            this.state.transformAnim,
            {
                toValue: 50,
                duration: 1200,
                easing: Easing.elastic(2),
                delay: 2000,
            },
        ).start();
        Animated.timing(
            this.state.opacityAnim,
            {
                toValue: 0,
                duration: 800,
                easing: Easing.elastic(1),
                delay: 2200,
            },
        ).start();
        setTimeout(() => {
            this.props.hideThis();
        }, 3300);
    }
    render() {
        return (
            <Animated.View style={{...className("g-ps-a g-w-full g-h-full g-ai-c g-jc-c g-bg-middle-blue"), left: 0, top: 0, opacity: this.state.opacityAnim}}>
                <AnimatedIcon name="logo-twitter" size={60} style={{ ...className("g-f-c-white g-ta-c g-ps-r"), top: -20, transform: [{scale: this.state.transformAnim}] }} />
            </Animated.View>
        )
    }
}

class TwitterPost extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isRefreshing: false,
        };
    }
    _onRefresh() {
        this.setState({
            isRefreshing: true,
        });
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
            });
        }, 1000);
    }
    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this._onRefresh()}
                        progressBackgroundColor="#ddd"
                    />
                }
            >
                <Image source={require("../../img/day3.png")} style={{ width: dimensionWidth, height: dimensionHeight - 110 }} />
            </ScrollView>
        )
    }
}

class TwitterFlow extends Component {
    render() {
        return (
            <View>
                <View style={{ ...className("g-fd-r g-bb-light g-pd-b-5 g-bg-white"), borderBottomWidth: 1 }}>
                    <View style={className("g-col")}>
                        <Icon name="ios-person-add" size={25} style={className("g-f-c-middleBlue g-pd-l-10")} />
                    </View>
                    <View style={{...className("g-col g-jc-c"), marginLeft: 100}}>
                        <Icon name="logo-twitter" size={29} style={className("g-f-c-middleBlue")} />
                    </View>
                    <View style={className("g-col g-jc-fe g-fd-r")}>
                        <Icon name="ios-search" size={25} style={{ ...className("g-f-c-middleBlue"), width: 30 }} />
                        <Icon name="ios-create-outline" size={25} style={{ ...className("g-f-c-middleBlue g-pd-r-10"), width: 30 }} />
                    </View>
                </View>
            </View>
        )
    }
}

class FacebookTabBar extends Component {
    tabIcons = [];
    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    };
    componenetDidMount() {
        setTimeout(() => this.props.goToPage(0), 0);
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    }
    setAnimationValue({ value, }) {
        this.tabIcons.forEach((icon, i) => {
            const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
            icon.setNativeProps({
                style: {
                    color: this.iconColor(progress),
                },
            });
        });
    }
    iconColor(progress) {
        const red = 49 + (159 - 49) * progress;
        const green = 149 + (159 - 149) * progress;
        const blue = 215 + (159 - 215) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }
    render() {
        let tabTitle = ["主页", "通知", "私信", "我"];
        return (
            <View style={{ ...className("g-fd-r g-pd-t-5"), height: 65, borderBottomWidth: 1, backgroundColor: "#eee" }}>
                {
                    this.props.tabs.map((tab, i) => {
                        return (
                            <TouchableOpacity key={i} onPress={() => setTimeout(() => this.props.goToPage(i), 0)} style={className("g-col g-ai-c g-jc-c g-pd-b-10")}>
                                <View style={className("g-ai-c g-jc-c")}>
                                    <Icon
                                        name={tab}
                                        size={30}
                                        color={this.props.activeTab === i ? 'rgb(49, 149, 215)' : 'rgb(159, 159, 159)'}
                                        ref={(icon) => { this.tabIcons[i] = icon; }}
                                    />
                                    <Text style={{color :this.props.activeTab === i ? 'rgb(49, 149, 215)' : 'rgb(159, 159, 159)'}}>{tabTitle[i]}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
};

class TwitterTab extends Component {
    constructor(props, context) {
        super();
        this.state = {
            title: "主页",
        };
    }
    _updateTitle(obj) {
        const { i } = obj;
        let title = "";
        switch (i) {
            case 0:
                title = "主页";
                break;
            case 1:
                title = "通知";
                break;
            case 2:
                title = "私信";
                break;
            case 3:
                title = "我";
                break;
        }
        this.setState({
            title
        });
    }
    render() {
        return (
            // <View style={className("g-col")}>
                // <View style={{...className("g-w-full g-fd-r g-jc-sb g-pd-t-15 g-pd-r-10 g-pd-l-20"), backgroundColor: "#3195d7", height: 55}}>
                    // <View style={className("g-fd-r")}>
                        // <Icon name="logo-twitter" color="#fff" size={27} />
                        // <Text style={className("g-f-c-white g-fs-20 g-pd-l-10")}>{this.state.title}</Text>
                    // </View>
                    // <View style={className("g-fd-r")}>
                        // <Icon name="ios-search" color="#fff" size={25} />
                        // <Icon name="ios-create-outline" color="#fff" size={25} />
                    // </View>
                // </View>
                <ScrollableTabView
                    onChangeTab={(obj) => this._updateTitle(obj)}
                    renderTabBar={() => <FacebookTabBar />}
                    tabBarPosition="overlayBottom"
                >
                    <TwitterPost tabLabel="ios-home" />
                    <TwitterPost tabLabel="ios-notifications" />
                    <TwitterPost tabLabel="ios-mail" />
                    <TwitterPost tabLabel="ios-person" />
                </ScrollableTabView>
            // </View>
        );
    }
}

export default class extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: true
        };
    }
    _hideEntrance() {
        this.setState({
            show: false
        });
    }
    render() {
        let entrance = this.state.show
            ? <Entrance hideThis={() => this._hideEntrance()} />
            : <View />;
        return (
            <View style={{...className("g-w-full"), height: "100%"}}>
                <TwitterFlow />
                <TwitterTab />
               
            </View>
        )
    }
}