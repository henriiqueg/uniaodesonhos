import React from 'react';
import {
  FaBug,
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfo,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

type Types = 'success' | 'info' | 'error' | 'warning';

type ToastProps = {
  type: Types;
  message: string;
};

export const displayIcon = (type: Types) => {
  switch (type) {
    case 'success':
      return <FaCheck />;
    case 'info':
      return <FaInfo />;
    case 'error':
      return <FaExclamationCircle />;
    case 'warning':
      return <FaExclamationTriangle />;
    default:
      return <FaBug />;
  }
};

const ToastMessage = ({ type, message }: ToastProps) =>
  toast[type](
    <div style={{ display: 'flex', color: 'white' }}>
      <div
        style={{
          fontSize: 15,
          paddingTop: 8,
          flexShrink: 0,
          textAlign: 'center',
          width: '30px',
        }}
      >
        {displayIcon(type)}
      </div>
      <div style={{ flexGrow: 1, fontSize: 15, padding: '8px 12px' }}>
        {message}
      </div>
    </div>,
  );

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;
