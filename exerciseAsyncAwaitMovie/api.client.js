API_KEY = "6d5d1fff5526ab413debde8bde25c374";
APIBaseAdres = "https://api.themoviedb.org/3";

const getMovieGenres = async () => {
  const APIEndpointGenres = `${APIBaseAdres}/genre/movie/list?api_key=${API_KEY}`;
  try {
    const response = await fetch(APIEndpointGenres, { method: "GET" });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};



  