/**
 * Day 5
 * find my location
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    MapView,
    Dimensions,
    TouchableHighlight
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { className } from '../../css/common.js';

const dimensionWidth = Dimensions.get("window").width;
const dimensionHeight = Dimensions.get("window").height;

class Map extends Component {
    static defaultProps = {
        mapType: 'standard',
        showsUserLocation: false,
        followUserLocation: false,
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            isFirstLoad: true,
            mapRegion: undefined,
            annotations: [],
        };
    }
    _getAnnotations(region) {
        return [{
            longitude: region.longitude,
            latitude: region.latitude,
            title: 'You Are Here',
        }];
    }
    _onRegionChangeComplete(region) {
        if (this.state.isFirstLoad) {
            this.setState({
                annotations: this._getAnnotations(region),
                isFirstLoad: false,
            });
        }
    }
    render() {
        return (
            <View>
                <MapView
                    style={this.props.mapStyle}
                    mapType={this.props.mapType}
                    showsUserLocation={this.props.showsUserLocation}
                    followUserLocation={this.props.followUserLocation}
                    onRegionChangeComplete={(region) => this._onRegionChangeComplete(region)}
                    region={this.state.mapRegion}
                    annotations={this.state.annotations}
                />
            </View>
        )
    }
}

export default class extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showGeo: false
        };
    }
    _getLocation() {
        this.setState({
            showGeo: true
        });
    }
    render() {
        return (
            <View style={{...className("g-ai-c"), paddingTop: 60}}>
                <Map mapType="standard" mapStyle={{...className("g-w-full"), height: dimensionHeight - 120}} ></Map>
                <TouchableHighlight 
                    underlayColor="#00bd03" 
                    style={{...className("g-jc-c g-m-t-10"), width: dimensionWidth - 80, height: 40, borderWidth: 1, borderColor: "#009302", borderRadius: 4, backgroundColor: "#00a803"}}
                    onPress={() => this._getLocation()}
                >
                    <Text style={className("g-ta-c g-f-c-white g-fs-18")}>Find my location</Text>
                </TouchableHighlight>
            </View>
        )
    }
}