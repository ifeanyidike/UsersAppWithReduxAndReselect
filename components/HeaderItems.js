import React from 'react'
import {
    TouchableOpacity,  
    ScrollView,
    StyleSheet, 
    Text, 
    View,    
} from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import {getMaleSelector, getFemaleSelector} from "../redux/selectors"
import {useSelector} from "react-redux"
import {useNavigation, useRoute} from "@react-navigation/native"

const HeaderItems = () => {
    
    const navigation = useNavigation()
    const route = useRoute()
    
    const female = useSelector(getFemaleSelector())
    const male = useSelector(getMaleSelector())
    console.log(route.params)
    
    
    return (
        <ScrollView
            style={styles.view}
             contentContainerStyle={styles.scrollView} 
             horizontal={true}
             showsHorizontalScrollIndicator={false} 
             >
                        
            <TouchableOpacity style={styles.iconSet}
                onPress={()=> navigation.navigate('TopUsers')}>
                <View style={styles.iconElement}>
                    <FontAwesome5 style={styles.icon} name="users" size={15} color="#bb1e1e" />
                    <Text 
                        style={{fontWeight: route.name === 'TopUsers' ? 'bold' : null}}
                    >Top Users</Text>
                </View>                
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconSet}
                onPress={()=> navigation.navigate('Posts')}>
                <View style={styles.iconElement}>
                    <MaterialIcons style={styles.icon} name="local-post-office" size={15} color="orange" />
                    <Text style={{fontWeight: route.name === 'Posts' ? 'bold' : null}}>
                        Posts
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconSet}
                onPress={()=> navigation.navigate('TopPosts')}>
                <View style={styles.iconElement}>
                    <FontAwesome5 style={styles.icon} name="sitemap" size={15} color="indigo" />                    
                    <Text style={{fontWeight: route.name === 'TopPosts' ? 'bold' : null}}>
                        Top Posts
                    </Text>
                </View>                
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconSet}
                onPress={()=> navigation.navigate('Gender', {gender: female, type: 'female'})}>
                <View style={styles.iconElement}>
                    <FontAwesome style={styles.icon} name="female" size={15} color="black" />                    
                    <Text style={{fontWeight: route.name === 'female' ? 'bold' : null}}>
                        Females
                    </Text>
                </View>                
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconSet}
                onPress={()=> navigation.navigate('Gender', {gender: male, type: 'male'})}>
                <View style={styles.iconElement}>
                    <FontAwesome style={styles.icon} name="male" size={15} color="purple" />                    
                    <Text style={{fontWeight: route.name === 'male' ? 'bold' : null}}>
                        Males
                    </Text>
                </View>                
            </TouchableOpacity>           
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({  
    scrollView:{
        position: 'relative'
    },
    iconElement:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    iconSet:{
        flex: 1,
        flexDirection: 'row',
        margin: 20,    
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },
    icon:{        
        marginRight: 3
        
    },
    
})
export default HeaderItems
