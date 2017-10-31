/**
 * Day 16
 * Gesture unlock
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import PasswordGesture from 'react-native-gesture-password';
import { className, dimensionHight, dimensionWidth } from '../../css/common';

export class EnterPassword extends Component {
    static propTypes = {
        password: React.PropTypes.string.isRequired,
        enterPassword: React.PropTypes.func.isRequired,
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            password: this.props.password,
            message: "Unlock with your password.",
            status: "normal",
        };
    }
    onEnd(password) {
        if (password == this.state.password) {
            this.setState({
                status: "right",
                message: "Password is right, success."
            });
            this.props.enterPassword();
        } else {
            this.setState({
                status: "wrong",
                message: "Password is wrong, try again."
            })
        }
    }
    onStart() {
        this.setState({
            status: "normal",
            message: "Unlock you password."
        });
    }
    render() {
        return (
            <PasswordGesture
                style={{backgroundColor: "transparent"}}
                ref="pg"
                status={this.state.status}
                message={this.state.message}
                allowCross={true}
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
            />
        );
    }
}

export class SetPassword extends Component {
    static propTypes = {
        password: React.PropTypes.string.isRequired,
        setPassword: React.PropTypes.func.isRequired,
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            password: this.props.password,
            message: "Please set your password.",
            status: "normal",
        };
    }
    onEnd(password) {
        if (this.state.password === "") {
            this.state.password = password;
            this.setState({
                status: "normal",
                message: "Password input your password secondly."
            });
        } else {
            if (password === this.state.password) {
                this.setState({
                    status: "right",
                    message: "Your password is set",
                })
                this.props.setPassword(password);
            } else {
                this.setState({
                    status: "wrong",
                    message: "Not the same, try again."
                });
            }
        }
    }
    onStart() {
        if (this.state.password === "") {
            this.setState({
                message: "Please set your password."
            });
        } else {
            this.setState({
                message: "Please input your password secondly."
            });
        }
    }
    render() {
        return (
            <PasswordGesture
                style={{backgroundColor: "transparent"}}
                ref="pg"
                status={this.state.status}
                message={this.state.message}
                allowCross={true}
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
            />
        );
    }
}

export default class extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            password: "",
            hasSet: false,
            enterApp: false,
        };
    }
    _setPassword(password) {
        this.setState({
            password: password,
            hasSet: true,
        })
    }
    _enterPassword() {
        this.setState({
            enterApp: true,
        });
    }
    render() {
        return (
            <View style={className("g-bg-trans g-h-full g-w-full")}>
                {
                    this.state.hasSet ? <View /> : <SetPassword setPassword={(password) => this._setPassword(password)} password={this.state.password} />
                }
                {
                    this.state.hasSet && !this.state.enterApp ? <EnterPassword enterPassword={() => this._enterPassword()} password={this.state.password} /> : <View />
                }
                {
                    this.state.enterApp ? <View style={{...className("g-h-full g-w-full g-ai-c g-jc-c"), backgroundColor: "#012642"}}><Text style={className("g-f-c-white g-fs-25")}>You are in the app!</Text></View> : <View />
                }
            </View>
        )
    }
}