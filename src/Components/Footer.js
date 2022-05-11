import React from 'react';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer>
      <a href={'https://beta.openai.com/'} target='_blank' rel='noreferrer'>
        <img src='/openai_logo_white.png' alt='' />
      </a>
      <a
        href={'https://github.com/s-arina/Shopify_FE_Challenge'}
        target='_blank'
        rel='noreferrer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          role='img'
          viewBox='0 0 24 24'
          fill='none'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-github'
        >
          <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
        </svg>
      </a>
      <a href={'https://sarinachang.com'} target='_blank' rel='noreferrer'>
        <svg
          className='portfolio'
          viewBox='0 0 24 24'
          stroke='white'
          stroke-width='1.2'
          stroke-linecap='round'
          stroke-linejoin='round'
          fill='none'
        >
          <circle cx='12' cy='12' r='9' />
          <path d='M12,3 C 8,3 8,21 12,21 C 16,21 16,3 12,3' />
          <path d='M3,12 C 3,8 21,8 21,12 C 21,16 3,16 3,12' />
        </svg>
      </a>
    </footer>
  );
}

export default Footer;
