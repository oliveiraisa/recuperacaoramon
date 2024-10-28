import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useState, useContext } from 'react';
import { Picker } from '@react-native-picker/picker';
import { AppContext } from '../scripts/appContext';

const TelaInicio = () => {
    const { setCidade } = useContext(AppContext);
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');

    const handleChange = (itemValue) => {
        setCidadeSelecionada(itemValue);
        setCidade(itemValue); 
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={cidadeSelecionada}
                onValueChange={handleChange}
                style={styles.picker}
            >
                <Picker.Item label="Selecione uma cidade" value="" />
                {cidades.map((cidade) => (
                    <Picker.Item key={cidade.value} label={cidade.label} value={cidade.value} />
                ))}
            </Picker>{

            } {cidadeSelecionada ? (
                <Link href="/previsao">
                    <Text style={styles.link}>Ver Previsão do Tempo</Text>
                </Link>
            ) : null}
        </View>
    );
};

const cidades = [
    { label: 'Aracaju', value: 'Aracaju' },
    { label: 'Belém', value: 'Belém' },
    { label: 'Belo Horizonte', value: 'Belo Horizonte' },
    { label: 'Boa Vista', value: 'Boa Vista' },
    { label: 'Brasília', value: 'Brasília' },
    { label: 'Campo Grande', value: 'Campo Grande' },
    { label: 'Cuiabá', value: 'Cuiabá' },
    { label: 'Curitiba', value: 'Curitiba' },
    { label: 'Florianópolis', value: 'Florianópolis' },
    { label: 'Fortaleza', value: 'Fortaleza' },
    { label: 'Goiânia', value: 'Goiânia' },
    { label: 'João Pessoa', value: 'João Pessoa' },
    { label: 'Macapá', value: 'Macapá' },
    { label: 'Maceió', value: 'Maceió' },
    { label: 'Manaus', value: 'Manaus' },
    { label: 'Natal', value: 'Natal' },
    { label: 'Palmas', value: 'Palmas' },
    { label: 'Porto Alegre', value: 'Porto Alegre' },
    { label: 'Porto Velho', value: 'Porto Velho' },
    { label: 'Recife', value: 'Recife' },
    { label: 'Rio Branco', value: 'Rio Branco' },
    { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
    { label: 'Salvador', value: 'Salvador' },
    { label: 'São Luís', value: 'São Luís' },
    { label: 'São Paulo', value: 'São Paulo' },
    { label: 'Teresina', value: 'Teresina' },
    { label: 'Vitória', value: 'Vitória' },
];

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'pink',
    },

    picker: {
        width: 250,
        height: 70,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        backgroundColor: '#ffffff',
        paddingHorizontal: 13,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 4,
    },
    
    link: {
        marginTop: 20,
        color: 'red', 
        textDecorationLine: 'underline',
        fontSize: 13, 
        fontWeight: 'semi-bold', 
    },
});

export default TelaInicio;