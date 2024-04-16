import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { createGlobalStyle } from 'styled-components';
import Sound from './notification.mp3';
const CloseButton = () => (
   <button className='Toastify__toast-close' type='button'>
      <svg width='11' height='11' viewBox='0 0 14 14' fill='none'>
         <path
            d='M8.40994 7.00019L12.7099 2.71019C12.8982 2.52188 13.004 2.26649 13.004 2.00019C13.004 1.73388 12.8982 1.47849 12.7099 1.29019C12.5216 1.10188 12.2662 0.996094 11.9999 0.996094C11.7336 0.996094 11.4782 1.10188 11.2899 1.29019L6.99994 5.59019L2.70994 1.29019C2.52164 1.10188 2.26624 0.996094 1.99994 0.996094C1.73364 0.996094 1.47824 1.10188 1.28994 1.29019C1.10164 1.47849 0.995847 1.73388 0.995847 2.00019C0.995847 2.26649 1.10164 2.52188 1.28994 2.71019L5.58994 7.00019L1.28994 11.2902C1.19621 11.3831 1.12182 11.4937 1.07105 11.6156C1.02028 11.7375 0.994141 11.8682 0.994141 12.0002C0.994141 12.1322 1.02028 12.2629 1.07105 12.3848C1.12182 12.5066 1.19621 12.6172 1.28994 12.7102C1.3829 12.8039 1.4935 12.8783 1.61536 12.9291C1.73722 12.9798 1.86793 13.006 1.99994 13.006C2.13195 13.006 2.26266 12.9798 2.38452 12.9291C2.50638 12.8783 2.61698 12.8039 2.70994 12.7102L6.99994 8.41019L11.2899 12.7102C11.3829 12.8039 11.4935 12.8783 11.6154 12.9291C11.7372 12.9798 11.8679 13.006 11.9999 13.006C12.132 13.006 12.2627 12.9798 12.3845 12.9291C12.5064 12.8783 12.617 12.8039 12.7099 12.7102C12.8037 12.6172 12.8781 12.5066 12.9288 12.3848C12.9796 12.2629 13.0057 12.1322 13.0057 12.0002C13.0057 11.8682 12.9796 11.7375 12.9288 11.6156C12.8781 11.4937 12.8037 11.3831 12.7099 11.2902L8.40994 7.00019Z'
            fill='currentColor'
         />
      </svg>
   </button>
);
const defaultOptions = {
   // autoClose: false, // false or number millisecond
   // bodyClassName: '', // string
   // className: '', // string
   // closeButton: <CloseButton />, // false or ReactNode
   // closeOnClick: true, // boolean
   // containerId: '', // string
   // draggable: true, // boolean
   // draggableDirection: 'x', // x or y
   // draggablePercent: 80, // number from 0 to 100
   // enableMultiContainer: '', // boolean
   // hideProgressBar: false, // boolean
   // limit: '', // Integer number
   // newestOnTop: false, // boolean
   // pauseOnFocusLoss: true, // boolean
   // pauseOnHover: true, // boolean
   // position: 'top-right', // string
   // progressClassName: '', // string
   // progressStyle: {}, // object
   // role: 'alert', // string
   // rtl: false, // boolean
   // style: {}, // object
   // theme: 'light', // string oneOf ['light', 'dark']
   // toastClassName: '', // string
   // transition: Slide, // oneOf [Slide, Bounce, Zoom, Flip]
   closeButton: <CloseButton />,
   closeOnClick: true,
   draggable: true,
   newestOnTop: true, // boolean
};
const Styles = createGlobalStyle`
	:root {
		--toastify-color-light: #ffffff;
		--toastify-color-dark: #001833;
		--toastify-color-info: #0163f7;
		--toastify-color-success: #3bc148;
		--toastify-color-warning: #feda04;
		--toastify-color-error: #ff3b3c;
		--toastify-color-default: #a1a1aa;

		--toastify-icon-color-info: var(--toastify-color-info);
		--toastify-icon-color-success: var(--toastify-color-success);
		--toastify-icon-color-warning: var(--toastify-color-warning);
		--toastify-icon-color-error: var(--toastify-color-error);
		
		--toastify-text-color-info: var(--toastify-color-light);
		--toastify-text-color-success: var(--toastify-color-light);
		--toastify-text-color-warning: var(--toastify-color-light);
		--toastify-text-color-error: var(--toastify-color-light);
		
		--toastify-color-progress-info: var(--toastify-color-info);
		--toastify-color-progress-success: var(--toastify-color-success);
		--toastify-color-progress-warning: var(--toastify-color-warning);
		--toastify-color-progress-error: var(--toastify-color-error);
		
		--toastify-color-transparent: rgba(255, 255, 255, 0.7);
		--toastify-toast-background: var(--toastify-color-light);
		--toastify-text-color-light: var(--toastify-color-dark);
		--toastify-text-color-dark: var(--toastify-color-light);

		--toastify-spinner-color: var(--toastify-color-default);
		--toastify-spinner-color-empty-area: var(--toastify-color-dark);
		--toastify-color-progress-light: var(--toastify-color-dark);
		--toastify-color-progress-dark: var(--toastify-color-light);
		--toastify-shadow-light: rgba(13, 46, 105, 0.07);
		--toastify-shadow-dark: rgba(245, 250, 255, 0.1);
	}
`;
const StyledToastify = styled(ToastContainer)`
   padding: 0;
   right: 20px;
   top: 20px;
   @media (max-width: 480px) {
      padding: 14px 10px 10px 10px;
      right: 0;
      top: 0;
   }
   & .Toastify__toast {
      box-shadow: 0 1px 20px 0 var(--toastify-shadow-light),
         0 1px 20px 0 var(--toastify-shadow-light);
      border-radius: 14px;
      font-family: 'Gilroy', sans-serif !important;
      font-size: 16px;
      font-weight: 600;
      overflow: hidden;
      padding: 14px;
      &:last-child {
         margin: 0;
      }
      @media (max-width: 480px) {
         margin: 0 0 14px 0;
      }
      & .Toastify__toast-body {
         color: #11181c;
         margin: 0;
         padding: 0 18px 0 0 !important;
         width: 100%;
      }
      & .Toastify__toast-close {
         align-items: center;
         background-color: #e7e7e7;
         border-radius: 50%;
         border: none;
         color: #11181c;
         cursor: pointer;
         display: flex;
         height: 23px;
         justify-content: center;
         outline: none;
         padding: 0;
         position: absolute;
         right: 7px;
         top: 7px;
         width: 23px;
      }
   }
`;
const Notifications = () =>
   createPortal(
      <Fragment>
         <StyledToastify {...defaultOptions} />
         <Styles />
         <audio
            id='react-toastify-sound'
            src={Sound}
            style={{ display: 'none' }}
         />
      </Fragment>,
      document.getElementById('react-toastify-portal')
   );
export default Notifications;
