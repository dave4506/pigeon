import {
  CHANGE_SOURCE_SUBSCRIPTION,
  UPDATE_SOURCE
} from "../constants"

const defaultState = {
  quotes:{
    enable:true,
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
    enable:false,
    publicTitle:"Reddit Hot",
    selectedParams:{
      category:{
        select:"hot"
      },
      subreddit:{
        select:"news"
      }
    },
    params:{
      category:{
        type:"category",
        categories:["hot","new","random","rising"],
        default:"hot"
      },
      subreddit:{
        type:"category",
        categories:["AskReddit","Showerthoughts","news","todayilearned","science","IAmA","starcraft","worldnews"],
        default:"news"
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
  },
  hackerNews:{
    enable:false,
    publicTitle:"Hacker News",
    selectedParams:{
      category:{
        select:"top"
      }
    },
    params:{
      category:{
        type:"category",
        categories:["top","best","new"],
        default:"top"
      }
    }
  },
  designerNews:{
    enable:false,
    publicTitle:"Designer News",
    selectedParams:{
    },
    params:{
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
