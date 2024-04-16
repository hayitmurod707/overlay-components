import { Bounce, Flip, Slide, Zoom, toast } from 'react-toastify';
const notification = (message = '', options = {}) => {
   const {
      autoClose = false,
      type = 'info',
      onClose,
      onOpen,
      onClick,
   } = options;
   const transition = [Bounce, Flip, Slide, Zoom][
      Math.floor(Math.random() * 4)
   ];
   const openNotification = () => {
      if (typeof onOpen === 'function') {
         onOpen();
      }
      const audio = document.getElementById('react-toastify-sound');
      audio.currentTime = 0;
      audio.play();
   };
   const option = {
      autoClose,
      onClick,
      onClose,
      onOpen: openNotification,
      transition,
   };
   const hasType = ['error', 'info', 'success', 'warning'].includes(type);
   if (hasType) {
      toast[type](message, option);
   } else {
      toast(message, option);
   }
};
export default notification;
