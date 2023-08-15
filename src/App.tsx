import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import Footer from './components/Footer';
import { FormGenerator } from './containers/FormGenerator';
import './util/i18n';

function App() {
  return (
    <>
      <CssBaseline />

      <Header />
      <FormGenerator />
      <Footer />
    </>
  );
}

export default App;
