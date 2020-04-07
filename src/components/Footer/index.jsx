import React from 'react';
import { FooterWrapper } from './styled';

const Footer = () => (
  <FooterWrapper>
    Copyright ©
    {' '}
    <a
      href="https://card-stack.co.uk"
      target="_blank"
      rel="noreferrer noopener"
    >
      Cardstack Consulting Limited 2020
    </a>
  </FooterWrapper>
);

export default Footer;
