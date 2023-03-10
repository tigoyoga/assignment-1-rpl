import Head from "next/head";

import {
  Hero,
  About,
  Services,
  Portfolio,
  Testimonial,
  Collaboration,
} from "@/lib/utils";

import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Digital Agency</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonial />
          <Collaboration />
        </main>
      </Layout>
    </>
  );
}
