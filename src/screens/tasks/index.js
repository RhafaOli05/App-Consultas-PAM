import { Text, View, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { styles } from './styles.js';
import { generalStyles } from '../../styles/general-styles.js';
import { Tarefas } from './tarefas.js'

const Item = ({name, status}) => (
  <View style={styles.item}>
    <Text style={styles.detail}>{status}</Text>
    <Text style={styles.subtitle}>{name}</Text>
  </View>
);

export function TarefasScreen({ navigation }) {
  return (
    <View style={generalStyles.container}>
      <Text style={styles.title}>Tarefas</Text>

    <View style={generalStyles.container}>
      <FlatList
        data={Tarefas}
        renderItem={({item}) => <Item 
        status = {item.status}
        name={item.name} 
        />} 
        keyExtractor={item => item.id}
      />
    </View>

      <TouchableOpacity style={generalStyles.button} onPress={() => navigation.goBack()}>
        <Text style={generalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
