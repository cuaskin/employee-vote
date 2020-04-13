import App from "next/app";
import React from "react";
import withReduxStore from "../hoc/withReduxStore";
import { Provider } from "react-redux";
import { Store } from "redux";
import "../styles.scss";

interface AppProps {
  reduxStore: Store;
}

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
