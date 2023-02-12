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
      excerpt: ""
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPost({ ...post, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = async (event: React.FormEvent) => {
      try {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', post.title);
        formData.append('description', post.description);
        formData.append('excerpt', post.excerpt);
        const file = (event.target as HTMLFormElement).image.files![0];
        console.log(file);
        formData.append('image', file, file.name);
        await axios.post(endpoint, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        showSuccess();
        navigate("/blogs");
      } catch {
        showError();
        navigate("/");
      }
    };

    return (
        <div>
            <h1 className='add-heading'>Add Post</h1>
            <form onSubmit={(handleSubmit)} 
                  encType='multipart/form-data' 
                  className='add-form'>
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Post name"
                    required
                    className='comments-input'
                    />
                <input type="file"
                      accept="image/*"
                      name="image"
                      value={post.image}
                      onChange={handleChange}
                      className='comments-input'/>
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
