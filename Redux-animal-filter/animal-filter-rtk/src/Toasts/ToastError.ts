import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showErrorToast = () => {
    toast.error(`We've got problem!`, {
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

export default showErrorToast;