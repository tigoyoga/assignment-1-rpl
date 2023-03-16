// create detail page for each article

import { useRouter } from "next/router";
import { useQuery } from "react-query";

import Loading from "@/components/Loading";
import Image from "next/image";

interface Movie {
  adult: boolean;
  belongs_to_collection: null | object;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  tagline: string;

  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

import React from "react";
import Link from "next/link";
const API_KEY = "392aa07e1519a48f97615a0211f22bd9";

const Article = () => {
  const router = useRouter();
  const { movieID } = router.query;

  const { data, error, isLoading, isFetching, refetch } = useQuery<
    Movie,
    Error
  >(
    ["movie", movieID],
    async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      return data;
    },
    {
      enabled: !!movieID,
    }
  );

  return (
    <div className='min-h-screen bg-gray-900 text-white pt-16'>
      <h1 className='text-center text-5xl font-bold mb-4'>{data?.title}</h1>

      {isLoading && <Loading />}
      {data && (
        <div className='px-24'>
          <Image
            className='mx-auto'
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            width={500}
            height={750}
            alt='poster'
          />
          <p className='text-3xl font-semibold'>{data.release_date}</p>
          <p className='text-xl mt-2'>{data.overview}</p>

          <div className='space-x-1 mt-4'>
            {data.genres.map((genre) => (
              <div
                className='inline-block p-1 rounded-md border-[1px]'
                key={genre.id}
              >
                {genre.name}
              </div>
            ))}
          </div>
          <div className='mx-auto w-36'>
            <Link
              className='inline-block mx-auto bg-white px-8 py-3 rounded-lg text-black'
              href='/news'
            >
              Back
            </Link>
          </div>
        </div>

        // back
      )}
    </div>
  );
};

export default Article;
