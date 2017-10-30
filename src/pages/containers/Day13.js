import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    CameraRoll
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { className, dimensionWidth, dimensionHeight } from '../../css/common';

class FunctionView extends Component{
    static defaultProps = {
        numOfText: 140,
    };
    static propTypes = {
        numOfText: React.PropTypes.number.isRequired,
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            images: [],
        };
    }
    componentDidMount() {
        const fetchParams = {
            first: 4,
        };
        CameraRoll.getPhotos(fetchParams).done((data) => this.storeImages(data), (err) => this.logImageError(err));
    }
    storeImages(data) {
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        this.setState({
            images: images,
        });
    }
    logImageError(err) {
        console.log(err);
    }
    render() {
        return (
            <View style={{...className("g-w-full g-ps-a"), height: 275, bottom: 0, left: 0, borderTopWidth: 1, borderTopColor: "#a0adb7"}}>
                <View style={{...className("g-ai-c g-jc-sb g-fd-r"), height: 50, borderBottomWidth: 1, borderBottomColor: "#ccd6dd"}}>
                    <View style={{...className("g-fd-r g-jc-sa"), width: 210}}>
                        <Icon name="ios-pin" size={23} color="#8899a5" />
                        <Icon name="md-camera" size={23} color="#8899a5" />
                        <Icon name="md-image" size={23} color="#8899a5" />
                        <Icon name="md-pie" size={23} color="#8899a5" />
                    </View>
                    <View style={{...className("g-fd-r g-jc-sa g-ai-c"), width: 110}}>
                        <Text style={{...className("g-fs-18"), color: "#ccd6dd"}}>{this.props.numOfText}</Text>
                        <TouchableHighlight style={this.props.numOfText == 140 ? {...className("g-ai-c g-jc-c"), height: 35, width: 60, borderRadius: 6, borderColor: "#ccd6dd", borderWidth: 1} : {...className("g-ai-c g-jc-c"), height: 35, width: 60, borderRadius: 6, borderColor: "#2aa2ef", borderWidth: 1}}>
                            <Text style={this.props.numOfText == 140 ? {...className("g-fs-14"), color: "#ccd6dd"} : {...className("g-fs-14 g-f-c-white")}}></Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={className("g-fd-r g-fw-w")}>
                    <View style={{...className("g-ai-c g-jc-c"), borderRightWidth: 1, borderLeftWidth: 1, borderColor: "#ddd", width: dimensionWidth / 3, height: 113}}>
                        <Icon name="ios-camera" size={80} color="#2aa2ef" />
                    </View>
                    <View style={{...className("g-ai-c g-jc-c"), borderRightWidth: 1, borderLeftWidth: 1, borderColor: "#ddd", width: dimensionWidth / 3, height: 113}}>
                        <Icon name="ios-videocam" size={80} color="#2aa2ef" />
                    </View>
                    {
                        this.state.images.map((image, index) => <View key={index} style={{...className("g-ai-c g-jc-c"), borderRightWidth: 1, borderLeftWidth: 1, borderColor: "#ddd", width: dimensionWidth / 3, height: 113}}><Image style={{width: dimensionWidth / 3, height: 113}} source={{uri: image.uri}} /></View>)
                    }
                </View>
            </View>
        )
    }
}

export default class extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            numOfText: 140,
        };
    }
    _updateTextNum(text) {
        let remain = 140 - text.length;
        this.setState({
            numOfText: remain,
        });
    }
    render() {
        return (
            <View style={className("g-pd-t-30 g-h-full g-bg-white")}>
                <View style={className("g-pd-h-15 g-fd-r g-jc-sb")}>
                    <Image style={{width: 30, height: 30, borderRadius: 5}} source={{uri: "icon"}} />
                    <Icon name="md-close" color="#2aa2ef" size={25} />
                </View>
                <TextInput
                    ref="textarea"
                    style={{...className("g-pd-v-15 g-pd-h-15 g-fs-20"), height: 335}}
                    maxLength={140}
                    multiline={true}
                    placeholder="有什么新鲜事？"
                    selectionColor="#2aa2ef"
                    placeholderTextColor="#ced8de"
                    onChangeText={(text) => this._updateTextNum(text)}
                />
                <FunctionView numOfText={this.state.numOfText} />
            </View>
        )
    }

}