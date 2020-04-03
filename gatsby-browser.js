// import '@babel/polyfill';

import 'bootstrap/dist/css/bootstrap.css';
import 'video-react/dist/video-react.css';

export const onClientEntry = () => {
  console.log('%cStart Aggy\'s World!', 'display: block; color: #9f63f0; font-size: 40px;');
};


import Provider from './src/components/App/AppContext';

export const wrapRootElement = Provider;
