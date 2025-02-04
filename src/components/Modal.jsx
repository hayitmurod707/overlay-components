import {
   FloatingFocusManager,
   FloatingOverlay,
   FloatingPortal,
   useClick,
   useDismiss,
   useFloating,
   useInteractions,
   useRole,
   useTransitionStyles,
} from '@floating-ui/react';
import { any, bool, func, oneOf, string } from 'prop-types';
import styled from 'styled-components';
const StyledOverlay = styled(FloatingOverlay)`
   align-items: center;
   background-color: rgba(0, 0, 0, 0.4);
   display: flex;
   height: 100vh;
   justify-content: center;
   padding: 20px;
   width: 100%;
   @media (max-width: 414px) {
      padding: 12px;
   }
   & .floating-ui-modal {
      background-color: #ffffff;
      border-radius: 20px !important;
      margin: auto;
      padding: 0;
      position: relative;
      & .floating-ui-modal-close {
         align-items: center;
         background-color: #eeeeee;
         border-radius: 50%;
         border: none;
         color: #11181c;
         cursor: pointer;
         display: flex;
         height: 28px;
         justify-content: center;
         outline: none;
         padding: 0;
         position: absolute;
         right: 16px;
         top: 16px;
         width: 28px;
         @media (max-width: 414px) {
            right: 12px;
            top: 12px;
         }
      }
   }
`;
const Modal = ({
   animation = 'slide-up',
   children,
   isDisabled = false,
   maxWidth = '450px',
   onClose,
   onOpen,
   open = false,
}) => {
   const { refs, context } = useFloating({
      open,
      onOpenChange: open => {
         if (open) {
            onOpen(open);
         } else {
            onClose(open);
         }
      },
   });
   const animationOptions =
      animation === 'scale-up'
         ? {
              initial: {
                 opacity: 0.1,
                 transform: 'scale(105%)',
              },
              open: {
                 opacity: 1,
                 transform: 'scale(100%)',
              },
           }
         : animation === 'scale-down'
         ? {
              initial: {
                 opacity: 0.1,
                 transform: 'scale(95%)',
              },
              open: {
                 opacity: 1,
                 transform: 'scale(100%)',
              },
           }
         : animation === 'slide-down'
         ? {
              initial: {
                 opacity: 0,
                 transform: 'translateY(-100px)',
              },
              open: {
                 opacity: 1,
                 transform: 'translateY(0)',
              },
           }
         : {
              initial: {
                 opacity: 0,
                 transform: 'translateY(100px)',
              },
              open: {
                 opacity: 1,
                 transform: 'translateY(0)',
              },
           };
   const { styles, isMounted } = useTransitionStyles(context, {
      ...animationOptions,
      common: { transformOrigin: 'center' },
      duration: 300,
   });
   const click = useClick(context);
   const role = useRole(context);
   const dismiss = useDismiss(context, {
      enabled: !isDisabled,
      escapeKey: true,
      outsidePressEvent: 'click',
   });
   const { getFloatingProps } = useInteractions([click, dismiss, role]);
   return (
      isMounted && (
         <FloatingPortal id='floating-ui-portal'>
            <StyledOverlay lockScroll>
               <FloatingFocusManager context={context}>
                  <div
                     {...getFloatingProps()}
                     className='floating-ui-modal'
                     ref={refs.setFloating}
                     style={{ ...styles, width: maxWidth, maxWidth }}
                  >
                     {children}
                     {!isDisabled && (
                        <button
                           className='floating-ui-modal-close'
                           onClick={() => onClose(false)}
                        >
                           <svg
                              fill='currentColor'
                              height='22'
                              viewBox='0 0 24 24'
                              width='22'
                           >
                              <path d='M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'></path>
                           </svg>
                        </button>
                     )}
                  </div>
               </FloatingFocusManager>
            </StyledOverlay>
         </FloatingPortal>
      )
   );
};
Modal.propTypes = {
   animation: oneOf(['slide-down', 'slide-up', 'scale-up', 'scale-down']),
   children: any,
   isDisabled: bool,
   maxWidth: string,
   onClose: func,
   onOpen: func,
   open: bool,
};
export default Modal;
