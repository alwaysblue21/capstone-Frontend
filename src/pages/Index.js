import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';
import "../styles.scss";


function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const legos = useLoaderData()

    // map over the legos and create a Post component for each lego
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Add A New Lego</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="image" placeholder="Image Url"/>
            <input type="text" name="age" placeholder="Recommended Age"/>
            <input type="text" name="pieces" placeholder="Pieces"/>
            <input type="text" name="item_number" placeholder="Model Number"/>
            <input type="text" name="price" placeholder="Price"/>
            <button>Create a new Lego</button>
        </Form>
    </div>
    {legos.map((lego) => <Post key={lego.id} post={lego}/>)}
    </>

}

export default Index;