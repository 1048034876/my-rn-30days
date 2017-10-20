import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'antd-mobile';

class Container extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Button
                    onClick={() => navigation.navigate("Day1")}
                >
                    点击进入第一天内容
                </Button>
            </View>
        );
    }
}

export default Container;