import React from "react";
import {View, ImageBackground, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "../styles/styles";

const image = require('./../assets/bg_login.png');

const Login = ({handleSubmit, setUsername}) => (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <View style={styles.boxLogin}>
        <Text style={styles.title}>Realizar acesso</Text>
        <View style={styles.inputLogin}>
          <Text style={styles.label}>Nome do usuário</Text>
          <TextInput style={styles.input} placeholder="Informe seu nome..." onChangeText={e => setUsername(e)}/>
        </View>
        <TouchableOpacity style={styles.btnAccess} onPress={handleSubmit}>
          <Text style={styles.textBtn}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )

export default Login;