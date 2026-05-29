import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

  //contém um container próprio porque o geral tem o justifyContent: 'center' que atrapalha o alinhamento dos itens
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },

subtitle: {
   fontSize: 20,
   fontWeight: 'bold',
   textAlign: 'center',
   marginBottom: 20,
   color: '#8b3dff',
   fontWeight: '600',
   letterSpacing: 0.5,
  },
  
  card:{
    backgroundColor: '#d9b8ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    width: '40%',
    aspectRatio: 1,
    shadowColor: '#8a2be2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  image: {
    width: '55%',
    height: '55%',
    borderRadius: 10,
    borderWidth: 0,
    marginBottom: 6,
    backgroundColor: '#ffffff',
  },

  info: {
    alignItems: 'center',
    width: '100%',
  },

  nome: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2a0f3f',
  },

  decorativeLine: {
    width: 20,
    height: 2,
    backgroundColor: '#8b3dff',
    borderRadius: 1,
    marginTop: 3,
  }
});