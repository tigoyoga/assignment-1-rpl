import React from "react";
import { useQuery, useInfiniteQuery, QueryCache } from "react-query";
import type { NextPage } from "next";
import PaginateButton from "@/components/pagination/paginateButton";

import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";

const API_KEY = "8599b1d8a3b6483db72e9f40fe9d7708";

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const fetchNews = async (pageParam: number) => {
  // const URL = `https://newsapi.org/v2/everything?q=technology&page=${pageParam}&pageSize=9&apiKey=${API_KEY}`;
  const URL = `https://newsapi.org/v2/top-headlines?country=id&page=${pageParam}&pageSize=9&apiKey=${API_KEY}`;
  const res = await fetch(URL);
  const data = await res.json();
  console.log(URL + "url");

  return data as NewsAPIResponse;
};

const News: NextPage = () => {
  const [page, setPage] = React.useState(1);

  const QUERY_KEY = ["news", page];

  const { data, error, isLoading } = useInfiniteQuery<NewsAPIResponse, Error>(
    QUERY_KEY,
    () => fetchNews(page),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.articles.length < 10) {
          return undefined;
        }

        return pages.length + 1;
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //create button components that show the number of pages and when clicked, it will change the page number. and can go to last page and first page

  const displayPages = [];

  // create pagination with 2 sibling pages on each side of the current page
  const firstPage = 1;
  // if greater than 10 pages, then last page is 10, else last page is total pages
  const totalResults = data?.pages[0]?.totalResults ?? 0;

  const lastPage = totalResults > 90 ? 10 : Math.ceil(totalResults / 9);
  const currentPage = page;
  const siblingCount = 1;

  const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPage);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPage);

  const shouldShowLeftDots = leftSiblingIndex > firstPage + 1;
  const shouldShowRightDots = rightSiblingIndex < lastPage - 1;

  const shouldShowFirstPageButton = leftSiblingIndex > firstPage;
  const shouldShowLastPageButton = rightSiblingIndex < lastPage;

  if (shouldShowFirstPageButton) {
    displayPages.push(
      <PaginateButton
        setPage={setPage}
        page={page}
        paginate={firstPage}
        key={firstPage}
      />
    );
  }

  if (shouldShowLeftDots) {
    displayPages.push(
      <PaginateButton
        setPage={setPage}
        paginate={leftSiblingIndex - 1}
        key={leftSiblingIndex - 1}
        page={page}
        tag='...'
      />
    );
  }

  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    displayPages.push(
      <PaginateButton setPage={setPage} page={page} paginate={i} key={i} />
    );
  }

  if (shouldShowRightDots) {
    displayPages.push(
      <PaginateButton
        setPage={setPage}
        page={page}
        paginate={rightSiblingIndex + 1}
        key={rightSiblingIndex + 1}
        tag='...'
      />
    );
  }

  if (shouldShowLastPageButton) {
    displayPages.push(
      <PaginateButton
        setPage={setPage}
        page={page}
        paginate={lastPage}
        key={lastPage}
      />
    );
  }

  //  get image from loremflickr when urlToImage is null
  const getImg = () => {
    const random = Math.floor(Math.random() * 100);
    const url = `https://loremflickr.com/320/240?random=${random}`;
    return url;
  };

  return (
    <main className=''>
      <div className='layout bg-neutral-400 min-h-screen'>
        <div className='text-center'>
          <h1>News</h1>
          <div className='flex flex-wrap gap-2 justify-center'>
            {data?.pages.map((page) => {
              return page.articles.map((article, index) => {
                return (
                  // make div clickable and link to article url

                  <Link href={`/${index}}`} key={index}>
                    <div
                      className='w-80 h-[24rem] border-blue-900 border-2'
                      key={article.url}
                    >
                      <Image
                        className='w-full h-4/5'
                        src={article.urlToImage || getImg()}
                        alt={article.title}
                        width={300}
                        height={200}
                      />
                      <h1 className='w-full h-1/5'>{article.title}</h1>
                      {/* <p>{article.description}</p> */}
                    </div>
                  </Link>
                );
              });
            })}
          </div>

          <div className='p-4'>
            <p>
              Page {page} of {lastPage}
            </p>
          </div>

          <div className='p-4 space-x-2'>{displayPages}</div>
        </div>
      </div>
    </main>
  );
};

export default News;
