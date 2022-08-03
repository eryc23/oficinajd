import React, { useState } from "react";
import { View } from "react-native";

import Login from "./src/views/Login";
import Main from "./src/views/Main";
import styles from "./src/styles/styles";
import {api} from './src/lib/api';

const App = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState();

  const handleSubmit = async () => {
    api.post('/login', {
      username
    }).then(e => {
      if(e.data.status == 200){
        setProfile({
          username: e.data.username,
          avatar: e.data.avatar
        })
      }
    })
  }

  return (
    <View style={styles.container}>
      {profile ? 
        <Main profile={profile} /> :
        <Login handleSubmit={handleSubmit} setUsername={setUsername} />
      }
    </View>
  )
}

export default App;