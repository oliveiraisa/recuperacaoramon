import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../../scripts/appContext';
import { useNavigation } from '@react-navigation/native';

const TelaPrevisao = () => {
    const { cidade } = useContext(AppContext);
    const [tempo, setTempo] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const navigation = useNavigation();

    const obterPrevisaoDoTempo = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=bddbeed6a893cf7d820e74ae7f9cb95e&units=metric`); 
            const data = await response.json();
            if (response.ok) {
                setTempo(data); 
            } else {
                console.error('Erro ao obter dados:', data.message);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        obterPrevisaoDoTempo(); 
    }, []); 

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            {loading ? (
                <Text>Carregando...</Text> 
            ) : tempo ? (
                <View style={styles.tempoView}>
                    <Text>Nome da cidade: {tempo.name}</Text>
                    <Text>Temperatura: {tempo.main.temp} °C</Text>
                    <Text>Velocidade do vento: {tempo.wind.speed} m/s</Text>
                    <Text>Humidade: {tempo.main.humidity}%</Text>
                    <Text>Tipo do clima: {tempo.weather[0].description}</Text>
                </View>
            ) : (
                <Text>Dados de previsão não disponíveis.</Text> 
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f0f0f0',
    },
    
    tempoView: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        padding: 30,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 4,
    },

    button: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },

    buttonText: {
        color: 'red',
        fontSize: 18,
    },

    title: {
        fontSize: 30, 
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },

    subtitle: {
        fontSize: 30, 
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default TelaPrevisao;