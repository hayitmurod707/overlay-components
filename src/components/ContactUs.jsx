import { Fragment, useState } from 'react';
import Modal from 'reactjs-popup';
import styled, { keyframes } from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Mail = () => (
   <svg fill='none' height='44' viewBox='0 0 44 44' width='44'>
      <rect width='44' height='44' rx='22' fill='#0163f7' />
      <path
         d='M22 21.0331L32.3838 14.3625C31.9663 14.0494 31.4594 13.8785 30.9375 13.875H13.0625C12.5407 13.8785 12.0337 14.0494 11.6163 14.3625L22 21.0331Z'
         fill='white'
      />
      <path
         d='M22.4388 22.6824L22.3006 22.7474H22.2356C22.1608 22.7809 22.0814 22.8028 22 22.8124C21.9326 22.8209 21.8643 22.8209 21.7969 22.8124H21.7319L21.5938 22.7474L10.7062 15.7112C10.6542 15.9074 10.6269 16.1094 10.625 16.3124V27.6874C10.625 28.3339 10.8818 28.9539 11.3389 29.411C11.796 29.8681 12.416 30.1249 13.0625 30.1249H30.9375C31.584 30.1249 32.204 29.8681 32.6611 29.411C33.1182 28.9539 33.375 28.3339 33.375 27.6874V16.3124C33.3731 16.1094 33.3458 15.9074 33.2937 15.7112L22.4388 22.6824Z'
         fill='white'
      />
   </svg>
);
const Phone = () => (
   <svg fill='none' height='44' viewBox='0 0 44 44' width='44'>
      <rect width='44' height='44' rx='22' fill='#0163f7' />
      <path
         d='M30.6072 28.5874C29.7572 27.5588 28.9072 26.5301 28.0573 25.5015C27.9893 25.4192 27.9135 25.3321 27.8094 25.309C27.6733 25.2788 27.5422 25.3676 27.4309 25.4516L25.5457 26.8759C25.1693 27.1603 24.7034 27.4603 24.2598 27.3001C24.0027 27.2073 23.8233 26.9787 23.6582 26.7609C22.7018 25.4994 21.7454 24.2379 20.7889 22.9764L20.7715 22.9527L18.0176 19.0833C17.8592 18.8607 17.6947 18.6211 17.6829 18.3481C17.6627 17.8768 18.0882 17.522 18.4721 17.2478C19.113 16.79 19.7539 16.3322 20.3948 15.8744C20.5082 15.7934 20.6321 15.6948 20.644 15.5559C20.6531 15.4496 20.5926 15.3512 20.5344 15.2618L18.3519 11.9061C18.1032 11.5239 17.8257 11.118 17.3974 10.9616C16.8978 10.7793 16.3489 10.9898 15.8606 11.2005C15.0478 11.5512 14.2079 11.9324 13.6427 12.6138C12.6975 13.7537 12.731 15.4612 12.8141 16.8574C12.9113 18.4926 13.4509 20.1805 14.0853 21.6787C14.7414 23.2284 15.6111 24.6828 16.6416 26.0139C17.6021 27.3906 18.7269 28.6514 20.006 29.7376C21.2461 30.7907 22.6956 31.8102 24.2269 32.3918C25.5343 32.8885 27.1538 33.4308 28.5241 32.8695C29.3433 32.5339 29.9581 31.8463 30.5359 31.1755C30.8829 30.7725 31.2478 30.3116 31.2231 29.7803C31.2021 29.3251 30.8976 28.9388 30.6072 28.5874Z'
         fill='white'
      />
   </svg>
);
const Message = () => (
   <svg fill='none' height='44' viewBox='0 0 44 44' width='44'>
      <rect width='44' height='44' rx='22' fill='#0163f7' />
      <path
         clipRule='evenodd'
         d='M11.3478 27.9693L9.82001 33.0915C9.73426 33.3776 9.80163 33.6882 9.99763 33.914C10.1936 34.1406 10.4911 34.2509 10.7869 34.2071L17.2444 33.249C18.71 33.8711 20.3235 34.2167 22.0167 34.2167C28.7682 34.2167 34.25 28.7349 34.25 21.9834C34.25 15.2319 28.7682 9.75 22.0167 9.75C15.2652 9.75 9.78326 15.2319 9.78326 21.9834C9.78326 24.1569 10.352 26.1991 11.3478 27.9693Z'
         fill='white'
         fillRule='evenodd'
      />
      <path
         clipRule='evenodd'
         d='M15.875 25.5H22.875C23.358 25.5 23.75 25.108 23.75 24.625C23.75 24.142 23.358 23.75 22.875 23.75H15.875C15.392 23.75 15 24.142 15 24.625C15 25.108 15.392 25.5 15.875 25.5ZM15.875 20.25H28.125C28.608 20.25 29 19.858 29 19.375C29 18.892 28.608 18.5 28.125 18.5H15.875C15.392 18.5 15 18.892 15 19.375C15 19.858 15.392 20.25 15.875 20.25Z'
         fill='#0163f7'
         fillRule='evenodd'
      />
   </svg>
);
const animation1 = keyframes`
	0% {
		outline: 0px solid #0163f7;
		opacity: 0.7;
   }
   100%{
		outline: 25px solid #0163f7;
      opacity: 0;
   }
`;
const animation2 = keyframes`
	0% {
		outline: 0px solid #0163f7;
		opacity: 0.7;
   }
   100%{
		outline: 13px solid #0163f7;
      opacity: 0;
   }
`;
const animation3 = keyframes`
   0% {
      transform: rotate(-45deg);
      opacity: 0;
   }
   100% {
      transform: rotate(0deg);
      opacity: 1;
   }
`;
const Menu = styled(Modal)`
   &-overlay {
      background-color: transparent !important;
   }
   &-content {
      animation: none;
      background-color: transparent;
      border-radius: 0 !important;
      border: none;
      bottom: 94px !important;
      box-shadow: none !important;
      left: initial !important;
      padding: 0 !important;
      position: fixed !important;
      right: 46px !important;
      top: initial !important;
      transform-origin: bottom center;
      width: 52px !important;
      @media (max-width: 1200px) {
         bottom: 84px !important;
         right: 36px !important;
      }
      @media (max-width: 768px) {
         bottom: 64px !important;
         right: 16px !important;
      }
      @media (max-width: 414px) {
         bottom: 56px !important;
         right: 8px !important;
      }
      & .social {
         display: flex;
         flex-direction: column;
         align-items: center;
         & a,
         & button {
            align-items: center;
            background-color: transparent;
            border: none;
            color: #0163f7;
            cursor: pointer;
            display: flex;
            height: 48px;
            justify-content: center;
            margin: 0 0 8px 0;
            outline: none;
            outline: none;
            padding: 0;
            position: relative;
            transition: 300ms;
            width: 48px;
            &[data-open='true'] {
               opacity: 1;
               transform: scale(1);
            }
            &[data-open='false'] {
               opacity: 0;
               transform: scale(0.6);
            }
            &:nth-child(1) {
               transition-delay: 100ms;
            }
            &:nth-child(2) {
               transition-delay: 50ms;
            }
            &:nth-child(3) {
               transition-delay: 0s;
            }
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
               border: 2px solid #0163f7;
               content: '';
               height: 48px;
               left: -2px;
               position: absolute;
               top: -2px;
               transition: 500ms;
               width: 48px;
               clip-path: polygon(
                  0% 0%,
                  0% 0%,
                  0% 0%,
                  50% 50%,
                  0% 0%,
                  0% 0%,
                  0% 0%
               );
            }
         }
      }
   }
`;
const StyledContactUs = styled.button`
   align-items: center;
   background-color: transparent;
   border-radius: 22px;
   border: none;
   bottom: 50px;
   cursor: pointer;
   display: flex;
   height: 44px;
   justify-content: center;
   outline: none;
   padding: 0;
   position: fixed;
   right: 50px;
   transition: 200ms;
   width: 44px;
   z-index: 2;
   &[data-visible='true'] {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
   }
   &[data-visible='false'] {
      opacity: 0;
      visibility: hidden;
      transform: scale(0.5);
   }
   @media (max-width: 1200px) {
      bottom: 40px !important;
      right: 40px !important;
   }
   @media (max-width: 768px) {
      bottom: 20px !important;
      right: 20px !important;
   }
   @media (max-width: 414px) {
      bottom: 12px !important;
      right: 12px !important;
   }
   & .close-icon {
      align-items: center;
      animation: ${animation3} 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9);
      background-color: #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      color: #0163f7;
      display: flex;
      height: 36px;
      justify-content: center;
      padding: 0;
      width: 36px;
   }
   & .swiper {
      animation: ${animation3} 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9);
      height: 44px;
      width: 44px;
      & .swiper-slide {
         & .icon {
            align-items: center;
            color: #0163f7;
            display: flex;
            height: 44px;
            justify-content: center;
            padding: 0;
            width: 44px;
            &[data-active='false'] {
               opacity: 0;
            }
            &[data-active='true'] {
               opacity: 1;
            }
         }
      }
   }
   & .shadow {
      align-items: center;
      display: flex;
      height: 44px;
      justify-content: center;
      left: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      width: 44px;
      z-index: -1;
      & div {
         background-color: #0163f7;
         border-radius: 50%;
         height: 44px;
         opacity: 0.7;
         width: 44px;
      }
      & .shadow-1 {
         animation: 2s ease-out infinite ${animation1};
      }
      & .shadow-2 {
         animation: 2s ease-out infinite ${animation2};
      }
   }
`;
const ContactUs = () => {
   const [open, setOpen] = useState(false);
   return (
      <Fragment>
         <Menu
            arrow={false}
            closeOnDocumentClick={true}
            closeOnEscape={true}
            lockScroll={true}
            open={open}
            position='left top'
            onClose={() => {
               setOpen(false);
            }}
            onOpen={() => {
               setOpen(true);
            }}
            trigger={
               <StyledContactUs>
                  {open ? (
                     <div className='close-icon'>
                        <svg height='16' viewBox='0 0 512 512' width='16'>
                           <path
                              fill='currentColor'
                              d='M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z'
                           ></path>
                        </svg>
                     </div>
                  ) : (
                     <Fragment>
                        <Swiper
                           allowTouchMove={false}
                           autoplay={{ delay: 2000 }}
                           effect='fade'
                           loop={true}
                           modules={[Autoplay, EffectFade]}
                           slidesPerView='auto'
                        >
                           <SwiperSlide>
                              {({ isActive }) => (
                                 <div className='icon' data-active={isActive}>
                                    <Mail />
                                 </div>
                              )}
                           </SwiperSlide>
                           <SwiperSlide>
                              {({ isActive }) => (
                                 <div className='icon' data-active={isActive}>
                                    <Phone />
                                 </div>
                              )}
                           </SwiperSlide>
                           <SwiperSlide>
                              {({ isActive }) => (
                                 <div className='icon' data-active={isActive}>
                                    <Message />
                                 </div>
                              )}
                           </SwiperSlide>
                        </Swiper>
                        <div className='shadow'>
                           <div className='shadow-1'></div>
                        </div>
                        <div className='shadow'>
                           <div className='shadow-2'></div>
                        </div>
                     </Fragment>
                  )}
               </StyledContactUs>
            }
         >
            <div className='social'>
               <a
                  data-open={open}
                  href='mailto:recruitment@asakabank.uz'
                  rel='noopener noreferrer'
                  onClick={() => {
                     setOpen(false);
                  }}
               >
                  <Mail />
               </a>
               <a
                  data-open={open}
                  href='tel:1152'
                  rel='noopener noreferrer'
                  onClick={() => {
                     setOpen(false);
                  }}
               >
                  <Phone />
               </a>
               <button
                  data-open={open}
                  onClick={() => {
                     setOpen(false);
                  }}
               >
                  <Message />
               </button>
            </div>
         </Menu>
      </Fragment>
   );
};
export default ContactUs;
