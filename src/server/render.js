import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Routes from '../src/router/Routes';

export default store => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter>
        <Routes />
      </StaticRouter>
    </Provider>
  );


  return `
  <html>
      <head>
        <title>ESAP Map NY</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}
        </script>
        <script src="/main.js"></script>
      </body>
    </html>
  `;
};
