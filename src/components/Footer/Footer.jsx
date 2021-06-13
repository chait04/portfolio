import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  SocialMedia,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
} from './Footer.elemetns';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>
              <SocialIcon to='/' />
              Chaitanaya
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href='https://www.linkedin.com/in/chaitanya4/'
                target='_blank'
                aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href='https://github.com/chait04'
                target='_blank'
                aria-label='github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://twitter.com/chaitaanya04'
                target='_blank'
                aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
          <WebsiteRights>Chaitanya © 2021</WebsiteRights>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
