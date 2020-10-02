import React from 'react';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';


const Turma = () => {
    return(
        <>
        <View style = { styles.container }>
            <Octicons style = { styles.hamburger } name="three-bars" size={25} />
            <Text style = { styles.nome}>Google Sala de Aula</Text>
            <FontAwesome style = { styles.user } name="user-circle" size={30} color="black" />
            <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="black" />
        </View>
        <View style={{borderBottomWidth: 1,  marginTop: 20,}}/>
        <ScrollView>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_bookclub.jpg'}} style ={styles.imagem}>
                <Text style={styles.text3}>Clima                                         <Octicons style = { styles.configuracao1 } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text2}>Bernard Piccoli</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_bookclub.jpg'}} style ={styles.imagem}>
                <Text style={styles.text4}>11-2020-PET-UML                 <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Ivanir da Costa Alves</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_reachout.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>9-2020-PET-Mentoria de...  <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Ewander Macedo</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_bookclub.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>0-2020-Residência de S...  <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Serratec</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_cyclingbmx.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>8-2020-PET07-Projeto A...  <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Marcello Collares/ Daniel Silva</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/Math.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>7-2020-PET07-FrontEnd...  <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Daniel Silva/Daiane Barizon</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_hobby.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>6-2020-PET07-FrontEnd... <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Marcelo Collares/Alberto Paz</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_bookclub.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>5-2020-PET07-FrontEnd... <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Bernard Piccoli/Daniel Silva</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_code.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>4-2020-PET07-BackEnd... <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Edson Galdino/Pedro Neri</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_cinema.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>3-2020-PET07-BacktEnd... <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Marcelo Collares/Pedro Sol</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_pingpong.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>2-2020-PET07-Banco de... <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Maria Luiza/Alberto Paz</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://lh3.googleusercontent.com/-nHJ3pEPRVsE/XxZOJ0d53lI/AAAAAAAAASU/-F36haZ3c-EFCWqIHTfKvhMTC_xGI4DxQCNcBGAsYHQ/s1280-fcrop64=1,00000000ff1e9325/Portada.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>10-2020-PET-Inglês Ins... <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Maria Teresa</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_camping.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>9-2020-Mentoria de Car... <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Ewander Macedo</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_mealfamily.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>1-2020-PET07-Nivelame... <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Marcelo Collares/Kaique Heinen</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.button } >
                <ImageBackground source ={{uri: 'https://gstatic.com/classroom/themes/img_bookclub.jpg'}} style ={styles.imagem}>
                <Text style={styles.text}>0-2020 PET Trilha Qualifi... <Octicons style = { styles.configuracao } name="kebab-vertical" size={23} color="#fff" /></Text>
                <Text style = {styles.text1}>Serratec</Text>
                <Text style = {styles.text2}>Serratec Oficial</Text>
                </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity style={{marginTop: 20, color: "#fff"}}></TouchableOpacity>
        </>
    );
}
export default Turma;