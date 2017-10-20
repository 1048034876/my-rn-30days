import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Button } from 'antd-mobile';
import { Ionicons } from '@expo/vector-icons';
import { className } from '../../css/common.js';
class Container extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const{ navigation } = this.props;
        return (
            <View>
                <View style={className("g-fd-r g-fw-w")}>
                    <TouchableHighlight style={{...className("g-1of3 g-bg-white"), height: 170}} onPress={() => navigation.navigate("Day1")}>
                        <View style={{...className("g-jc-c g-ai-c")}}>
                            <Ionicons name="ios-timer" size={60} color="#fc9055" />
                            <Text style={{...className("g-fs-26")}}>Day1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{...className("g-1of3 g-bg-white"), height: 170}} onPress={() => navigation.navigate("Day1")}>
                        <View style={{...className("g-jc-c g-ai-c")}}>
                            <Ionicons name="ios-timer" size={50} color="green" />
                            <Text style={{...className("g-fs-26")}}>Day1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{...className("g-1of3 g-bg-white"), height: 170}} onPress={() => navigation.navigate("Day1")}>
                        <View style={{...className("g-jc-c g-ai-c")}}>
                            <Ionicons name="ios-timer" size={50} color="green" />
                            <Text style={{...className("g-fs-26")}}>Day1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{...className("g-1of3 g-bg-white"), height: 170}} onPress={() => navigation.navigate("Day1")}>
                        <View style={{...className("g-jc-c g-ai-c")}}>
                            <Ionicons name="ios-timer" size={50} color="green" />
                            <Text style={{...className("g-fs-26")}}>Day1</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: "33.3%",
        height: 170,
        borderWidth: 0.5,
        borderColor: "#ddd"
    },
})
export default Container;