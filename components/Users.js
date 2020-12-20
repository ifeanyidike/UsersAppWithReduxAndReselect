import React, {useState, useEffect} from 'react';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux"
import {
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
 } from 'react-native';
import { getEveryUserData} from "../redux/selectors"
import Loading from "./Loading"
import Error from "./Error"

const Users = ({navigation, listUsers}) => {
    const dispatch = useDispatch()
    const [pageNo, setPageNo] = useState(0)
    
    useEffect(()=>{
        dispatch(listUsers(10, pageNo))
    },[dispatch, pageNo])
    
    const {loading, error}  = useSelector(state => state.getUsers)
    const usersData = useSelector(getEveryUserData)  
  
        
    const handlePageForward = () =>{
        usersData && (setPageNo(prevPageNo => 
            prevPageNo >= usersData.length - 1 ? prevPageNo : prevPageNo + 1))        
    }
    const handlePageBackward = () =>{
        setPageNo(prevPageNo => prevPageNo === 0 ? prevPageNo : prevPageNo - 1)
    }
    
    return (
        <View style={styles.container}>
            {
                
                loading ? <Loading />                                   
                : error ? <Error>{error}</Error>
                : 
                <>
                <View style={styles.cta__text}>
                    <Text style={styles.toptext}>Our Users</Text>    
                    <View style={styles.cta}>
                        <TouchableOpacity 
                            onPress={handlePageBackward}
                            disabled = {pageNo === 0}
                            >
                            <Fontisto 
                                name="step-backwrad" 
                                size={18} 
                                color= {pageNo === 0 ? "gray" : "#bb1e1e"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={handlePageForward}
                            disabled = {usersData && (pageNo === usersData.length - 1)}
                        >
                            <Fontisto 
                            name="step-forward" size={18} 
                            color= {usersData && (pageNo === usersData.length - 1 ? "gray" : "#bb1e1e")}
                                
                            />   
                        </TouchableOpacity>
                    </View>                    
                </View>
                
                <ScrollView contentContainerStyle={styles.scrollContainer}
                bouncesZoom= {true}>                     
                    {
                        usersData && (usersData.map((user) => (
                        <View key={user.id} style={styles.imageContainer}>
                            <TouchableHighlight>
                                <Image source={{uri : `${user.picture}`}}
                                    style={styles.image}
                                />    
                            </TouchableHighlight>
                        
                            <TouchableOpacity 
                                onPress={()=> 
                                    navigation.navigate('Profile', {id: user.id})}
                                style={styles.icon}>
                                <Ionicons                                 
                                    name="md-add-circle" 
                                    size={48} 
                                    color="white"                             
                                />
                            </TouchableOpacity>
                        
                        </View>                                        
                        )))
                    }
                </ScrollView> 
                
                </>                               
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 0.88,                     
        width: '100%',
        alignItems: 'center'
    },
    cta__text:{        
        marginBottom: 5,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
        
    },
    cta:{
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-around'
        
    },    
    toptext:{                        
        fontWeight: 'bold',
        fontSize: 20
    },
    scrollContainer:{        
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',          
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
  });

export default Users
