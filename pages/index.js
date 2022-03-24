import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ToTop from "../components/ToTop";


export async function getServerSideProps() {

  const reqData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
  const data = await reqData.json()

  const reqName = data.results.map(person => (person.name))

  const pokemons = await Promise.all(
    reqName.map((name) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/` + name).then((response) => response.json())
    )
  );

  return {
    props: {
      pokemons : pokemons,
    }
  }

}

export default function Home({pokemons}) {

  return (
    <>
        <Head>
          <title>Pokedex by rabbani</title>
        </Head>
        <Navbar />
        <Hero />
        <About />
        <Explore pokemons={pokemons} />
        <Contact />
        <Footer />
        <ToTop />
    </>
  )
}
