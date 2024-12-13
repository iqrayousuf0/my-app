import React from "react";
import Navi from "@/components/header";
import ExploreBlogsHeader from '@/components/choose';
import BlogList from '@/components/aboutus';
import Questions from "@/components/faqs";
import Footer from "@/components/footer";
import Head  from "next/head";
import KashmirPackages from "@/components/news";
import Tour from "@/components/plan";
import BackgroundSection from "@/components/solutions";

const App = () => {
  return (
    <>
      <Head>
        <title>Travel</title>
        <meta name="description" content="Best kashmir Tour And Travel" />
        <link rel="icon" href="favicon.ico" />
        <meta
          property="og:description"
          content="Best kashmir Tour And Travel Platform"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://Travel.com" />
        <meta property="og:type" content="website" />
      </Head>

      <Navi />
      <BackgroundSection />
      <ExploreBlogsHeader />
      <BlogList />
      <KashmirPackages />
      <Tour />
      <Questions />
      <Footer />
    </>
  );
};

export default App;
