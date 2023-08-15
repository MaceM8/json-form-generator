import React from 'react';
import Editor from '@monaco-editor/react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormDefinition } from '../../types/common';

interface ConfigProps {
  formDefinition: FormDefinition;
  setFormDefinition: (value: FormDefinition) => void;
}

const Config: React.FC<ConfigProps> = ({ formDefinition, setFormDefinition }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Box>
        <Typography variant="body1">{t('disclaimer')}</Typography>
      </Box>
      <Editor
        height="500px"
        defaultLanguage="json"
        defaultValue={JSON.stringify(formDefinition, null, 2)}
        onChange={(value) => setFormDefinition(JSON.parse(value ?? ''))}
      />
    </div>
  );
};

export default Config;
