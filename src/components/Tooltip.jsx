import {
   autoUpdate,
   flip,
   FloatingPortal,
   offset,
   shift,
   useDismiss,
   useFloating,
   useFocus,
   useHover,
   useInteractions,
   useRole,
} from '@floating-ui/react';
import { any, number, string } from 'prop-types';
import { Fragment, useState } from 'react';
import styled from 'styled-components';
const StyledTooltip = styled.div`
   background-color: rgba(34, 34, 34, 0.95);
   border-radius: 12px;
   color: #ffffff;
   font-size: 15px;
   font-weight: 500;
   opacity: 0.9;
   padding: 8px 16px;
   white-space: nowrap;
`;
const Tooltip = ({ children, distance = 7, title = '' }) => {
   const [isOpen, setIsOpen] = useState(false);
   const { refs, floatingStyles, context } = useFloating({
      onOpenChange: setIsOpen,
      open: isOpen,
      placement: 'top',
      whileElementsMounted: autoUpdate,
      middleware: [
         offset(distance),
         flip({
            fallbackAxisSideDirection: 'start',
         }),
         shift(),
      ],
   });
   const dismiss = useDismiss(context);
   const focus = useFocus(context);
   const hover = useHover(context, { move: true });
   const role = useRole(context, { role: 'tooltip' });
   const { getReferenceProps, getFloatingProps } = useInteractions([
      dismiss,
      focus,
      hover,
      role,
   ]);
   return (
      <Fragment>
         <div ref={refs.setReference} {...getReferenceProps()}>
            {children}
         </div>
         {isOpen && (
            <FloatingPortal id='floating-ui-portal'>
               <StyledTooltip
                  {...getFloatingProps()}
                  ref={refs.setFloating}
                  style={floatingStyles}
               >
                  {title}
               </StyledTooltip>
            </FloatingPortal>
         )}
      </Fragment>
   );
};
Tooltip.propTypes = {
   children: any,
   distance: number,
   title: string,
};
export default Tooltip;
