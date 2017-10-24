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
            opacityAnim: new Animated.Value(2),
        };
    }
    componentDidMount() {
        Animated.timing(
            this.state.transformAnim,
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
            <Animated.View style={className("g-ps-a g-w-full g-h-full g-ai-c g-jc-c g-bg-middle-blue")}>
                <AnimatedIcon name="logo-twitter" size={60} style={{ ...className("g-f-c-white g-ta-c g-ps-r"), top: -20 }} />
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
                        tintColor="#ddd"
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
                <View style={{ ...className("g-fd-r g-pd-t-30 g-bb-light g-pd-b-5 g-bg-white"), borderBottomWidth: 1 }}>
                    <View style={className("g-col g-ai-c g-jc-c")}>
                        <Icon name="ios-person-add" size={23} style={className("g-f-c-middleBlue g-pd-l-10")} />
                    </View>
                    <View style={className("g-col g-ai-c g-jc-c")}>
                        <Icon name="logo-twitter" size={27} style={className("g-f-c-middleBlue")} />
                    </View>
                    <View style={className("g-col g-ai-c g-jc-fe g-fd-r")}>
                        <Icon name="ios-search" size={23} style={{ ...className("g-f-c-middleBlue"), width: 30 }} />
                        <Icon name="ios-create-outline" size={23} style={{ ...className("g-f-c-middleBlue g-pd-r-10"), width: 30 }} />
                    </View>
                </View>
                <TwitterPost />
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
        return (
            <View style={{ ...className("g-col g-pd-b-10"), position: "absolute", bottom: 0, height: 55 }}>
                {
                    this.props.tabs.map((tab, i) => {
                        console.log(tab)
                        return (
                            <TouchableOpacity key={i} onPress={() => setTimeout(() => this.props.goToPage(i), 0)} style={className("g-col g-ai-c g-jc-c g-pd-b-10")}>
                                <Icon
                                    name={tab}
                                    size={30}
                                    color={this.props.activeTab === i ? 'rgb(49, 149, 215)' : 'rgb(159, 159, 159)'}
                                    ref={(icon) => { this.tabIcons[i] = icon; }}
                                />
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
            selectedTab: "主页",
            title: "主页",
        };
    }
    changeTab(tabName) {
        this.setState({
            selectedTab: tabName
        });
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
        const tabView = (
            <View style={{ flex: 1 }}>
                <View style={{ ...className("g-fd-r g-pd-t-15 g-pd-l-20 g-pd-r-10 g-w-full g-jc-sb"), backgroundColor: "#3195d7", height: 55 }}>
                    <View style={className("g-fd-r")}>
                        <Icon name="logo-twitter" color="#fff" size={27} />
                        <Text style={className("g-f-c-white g-pd-l-10 g-fs-20")}>{this.state.title}</Text>
                    </View>
                    <View style={{ ...className("g-fd-r g-jc-sb"), width: 60 }}>
                        <Icon name="ios-search" color="#fff" size={25} />
                        <Icon name="ios-create-outline" color="#fff" size={25} />
                    </View>
                </View>
                <ScrollableTabView
                    onChangeTab={(obj) => this._updateTitle(obj)}
                    renderTabBar={() => <FacebookTabBar />}
                >
                    <TwitterPost tabLabel="ios-home" />
                    <TwitterPost tabLabel="ios-notifications" />
                    <TwitterPost tabLabel="ios-mail" />
                    <TwitterPost tabLabel="ios-person" />
                </ScrollableTabView>
            </View>
        );
        return tabView;
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
            <View style={className("g-w-full g-h-full")}>
                <TwitterTab />
                {entrance}
            </View>
        )
    }
}