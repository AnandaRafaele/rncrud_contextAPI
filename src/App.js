import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import {Button, Icon} from 'react-native-elements';
import {UserContext, UserProvider} from './context/UserContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Lista de Usuários',
                headerRight: () => {
                  return (
                    <Button
                      onPress={() => navigation.navigate('UserForm')}
                      type="clear"
                      icon={<Icon name="add" size={25} color="#FFF" />}
                    />
                  );
                },
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{title: 'Formulário de usuários'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

const screenOptions = {
  headerStyle: {backgroundColor: '#f4511e'},
  headerTintColor: '#FFF',
  headerTitleStyle: {fontWeight: 'bold'},
};
