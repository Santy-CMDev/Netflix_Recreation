import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Row from "../components/Row";
import "./Home.css";


const tempMovies = [
  {
    id: 1,
    title: "Stranger Things",
    poster_path:
      "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  },
  {
    id: 2,
    title: "The Witcher",
    poster_path:
      "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
  },
  {
    id: 3,
    title: "La Casa de Papel",
    poster_path:
      "https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg",
  },
  {
    id: 4,
    title: "Breaking Bad",
    poster_path:
      "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    id: 5,
    title: "El Juego del Calamar",
    poster_path:
      "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    id: 6,
    title: "Narcos",
    poster_path:
      "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
  },
  {
    id: 7,
    title: "Dark",
    poster_path:
      "https://image.tmdb.org/t/p/w500/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg",
  },
  {
    id: 8,
    title: "The Umbrella Academy",
    poster_path:
      "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner
        title="Stranger Things 4"
        description="Cuando un niño desaparece, un pequeño pueblo descubre un misterio que involucra experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña."
        imageUrl="https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"
      />
      <div className="rows-container">
        <Row title="Originales de Netflix" movies={tempMovies} isLargeRow />
        <Row title="Tendencias" movies={tempMovies} />
        <Row title="Mejor valoradas" movies={tempMovies} />
        <Row title="Acción" movies={tempMovies} />
        <Row title="Comedias" movies={tempMovies} />
        <Row title="Terror" movies={tempMovies} />
        <Row title="Románticas" movies={tempMovies} />
        <Row title="Documentales" movies={tempMovies} />
      </div>
    </div>
  );
};

export default Home;
