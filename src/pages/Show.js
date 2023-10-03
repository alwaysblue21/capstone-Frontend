import {Link, useLoaderData} from 'react-router-dom';

function Show (props){
    const post = useLoaderData()

    return (
    <div >
        <h1>Model Name: {post.name}</h1>
        <img src={post.image} alt={post.name} />
        <h2>Recommended Age: {post.age}</h2>
        <h2>Pieces: {post.pieces}</h2>
        <h2>Model Number: {post.item_number}</h2>
        <h2>Price: ${post.price}</h2>
        <Link to="/">Back to Index</Link>
    </div>
    )
}

export default Show;