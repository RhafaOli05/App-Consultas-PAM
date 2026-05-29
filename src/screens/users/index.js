import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { generalStyles } from '../../styles/general-styles.js';
import { styles } from '../users/style.js';
import { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native-web';

export function UsersScreen({ navigation }) {
    const [serchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    

    //Função para buscar todos os usuários
    const fetchUSers = async () => {
      setLoading(true);

      try {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);

      } catch (error) {
        console.error('Erro ao buscar os usuários', error);

      } finally {
        setLoading(false);
      }
    };

    //Função para pesquisar os usuários
    const searchUsers = (text) => {
      setSearchTerm(text);

      if (text.trim() === '') {
        setFilteredUsers(users);
      } else {
        const filtered = users.filter(user => {

          //Pesquisa por nome do usuário
          const nameUser = user.nome?.toLowerCase().includes(text.toLowerCase());

          //Pesquisa pelo id
          const idUser = user.id_users?.toString().includes(text);

          return nameUser || idUser;
        });
        setFilteredUsers(filtered);
      }
    };

    //Carregar os usuários quando abrir a tela
    useEffect (() => {
      fetchUSers();
    }, []);

    //Renderizar cada usuário na tela
    const renderUser = ({ item }) => (
      <View style={styles.userCard}>
        <Text style={styles.userName}>{item.nome}</Text>
        <Text style={styles.userId}> ID: {item.id_users}</Text>
      </View>
    );

  return (
    <View style={generalStyles.container}>
      <Text style={styles.title}>Usuários</Text>

      {/* Barra de pesquisa */}
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar usuários..."
        placeholderTextColor="#999"
        alue={serchTerm}
        onChangeText={searchUsers}
      />

      {/* Lista de usuários */}
      {loading ? (
        <ActivityIndicator size="large" color="#f5b8f1" />
      ) : (
        <FlatList 
          data={filteredUsers}
          renderItem={renderUser}
          keyExtractor={(item) => item.id_users.toString()}
          style={styles.userList}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum usuário encontrado</Text>
          }
        />
      )}

      <TouchableOpacity 
        style={generalStyles.button} 
        onPress={() => navigation.goBack()}
      >
        <Text style={generalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
