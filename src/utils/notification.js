import { toast } from "react-toastify";

export const pushNotification = (
  message,
  success = false,
  theme = localStorage.getItem("theme")
) => {
  success
    ? toast.success(message, {
        theme: theme,
      })
    : toast.error(message, {
        theme: theme,
      });
};
