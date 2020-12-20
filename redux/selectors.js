import {createSelector} from "reselect"
import _ from "lodash"

export const getEveryUser = (state) => state.getUsers
export const getAUser = (state) => state.getUser
export const getEveryUserData = (state) => state.getUsers.users.data
export const getEveryPostData = (state) => state.getPosts.posts.data
export const getEveryPost = (state) => state.getPosts.posts
export const getAUserData = (state) => state.getUser.user
export const getAUserPostData = (state) => state.getPost.post.data
export const getCommentsData = (state) => state.getComments.comments.data

export const getTopLikes = (likes) => createSelector(
    getEveryPostData,
    ele => ele && _.filter(ele, (d) => d.likes >= likes)
                    .sort((a, b) => (b.likes > a.likes))
)

export const getUsersFromLikes = (likes) => createSelector(
    getTopLikes(likes),
    ele => ele && _(ele).map((d)=> d.owner).uniqBy(d => d.id).value()           
)


export const getFemaleSelector = () => createSelector(
    getEveryUserData,    
    (ele) =>  ele && ele.filter(d => d.title === 'ms' || d.title === 'miss')    
)

export const getMaleSelector = () => createSelector(
    getEveryUserData,    
    (ele) =>  ele && ele.filter(d => d.title === 'mr')    
)