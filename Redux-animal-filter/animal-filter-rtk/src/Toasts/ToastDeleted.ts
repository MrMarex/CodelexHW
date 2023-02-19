import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showDeleteToast = () => {
    toast.warn('List item deleted successfully!', {
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

export default showDeleteToast;