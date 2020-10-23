import React from 'react';
import './detail.css';

export default function Detail({ label = 'demo', value = 'DEMO' }) {
  return (
    <div className="detail-wrapper">
      <label>{label}</label>
      <p>{value}</p>
    </div>
  );
}
