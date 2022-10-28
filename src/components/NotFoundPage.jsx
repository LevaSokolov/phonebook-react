import React from 'react';
import { Link } from 'react-router-dom';

import Button from './UI/Button';

const NotFoundPage = () => (
    <div style={{ margin: '30px' }}>
      <div style={{ fontSize: '32px' }}>PAGE NOT FOUND...</div>
      <Link to="/login">
        <Button type="button" style={{ fontSize: '32px', margin: '10px', width: '260px' }}>GO BACK</Button>
      </Link>
    </div>
);

export default NotFoundPage;
