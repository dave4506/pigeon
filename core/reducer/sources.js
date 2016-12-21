import {
  CHANGE_SOURCE_SUBSCRIPTION,
  UPDATE_SOURCE
} from "../constants"

const defaultState = {
  quotes:{
    enable:false,
    publicTitle:"Cool Quotes",
    selectedParams:{
      category:{
        select:"famous"
      }
    },
    params:{
      category:{
        type:"category",
        categories:["famous","movies"],
        default:"famous"
      }
    }
  },
  reddit:{
    enable:true,
    publicTitle:"Reddit Hot",
    selectedParams:{
      category:{
        select:"hot"
      },
      subreddit:{
        indicator:"success",
        value:"corridor"
      }
    },
    params:{
      category:{
        type:"category",
        categories:["hot","new","random","rising"],
        default:"hot"
      },
      subreddit:{
        type:"search",
        placeholder:"Ex. starcraft, cool_stuff",
        minLength:1
      }
    }
  },
  nyTimes:{
    enable:false,
    publicTitle:"NYTimes Headlines",
    selectedParams:{
      category:{
        select:"home"
      }
    },
    params:{
      category:{
        type:"category",
        categories:["home","opinion","world","national","science","technology","health","movies","books"],
        default:"home"
      }
    }
  }
}


export default function(state=defaultState,action) {
  switch (action.type) {
    case CHANGE_SOURCE_SUBSCRIPTION:
      let newState = Object.assign({},state);
      newState[action.source].enable = action.enable;
      return newState;
    case UPDATE_SOURCE:
      newState = Object.assign({},state);
      newState[action.source].selectedParams[action.category] = Object.assign({},newState[action.source].selectedParams[action.category],action.selectedParams);
      return newState;
    default:
      return state;
  }
}
