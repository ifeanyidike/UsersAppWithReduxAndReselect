import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { listAllPosts } from "../redux/actions/postActions"
import { getTopLikes } from "../redux/selectors"
import Posts from "../components/Posts"
import HeaderItems from "../components/HeaderItems"
import Loading from "../components/Loading"
import Error from "../components/Error"

const PostScreen = ({navigation}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listAllPosts(100))
    }, [dispatch])

    const { loading: postsLoading, error: postsError } = 
            useSelector(state => state.getPosts)
            
    const posts = useSelector(getTopLikes(50))
    
    
        
    const renderItem = ({item}) => (
        <Posts item={item} navigation={navigation} />
    )

    return (
        <View>
            {
                postsLoading ? <Loading />
                    : postsError ? <Error>{postsError}</Error>
                        :
                        <View >
                            <FlatList                               
                                ListHeaderComponent={
                                    <HeaderItems />
                                }
                                data={posts}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                        </View>

            }
        </View>
    )
}


export default PostScreen
