// pages/details/[filmid].js
import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import {
  DetailsWrapper,
  FilmTitle,
  FilmInfo,
  OpeningCrawl,
} from "../../styles/LayoutStyles";

const Details = ({ film }) => {
  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <Layout>
      <h1>{film.title}</h1>
      <p>Director: {film.director}</p>
      <p>Release Date: {film.release_date}</p>
      <p>Opening Crawl: {film.opening_crawl}</p>
    </Layout>
  );
};

// pages/details/[filmid].js
export async function getStaticPaths() {
  try {
    const response = await axios.get("https://swapi.dev/api/films");
    const films = response.data.results;

    console.log("Fetched films:", films);

    const paths = films.map((film) => {
      const filmid = film.url.split("/").filter(Boolean).pop();
      console.log("Generated path:", `/details/${filmid}`);
      return {
        params: { filmid },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching films for paths:", error.message);
    return {
      paths: [],
      fallback: false,
    };
  }
}

// pages/details/[filmid].js
export async function getStaticProps({ params }) {
  try {
    console.log("Fetching film details for ID:", params.filmid);
    const response = await axios.get(
      `https://swapi.dev/api/films/${params.filmid}`
    );
    const film = response.data;

    console.log("Fetched film details:", film);

    return {
      props: { film },
    };
  } catch (error) {
    console.error("Error fetching film details:", error.message);
    return {
      props: { film: null },
    };
  }
}

export default Details;
