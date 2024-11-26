
import type { IBlog } from "../interfaces/Blog";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

const Blog = ({_id, title, content, username, dateCreated}: IBlog) => {
   
    return (
        <>
        <div>
           <Link className="" to={`/blog/${_id}`}>{title} </Link>
            <p>{content}</p>
            <p>By: {username} on {dateCreated}</p>
        </div>
        <div>
            <CommentForm blogId={_id} />
        </div>
        
        </>
    )
}

export default Blog;