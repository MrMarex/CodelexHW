import './BlogsPage.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ToastNotification from '../../Components/ToastNotification';
import { toast } from 'react-toastify';

type Post = {
    id: number,
    image: string,
    name: string,
    description: string,
    comments:number[],
    excerpt: string
}

const BlogsPage = () => {
    const navigate = useNavigate();
    const endpoint = 'http://localhost:3004/posts';

    const showInfo = () => {
        toast.info('Posts have been loaded!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const { data, status } = useQuery(['posts'], async () => {
        showInfo();
        const response = await axios.get(endpoint);
        return response.data;
    });

    if (status === 'loading') {
        return <div className='loading-title'>Loading...</div>;
    }

    return (
        <div>
            <ToastNotification />
            <h1 className='heading'>Blogs</h1>
            <div className="posts">
                {data.map((post: Post) => (
                <div key={post.id} className='post-card'>
                    <h2 className='post-name'>{post.name}</h2>
                    <img
                        src={post.image}
                        alt={post.name}
                        className='posts-image'
                    />
                    <p className='excerpt'>{post.excerpt}</p>
                    <button onClick={() => navigate(`/blogs/${post.id}`)} className="button--read-more">Read More</button>
                </div>
                ))}
            </div>
        </div>
    )
}

export default BlogsPage;
