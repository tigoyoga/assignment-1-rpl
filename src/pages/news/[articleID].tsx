// create detail page for each article
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
// import { Article } from ".";
// import { API_KEY } from ".";
import Loading from "@/components/Loading";
import Image from "next/image";

// interface Article {
//   source: {
//     id: string | null;
//     name: string;
//   };

import React from "react";

const Article = () => {
  const router = useRouter();
  const { articleID } = router.query;

  return (
    <div>
      <h1>Article</h1>
      <div>{articleID}</div>
    </div>
  );
};

export default Article;
