import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
    // Fundo geral da aplicação
    container: {  
        flex: 1,
        backgroundColor: '#eae7fa',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Botões gerais
    button: {
        backgroundColor: '#8b3dff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        margin: 20,
        alignItems: 'center',
        shadowColor: '#2a0f3f',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
});