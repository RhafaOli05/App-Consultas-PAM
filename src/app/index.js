import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { TarefasScreen } from '../screens/tasks/index.js'
import { DesenvolvedoresScreen } from '../screens/devs/index.js'
import { UsersScreen } from '../screens/users/index.js'
import { YouScreen } from '../screens/users/you.js'
import { UserTasksScreen } from '../screens/user-tasks/index.js'
import { LoginScreen } from '../screens/login/login.js'
import { HomeScreen } from '../screens/home/home.js'

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
        <Stack.Screen name="Desenvolvedores" component={DesenvolvedoresScreen} options={{ title: 'Desenvolvedores' }} />
        <Stack.Screen name="Usuario-especifico" component={YouScreen} options={{ title: 'Você' }} />
        <Stack.Screen name="Usuarios" component={UsersScreen} options={{ title: 'Usuários' }} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} options={{ title: 'Tarefas' }} />
        <Stack.Screen name="Usuario-tarefas" component={UserTasksScreen} options={{ title: 'Suas Tarefas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

