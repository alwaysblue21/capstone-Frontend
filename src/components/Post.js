import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div className='lego-index' style={div}>
        <Link to={`/post/${post._id}`}>
            <h1 className='lego-name'>{post.name}</h1>
            <img className='lego-img' src={post.image} alt={post.name} />
        </Link>
    </div>
}

export default Post;
