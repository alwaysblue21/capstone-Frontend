import url from "./url"

// Index load to load all legos
export const indexLoader = async () => {
   
    const response = await fetch(url)
    
    const legos = await response.json()
    
    return legos
}

// Show loader to load a single lego
export const showLoader = async ({params}) => {
    
    const id = params.id
    
    const response = await fetch(url + id)
    
    const lego = await response.json()
    
    return lego
}
