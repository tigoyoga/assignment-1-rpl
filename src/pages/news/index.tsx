import React from "react";
import { useInfiniteQuery, useQuery } from "react-query";

import type { NextPage } from "next";
import PaginateButton from "@/components/pagination/paginateButton";

import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const API_KEY = "392aa07e1519a48f97615a0211f22bd9";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface Movies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const fetchAllGenres = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  return data;
};

interface Genre {
  id: number;
  name: string;
}

const News: NextPage = () => {
  const [page, setPage] = React.useState(1);
  const [tag, setTag] = React.useState("now_playing?");
  const [genre, setGenre] = React.useState("");

  const memoizedGenre = React.useMemo(() => genre, [genre]);

  const { data, error, isLoading, refetch } = useInfiniteQuery<Movies, Error>(
    ["movies", page, genre],
    async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${tag}api_key=${API_KEY}&language=en-US&page=${page}&${genre}`
      );
      const movieData = await res.json();
      return movieData as Movies;
    },
    {
      staleTime: 0,
      refetchOnWindowFocus: false,
    }
  );

  //fetch all genres
  const {
    data: genres,
    error: genreError,
    isLoading: genreLoading,
  } = useQuery("genres", fetchAllGenres);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const displayPages = () => {
    let pages = [];
    for (let i = 1; i <= 10; i++) {
      pages.push(
        <PaginateButton key={i} setPage={setPage} page={page} paginate={i} />
      );
    }
    return pages;
  };

  return (
    <main className='bg-gray-900 text-white'>
      <div className='py-20 layout min-h-screen'>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold'>Movies</h1>

          {genreLoading && <div>Loading genres...</div>}
          {genreError && <div>Something went wrong</div>}
          {genres && (
            <div>
              <select
                className='bg-gray-800 text-white p-2 rounded-md'
                onChange={(e) => {
                  setGenre(`with_genres=${e.target.value}`);
                  refetch();
                  setPage(1);
                }}
              >
                <option value=''>All genres</option>

                {genres.genres.map((genre: Genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className='flex items-center justify-center gap-2 py-8'>
            <button
              className={`${
                tag.includes("now_playing") && "bg-blue-400"
              } p-2 rounded-md`}
              onClick={() => {
                setTag("now_playing?");
                setPage(1);
                refetch();
              }}
            >
              Now playing
            </button>
            <button
              className={`${
                tag.includes("popular") && "bg-blue-400"
              } p-2 rounded-md`}
              onClick={() => {
                setTag("popular?");
                setPage(1);
                refetch();
              }}
            >
              Popular
            </button>
            <button
              className={`${
                tag.includes("top_rated") && "bg-blue-400"
              } p-2 rounded-md`}
              onClick={() => {
                setTag("top_rated?");
                setPage(1);
                refetch();
              }}
            >
              Top rated
            </button>
            <button
              className={`${
                tag.includes("upcoming") && "bg-blue-400"
              } p-2 rounded-md`}
              onClick={() => {
                setTag("upcoming?");
                setPage(1);
                refetch();
              }}
            >
              Upcoming
            </button>
          </div>

          <div className='flex flex-wrap justify-center gap-2'>
            {data?.pages.map((page) => {
              return page?.results.map((movie: Movie) => {
                return (
                  <Link key={movie.id} href={`/news/${movie.id}`}>
                    <div
                      className='group relative w-72 h-[24rem] rounded-lg overflow-hidden cursor-pointer'
                      key={movie.id}
                    >
                      <div className='absolute w-full h-full z-0'>
                        <Image
                          className='absolute w-full h-full group-hover:scale-105 transition duration-300'
                          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          width={500}
                          height={500}
                          alt='movie poster'
                          priority
                        />
                      </div>
                      <div className='relative z-10 h-full translate-y-[80%] drop-shadow-lg'>
                        <h2 className='font-bold text-white text-lg'>
                          {movie.title}
                        </h2>
                        <p>{movie.release_date}</p>
                      </div>
                    </div>
                  </Link>
                );
              });
            })}
          </div>
        </div>
        <div className='text-center py-4'>page {page} of 10</div>
        <div className='flex justify-center gap-1'>{displayPages()}</div>
      </div>
    </main>
  );
};

export default News;
