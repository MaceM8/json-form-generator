import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FormRenderer from '../../components/FormRenderer';
import { FormDefinition } from '../../types/common';

interface ResultProps {
  formDefinition: FormDefinition;
}

const Result: React.FC<ResultProps> = ({ formDefinition }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Box mb={2}>
        <Typography variant="h6">{t('formResultTabTitle')}</Typography>
      </Box>

      <FormRenderer formDefinition={formDefinition} />
    </div>
  );
};

export default Result;
