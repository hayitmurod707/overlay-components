import { func, string } from 'prop-types';
import { useState } from 'react';
import { Planet } from 'react-planet';
import styled from 'styled-components';
const propTypes = { setOpen: func, url: string };
const StyledShare = styled.div`
   height: 40px;
   width: 40px;
   & > div > div {
      position: absolute;
   }
`;
const StyledElement = styled.button`
   align-items: center;
   border-radius: 50%;
   border: none;
   color: #ffffff;
   cursor: pointer;
   display: flex;
   height: 40px;
   justify-content: center;
   outline: none;
   padding: 0;
   width: 40px;
`;
const StyledItem = styled.button`
   align-items: center;
   background-color: ${prop => prop?.color};
   border-radius: 50%;
   border: none;
   color: #ffffff;
   cursor: pointer;
   display: flex;
   height: 44px;
   justify-content: center;
   left: -22px;
   position: absolute;
   top: -22px;
   width: 44px;
   &:hover::before {
      clip-path: polygon(
         0% 0%,
         0% 100%,
         100% 100%,
         50% 50%,
         100% 100%,
         100% 0%,
         0% 0%
      );
      transform: rotate(270deg);
   }
   &::before {
      background-color: transparent;
      border-radius: 50%;
      border: 2px solid ${prop => prop?.color};
      clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
      content: '';
      height: 48px;
      left: -4px;
      position: absolute;
      top: -4px;
      transition: 500ms;
      width: 48px;
   }
`;
const Telegram = ({ setOpen, color }) => (
   <StyledItem
      color={color}
      onClick={() => {
         setOpen(false);
         window.open(
            `https://t.me/share/url?url=${window.location.href}`,
            '_blank'
         );
      }}
   >
      <svg
         enableBackground='new 0 0 100 100'
         height='24'
         viewBox='5 0 100 100'
         width='24'
      >
         <path
            fill='currentColor'
            d='M89.442,11.418c-12.533,5.19-66.27,27.449-81.118,33.516c-9.958,3.886-4.129,7.529-4.129,7.529s8.5,2.914,15.786,5.1 c7.286,2.186,11.172-0.243,11.172-0.243l34.244-23.073c12.143-8.257,9.229-1.457,6.315,1.457 c-6.315,6.315-16.758,16.272-25.501,24.287c-3.886,3.4-1.943,6.315-0.243,7.772c6.315,5.343,23.558,16.272,24.53,17.001 c5.131,3.632,15.223,8.861,16.758-2.186c0,0,6.072-38.13,6.072-38.13c1.943-12.872,3.886-24.773,4.129-28.173 C98.185,8.018,89.442,11.418,89.442,11.418z'
         ></path>
      </svg>
   </StyledItem>
);
Telegram.propTypes = propTypes;
const Facebook = ({ setOpen, color }) => (
   <StyledItem
      color={color}
      onClick={() => {
         setOpen(false);
         window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
            '_blank'
         );
      }}
   >
      <svg width='24' height='24' viewBox='88.428 12.828 107.543 207.085'>
         <path
            fill='currentColor'
            d='M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z'
         ></path>
      </svg>
   </StyledItem>
);
Facebook.propTypes = propTypes;
const Email = ({ setOpen, color }) => (
   <StyledItem
      color={color}
      onClick={() => {
         setOpen(false);
         window.open(
            `mailto:hello@example.com?body=${window.location.href}`,
            '_blank'
         );
      }}
   >
      <svg height='22' viewBox='0 0 24 24' width='22'>
         <path fill='none' d='M0 0h24v24H0V0z'></path>
         <path
            fill='currentColor'
            d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z'
         ></path>
      </svg>
   </StyledItem>
);
Email.propTypes = propTypes;
const Copy = ({ setOpen, color }) => {
   const copyToClipboard = text => {
      if (window.clipboardData && window.clipboardData.setData) {
         return window.clipboardData.setData('Text', text);
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
         navigator.clipboard.writeText(text);
      } else {
         const textarea = document.createElement('textarea');
         textarea.style.left = '0';
         textarea.style.position = 'fixed';
         textarea.style.top = '0';
         textarea.value = text;
         document.body.appendChild(textarea);
         textarea.select();
         document.execCommand('copy');
         document.body.removeChild(textarea);
      }
   };
   return (
      <StyledItem
         color={color}
         onClick={() => {
            setOpen(false);
            copyToClipboard(window.location.href);
         }}
      >
         <svg height='25' viewBox='0 0 16 16' width='25'>
            <path
               fill='currentColor'
               d='M4.00029246,4.08524952 L4,10.5 C4,11.8254834 5.03153594,12.9100387 6.33562431,12.9946823 L6.5,13 L10.9143985,13.000703 C10.7082819,13.5829319 10.1528467,14 9.5,14 L6,14 C4.34314575,14 3,12.6568542 3,11 L3,5.5 C3,4.84678131 3.41754351,4.29108512 4.00029246,4.08524952 Z M11.5,2 C12.3284271,2 13,2.67157288 13,3.5 L13,10.5 C13,11.3284271 12.3284271,12 11.5,12 L6.5,12 C5.67157288,12 5,11.3284271 5,10.5 L5,3.5 C5,2.67157288 5.67157288,2 6.5,2 L11.5,2 Z'
            ></path>
         </svg>
      </StyledItem>
   );
};
Copy.propTypes = propTypes;
const Linkedin = ({ setOpen, color }) => (
   <StyledItem
      color={color}
      onClick={() => {
         setOpen(false);
         window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
            '_blank'
         );
      }}
   >
      <svg width='22' height='22' viewBox='0 0 1036 990'>
         <path
            fill='currentColor'
            d='M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z'
         ></path>
      </svg>
   </StyledItem>
);
Linkedin.propTypes = propTypes;
const ShareLocation = ({ color }) => {
   const url = window.location.href;
   const [open, setOpen] = useState(false);
   return (
      <StyledShare>
         <Planet
            autoClose
            hideOrbit
            open={open}
            orbitRadius={55}
            rotation={0}
            centerContent={
               <StyledElement
                  style={{ backgroundColor: color }}
                  onClick={() => {
                     setOpen(true);
                  }}
               >
                  <svg width='18' height='18' viewBox='0 0 24 24'>
                     <path
                        fill='currentColor'
                        d='m23.665 8.253-9-8A.998.998 0 0 0 13 1v3.207C9.996 5.013 0 8.765 0 23a1 1 0 0 0 1.928.371c2.965-7.413 8.745-8.96 11.071-9.283V17a1 1 0 0 0 1.666.747l9-8a1 1 0 0 0 0-1.494z'
                     ></path>
                  </svg>
               </StyledElement>
            }
         >
            <Copy color={color} setOpen={setOpen} url={url} />
            <Facebook color={color} setOpen={setOpen} url={url} />
            <Linkedin color={color} setOpen={setOpen} url={url} />
            <Telegram color={color} setOpen={setOpen} url={url} />
            <Email color={color} setOpen={setOpen} url={url} />
         </Planet>
      </StyledShare>
   );
};
ShareLocation.defaultProps = {
   color: '#0163f7',
};
ShareLocation.propTypes = {
   color: string,
};
export default ShareLocation;
