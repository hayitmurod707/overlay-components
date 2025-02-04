import Modal from 'components/Modal';
import Notifications from 'components/Notifications';
import notification from 'components/Notifications/notification';
import Tooltip from 'components/Tooltip';
import { Fragment, useState } from 'react';
import styled from 'styled-components';
const StyledHeader = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   & h1 {
      font-size: 32px;
      font-weight: 600;
      margin: 32px 0 0 0;
      text-align: center;
   }
   & p {
      font-size: 18px;
      font-weight: 500;
      margin: 24px 0 0 0;
      text-align: center;
      color: #768695;
      & a {
         align-items: center;
         background-color: #5254f1;
         border-radius: 10px;
         color: white;
         display: flex;
         font-size: 16px;
         justify-content: center;
         padding: 12px 24px;
         text-decoration: none;
      }
   }
`;
const Notification = styled.div`
   & .title {
      font-size: 28px;
      font-weight: 600;
      margin: 24px 0;
      text-align: center;
   }
   & .row {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 20px 0;
      & button {
         border-radius: 12px;
         border: none;
         color: #ffffff;
         cursor: pointer;
         font-size: 17px;
         font-weight: 500;
         height: 52px;
         margin: 0 10px;
         outline: none;
         width: 200px;
      }
   }
`;
const App = () => {
   const [visible, setVisible] = useState(false);
   return (
      <Fragment>
         <StyledHeader>
            <h1>Overlay components</h1>
            <p>Overlay components for react application</p>
            <p>
               <a
                  href='https://github.com/hayitmurod707/overlay-components'
                  rel='noreferrer'
                  target='_blank'
               >
                  Github repository
               </a>
            </p>
         </StyledHeader>
         <Notification>
            <h2 className='title'>Modal</h2>
            <div className='row'>
               <Tooltip title='Hello'>
                  <button
                     style={{ backgroundColor: '#0163f7' }}
                     onClick={() => {
                        setVisible(true);
                     }}
                  >
                     Open
                  </button>
               </Tooltip>
            </div>
            <Modal
               open={visible}
               onClose={() => {
                  setVisible(false);
               }}
               onOpen={() => {
                  setVisible(true);
               }}
            >
               <div>
                  <h1>Hello Modal</h1>
                  <h1>Hello Modal</h1>
                  <h1>Hello Modal</h1>
                  <h1>Hello Modal</h1>
                  <h1>Hello Modal</h1>
                  <h1>Hello Modal</h1>
               </div>
            </Modal>
         </Notification>
         <Notification>
            <Notifications />
            <h2 className='title'>Notifications</h2>
            <div className='row'>
               <button
                  style={{ backgroundColor: '#0163f7' }}
                  onClick={() =>
                     notification('Info message', {
                        autoClose: false,
                        type: 'info',
                     })
                  }
               >
                  Info
               </button>
               <button
                  style={{ backgroundColor: '#0163f7' }}
                  onClick={() =>
                     notification('Info message', {
                        autoClose: true,
                        type: 'info',
                     })
                  }
               >
                  Auto Close Info
               </button>
            </div>
            <div className='row'>
               <button
                  style={{ backgroundColor: '#ff3b3c' }}
                  onClick={() =>
                     notification('Error message', {
                        autoClose: false,
                        type: 'error',
                     })
                  }
               >
                  Error
               </button>
               <button
                  style={{ backgroundColor: '#ff3b3c' }}
                  onClick={() =>
                     notification('Error message', {
                        autoClose: true,
                        type: 'error',
                     })
                  }
               >
                  Auto Close Error
               </button>
            </div>
            <div className='row'>
               <button
                  style={{ backgroundColor: '#feda04' }}
                  onClick={() =>
                     notification('Warning message', {
                        autoClose: false,
                        type: 'warning',
                     })
                  }
               >
                  Warning
               </button>
               <button
                  style={{ backgroundColor: '#feda04' }}
                  onClick={() =>
                     notification('Warning message', {
                        autoClose: true,
                        type: 'warning',
                     })
                  }
               >
                  Auto Close Warning
               </button>
            </div>
            <div className='row'>
               <button
                  style={{ backgroundColor: '#3bc148' }}
                  onClick={() =>
                     notification('Success message', {
                        autoClose: false,
                        type: 'success',
                     })
                  }
               >
                  Success
               </button>
               <button
                  style={{ backgroundColor: '#3bc148' }}
                  onClick={() =>
                     notification('Success message', {
                        autoClose: true,
                        type: 'success',
                     })
                  }
               >
                  Auto Close Success
               </button>
            </div>
            <div className='row'>
               <button
                  style={{ backgroundColor: '#a1a1aa' }}
                  onClick={() =>
                     notification('Default message', {
                        autoClose: false,
                        type: 'default',
                     })
                  }
               >
                  Default
               </button>
               <button
                  style={{ backgroundColor: '#a1a1aa' }}
                  onClick={() =>
                     notification('Default message', {
                        autoClose: true,
                        type: 'default',
                     })
                  }
               >
                  Auto Close Default
               </button>
            </div>
         </Notification>
      </Fragment>
   );
};
export default App;
