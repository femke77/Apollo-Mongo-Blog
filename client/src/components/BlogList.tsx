import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../utils/queries";
import Blog from "./Blog"
import type { IBlog } from "../interfaces/Blog";

const BlogList = () => {

    const { loading, data, error } = useQuery(GET_BLOGS);

    const blogs = data?.blogs || [];
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>

            {blogs && blogs.map((blog: IBlog) => (

                <Blog
                    key={blog._id}
                    username={blog.username}
                    content={blog.content}
                    dateCreated={blog.dateCreated}
                    title={blog.title}
                    _id={blog._id}

                />
            ))}
            {error && <div>Error: {error.message}</div>}
        </div>
    )
}

export default BlogList;