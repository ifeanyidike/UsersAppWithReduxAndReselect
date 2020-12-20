import React from 'react'
import {
    StyleSheet, 
    Text, 
    View, 
    Image,
    ImageBackground,    
 } from 'react-native';
 import { MaterialIcons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'; 
 import Loading from "./Loading"
 import Error from "./Error"

const UserTop = ({user, loading, error}) => {    
        
    return (
    
        <View style={styles.container}>        
            
            {
                loading ? <Loading />
                : error ? <Error>{error}</Error>
                : 
                <>
                   
                    <ImageBackground 
                        style={styles.backgroundSize}
                        imageStyle={styles.userBackground}
                        source={require('../Images/profile__background.jpg')}
                        >
                        <View style={styles.userImageContainer}>
                            <Image style={styles.userImage}  
                                source={{uri: `${user.picture}`}} />
                        </View>
                    </ImageBackground>
                    <View style={styles.nameView}>
                        <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
                    </View>
                    {
                        user.location && (
                            <View style={styles.itemsList}>
                                <View style={styles.item}>
                                    <MaterialIcons style={styles.icon} name="location-city" size={24} />                            
                                    <Text style={styles.itemText}>
                                    {
                                        'Lives in' + ' ' + 
                                        user.location.street + ', ' + 
                                        user.location.city                                                                         
                                    }
                                    </Text>
                                </View>
                                <View style={styles.item}>
                                    <MaterialIcons style={styles.icon} name="location-on" size={24} color="black" />
                                    <Text style={styles.itemText}>
                                    {                                    
                                        user.location.state + ', ' + 
                                        user.location.country                                    
                                    }
                                    </Text>
                                </View>
                                <View style={styles.item}>
                                    <MaterialCommunityIcons style={styles.icon} name="gender-female" size={24} />
                                    <Text style={styles.itemText}>
                                        {user.gender}
                                    </Text>
                                </View>
                                <View style={styles.item}>
                                    <MaterialIcons style={styles.icon} name="phone-in-talk" size={24} />
                                    <Text style={styles.itemText}>
                                        {user.phone}
                                    </Text>
                                </View>
                                <View style={styles.item}>
                                    <MaterialIcons style={styles.icon} name="email" size={24} />
                                    <Text style={styles.itemText}>
                                        {user.email}
                                    </Text>
                                </View>
                                <View style={styles.item}>
                                    <MaterialIcons style={styles.icon} name="date-range" size={24} />
                                    <Text style={styles.itemText}>
                                        {`Registered on `}
                                        {new Date(user.registerDate).toDateString()}
                                    </Text>
                                </View>
                                <View style={styles.item}>
                                    <Fontisto style={styles.icon} name="date" size={24} />
                                    <Text style={styles.itemText}>
                                        {`Born on `}
                                        {new Date(user.dateOfBirth).toDateString()}
                                    </Text>
                                </View>
                            </View>
                        )
                    }                                        
                </>
            }
                                   
        </View>         
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,                  
      alignItems: 'center',
      justifyContent: "flex-start",
      marginBottom: 30
    },
    scrollContainer:{        
        alignItems: 'center',
        justifyContent: "flex-start"     
    },
    backgroundSize:{
        flex: 1,
        width: "100%",     
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative'  
    },
    userBackground:{                 
        alignItems: 'center',
        justifyContent: "center",         
    },
    userImageContainer:{
        
        width: 150,
        height: 150,
        borderRadius: 999,         
        borderWidth: 2,
        borderColor: '#f4f4f4',
        borderStyle: 'solid',
        bottom: -75,
        left: 90
    },
    
    userImage:{        
        width: '100%',
        height: '100%',
        borderRadius: 999,          
    },
    nameView:{
      marginTop: 80,      
    },
    name:{        
        fontSize: 30,
        fontWeight: 'bold',
    },
    itemsList:{
        width: '100%',
        marginLeft: 10,        
    },
    item:{      
      flexDirection: 'row', 
      alignItems: 'center',
      marginTop: 10,
      width: 300
    },
    itemText:{
      flexWrap: 'wrap',
      marginLeft: 5,      
      fontSize: 18
    },
    icon:{
        fontSize: 24,
        color: '#aaa'
    }
})

export default UserTop
