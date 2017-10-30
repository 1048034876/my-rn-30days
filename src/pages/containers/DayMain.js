import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Button } from 'antd-mobile';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { className } from '../../css/common.js';
class Container extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View style={className("g-fd-r g-fw-w")}>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day1")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="ios-timer" size={60} color="#fc9055" />
                            <Text style={{ ...className("g-fs-26") }}>Day1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day2")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="ios-cloud" size={60} color="#90b4aa" />
                            <Text style={{ ...className("g-fs-26") }}>Day2</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day3")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="logo-twitter" size={60} color="#0090ff" />
                            <Text style={{ ...className("g-fs-26") }}>Day3</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day1")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="ios-analytics" size={60} color="#fc9000" />
                            <Text style={{ ...className("g-fs-26") }}>Day4</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day5")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="ios-navigate" size={60} color="#00d800" />
                            <Text style={{ ...className("g-fs-26") }}>Day5</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day6")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <FontAwesome name="spotify" size={60} color="#6c6c55" />
                            <Text style={{ ...className("g-fs-26") }}>Day6</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day7")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="ios-baseball" size={60} color="#5e2a06" />
                            <Text style={{ ...className("g-fs-26") }}>Day7</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day8")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <FontAwesome name="google" size={60} color="#4285f4" />
                            <Text style={{ ...className("g-fs-26") }}>Day8</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day9")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <FontAwesome name="twitter-square" size={60} color="#2aa2ef" />
                            <Text style={{ ...className("g-fs-26") }}>Day9</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day10")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="logo-tumblr" size={60} color="#37465c" />
                            <Text style={{ ...className("g-fs-26") }}>Day10</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day11")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="md-contrast" size={60} color="#2f3600" />
                            <Text style={{ ...className("g-fs-26") }}>Day11</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day12")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="ios-stats" size={60} color="#fd8f9d" />
                            <Text style={{ ...className("g-fs-26") }}>Day12</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day13")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <Ionicons name="md-chatboxes" size={60} color="#83709d" />
                            <Text style={{ ...className("g-fs-26") }}>Day13</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ ...className("g-1of3 g-bg-white g-ai-c g-jc-c"), height: 170, borderColor: "#ddd" }} onPress={() => navigation.navigate("Day14")}>
                        <View style={{ ...className("g-jc-c g-ai-c") }}>
                            <FontAwesome name="fire" size={60} color="#ff6b6b" />
                            <Text style={{ ...className("g-fs-26") }}>Day14</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
        )
    }
}

export default Container;