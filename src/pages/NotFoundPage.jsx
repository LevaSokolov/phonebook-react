import '../styles/NotFoundPage.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/UI/Button';

const NotFoundPage = () => (
    <div className='main'>
      <div>PAGE NOT FOUND...</div>
      <Link to="/login">
        <Button className='button'>GO BACK</Button>
      </Link>
    </div>
);

export default NotFoundPage;
