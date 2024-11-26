import BlogForm from "../components/BlogForm";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Blog from "../components/Blog";

const Profile = () => {
  const { loading, data, error } = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network",
  });
  const blogs = data?.me.blogs || [];
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
        blogs.map((blog: any) => (
          <div key={blog._id}>
            <Blog
              username={"me"}
              content={blog.content}
              dateCreated={blog.dateCreated}
              title={blog.title}
              _id={blog._id}
              commentCount={blog.commentCount}
            />
            <hr />
          </div>
        ))}
      {error && <div className="text-danger"> {error.message}</div>}
    </div>
  );
};

export default Profile;
