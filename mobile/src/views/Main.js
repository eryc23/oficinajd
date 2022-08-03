import React from "react";
import {View, ImageBackground, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from "../styles/styles";

const image = require('./../assets/bg_container.png');

const Main = ({profile}) => (
    <ImageBackground source={image} resizeMode='cover' style={styles.imageMain}>
        <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.avatar}>
                    <Image source={{uri: profile.avatar}} resizeMode='center' style={{width: 50, height: 50}} />
                </View>
                <View>
                    <Text style={styles.title}> {profile.username} </Text>
                    <Text> online </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btnAccess}>
                <Text style={styles.textBtn}>:</Text>
            </TouchableOpacity>
        </View>

        <View style={{width: '100%', flex: .7}}>
            
        </View>

        <View style={{backgroundColor: '#fff', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextInput style={styles.input} placeholder="Digite sua mensagem..."/>
            <TouchableOpacity style={styles.btnAccess}>
                <Text style={styles.textBtn}>Enviar</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )

export default Main;