import React, {useEffect} from 'react'
import {
    View,     
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,    
} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {listAllPosts} from "../redux/actions/postActions"
import {getUsersFromLikes} from "../redux/selectors"
import { Ionicons } from '@expo/vector-icons';
import Loading from "../components/Loading"
import HeaderItems from "../components/HeaderItems"
import Error from "../components/Error"

const TopUsers = ({navigation}) => {    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(listAllPosts(100))
    },[dispatch])

    const {loading, error} = useSelector(state => state.getPosts)
    const users =  useSelector(getUsersFromLikes(50) )    
    
  
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
        <>
            {
                loading ? <Loading />
                : error ? <Error>{error}</Error>
                :
                (
                    <>
                        <HeaderItems />
                        <FlatList
                            key={'#'}
                            numColumns={2}                        
                            contentContainerStyle={styles.listContent}
                            style={styles.list}              
                            data={users}
                            renderItem={renderItem}
                            keyExtractor={item => '#' + item.id}
                        />
                    </>
                )
            }        
        </>
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
    
})
export default TopUsers
