import React, { Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'ramda';
import { Button, Grid, Input, Typography } from '@mui/material';
import { FieldDefinition, FormDefinition } from '../types/common';
import RadioButtonGroup from './RadioButtonGroup';

interface FormRendererProps {
  formDefinition: FormDefinition;
}

const mapFields = (field: FieldDefinition, index: number) => {
  let resolvedField: ReactNode = null;

  switch (field.type) {
    case 'number':
      resolvedField = (
        // NOTE: Not spreading field object to component, so we don't pass HTML unsupported tags
        <Input type="number" required={field.required} placeholder={field.placeholder} />
      );
      break;
    case 'multi-line':
      resolvedField = <textarea required={field.required} placeholder={field.placeholder} />;
      break;
    case 'boolean':
      resolvedField = (
        <input type="checkbox" required={field.required} placeholder={field.placeholder} />
      );
      break;
    case 'date':
      resolvedField = (
        <input type="date" required={field.required} placeholder={field.placeholder} />
      );
      break;
    case 'enum':
      resolvedField = <RadioButtonGroup options={field.options} required={field.required} />;
      break;
    case 'string':
    default:
      resolvedField = (
        <input type="text" required={field.required} placeholder={field.placeholder} />
      );
      break;
  }

  return (
    <Fragment key={`${field.name}-${index}`}>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Typography variant="body1">{field.label}</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        {resolvedField}
      </Grid>
      {/* NOTE: Empty grid to fill the rest of the row */}
      <Grid item lg={4} xl={6} sx={{ display: { xs: 'none', lg: 'block' } }} />
    </Fragment>
  );
};

const FormRenderer: React.FC<FormRendererProps> = ({ formDefinition }) => {
  const { t } = useTranslation();

  if (!formDefinition || isEmpty(formDefinition)) {
    return <div>{t('noDefinitionToRender')}</div>;
  }

  return (
    <div>
      <Typography variant="h4">{formDefinition.title}</Typography>
      <Typography variant="body1">{formDefinition.subtitle}</Typography>

      <Grid container spacing={2}>
        {formDefinition.fields.map(mapFields)}

        <Grid item xs={12} display="flex" gap={2}>
          {formDefinition.buttons?.map(({ type, label }) => (
            <Button
              variant="contained"
              color={type === 'submit' ? 'primary' : 'secondary'}
              type={type}
            >
              {label}
            </Button>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default FormRenderer;
