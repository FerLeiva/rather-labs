import React from 'react';
import PageLayout from '../components/commons/PageLayout/PageLayout'
import Head from "next/head.js";

const Home: React.FC = () => {

  const breadcrumbs = [
    {
      label: 'Home',
      href: '/'
    },
  ];

  return (
    <>
   <Head>
    <title>Rather Labs Surveys</title>
    <meta name="description" content="The best survey page"/>
    <link rel="icon" href="/favicon.ico"/>
   </Head>
    <PageLayout breadcrumbs={breadcrumbs}>
      <h1 className="title">Welcome to Rather Labs Survey</h1>
      <p className="subtitle">We are happy to have you! Please make sure you have your Metamask Wallet connected to Goerli network before we proceed.</p>
    </PageLayout>
    </>
  );
};

export default Home;