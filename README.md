# Users-Post Listing App

This is a react native app (with Expo) based on an article I wrote for Codemagic.io (yet to be published). It is a listing app with API from [dummyapi.io](https://dummyapi.io/).
The REST API contains users and their posts, comments and tags. 

## Tools Used
I made use of several react tools in this project. The tools are listed below.
- **Redux**
- **Redux Thunk**
- **Reselect**
- **React native navigator**, 
- **axios**, etc

## Design
Thanks to the react native Stylesheet, the app is properly styled to be responsive. React native Flatlist component was used to display the data. This is much better than using
the map function in react native because it is optimized for improved performance.

## architecture
The app is organized into several folders depending on their purposes. For instance, the `components` folder stores the reusable components, the `screens` folder stores the screens
and the `redux` folder stores the redux. Also, the `redux` workflow is organized in a folder. This folder includes sub-folders namely `actions` for redux actions, `reducers`
for redux reducers, and `constants` for for redux action types or constants. I made use of Redux Thunk to return a function from the actions rather than an action object.
Also, `combineReducers` was used to combine the reducers before supplying them to the store. 
