import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {UserContext} from '../context/UserContext';

export default function UserForm({route, navigation}) {
  const [user, setUser] = useState(route.params ?? {});

  const {dispatch} = useContext(UserContext);

  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        value={user.name}
        placeholder="Informe o nome"
      />
      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={email => setUser({...user, email})}
        value={user.email}
        placeholder="Informe o email"
      />
      <Text>URL do avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        value={user.avatarUrl}
        placeholder="Informe a URL do avatar"
      />
      <Button
        title={user.id ? 'Atualizar' : 'Salvar'}
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
});
