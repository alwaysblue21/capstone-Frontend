import Post from '../components/Post';
import {useLoaderData} from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const legos = useLoaderData()

    // map over the legos and create a Post component for each lego
    return legos.map((lego) => <Post key={lego.id} post={lego}/>)

}

export default Index;