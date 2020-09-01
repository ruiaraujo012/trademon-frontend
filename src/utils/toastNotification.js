import { toast } from "react-toastify";

function toastNotification(message, type = "default") {
  toast(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    type: type,
  });
}

export default toastNotification;
