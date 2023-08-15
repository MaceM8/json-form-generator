import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Tabs } from '../../components/Tabs';
import Config from './Config';
import Result from './Result';

import structure from './testStructure.json';
import { FormDefinition } from '../../types/common';

const FormGenerator = () => {
  const { t } = useTranslation();
  const [formDefinition, setFormDefinition] = useState<FormDefinition>(structure as FormDefinition);

  return (
    <Box component="section" mb={4}>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              tabs={[
                {
                  tabTitle: t('config'),
                  tabContent: (
                    <Config formDefinition={formDefinition} setFormDefinition={setFormDefinition} />
                  ),
                },
                { tabTitle: t('result'), tabContent: <Result formDefinition={formDefinition} /> },
              ]}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FormGenerator;
