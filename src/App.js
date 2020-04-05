import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import SimpleForm from 'views/SimpleForm';

export default function App() {
  return (
    <CssBaseline>
      <div className="App">
        <SimpleForm />
      </div>
    </CssBaseline>
  );
}
