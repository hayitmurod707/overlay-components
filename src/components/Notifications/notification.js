import { Bounce, Flip, Slide, Zoom, toast } from 'react-toastify';
const notification = (message = '', options = {}) => {
   const type = options?.type || 'info';
   const transition = [Bounce, Flip, Slide, Zoom][
      Math.floor(Math.random() * 4)
   ];
   const option = { ...options, transition };
   const hasType = ['error', 'info', 'success', 'warning'].includes(type);
   if (hasType) {
      toast[type](message, option);
   } else {
      toast(message, option);
   }
};
export default notification;
