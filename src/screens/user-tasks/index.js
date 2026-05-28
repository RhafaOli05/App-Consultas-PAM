import { Text, View, TouchableOpacity } from 'react-native';
import { generalStyles } from '../../styles/general-styles.js';
import { styles } from '../users/style.js';

export function UserTasksScreen({ navigation }) {
  return (
    <View style={generalStyles.container}>
      <Text style={styles.title}>Suas Tarefas</Text>
      <TouchableOpacity 
        style={generalStyles.button} 
        onPress={() => navigation.goBack()}
      >
        <Text style={generalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
