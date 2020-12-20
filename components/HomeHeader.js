import React from 'react';
import FadeInView from "./FadeInView"
import {
    Image,      
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import HeaderItems from "./HeaderItems"

const HomeHeader = () => {
    
    return (
        
        <View style={styles.container}>
            <HeaderItems />
            <View style={styles.topitem}>            
                <Image
                    style={styles.hometopimage}
                    source={require('../Images/topimage.jpg')}            
                />     
                
                <FadeInView  style={styles.topfade}>
                    <Text style={styles.topitemtext}> Browse Our Users</Text>    
                </FadeInView>
            
            </View>
        </View>
                               
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 0.7,
        marginBottom: 30
    },
    topitem:{                
        height: 200,
        width: '100%',        
        position: 'relative',
        flexDirection: 'row',        
        zIndex: 2
    },
    hometopimage:{
        height: '100%',
        width: '100%',           
        zIndex: 1,        
    },    
    topfade:{
        position: 'absolute',
        top: '42%',
        left: '20%',
        zIndex: 3,
    },
    topitemtext:{                
        textAlign: 'center',        
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',             
    }    
});

export default HomeHeader
