import React, {Component} from 'react';
import {
	Text,
	View,
	ImageBackground,
	StyleSheet,
	FlatList,
	AsyncStorage,
	StatusBar,
   Alert
} from 'react-native';

export default class SavedLocations extends Component {
	static navigationOptions = {
		title: 'Favorites',
		headerStyle: {
			backgroundColor: '#941AB7'
		},
		headerTintColor: '#FFF',
		headerTitleStyle: {
			fontFamily: 'Microsoft Yi Baiti',
			fontSize: 30,
			textAlignVertical: "center",
			includeFontPadding: false
		}
	};

	constructor() {
		super();
		this.state = {
			savedAddresses: null
		}
	}

	componentDidMount = () => {
		AsyncStorage.getItem("savedAddresses").then(savedAddresses => {
			savedAddresses = savedAddresses
				? JSON.parse(savedAddresses)
				: [];
			this.setState({savedAddresses: savedAddresses});
		});
	}

	render() {
		return (<ImageBackground source={require('../img/background.jpg')} style={style.imageBackground}>
			<StatusBar barStyle="light-content" hidden={false} translucent={true}/>
			<View style={style.container}>
            <FlatList
               data={savedAddresses}
               renderItem={}
            />
				{
					this.state.savedAddresses
						? this.state.savedAddresses.map((savedAddress, i) => <View key={i}>
							<Text>{savedAddress}</Text>
						</View>)
						: null
				}
			</View>
		</ImageBackground>);
	}
}

const style = StyleSheet.create({
	imageBackground: {
		width: '100%',
		height: '100%',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	container: {
      width: '90%',
      height: '90%',
      borderRadius: 25,
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
   }
});
