import "@/styles/globals.css";

import Navi from "@/components/header";

function App({ Component, pageProps }) {
  return (
    <>
      <Navi />
      <Component {...pageProps} />
    </>
  );
}

export default App;
