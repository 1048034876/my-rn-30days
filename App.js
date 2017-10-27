import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DayMainPage from './src/pages/containers/DayMain';
import Day1Page from './src/pages/containers/Day1';
import Day2Page from './src/pages/containers/Day2';
import Day3Page from './src/pages/containers/Day3';
import Day5Page from './src/pages/containers/Day5';
import Day6Page from './src/pages/containers/Day6';
import Day7Page from './src/pages/containers/Day7';
import Day8Page from './src/pages/containers/Day8';
import Day9Page from './src/pages/containers/Day9';

export default StackNavigator({
	DayMain: {
		screen: DayMainPage,
	},
	Day1: {
		screen: Day1Page,
	},
	Day2: {
		screen: Day2Page,
	},
	Day3: {
		screen: Day3Page,
	},
	Day5: {
		screen: Day5Page,
	},
	Day6: {
		screen: Day6Page,
	},
	Day7: {
		screen: Day7Page,
	},
	Day8: {
		screen: Day8Page,
	},
	Day9: {
		screen: Day9Page,
	}
})