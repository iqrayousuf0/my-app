import Footer from "@/components/footer";
import Navi from "@/components/header";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (

    <Html lang="en">

      <Head />
      <body>
        <Navi />
        <Main />
        <NextScript />
        <Footer />
      </body>
      
    </Html>
  );
}
