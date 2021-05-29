import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import Youtube from "react-youtube";
import axios from "./../axios";
import { API_KEY, imageUrl } from "../../constants/contstants";
function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      } else {
        console.log("trailer not available");
      }
    });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallposter" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="posters"
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default Rowpost;
