import {CHANGE_SOURCE_SUBSCRIPTION,UPDATE_SOURCE,PULL_QUOTE} from '../constants'
import {sourceRequest,testRequest} from './sourceRequests'

export const changeSourceSubscription = (source,newEnable) => {
  return {
    type:CHANGE_SOURCE_SUBSCRIPTION,
    source,
    enable:newEnable
  }
}

export const updateSource = (source,category,selectedParams) => {
  return (dispatch,getState) => {
    const params = ((getState().sources)[source].params)[category];
    if(params.type == "search" && selectedParams.value)
      if(selectedParams.value.length <= params.minLength)
        selectedParams.indicator = "disable";
      else
        selectedParams.indicator = "default";
    dispatch((()=>{
      return {
        type:UPDATE_SOURCE,
        source,
        category,
        selectedParams
      }
    })())
  }
}

const randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return keys[ keys.length * Math.random() << 0];
};

const onlyEnable = (obj) => {
  var newObj = {}
  Object.keys(obj).map((k)=>{
    var source = obj[k];
    if(source.enable)
      newObj[k] = source
  })
  return newObj;
}

export const pullQuote = () => {
  return (dispatch,getState) => {
    dispatch((()=>{
      return {
        type:PULL_QUOTE,
        status:"loading"
      }
    })())
    const {sources} = getState();
    const sourceKey = randomProperty(onlyEnable(sources));
    const source = sources[sourceKey]
    return sourceRequest(sourceKey,source).then((quote)=>{
      dispatch((()=>{
        return {
          type:PULL_QUOTE,
          quote,
          status:"complete"
        }
      })())
    })
  }
}

export const testNewSource = (sourceKey,category) => {
  return (dispatch,getState) => {
    const {sources} = getState();
    const source = sources[sourceKey]
    return testRequest(sourceKey,source).then((valid)=>{
      dispatch(updateSource(sourceKey,category,{indicator:valid ? "success":"error"}))
    }).catch((ex) => {
      dispatch(updateSource(sourceKey,category,{indicator:"error"}))
    })
  }
}
