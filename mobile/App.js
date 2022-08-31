/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './src/views/Login';
import Main from './src/views/Main';
import { api, showError } from './src/lib/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({
  username: yup.string().required('Nome é obrigatório'),
});

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState();

  const { control, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });


  const handleLogin = async (data) => {
    setIsLoading(true);
    const nome = data.username;
    api.post('/login', {
      username: nome,
    }).then(response => {
      if (response.data.status == 200){
        setProfile({
          username: response.data.username,
          avatar: response.data.avatar,
          history: response.data.history,
        });
      }
      console.log(data);
      console.log(response.data);
      setIsLoading(false);
    }).catch(err => {
      setIsLoading(false);
      showError(err);
      });

  };

  return (
    <View style={{flex: 1}}>
      {profile ?
        <Main
          profile={profile}
          setProfile={setProfile}
        /> :
        <Login
          handleLogin={handleLogin}
          handleSubmit={handleSubmit}
          control={control}
          errors={errors}
          isLoading={isLoading}
        />
      }
    </View>
  );
};

export default App;
