import React, {useState, useEffect} from 'react'
import {
    View,     
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from "react-native"
import {useDispatch} from "react-redux"
import {listAllUsers} from "../redux/actions/userActions"
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"

const UserByGender = ({gender}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(listAllUsers(200))
    },[dispatch])
        
    
    const renderItem = ({item}) =>(
        <View style={styles.imageContainer}>
            <TouchableHighlight>
                <Image source={{uri : `${item.picture}`}}
                    style={styles.image}
                />    
            </TouchableHighlight>                        
            <TouchableOpacity 
                onPress={()=> 
                navigation.navigate('Profile', {id: item.id})}
                style={styles.icon}>
                <Ionicons                                 
                    name="md-add-circle" 
                    size={48} 
                    color="white"                             
                />
            </TouchableOpacity>                        
        </View>
    )
    return (
        <FlatList
        key={'#'}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        style={styles.list}              
        data={gender}
        renderItem={renderItem}
        keyExtractor={item => '#' + item.id}
    />
    )
}

const styles = StyleSheet.create({
    
    listContent:{      
      alignItems: 'center'
    },
    imageContainer:{
        borderWidth: 3,
        borderColor: '#f4f4f4',
        borderRadius: 10,
        position: 'relative'
    },    
    image:{ 
        borderRadius: 10,       
        width: 165,
        height: 165
    },
    icon:{
      position: 'absolute',
      top: 50,
      left: 50
    },    
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
})
export default UserByGender
