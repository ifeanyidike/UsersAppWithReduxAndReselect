import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
const Posts = ({navigation, item}) => {                
    return (
        <View>
            {
                <>
                    <View style={styles.postContainer}>
                        <View style={styles.itemTop}>
                            <View style={styles.itemImageContainer} >
                                <Image 
                                    style={styles.itemImage} 
                                    source={{uri: `${item.owner.picture}`}} />
                            </View>
                            <View style={styles.itemNameContainer} >
                                <TouchableOpacity
                                    onPress={()=> 
                                    navigation.navigate('Profile', {id: item.owner.id})}
                                >
                                    <Text 
                                        style={styles.name}>
                                        {`${item.owner.firstName} ${item.owner.lastName}`}
                                    </Text>
                                </TouchableOpacity>
                                
                                <Text style={styles.publishedDate}>
                                    {`Published on ${new Date(item.publishDate).toDateString()}`}
                                </Text>
                            </View>
                        </View>
                            <Text style={styles.itemText}>{item.text}</Text>
                            <Image 
                                style={styles.postImage}
                                source={{uri: `${item.image}`}}
                            />
                            <View style={styles.likesComments}>
                                <View style={styles.likes}>
                                    <AntDesign  
                                        name="like1" 
                                        size={18} 
                                        color= {item.likes > 0 ? '#bb1e1e': '#ddd'}                         
                                    />
                                    <Text>{item.likes}</Text>
                                </View>
                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate('Comments', {id: item.id})}
                                    >
                                    <View style={styles.comment}>
                                        <FontAwesome name="commenting" size={18} color="#bb1e1e" />
                                        <Text style={styles.comment__cta}>View comments</Text>
                                    </View>
                                </TouchableOpacity>
                                </View>
                                <View style={styles.tags}>
                                    {item.tags.map((tag, ind) => 
                                    <View key={ind} style={styles.tag}>
                                        <Text style={{color: 'white'}}>{tag}</Text>
                                    </View>
                                    )}
                                </View>
                            <View style={styles.line}></View>            
                        </View>
                    </>
                }
        </View>
    )
}

const styles = StyleSheet.create({
   
    postContainer:{
        shadowColor: "white",
        shadowOffset: {
	        width: 0,
	        height: 1
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginVertical: 10,
        paddingVertical: 10,
        borderWidth: 0.01
        
    },
    itemTop:{
        flexDirection: 'row',
        marginHorizontal: 5
    },
    itemText:{
        marginHorizontal: 5,
        fontSize: 20
    },
    itemImageContainer:{
        width: 50,
        height: 50,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: '#f4f4f4',
        borderStyle: 'solid'
    },
    name:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    publishedDate:{
      fontSize: 10  
    },
    itemImage:{
        width: '100%',
        height: '100%',
        borderRadius: 999, 
        
    },
    postImage:{
      width: '100%',  
      height: 200,
      marginTop: 10  
    },
    likes:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 5
    },
    tags:{
      flexDirection: 'row',
      marginLeft: 5,
      marginTop: 10,
      flex: 1,
      
    },
    tag:{                
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingBottom: 5,   
        paddingHorizontal: 10,
        backgroundColor: '#bb1e1ea1',        
        marginRight: 5
    },
    line:{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ddd'
    },
    likesComments:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginHorizontal: 5
    },
    comment:{
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    comment__cta:{
        marginLeft: 3
    }
})

export default Posts
