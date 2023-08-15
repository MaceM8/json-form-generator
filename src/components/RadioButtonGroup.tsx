import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Option } from '../types/common';

// NOTE: Making them optional so we are flexible with inputs
interface RadioButtonGroupProps {
  label?: string;
  options?: Option[];
  required?: boolean;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ label, options, required }) => (
  <FormControl required={required}>
    {label && <FormLabel>{label}</FormLabel>}
    <FormLabel id={`radio-buttons-group-label-${label}`}>{label}</FormLabel>
    <RadioGroup
      aria-labelledby={`radio-buttons-group-label-${label}`}
      name={`radio-buttons-group-${label}`}
    >
      {options?.map(({ label, value }) => (
        <FormControlLabel value={value} control={<Radio />} label={label} />
      ))}
    </RadioGroup>
  </FormControl>
);

export default RadioButtonGroup;
