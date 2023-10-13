import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const post = useLoaderData();

    return (
        <div>
            <h1>Model Name: {post.name}</h1>
            <img src={post.image} alt={post.name} />
            <h2>Recommended Age: {post.age}</h2>
            <h2>Pieces: {post.pieces}</h2>
            <h2>Model Number: {post.item_number}</h2>
            <h2>Price: ${post.price}</h2>
        <div style={{ textAlign: "center" }}>
        <h2>Update Lego</h2>
        <Form method="post" action={`/update/${post._id}`}>
        <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={post.name}
        />
        <input
            type="text"
            name="image"
            placeholder="Image Url"
            defaultValue={post.image}
        />
        <input
            type="text"
            name="age"
            placeholder="Age"
            defaultValue={post.age}
        />
        <input
            type="text"
            name="pieces"
            placeholder="Pieces"
            defaultValue={post.pieces}
        />
        <input
            type="text"
            name="item_number"
            placeholder="Model Number"
            defaultValue={post.item_number}
        />
        <input
            type="text"
            name="price"
            placeholder="Price"
            defaultValue={post.price}
        />
        <button>Update Lego</button>
        </Form>

        <Form method="post" action={`/delete/${post._id}`}>
            <button>Delete Lego</button>
        </Form>

        </div>
        <Link to="/dashboard">Back to Index</Link>
        </div>
    );
}

export default Show;