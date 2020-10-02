import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf:'center',
        marginTop:10,
    },
    nome:{
        fontSize:24,
        color:'black'
        
    },
    hamburger:{
        marginRight:20,
        marginTop:5,
        color:'black'
    },
    user:{
        marginLeft:10,
        marginTop:5,
    },
    configuracao:{
        marginLeft:20,
        marginTop:5,
    },  
    configuracao1:{
        marginLeft:100,
        marginTop:5,
    },  
    text: {
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#FFF',
        marginTop: 15,
    },
    text1: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight:'bold',
        color:'#FFF',
    },
    text2: {
        fontSize: 12,
        marginLeft: 10,
        fontWeight:'bold',
        color:'#FFF',
        marginTop:50,
    },
    text3: {
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#FFF',
        marginTop: 15,
        marginLeft: 0,
        marginBottom: 20,
    },
    text4: {
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#FFF',
        marginTop: 15,
        marginLeft: 0,
    },
    imagem:{
        width: 330, 
        height: 150,
        alignSelf: "center", 
        marginTop:10,
    }
});

export default styles;
