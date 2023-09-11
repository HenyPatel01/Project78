import React, {Component} from 'react';
import {    
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    Platform, 
    StatusBar, 
    ImageBackground, 
    Image, 
    TextInput
} from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor(){
        super();
        this.state={
            latitude:'',
            longitude:""
        }
    }
    render() {
        const { longitude, latitude } = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View>
                    <Text style={styles.titleText}>Star Map</Text>
                    <TextInput
                        style={{height: 40, borderColor: "gray", borderWidth: 1}}
                        placeholder="Enter your latitude"
                        placeholderTextColor = "#ffff"
                        onChangeText={(text)=>{
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
                    <TextInput
                        style={{height: 40, borderColor: "gray", borderWidth: 1}}
                        placeholder="Enter your longitude"
                        placeholderTextColor = "#ffff"
                        onChangeText={(text)=>{
                            this.setState({
                                longitude: text
                            })
                        }}
                    />
                </View>
                <WebView
                    scalesPageToFit={true}
                    source={{uri: path}}
                    style={{marginTop: 20, marginBottom: 20}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center"
    }
})