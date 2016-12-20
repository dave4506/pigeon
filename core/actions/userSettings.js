import firebase from 'firebase'
import {
  PULL_USER_DATA__PULLED,
  PULL_USER_DATA__PULLING,
  PULL_USER_DATA__FAILED,
  PULL_USER_SETTINGS_DATA__PULLED,
  PULL_USER_SETTINGS_DATA__PULLING,
  PULL_USER_SETTINGS_DATA__FAILED
} from '../constants'

var database = firebase.database();

const UserData = (id,name) => {
  return {
    type:PULL_USER_DATA__PULLED,
    user:{
      id,
      name:snapshot.val().name
    }
  }
}

const UserSettings = (category,filter) => {
  return {
    type:PULL_USER_SETTINGS_DATA__PULLED,
    userSettings:{
      category,
      filter
    }
  }
}

export const pullUserData = (id) => {
  return (dispatch) => {
    dispatch(()=>{type:PULL_USER_DATA__PULLING})
    var userDataRef = database.ref(`/user_data/${id}`)
    return userDataRef.once('value').then((snapshot)=>{
      dispatch(UserData(id,snapshot.val().name))
    }).catch((error)=>{
      dispatch(()=>{type:PULL_USER_DATA__FAILED,error})
    })
  }
}

export const pullUserSettingsData = (id) => {
  return (dispatch) => {
    dispatch(()=>{type:PULL_USER_SETTINGS_DATA__PULLING})
    var userSettingsDataRef = database.ref(`/user_settings/${id}`)
    return userDataRef.once('value').then((snapshot)=>{
      dispatch(UserSettings(snapshot.val().category,snapshot.val().filter))
    }).catch((error)=>{
      dispatch(()=>{type:PULL_USER_SETTINGS_DATA__FAILED,error})
    })
  }
}
