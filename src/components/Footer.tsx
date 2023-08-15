import React from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Container>{t('footer')}</Container>
    </FooterWrapper>
  );
};

export default Footer;
