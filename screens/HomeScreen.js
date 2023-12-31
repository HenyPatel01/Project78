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
    Image
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                <Image source={require('../assets/main-icon.png')} style={{width:'40%', height:"40%", alignSelf:'center'}}></Image>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("SpaceCrafts")}>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image source={require('../assets/space_crafts.png')} style={[styles.iconImage,{height:100,width:100}]}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("StarMap")}>
                        <Text style={styles.routeText}>Space Map</Text>
                        <Image source={require('../assets/star_map.png')} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("DailyPic")}>
                        <Text style={styles.routeText}>Daily Pic</Text>
                        <Image source={require('../assets/daily_pictures.png')} style={[styles.iconImage,{right:-10}]}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea:{
        marginTop: Platform.OS == "android"? StatusBar.currentHeight: 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "center"
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 50,
        color: "white",
        fontWeight: "bold",
        marginTop: -50
    },
    routeCard: {
        flex: 0.24,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 90,
        backgroundColor: "white"
    },
    routeText: {
        fontSize: 32,
        alignItems: "center",
        fontWeight: "bold",
        color: "#e0149c",
    },
    iconImage: {
        position: "absolute",
        height: 95,
        width: 95,
        resizeMode: "contain",
        right: -19,
        top: -12.5,
    }
})