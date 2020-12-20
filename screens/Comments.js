import React, {useEffect} from 'react'
import {Text, FlatList, StyleSheet, View, Image} from "react-native"
import {useDispatch, useSelector} from "react-redux"
import {listPostComments} from "../redux/actions/commentActions"
import {getCommentsData} from "../redux/selectors"
import Loading from "../components/Loading"
import Error from "../components/Error"

const Comments = ({route}) => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(listPostComments(route.params.id))
  }, [dispatch, route.params.id])  
  
  const {loading, error}  = useSelector(state => state.getComments)
  const comments = useSelector(getCommentsData)  
  
  const renderItem = ({item}) => 
  comments.length === 0 ? <Text>No comment found</Text>
  :
  (
      <View style={styles.commentItem}>
        <Image style={styles.commentImage} source={{uri: `${item.owner.picture}`}} />
        <View style={styles.commentRight}>
          <View style={styles.commentText}>
            <Text style={styles.ownerName}>{`${item.owner.firstName} ${item.owner.lastName}`}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
          <Text>Posted on {""} {new Date(item.publishDate).toLocaleDateString()}</Text>
          </View>
          
      </View>        
  )
  
  return (    
    <>
        {
          loading ? <Loading />
          : error ? <Error>{error}</Error>
          : (
            <FlatList
              data={comments}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          )
        }
    </>   
  )
}

const styles = StyleSheet.create({
  commentsContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  commentItem:{
    flexDirection: 'row',
    marginVertical: 10
  },
  commentImage:{
    width: 50,
    height: 50,
    borderRadius: 999
  },
  commentRight:{
    marginLeft: 10
  },
  commentText:{
    backgroundColor: 'rgba(192, 181, 161, 0.5)',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flex: 1
  },  
  ownerName:{
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5  
  }
})

export default Comments
