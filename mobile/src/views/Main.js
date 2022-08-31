/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SignOut, PaperPlaneRight } from 'phosphor-react-native';
import io from 'socket.io-client';

import styles from '../styles/main';
import {url} from './../lib/url';
import { api, showError } from './../lib/api';

const image = require('./../assets/bg_container.png');

const socket = io(url);
const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'numeric', minute:'2-digit', hour12: false, timeZone:'America/Sao_Paulo' };

const Main = ({ profile, setProfile }) => {
    const scrollViewRef = useRef();

    const [message, setMessage] = useState('');
    const [history, setHistory] = useState(profile.history);

    const sendMessage = async () => {
        if (message){
            await api.post('/message', {
                username: profile.username,
                message,
            }).catch( error => showError(error) );

            setMessage('');
        }
    };

    useEffect(() => {
        socket.on('message', (res) => {
            if (res?.message){
                setHistory(prevState => {
                    return [
                        ...prevState,
                        res,
                    ];
                });
            }
        });
    }, []);

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.header}>
                <View style={styles.profileDetails}>
                    <View style={styles.avatar}>
                        <Image source={{uri: profile.avatar}} resizeMode="center" style={{width: 50, height: 50}} />
                    </View>
                    <View>
                        <Text style={styles.title}> {profile.username} </Text>
                        <Text style={{color: '#999'}}> online </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => setProfile(null)}>
                    <SignOut color="#f79789"/>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <ScrollView ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                    {history?.map((data, index) => (
                        data.username == profile.username ?
                            <View style={{...styles.message, alignSelf: 'flex-end'}} key={index}>
                                <View style={{...styles.ballon, backgroundColor: '#fd9283'}}>
                                    <Text style={{...styles.nameStyle, color: '#fff'}}>{data.username}</Text>                                        
                                    <Text style={{color: '#fff'}}> {data.message} </Text>
                                    <Text style={{...styles.dateStyle, color: '#fff'}}>{new Date(data.createdAt).toLocaleString('pt-BR', dateOptions)}</Text>
                                </View>
                                <View style={styles.avatar}>
                                    <Image source={{uri: data.avatar}} style={{width: 30, height: 30}} />
                                </View>
                            </View> :
                            <View style={styles.message} key={index}>
                                <View style={styles.avatar}>
                                    <Image source={{uri: data.avatar}} style={{width: 30, height: 30}} />
                                </View>
                                <View style={{...styles.ballon, backgroundColor: '#f7fbff'}}>
                                    <Text style={styles.nameStyle}>{data.username}</Text>
                                    <Text style={{color: '#333'}}> {data.message} </Text>
                                    <Text style={styles.dateStyle}>{new Date(data.createdAt).toLocaleString('pt-BR', dateOptions)}</Text>
                                </View>
                            </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <TextInput style={{width: '80%', color: '#333'}} placeholder="Fale alguma coisa..." placeholderTextColor="#778" value={message} onChangeText={e => setMessage(e)}/>
                <TouchableOpacity style={styles.btnSend} onPress={sendMessage}>
                    <PaperPlaneRight color="#f79789" weight="fill" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Main;
