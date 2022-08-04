import React, { useState } from "react";
import { View } from "react-native";

import Login from "./src/views/Login";
import Main from "./src/views/Main";
import {api} from './src/lib/api';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState();

  const handleSubmit = async () => {
    setIsLoading(true);

    api.post('/login', {
      username
    }).then(e => {
      if(e.data.status == 200){
        setProfile({
          username: e.data.username,
          avatar: e.data.avatar,
          history: e.data.history
        })
      }

      setIsLoading(false);
    }).catch(err => setIsLoading(false))
  }

  return (
    <View style={{flex: 1}}>
      {profile ? 
        <Main 
          profile={profile} 
          setProfile={setProfile}
        /> :
        <Login 
          handleSubmit={handleSubmit} 
          setUsername={setUsername} 
          isLoading={isLoading}
        />
      }
    </View>
  )
}

export default App;