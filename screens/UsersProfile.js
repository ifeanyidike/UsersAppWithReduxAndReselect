import React, {useEffect} from 'react'
import {
    StyleSheet, 
    Text, 
    View, 
    FlatList 
} from 'react-native';
 import {useDispatch, useSelector} from "react-redux"
 import {getUserProfile} from "../redux/actions/userActions"
 import {listUserPosts} from "../redux/actions/postActions"
 import Posts from "../components/Posts"
 import UserTop from "../components/UserTop"
 import {getAUserData, getAUserPostData} from "../redux/selectors"
 import Loading from "../components/Loading"
 import Error from "../components/Error"

const UsersProfile = ({navigation, route}) => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getUserProfile(route.params.id))
        dispatch(listUserPosts(route.params.id))
    },[dispatch, route.params.id])
    
    const {loading, error} = useSelector(state => state.getUser)
    const user = useSelector(getAUserData)    
    
    const {loading: postLoading, error: postError} = useSelector(state => state.getPost)
    const post = useSelector(getAUserPostData)     
    
    const renderItem = ({item}) => (
        <Posts item={item} navigation={navigation} />
    )
    
    return (
    
        <View>        
                                   
            {
                postLoading ? <Loading />
                : postError ? <Error>{postError}</Error>
                : 
                <View>
                    <FlatList                        
                        ListHeaderComponent={
                        <UserTop 
                            user={user} 
                            loading={loading}        
                            error={error}
                        />
                        }                        
                        data={post}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                
            }
           
        </View> 
    
    
    )
}

const styles = StyleSheet.create({   
})

export default UsersProfile
