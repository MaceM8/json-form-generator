import { Box, Typography } from '@mui/material';
import React from 'react';

interface TabContentProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabContent: React.FC<TabContentProps> = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
  >
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

export default TabContent;
