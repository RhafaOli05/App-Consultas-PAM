import { Text, View, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { generalStyles } from '../../styles/general-styles.js';
import { taskStyles } from './styles.js';
import { useState, useEffect } from 'react';

export function TarefasScreen({ navigation }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  //Função para buscar as tarefas
  const fetchTasks = async () => {
    setLoading(true);

    try {
      const response = await fetch ('http://localhost:3000/tasks');
      const data = await response.json();
      console.log('Tarefas recebidas:', data);
      setTasks(data);
      setFilteredTasks(data);

    } catch (error) {
      console.error('Erro ao buscar as tarefas', error);

    } finally {
      setLoading(false);
    }
  };

  //Função para pesquisar as tarefas
  const searchTasks = (text) => {
    setSearchTerm(text);

    if (text.trim() === '') {
      setFilteredTasks(tasks);

    } else {
      const filtered = tasks.filter(task => {
        //Pesquisa pelo nome da tarefa
        const nameTask = task.nomeTasks?.toLowerCase().includes(text.toLowerCase());

        //Pesquisa pelo id
        const idTask = task.id_tasks.toString().toLowerCase().includes(text.toLowerCase());

        //Pesquisa por relevância
        const relevanciaTask = task.relevancia?.toLowerCase().includes(text.toLowerCase());

        //Pesquisa pelo status
        const statusTask = task.status?.toLowerCase().includes(text.toLowerCase());

        return nameTask || idTask || relevanciaTask || statusTask;
      });
      setFilteredTasks(filtered);
    }
  };

  //Carregar as tarefas quando abrir a tela
  useEffect(() => {
    fetchTasks();
  }, []);

  //Define a cor do status
    const getStatusColor = (status) => {

      switch(status) {
        case 'em progresso': return '#90c0f8';
        case 'finalizada': return '#4caf50';
        case 'atrasada': return '#f44336';
        default: return '#999';
      }
    };

    //Define a cor da relevância
    const getRelevanciaColor = (relevancia) => {

      switch(relevancia) {
        case 'muito importante': return '#f44336';
        case 'importante': return '#ff9800';
        case 'pouco importante': return '#2196f3';
        default: return '#999';
      }
    };

    //Renderiza cada tarefa
    const renderTask = ({ item }) => (
      <View style={taskStyles.taskCard}>

        <View style={taskStyles.taskHeader}>
          <Text style={taskStyles.taskName}> {item.nomeTasks} </Text>
          <Text style={[taskStyles.taskStatus, { backgroundColor: getStatusColor(item.status) }]} > 
            {item.status} </Text>
        </View>

        <Text style={taskStyles.taskDetail}> Tempo estimado: {item.tempo} </Text>
        <Text style={[taskStyles.taskDetail, { color: getRelevanciaColor(item.relevancia), fontWeight: 'bold' }]}>  
          Relevância: {item.relevancia}
        </Text>

        <Text style={taskStyles.taskDetail}> ID da tarefa: {item.id_tasks} </Text>
      </View>
    );

  return (
    <View style={generalStyles.container}>
      <Text style={taskStyles.title}>Tarefas</Text>

    {/* Barra de pesquisa */}
    <TextInput
      style={taskStyles.searchBar}
      placeholder="Pesquisar por nome, ID, relevância ou status..."
      placeholderTextColor="#999"
      value={searchTerm}
      onChangeText={searchTasks}
    />

    {/* Lista de tarefas */}
      {loading ? (
        <ActivityIndicator size="large" color="#f5b8f1" />
      ) : (
        <FlatList 
          data={filteredTasks}
          renderItem={renderTask}
          keyExtractor={(item) => item.id_tasks.toString()}
          style={taskStyles.taskList}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={taskStyles.emptyText}>Nenhuma tarefa encontrada</Text>
          }
            />
      )}

      <TouchableOpacity style={generalStyles.button} onPress={() => navigation.goBack()}>
        <Text style={generalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
