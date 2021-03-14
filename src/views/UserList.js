import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import {ListItem, Avatar, Button, Icon} from 'react-native-elements';
import {UserContext} from '../context/UserContext';

export default function UserList(props) {
  const {state, dispatch} = useContext(UserContext);

  function confirmUserDeleting(user) {
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress: () => {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onLongPress={() => Alert.alert('Ei, colega...', 'espere aíiii')}
        onPress={() => props.navigation.navigate('UserForm', user)}>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <>
          <Button
            type="clear"
            icon={<Icon name="edit" size={25} color="orange" />}
            onPress={() => props.navigation.navigate('UserForm', user)}
          />
          <Button
            type="clear"
            icon={<Icon name="delete" size={25} color="red" />}
            onPress={() => confirmUserDeleting(user)}
          />
        </>
      </ListItem>
    );
  }

  return (
    <View style={state.users && state.users.length ? {} : styles.container}>
      {state.users && state.users.length ? (
        <FlatList
          keyExtractor={user => user.id.toString()}
          data={state.users}
          renderItem={getUserItem}
        />
      ) : (
        <>
          <Image
            source={require('../assets/empty_data.jpg')}
            style={styles.emptyData}
          />
          <Text style={styles.emptyDataText}>Nenhum usuário encontrado!</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  emptyData: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2,
  },
  emptyDataText: {
    color: '#6c7898',
  },
});
