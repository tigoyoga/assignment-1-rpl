import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "react-query";
import { useQuery } from "react-query";
import { fetchMovies } from "./fetchDataTest";
import { movies } from "./mockData";

const mockData = [
  {
    id: 1,
    title: "Avengers: Endgame",
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    overview:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos.",
    release_date: "2019-04-24",
    vote_average: 8.3,
    vote_count: 12612,
  },
];

const fetchMoviesTest = jest.fn(() => {
  return Promise.resolve({
    data: [
      {
        id: 1,
        title: "Avengers: Endgame",
        poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        overview:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos.",
        release_date: "2019-04-24",
        vote_average: 8.3,
        vote_count: 12612,
      },
    ],
  });
});

describe("Get Movies", () => {
  it("should fetch movies", async () => {
    const data = await fetchMoviesTest();
    expect(data.data).toEqual(mockData);
  });
});

describe("Get Movies", () => {
  it("should fetch movies", async () => {
    const data = await fetchMovies();
    expect([data]).toEqual(movies);
  });
});
