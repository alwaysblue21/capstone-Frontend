import url from "./url"
// help from Alex
import getToken from "./getToken"

// Index load to load all legos
export const indexLoader = async () => {
   
    // const response = await fetch(url)
    // help from Alex
    const response = await fetch(url, {
        method: "get",
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    
    const legos = await response.json()
    
    return legos
}

// Show loader to load a single lego
export const showLoader = async ({params}) => {
    
    const id = params.id
    
    // const response = await fetch(url + id)
    // help from Alex
    const response = await fetch(url + id, {
        method: "get",
        headers: {
          authorization: `bearer ${getToken()}`
        }
      })
    
    const lego = await response.json()
    
    return lego
}
