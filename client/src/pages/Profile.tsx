import BlogForm from "../components/BlogForm";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { REMOVE_BLOG } from "../utils/mutations";
import Blog from "../components/Blog";
import { Button } from "react-bootstrap";
import React from "react";
import { IBlog } from "../interfaces/Blog";

const Profile = () => {
    const { loading, data, error } = useQuery(GET_ME, {
        fetchPolicy: "cache-and-network",
    });
    const blogs = data?.me.blogs || [];
    const [deleteBlog] = useMutation(REMOVE_BLOG, {
        refetchQueries: [{ query: GET_ME }], // Refetch the GET_ME query
        awaitRefetchQueries: true, // Wait for the query to complete before resolving the mutation
    });

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await deleteBlog({ variables: { blogId: e.currentTarget.value } },);

    }
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h3>Add a Blog!</h3>
            <div className="mb-5">
                {" "}
                <BlogForm />
            </div>

            {blogs &&
                blogs.map((blog: IBlog) => (
                    <div key={blog._id}>
                        <Blog
                            username={"me"}
                            content={blog.content}
                            dateCreated={blog.dateCreated}
                            title={blog.title}
                            _id={blog._id}
                            commentCount={blog.commentCount}
                        />
                        <Button onClick={handleDelete} value={blog._id} variant="danger">Delete</Button>
                        <hr />
                    </div>
                ))}
            {error && <div className="text-danger"> {error.message}</div>}
        </div>
    );
};

export default Profile;
