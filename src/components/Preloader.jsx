import '../styles/Preloader.scss';

import React from 'react';

import preloaderLogo from '../assets/images/preloader.svg';

const Preloader = () => (
<div className='loader-box'>
  <img className='loader' src={preloaderLogo} />
</div>);

export default Preloader;
