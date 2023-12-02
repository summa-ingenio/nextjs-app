// pages/index.js
import axios from "axios";
import Layout from "../components/Layout";
import Link from "next/link";

const Index = ({ films }) => {
  console.log(
    "Film IDs:",
    films.map((film) => film.url.split("/").pop())
  );

  return (
    <Layout>
      <h1>Star Wars Films</h1>
      <ul>
        {films.map((film, index) => (
          <li key={index + 1}>
            <Link href="/details/[filmid]" as={`/details/${index + 1}`}>
              <p>{film.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await axios.get("https://swapi.dev/api/films");
  const films = response.data.results;

  return {
    props: { films },
  };
}

export default Index;
