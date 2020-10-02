import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import styles from './style1';

const Login = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.texto}>G</Text>
                <Text style={styles.texto1}>o</Text>
                <Text style={styles.texto2}>o</Text>
                <Text style={styles.texto3}>g</Text>
                <Text style={styles.texto4}>l</Text>
                <Text style={styles.texto5}>e</Text>
            </View>
            <View style={styles.container1}>
                <Text style={styles.texto6}>Fazer Login</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.texto7}>Use sua Conta do Google. </Text>
                <Text style={styles.texto8}>Saiba mais</Text>
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.email}>E-mail ou telefone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.email}>Senha</Text>
            </TouchableOpacity>
            <View style={styles.container3}>
                <Text style={styles.texto8}>Esqueceu seu e-mail?</Text>
            </View>
            <View style={styles.container4}>
                <TouchableOpacity style={styles.button1} >
                    <Text style={styles.conta}>Criar conta</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.button2}  onPress={() => navigation.navigate('Pagina') }>
                    <Text style={styles.entrar}>Entrar</Text>
                </TouchableOpacity> */}
                <Button style={styles.button2} title= 'Entrar' onPress={() => navigation.navigate('Turmas') }></Button>
            </View>
        </>
    );
}
export default Login;