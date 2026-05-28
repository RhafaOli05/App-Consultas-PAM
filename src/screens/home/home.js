import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles.js';
import { generalStyles } from '../../styles/general-styles.js';

export function HomeScreen({ navigation }) {
  return (
    <View style={generalStyles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Navegue pelo nosso app</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Tarefas')}
        >
          <Text style={generalStyles.buttonText}>Tarefas</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Usuarios')}
        >
          <Text style={generalStyles.buttonText}>Ver Todos os Usuários</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Usuario-especifico')}
        >
          <Text style={generalStyles.buttonText}>Ver Seu Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Usuario-tarefas')}
        >
          <Text style={generalStyles.buttonText}>Suas Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Desenvolvedores')}
        >
          <Text style={generalStyles.buttonText}>Desenvolvedores</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

