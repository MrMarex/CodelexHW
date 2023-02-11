import './AddPostPage.css';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Post = {
    id: number;
    image: string;
    title: string;
    description: string;
    excerpt: string;
    comments: number[];
};

const AddPostPage = () => {
    const endpoint = "http://localhost:3004/posts";
    const navigate = useNavigate();
  
    const showSuccess = () => {
      toast.success("Post has been added!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };
  
    const showError = () => {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };
  
    const [post, setPost] = useState<Post>({
      id: 0,
      image: "",
      title: "",
      description: "",
      excerpt: "",
      comments: [],
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPost({ ...post, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = async (event: React.FormEvent) => {
      try {
        event.preventDefault();
        await mutation.mutate(post);
        showSuccess();
        navigate("/blogs");
      } catch {
        showError();
        navigate("/");
      }
    };
  
    const mutation = useMutation(async (postData: Post) => {
      const res = await axios.get(endpoint);
      const posts = res.data as Post[];
      const nextId =
        posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
      return axios.post(endpoint, { ...postData, id: nextId });
    });

    return (
        <div>
            <h1 className='add-heading'>Add Post</h1>
            <form onSubmit={(handleSubmit)} className='add-form'>
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Post name"
                    required
                    className='comments-input'
                    />
                <input
                    type="text"
                    name="image"
                    value={post.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    required
                    className='comments-input'
                    />
                <input
                    name="description"
                    value={post.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                    className='comments-input'
                    />
                <input
                    name="excerpt"
                    value={post.excerpt}
                    onChange={handleChange}
                    placeholder="Excerpt"
                    required
                    className='comments-input'
                    />
                <button type="submit" className='button-add'>Add Post</button>
            </form>
        </div>
    );
};

export default AddPostPage;
