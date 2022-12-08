const movieGenreName = async () => {
    const data = await getMovieGenres();
    const movieGenres = data.genres.map(movieGenre => {
       return movieGenre.name
    });
    console.log(movieGenres)
  };
  movieGenreName()
  
  const movieGenreId = async () => {
    const data = await getMovieGenres();
    const movieIds = data.genres.map(movieGenre => {
       return movieGenre.id
    });
    console.log(movieIds)
  };
  movieGenreId()
  
  
  const addNameandIdtoDom = (movieGenres, movieIds )=>{
    const movieGenresList = document.getElementById("movieGenresList");
     const li = document.createElement("li");
      const liContent = document.createTextNode(
        `genre naam: ${movieGenres}, id: ${movieIds}`
      );
      li.appendChild(liContent);
      movieGenresList.append(li);
   }
  
   addNameandIdtoDom()