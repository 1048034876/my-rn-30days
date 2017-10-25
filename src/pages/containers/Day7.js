import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableHighlight,
    PanResponder    // 多点触控手势
} from 'react-native';
import Icon from 'react-native-icons/Ionicons';
import { className } from '../../css/common.js';

const dimensionWidth = Dimensions.get('window').width;
const dimensionHeight = Dimensions.get('window').height;

class MoveableCircle extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            color: "rgba(255, 255, 255, 0.7)"
        };
    }
    _previousLeft = dimensionWidth / 2 - 40;
    _previousTop = dimensionHeight / 2 - 50;
    _maxTop = dimensionHeight - 110;
    _maxLeft = dimensionWidth - 98;
    _circleStyles = {};
    circle = (null : ? { setNativeProps(props: Object ) : void} );

    _updatePosition() {
        this.circle && this.circle.setNativeProps(this._circleStyles);
    }
    _endMove(evt, gestureState) {
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
        this.setState({
            color: "rgba(255, 255, 255, 0.7)"
        });
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => ture,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作
                // gestureState.{x, y}现在会被设置为0
                this.setState({
                    color: "white"
                })
            },
            onPanResponderMove: (evt, gestureState) => {
                this._circleStyles.style.left = this._previousLeft + gestureState.dx;
                this._circleStyles.style.top = this._previousTop + gestureState.dy;
                if (this._circleStyles.style.left < 0) {
                    this._circleStyles.style.left = 0;
                }
                if (this._circleStyles.style.top < 5) {
                    this._circleStyles.style.top = 5;
                }
                if (this._circleStyle.style.left > this._maxLeft) {
                    this._circleStyle.style.left = this._maxLeft;
                }
                if (this._circleStyle.style.top > this._maxTop) {
                    this._circleStyle.style.top = this._maxTop;
                }
                this._updatePosition();
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
            onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
        });
        this._circleStyles = {
            style: {
                left: this._previousLeft,
                top: this._previousTop,
            },
        };
    }
    componentDidMount() {
        this._updatePosition();
    }
    render() {
        return (
            <View 
                ref={(circle) => {this.circle = circle;}}
                style={}
        )
    }
}