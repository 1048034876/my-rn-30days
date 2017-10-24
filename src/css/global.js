import React from 'react';
import { Dimensions } from 'react-native';
const globalStyle = {
	'g-flex': {
		display: 'flex',
	},
	'g-fd-rr': {
		flexDirection: 'row-reverse'
	},
	'g-fd-c': {
		flexDirection: 'column'
    },
    'g-fd-r': {
		flexDirection: 'row'
	},
	'g-fd-cr': {
		flexDirection: 'column-reverse'
	},
	'g-jc-sb': {
		justifyContent: 'space-between'
	},
	'g-jc-sa': {
		justifyContent: 'space-around'
	},
	'g-jc-c': {
		justifyContent: 'center'
	},
	'g-jc-fe': {
		justifyContent: 'flex-end'
	},
	'g-ai-c': {
		alignItems: 'center'
	},
	'g-ai-fe': {
		alignItems: 'flex-end'
	},
	'g-ps-a': {
		position: 'absolute'
	},
	'g-ps-r': {
		position: 'relative'
	},
	'g-fw-w': {
		flexWrap: 'wrap'
	},
	'g-ac-fs': {
		alignContent: 'flex-start'
	},
	'g-as-fc': {
		alignSelf: 'flex-center'
	},
	'g-as-fd': {
		alignSelf: 'flex-end'
	},
	'g-col': {
		flex: 1
	},
	'g-col-2': {
		flex: 2
	},
	'g-w-full': {
		width: "100%"
	},
	'g-h-full': {
		height: "100%"
	},
	'g-full': {
		flexBasis: "100%"
	},
	'g-1of2': {
		flexBasis: "50%"
	},
	'g-1of3': {
		flexBasis: "33.3333%"
	},
	'g-1of4': {
		flex: "0 0 25%"
	},
	'g-flex-cc': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxSizing: "border-box",
	},
	'g-pd-t-5': {
		paddingTop: 5
	},
	'g-pd-b-5': {
		paddingBottom: 5
	},
	'g-pd-l-5': {
		paddingLeft: 5
	},
	'g-pd-r-5': {
		paddingRight: 5
	},
	'g-pd-t-10': {
		paddingTop: 10
	},
	'g-pd-b-10': {
		paddingBottom: 10
	},
	'g-pd-l-10': {
		paddingLeft: 10
	},
	'g-pd-r-10': {
		paddingRight: 10
	},
	'g-pd-t-15': {
		paddingTop: 15
	},
	'g-pd-b-15': {
		paddingBottom: 15
	},
	'g-pd-l-15': {
		paddingLeft: 15
	},
	'g-pd-r-15': {
		paddingRight: 15
	},
	'g-pd-t-20': {
		paddingTop: 20
	},
	'g-pd-b-20': {
		paddingBottom: 20
	},
	'g-pd-l-20': {
		paddingLeft: 20
	},
	'g-pd-r-20': {
		paddingRight: 20
	},
	'g-pd-t-25': {
		paddingTop: 25
	},
	'g-pd-b-25': {
		paddingBottom: 25
	},
	'g-pd-l-25': {
		paddingLeft: 25
	},
	'g-pd-r-25': {
		paddingRight: 25
	},
	'g-pd-t-30': {
		paddingTop: 30
	},
	'g-pd-b-30': {
		paddingBottom: 30
	},
	'g-pd-l-30': {
		paddingLeft: 30
	},
	'g-pd-r-30': {
		paddingRight: 30
	},
	'g-pd-h-10': {
		paddingHorizontal: 10
	},
	'g-pd-v-10': {
		paddingVertical: 10
	},
	'g-pd-h-15': {
		paddingHorizontal: 15
	},
	'g-pd-v-15': {
		paddingVertical: 15
	},
	'g-pd-h-20': {
		paddingHorizontal: 20
	},
	'g-pd-v-20': {
		paddingVertical: 20
	},
	'g-pd-h-25': {
		paddingHorizontal: 25
	},
	'g-pd-v-25': {
		paddingVertical: 25
	},
	'g-pd-h-30': {
		paddingHorizontal: 30
	},
	'g-pd-v-30': {
		paddingVertical: 30
	},
	'g-m-h-10': {
		marginHorizontal: 10
	},
	'g-m-v-10': {
		marginVertical: 10
	},
	'g-m-h-15': {
		marginHorizontal: 15
	},
	'g-m-v-15': {
		marginVertical: 15
	},
	'g-m-h-20': {
		marginHorizontal: 20
	},
	'g-m-v-20': {
		marginVertical: 20
	},
	'g-m-h-25': {
		marginHorizontal: 25
	},
	'g-m-v-25': {
		marginVertical: 25
	},
	'g-m-h-30': {
		marginHorizontal: 30
	},
	'g-m-v-30': {
		marginVertical: 30
	},
	'g-m-t-5': {
		marginTop: 5
	},
	'g-m-b-5': {
		marginBottom: 5
	},
	'g-m-l-5': {
		marginLeft: 5
	},
	'g-m-r-5': {
		marginRight: 5
	},
	'g-m-t-10': {
		marginTop: 10
	},
	'g-m-b-10': {
		marginBottom: 10
	},
	'g-m-l-10': {
		marginLeft: 10
	},
	'g-m-r-10': {
		marginRight: 10
	},
	'g-m-t-15': {
		marginTop: 15
	},
	'g-m-b-15': {
		marginBottom: 15
	},
	'g-m-l-15': {
		marginLeft: 15
	},
	'g-m-r-15': {
		marginRight: 15
	},
	'g-m-t-20': {
		marginTop: 20
	},
	'g-m-b-20': {
		marginBottom: 20
	},
	'g-m-l-20': {
		marginLeft: 20
	},
	'g-m-r-20': {
		marginRight: 20
	},
	'g-m-t-25': {
		marginTop: 25
	},
	'g-m-b-25': {
		marginBottom: 25
	},
	'g-m-l-25': {
		marginLeft: 25
	},
	'g-m-r-25': {
		marginRight: 25
	},
	'g-m-t-30': {
		marginTop: 30
	},
	'g-m-b-30': {
		marginBottom: 30
	},
	'g-m-l-30': {
		marginLeft: 30
	},
	'g-m-r-30': {
		marginRight: 30
	},
    'g-red': {
        color: "#f00"
	},
	'g-bg-white': {
		backgroundColor: "#fff"
	},
	'g-bg-light': {
		backgroundColor: "#f3f3f3"
	},
	'g-bg-light-blue': {
		backgroundColor: "#6cb4ff"
	},
	'g-bg-middle-blue': {
		backgroundColor: "#1b95e0"
	},
	'g-bg-trans': {
		backgroundColor: "transparent"
	},
	'g-fs-14': {
		fontSize: 14
	},
	'g-fs-15': {
		fontSize: 15
	},
	'g-fs-16': {
		fontSize: 16
	},
	'g-fs-20': {
		fontSize: 20
	},
	'g-fs-26': {
		fontSize: 26
	},
	'g-fs-70': {
		fontSize: 70
	},
	'g-f-c-white': {
		color: "#fff"
	},
	'g-f-c-dark': {
		color: "#555"
	},
	'g-f-c-middleBlue': {
		color: "#1b95e0"
	},
	'g-bd-c': {
		borderRadius: 35
	},
	'g-bb-light': {
		borderBottomWidth: 1,
		borderBottomColor:"#ddd",
	},
	'g-ta-l': {
		textAlign: "left"
	},
	'g-ta-c': {
		textAlign: "center"
	},
	'g-ta-r': {
		textAlign: "right"
	},
};
export default globalStyle;