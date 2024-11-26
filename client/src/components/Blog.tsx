
import type { IBlog } from "../interfaces/Blog";
import { Link } from "react-router-dom";


const Blog = ({ _id, title, content, username, dateCreated }: IBlog) => {

    return (
        <>
            <div>
                <Link className="" to={`/blog/${_id}`}>{title} </Link>
                <p>{content}</p>
                <p>By: {username} on {dateCreated}</p>
            </div>
            <div>

            </div>

        </>
    )
}

export default Blog;