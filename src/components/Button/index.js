import React from 'react';
import './button.css';

export default function Button({ children, disabled = false, className = '', type = 'button', onClick = null }) {
  return (
    <button className={`button ${className}`} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
