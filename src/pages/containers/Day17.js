/**
 * Day 17
 * Search bar
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHignlight,
    ScrollView
} from 'react-native';
import SearchBar from 'react-native-search-bar';
import { className, dimensionHight, dimensionWidth } from '../../css/common';

export default class extends Component {
    constructor(props, context) {
        super(props, context);
        const stateData = {"AL": "Alabama","AK": "Alaska","AS": "American Samoa","AZ": "Arizona","AR": "Arkansas","CA": "California","CO": "Colorado","CT": "Connecticut","DE": "Delaware","DC": "District Of Columbia","FM": "Federated States Of Micronesia","FL": "Florida","GA": "Georgia","GU": "Guam","HI": "Hawaii","ID": "Idaho","IL": "Illinois","IN": "Indiana","IA": "Iowa","KS": "Kansas","KY": "Kentucky","LA": "Louisiana","ME": "Maine","MH": "Marshall Islands","MD": "Maryland","MA": "Massachusetts","MI": "Michigan","MN": "Minnesota","MS": "Mississippi","MO": "Missouri","MT": "Montana","NE": "Nebraska","NV": "Nevada","NH": "New Hampshire","NJ": "New Jersey","NM": "New Mexico","NY": "New York","NC": "North Carolina","ND": "North Dakota","MP": "Northern Mariana Islands","OH": "Ohio","OK": "Oklahoma","OR": "Oregon","PW": "Palau","PA": "Pennsylvania","PR": "Puerto Rico","RI": "Rhode Island","SC": "South Carolina","SD": "South Dakota","TN": "Tennessee","TX": "Texas","UT": "Utah","VT": "Vermont","VI": "Virgin Islands","VA": "Virginia","WA": "Washington","WV": "West Virginia","WI": "Wisconsin","WY": "Wyoming"};
        this.states = [];
        for (let key in stateData) {
            if (stateData.hasOwnProperty(key)) {
                this.states.push(stateData[key]);
            }
        }
        this.state = {
            states: this.states,
        }
    }
    _onChangeText(text) {
        let results = fuzzy.filter(text, this.states);
        let matches = results.map(function(el) { return el.string });
        this.setState({
            states: matches
        })
    }
    render() {
        const statesList = this.state.states.map(function(elem, index) {
            return <View key={index} style={{...className("g-jc-c g-pd-l-20"), height: 40, borderBottomColor: "#aaa", borderBottomWidth: 1}}><Text>{elem}</Text></View>;
        })
        return (
            <ScrollView style={{...className("g-bg-white"), marginTop: 63}} contentOffset={{y: 50}}>
                {statesList}
            </ScrollView>
        )
    }
}
{/* <SearchBar
    ref="searchBar"
    placeholder="Search"
    onChangeText={(text) => this._onChangeText(text)}
/> */}