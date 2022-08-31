/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../styles/login';
import { Controller } from 'react-hook-form';


const image = require('./../assets/bg_login.png');

const Login = ({ handleLogin, isLoading, handleSubmit, control, errors }) => (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.boxLogin}>
        <Text style={styles.title}>Realizar acesso</Text>
        <View style={styles.inputLogin}>
          <Text style={styles.label}>Nome do usuário</Text>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, onBlur, value }}) => (
              <TextInput style={[styles.input, { borderColor: errors.username ? '#fb745a' : '#ddd'} ]}
                placeholderTextColor="#999"
                placeholder="Informe seu nome..."
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}/>
            )}/>
            {errors.username && <Text style={styles.textValidation}>{errors.username?.message}</Text>}
        </View>
        <TouchableOpacity style={styles.btnAccess} onPress={handleSubmit(handleLogin)} disabled={isLoading}>
          {isLoading ?
            <ActivityIndicator color={'#fff'} /> :
            <Text style={styles.textBtn}>Acessar</Text>
          }
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

export default Login;
