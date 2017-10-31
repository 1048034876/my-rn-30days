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
import Day10Page from './src/pages/containers/Day10';
// import Day11Page from './src/pages/containers/Day11';
import Day13Page from './src/pages/containers/Day13';
import Day14Page from './src/pages/containers/Day14';
import Day15Page from './src/pages/containers/Day15';

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
	},
	Day10: {
		screen: Day10Page,
	},
	// Day11: {
	// 	screen: Day11Page,
	// }
	Day13: {
		screen: Day13Page,
	},
	Day14: {
		screen: Day14Page,
	},
	Day15: {
		screen: Day15Page,
	}
})