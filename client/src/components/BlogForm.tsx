import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_BLOG } from "../utils/mutations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: "", content: "" });
  const [addBlog, { error }] = useMutation(ADD_BLOG);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await addBlog({ variables: { blogData: { ...blog } } });
      setBlog({ title: "", content: "" });
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={blog.title}
          as="input"
          name="title"
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          value={blog.content}
          as="textarea"
          name="content"
          rows={2}
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {error && <div className="text-danger pb-3"> {error.message}</div>}
    </Form>
  );
};

export default BlogForm;
