// help from Alex

// put this in a file called getToken.js and import it into your actions.js and loaders.js

export default function getToken(){
    // fetch string from localStorage
    const jsonString = localStorage.getItem("loggedIn")
    // parse json string
    const loggedIn = JSON.parse(jsonString)
    // return the token
    return loggedIn.token
  }