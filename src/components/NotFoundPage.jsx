import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ margin: '30px' }}>
      <div style={{ fontSize: '32px' }}>PAGE NO FOUND...</div>
      <Link to="/login">
        <button type="button" style={{ fontSize: '32px', margin: '10px', width: '260px' }}>GO BACK</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
