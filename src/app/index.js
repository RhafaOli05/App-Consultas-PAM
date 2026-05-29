import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { TarefasScreen } from '../screens/tasks/index.js'
import { UsersScreen } from '../screens/users/index.js'
import { UserTaskScreen } from '../screens/user-tasks/index.js'
import { LoginScreen } from '../screens/login/login.js'
import { HomeScreen } from '../screens/home/home.js'
import { DevsScreen } from '../screens/devs/index.js';
import { ProgramadorasScreen } from '../screens/programadoras/index.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
    headerStyle: {
      backgroundColor: '#8b3dff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tarefy' }} />
        <Stack.Screen name="Desenvolvedores" component={DevsScreen} options={{ title: 'Desenvolvedores' }} />
        <Stack.Screen name="Usuarios" component={UsersScreen} options={{ title: 'Usuários' }} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} options={{ title: 'Tarefas' }} />
        <Stack.Screen name="Usuario-tarefas" component={UserTaskScreen} options={{ title: 'Usuários e Tarefas' }} />
        <Stack.Screen name="Programadoras" component={ProgramadorasScreen} options={{ title: 'Progamadoras' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

