import './BlogPage.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';

type Comments = {
    id: number;
    author: string;
    image: string;
    text: string;
    commentedOn: number;
};

const BlogsPage = () => {
    const endpoint = 'http://localhost:3004/posts';
    const commentsEndpoint = 'http://localhost:3005/comments';
    const { id } = useParams();
    const navigate = useNavigate();

    const [editPost, setEditPost] = useState(false);
    const [postData, setPostData] = useState({
        name: '',
        image: '',
        description: '',
        excerpt: ''
    });

    const [comment, setComment] = useState<Comments>({
        id: 0,
        author: '',
        image: '',
        text: '',
        commentedOn: 0,
    });

    const { data: post, status: postStatus } = useQuery(['post', id], async () => {
        const response = await axios.get(`${endpoint}/${id}`);
        setPostData({
            name: response.data.name,
            image: response.data.image,
            description: response.data.description,
            excerpt: response.data.excerpt
        });
        return response.data;
    });

    const { data: comments, status: commentsStatus } = useQuery(['comments'], async () => {
        const response = await axios.get(commentsEndpoint);
        return response.data;
    });

    const handlePostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, [event.target.name]: event.target.value });
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment({ ...comment, [event.target.name]: event.target.value, commentedOn: post.id });
    };

    const handlePostSubmit = async (event: React.FormEvent) => {
        await axios.put(`${endpoint}/${id}`, postData);
        setEditPost(false);
        navigate(`/blogs/${id}`);
    };

    const handleCommentSubmit = async (event: React.FormEvent) => {
        setComment({ ...comment, commentedOn: post.id });
        await axios.post(commentsEndpoint, comment);
        navigate(`/blogs/${id}`);
    };

    if (postStatus === 'loading' || commentsStatus === 'loading') {
        return <div className='loading-title'>Loading...</div>;
    }

    const filteredComments = comments.filter((comments: { commentedOn: number; }) => comments.commentedOn === post.id);

return (
        <div>
            <div className='post'>
                <h1 className='post-name'>{post.name}.</h1>
                <img
                    src={post.image}
                    alt={post.name}
                    className='post-image'
                    />
                <p className='post-description'>{post.description}</p>
                <button className='button--edit' onClick={() => setEditPost(true)}>Edit post</button>
            </div>
            {editPost ? (
                <div className='edit-post'>
                    <h1 className='edit-heading'>Edit post</h1>
                    <form onSubmit={handlePostSubmit} className='edit-form'>
                        <input
                            type="text"
                            name="name"
                            value={postData.name}
                            onChange={handlePostChange}
                            placeholder="Name"
                            required
                            className='comments-input'
                        />
                        <input
                            type="text"
                            name="image"
                            value={postData.image}
                            onChange={handlePostChange}
                            placeholder="Image URL"
                            required
                            className='comments-input'
                        />
                        <input
                            type="text"
                            name="description"
                            value={postData.description}
                            onChange={handlePostChange}
                            placeholder="Description"
                            required
                            className='comments-input'
                        />
                        <input
                            type="text"
                            name="excerpt"
                            value={postData.excerpt}
                            onChange={handlePostChange}
                            placeholder="Excerpt"
                            required
                            className='comments-input'
                        />
                        <div className='editing-buttons'>
                            <button type="submit" className='button--edit button--save'>Save changes</button>
                            <button
                                onClick={() => setEditPost(false)}
                                className='button--edit button--cancel'>
                                    Cancel
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className='comments'>
                    <h2 className='comment-heading'>Comments ({filteredComments.length})</h2>
                    <div className='comments-add'>
                        <form onSubmit={handleCommentSubmit} className='comments-form'>
                            <input
                                type="text"
                                name="author"
                                value={comments.author}
                                onChange={handleCommentChange}
                                placeholder="Author"
                                required
                                className='comments-input'
                            />
                            <input
                                type="text"
                                name="image"
                                value={comments.image}
                                onChange={handleCommentChange}
                                placeholder="Image URL"
                                className='comments-input'
                            />
                            <input
                                name="text"
                                value={comments.text}
                                onChange={handleCommentChange}
                                placeholder="Comment"
                                required
                                className='comments-input'
                            />
                            <button type="submit" className='button--comment'>Submit Comment</button>
                        </form>
                    </div>
                    <div className='container-comment-list'>
                        <ul className='comment-list'>
                            {filteredComments.map((comments: Comments) => (
                                <li key={comments.id} className='one-comment'>
                                    <img
                                        src={comments.image}
                                        alt={comments.author}
                                        className='comment-image'
                                    />
                                    <div className='comment-text-container'>
                                        <h3 className='comment-author'>{comments.author}</h3>
                                        <p className='comment-text'>{comments.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogsPage;