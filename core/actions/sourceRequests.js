const defaultQuote = {
  text:"In the depth of winter, I finally learned that within me there lay an invincible summer.",
  subtext:"-Albert Camus",
  source:"Quotes",
  link:"https://google.com"
}

const randomInArray = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)];
}

function checkStatus(response) {
  console.log("checking...",response.status)
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const fetchQuote = (category) => {
  return fetch(`https://andruxnet-random-famous-quotes.p.mashape.com/?cat=${category}`, {
    method: 'POST',
    headers: {
      'X-Mashape-Key':"QkqI7NAyaimshCQLFCb4FsFnPC3Dp1HaWNzjsn9kt7kLx7WFLU",
      'Content-Type': "application/x-www-form-urlencoded",
      'Accept': "application/json"
    }
  }).then(checkStatus).then((response) => {
    return response.json()
  }).then(({quote,author}) => {
    return {
      text:quote,
      subtext:`-${author}`,
      source:"quotes",
      link:""
    }
  })
}

const fetchNy = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=2c326878821b4223842c8caff1d775ea`)
    .then(checkStatus)
    .then((response) => {
      return response.json()
    }).then((topics) => {
      const {byline,title,url} = randomInArray(topics.results)
      return {
        text:title,
        subtext:byline,
        source:"nyTimes",
        link:url
      }
    })
}

const fetchReddit = (category,subreddit) => {
  return fetch(`http://www.reddit.com/r/${subreddit}/${category}/.json?limit=50`)
    .then(checkStatus)
    .then((response) => {
      return response.json()
    }).then((topics) => {
      const {data} = randomInArray(topics.data.children)
      const {author,subreddit,title,permalink} = data;
      return {
        text:title,
        subtext:`By ${author} in /r/${subreddit}`,
        source:"reddit",
        link:`http://www.reddit.com${permalink}`
      }
    })
}

const testRequest = (sourceKey,source) => {
  const params = source.selectedParams
  switch (sourceKey) {
    default:
      return null;
  }
}

const sourceRequest = (sourceKey,source) => {
  console.log(sourceKey,source.selectedParams);
  const params = source.selectedParams
  switch (sourceKey) {
    case "quotes":
      return fetchQuote(params.category.select);
    case "nyTimes":
      return fetchNy(params.category.select);
    case "reddit":
      return fetchReddit(params.category.select,params.subreddit.value);
    default:
      return Promise.resolve(defaultQuote);
  }
}

export {sourceRequest,testRequest}
