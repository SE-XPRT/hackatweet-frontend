import "../styles/globals.css";
import Head from "next/head";
import user from "../reducers/user";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

function App({ Component, pageProps }) {
  const store = configureStore({ reducer: { user } });
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>Next.js App</title>
        </Head>
        <Component {...pageProps} />
      </>
    </Provider>
  );
}

export default App;
