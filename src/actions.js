import authurl from "./authurl"
import url from "./url"
import {redirect} from "react-router-dom"

// Create Action for Creating Legos
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newLego = {
        name: formData.get("name"),
        image: formData.get("image"),
        age: formData.get("age"),
        pieces: formData.get("pieces"),
        item_number: formData.get("item_number"),
        price: formData.get("price")
    }

    // make a request to create a lego
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLego)
    })

    // redirect to the index page
    return redirect("/")
}

// Update Action for Updating Legos
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated lego
    const updatedLego = {
        name: formData.get("name"),
        image: formData.get("image"),
        age: formData.get("age"),
        pieces: formData.get("pieces"),
        item_number: formData.get("item_number"),
        price: formData.get("price")
    }

    // make a request to update a lego
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedLego)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}

// Delete Action for Deleting Legos
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a lego
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}

//auth
export const signupAction = async ({request}) => {
    // get the form data
    const formData = await request.formData()
    // build out the new user
    const newUser = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    }
    // send the new user to our backend API
    const response = await fetch(`${authurl}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })

    // check if status is 400 or more
    if (response.status >= 400) {
        // alert the details of error
        alert(response.statusText)
        // redirect back to the frontend signup route
        return redirect('/signup')
    }

    // redirect back to the frontend login route
    return redirect('/login')
}

export const loginAction = async ({request}) => {
    // get the form data
    const formData = await request.formData()
    // build out the user
    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    }
    // send the user to our backend API
    const response = await fetch(`${authurl}/auth/login`, {
        method: "POST",
        
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    // check if status is 400 or more
    if (response.status >= 400) {
        // alert the details of error
        alert(response.statusText)
        // redirect back to the frontend login route
        return redirect('/login')
    }

    // store whether loggedIn in localStorage
    localStorage.setItem('loggedIn', JSON.stringify({status: true}))

    // redirect back to the frontend index route
    return redirect('/dashboard')
}