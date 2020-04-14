import App from 'next/app';
import React from 'react';
import Layout from 'components/Layout';
import withReduxStore from 'hoc/withReduxStore';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import 'static/sass/global.scss';

interface AppProps {
  reduxStore: Store;
}

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
