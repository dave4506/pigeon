
const defaultQuote = {
  text:"In the depth of winter, I finally learned that within me there lay an invincible summer.",
  subtext:"-Albert Camus",
  source:"Quotes",
  link:"https://google.com"
}

const randonInArray = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)];
}

const fetchQuote = (category) => {
  return fetch(`https://andruxnet-random-famous-quotes.p.mashape.com/?cat=${category}`, {
    method: 'POST',
    headers: {
      'X-Mashape-Key':"QkqI7NAyaimshCQLFCb4FsFnPC3Dp1HaWNzjsn9kt7kLx7WFLU",
      'Content-Type': "application/x-www-form-urlencoded",
      'Accept': "application/json"
    }
  }).then((response) => {
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
    .then((response) => {
      return response.json()
    }).then((topics) => {
      const {byline,title,url} = randonInArray(topics.results)
      return {
        text:title,
        subtext:byline,
        source:"nyTimes",
        link:url
      }
    })
}

const sourceRequest = (sourceKey,source) => {
  console.log(sourceKey,source.selectedParams);
  switch (sourceKey) {
    case "quotes":
      return fetchQuote(source.selectedParams.category.select);
    case "nyTimes":
      return fetchNy(source.selectedParams.category.select);
    default:
      return Promise.resolve(defaultQuote);
  }
}

export default sourceRequest
