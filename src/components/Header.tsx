import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <Container>
        <Box mb={3}>
          <Typography variant="h1">{t('headerTitle')}</Typography>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
