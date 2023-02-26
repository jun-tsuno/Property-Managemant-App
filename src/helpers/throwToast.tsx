import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import ToastContainer in component
export const successToast = () => {
	toast.success("Successfully Uploaded", {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
		transition: Flip,
	});
};

export const errorToast = () => {
	toast.error("Something went Wrong! \n Try Again!", {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
		transition: Flip,
	});
};
