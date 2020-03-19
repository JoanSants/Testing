import React from 'react';

import './app.scss';
import Header from './component/header';
import Headline from './component/headline';

const App = () => (
  <div className="App">
      <Header />
      <section className="main">
        <Headline 
          header="Posts" 
          desc="Click the button to render posts" 
        />
      </section>
    </div>
);

export default App;
