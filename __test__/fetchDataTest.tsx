import useQuery from "react-query";
import axios from "axios";

export const fetchMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=392aa07e1519a48f97615a0211f22bd9&language=en-US&page=1`
  );
  return data;
};
