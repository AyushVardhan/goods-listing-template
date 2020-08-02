import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import PageNavbar from './components/Navbar';
import TopJumbotron from './components/TopJumbotron';
import ProductCategories from './components/ProductCategories';
import Introduction from './components/Introduction';

ReactDOM.render(
    <React.StrictMode>
      <PageNavbar />
    </React.StrictMode>,
    document.getElementById('navbar')
);

ReactDOM.render(
  <React.StrictMode>
    <TopJumbotron />
  </React.StrictMode>,
  document.getElementById('jumbotron')
);

ReactDOM.render(
  <React.StrictMode>
    <Introduction />
  </React.StrictMode>,
  document.getElementById('intro')
);


ReactDOM.render(
  <React.StrictMode>
    <ProductCategories />
  </React.StrictMode>,
  document.getElementById('categories')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
