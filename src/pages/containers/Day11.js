import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Slider,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import GL from 'gl-react';
import { Surface } from 'gl-react-native';
import { className, dimensionWidth, dimensionHeight } from '../../css/common';
const shaders = GL.Shaders.create({
    helloGL: {
        frag: `
            precision highp float;
            varying vec2 uv;
            uniform float value;
            void main () {
                gl_FragColor = vec4(uv.x, uv.y, value, 1.0);
            }
        `
    },
    saturation: {
        frag: `
            precision highp float;
            varying vec2 uv;
            uniform sampler2D image;
            uniform float facotr;
            void main () {
                vec4 c = texture2d(image, uv);
                const vec3 W = vec3(0.2125, 0.7154, 0.0721);
                gl_FragColor = vec4(mix(vec3(dot(c.rgb, W)), c.rgb, factor), c.a);
            }
        `
    },
    pieProgress: {
        frag: `
            precision mediump float;
            varying vec2 uv;
            uniform vec4 colorInside, colorOutside;
            uniform float redius;
            uniform float progress;
            uniform vec2 dim;
            const vec2 center = vec2(0.5);
            const float PI = acos(-1.0);
            void main () {
                vec2 norm = dim / min(dim.x, dim.y);
                vec2 p = uv * norm - (norm - 1.0) / 2.0;
                vec2 delta = p - center;
                float inside = step(length(delta), redius) * step((PI + atan(delta.y, -1.0 * delta.x)) / (2.0 * PI), progress);
                gl_FragColor = mix(colorOutside, colorInside, inside);
            }

        `
    }
});
const HelloGL = GL.createComponent(
    ({value}) => <GL.Node shader={shaders.helloGL} uniforms={{ value }} />, {displayName: "HelloGL"}
);
const Saturation = GL.createComponent(
    ({factor, image, ...rest}) => <GL.Node {...rest} shader={shaders.saturation} uniforms={{factor, image}} />, {displayName: "Saturation"}
);
const PieProgress = GL.createComponent(
    ({width, height, progress, colorInside, colorOutside, radius}) => <GL.Node shader={shaders.pieProgress} uniforms={{dim: [width, height], progress, colorInside, colorOutside, radius}} />,
    {
        displayName: "PieProgress",
        defaultProps: {
            colorInside: [0, 0, 0, 0],
            colorOutside: [0, 0, 0, 0.8],
            radius: 0.4
        }
    }
);

export default class extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 0,
            saturationFactor: 1,
            progress: 0
        };
    }
    render() {
        let { value, saturationFactor, progress } = this.state;
        return (
            <ScrollView style={{...className("g-bg-white"), marginTop: 63}}>
                <View style={{...className("g-ai-c g-pd-t-5 g-pd-b-5"), borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#aaa"}}>
                    <Text style={className("g-fs-16")}>Gradients:</Text>
                </View>
                <Slider
                    maximumValue={1}
                    value={0}
                    onValueChange={(value) => this.setState({value: value})}
                />
                <Surface width={dimensionWidth} height={200}>
                    <HelloGL value={value} />
                </Surface>
                <View style={{...className("g-ai-c g-pd-t-5 g-pd-b-5"), borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#aaa"}}>
                    <Text style={className("g-fs-16")}>Satuation:</Text>
                </View>
                <Slider
                    maximumValue={5}
                    value={1}
                    onValueChange={(value) => this.setState({saturationFactor: value})}
                />
                <Surface width={dimensionWidth} height={200}>
                    <Saturation
                        factor={saturationFactor}
                        image={{uri: "gl"}}
                    />
                </Surface>
                <View style={{...className("g-ai-c g-pd-t-5 g-pd-b-5"), borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#aaa"}}>
                    <Text style={className("g-fs-16")}>Progress Pie:</Text>
                </View>
                <Slider
                    maximumValue={1}
                    value={0}
                    onValueChange={(value) => this.setState({progress: value})}
                />
                <Surface width={dimensionWidth} height={200} backgroundColor="transparent">
                    <PieProgress
                        progress={progress}
                    />
                </Surface>
            </ScrollView>
        )
    }
}
