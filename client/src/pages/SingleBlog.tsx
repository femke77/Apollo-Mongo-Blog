import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_BLOG } from "../utils/queries";
import Blog from "../components/Blog";
import { IBlog } from "../interfaces/Blog";

const SingleBlog = () => {

    const { blogId } = useParams();
    const { loading, data, error } = useQuery(GET_BLOG, { variables: { blogId: blogId } });
    const blog: IBlog = data?.blog || {};
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <Blog
                key={blog._id}
                username={blog.username}
                content={blog.content}
                dateCreated={blog.dateCreated}
                title={blog.title}
                _id={blog._id}

            />
            {blog.comments && blog.comments.map((comment) => (
                <>
                    <hr />
                    <div key={comment._id}>
                        <p>{comment.comment}</p>
                        <p>By: {comment.username} on {comment.dateCreated}</p>
                    </div></>
            ))}
            {error && <div>Error: {error.message}</div>}
        </div>
    )
}


export default SingleBlog;