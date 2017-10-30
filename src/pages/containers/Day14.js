/**
 * Day 14
 * Tinder Like Swipe
 * know bugs. simg of png won't change no matter how. Other properties changes fine.
 * but changes to gif works fine
 * Maybe bugs internally
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    PanResponder,
    Animated,
    LayoutAnimation
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SwipeCards from 'react-native-swipe-cards';
import { className, dimensionWidth, dimensionHeight } from '../../css/common';

class Card extends Component {
    static propTypes = {
        top: React.PropTypes.number.isRequired,
        left: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired,
        img: React.PropTypes.string.isRequired
    };
    render() {
        return (
            <View style={{...className("g-ps-a g-bg-white"), width: this.props.top, height: 410, borderRadius: 5, borderColor: "#e1e1e1", left: this.props.left, top: this.props.top}}>
                <Image style={{width: this.props.width - 2, height: 350}} source={{uri: this.props.img}} />
                <View style={{...className("g-fd-r g-jc-sb g-ai-c g-pd-l-20 g-pd-r-5"), height: 60}}>
                    <View>
                        <Text style={{...className("g-fs-20"), fontWeight: "500", color: "#423e39"}}>{this.props.name}, very old <Icon name="ios-checkmark-circle" size={18} color="#208bf6" /></Text>
                    </View>
                    <View style={className("g-fd-r")}>
                        <View style={{...className("g-fd-r g-ai-c"), width: 50}}>
                            <Icon name="ios-people" size={25} color="#fc6b6d" />
                            <Text style={{...className("g-pd-l-5 g-fs-16"), fontWeight: "500", color: "#fc6b6d"}}>0</Text>
                        </View>
                        <View style={{...className("g-fd-r g-ai-c"), width: 50}}>
                            <Icon name="ios-book" size={25} color="#cecece" />
                            <Text style={{...className("g-pd-l-5 g-fs-16"), fontWeight: "500", color: "#cecece"}}>0</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

class SwipeCard extends Component {
    constructor(props, context) {
        super(props, context);
        const simgs = ["minion1", "minion2", "minion3", "minion4", "minion5"];
        const names = ["Stuart", "Bob", "Kevin", "Dave", "Jerry"];
        const cards = simgs.map(function(elem, index) {
            return {
                id: "sc" + index,
                img: simgs[4-index],
                name: names[4-index],
                top: 13 + index * 4,
                width: dimensionWidth - 22 - index * 4
            }
        })
        this.state = {
            cards,
        }
    }
    handleYup(card) {
        this.props.next();
    }
    handleNope(card) {
        this.props.next();
    }
    render() {
        return (
            <SwipeCards
                cards={this.state.cards}
                renderCard={(cardData) => <SCard Key={cardData.id} {...cardData} />}
                handleYup={() => this.handleYup()}
                handleNope={() => this.handleNope()}
                showYup={false}
                showNope={false}
            />
        )
    }
}

class Cards extends Component {
    constructor(props, context) {
        super(props, context);
        const imgs = ["minion1", "minion2", "minion3", "minion4"];
        const names = ["Stuart", "Bob", "Kevin", "Dave", "Jerry"];
        this.state = { imgs, names };
    }
    _next() {
        const imgs = this.state.imgs;
        imgs.pop();
        this.setState({ imgs });
    }
    render() {
        const { names } = this.state;
        const cards = this.state.imgs.map(function(elem, index) {
            return <Card key={index} name={names[index]} img={elem} top={30-index*4} width={dimensionWidth-38+index*4} left={18-index*2} />
        });
        return (
            <View>
                {cards}
                <SwipeCard next={() => this._next()} />
            </View>
        );
    }
}

export default class extends Component {
    render() {
        return (
            <View style={className("g-bg-white g-w-full g-h-full")}>
                <View style={{...className("g-w-full g-fd-r g-jc-sb g-pd-t-20 g-pd-b-5 g-pd-h-15 g-bg-white"), borderBottomColor: "#ebebeb", borderBottomWidth: 1}}>
                    <Icon name="ios-settings" size={35} color="#cecece" />
                    <Image style={{width: 91, height: 39}} source={{uri: "tinder"}} />
                    <Icon name="ios-chatbubbles" size={35} color="#cecece" />
                </View>
                <View style={{...className("g-fd-r g-ps-a"), paddingHorizontal: 7.5, top: 520}}>
                    <View style={{...className("g-ai-c g-jc-c g-ps-r g-pd-t-5"), left: 5, width: dimensionWidth == 375 ? 70 : 60, height: dimensionWidth == 375 ? 70 : 60, borderColor: "#f5f5f5", borderWidth: 10, borderRadius: 35}}>
                        <Icon name="ios-refresh" color="#fdcd6d" size={30} />
                    </View>
                    <View style={{...className("g-ai-c g-jc-c g-pd-t-5"), width: dimensionWidth == 375 ? 110 : 100, height: dimensionWidth == 375 ? 110 : 100, borderColor: "#f5f5f5", borderWidth: 10, borderRadius: 35}}>
                        <Icon name="md-close" color="#fc6c6e" size={45} />
                    </View>
                    <View style={{...className("g-ai-c g-jc-c g-pd-t-5"), width: dimensionWidth == 375 ? 110 : 100, height: dimensionWidth == 375 ? 110 : 100, borderColor: "#f5f5f5", borderWidth: 10, borderRadius: 35}}>
                        <Icon name="md-heart" color="#52cb93" size={45} />
                    </View>
                    <View style={{...className("g-ai-c g-jc-c g-ps-r g-pd-t-5"), right: 5, width: dimensionWidth == 375 ? 70 : 60, height: dimensionWidth == 375 ? 70 : 60, borderColor: "#f5f5f5", borderWidth: 10, borderRadius: 35}}>
                        <Icon name="ios-pin" color="#318ff6" size={30} />
                    </View>
                </View>
                <Cards />
            </View>
        )
    }
}
 