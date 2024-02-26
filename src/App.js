import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Row from "./components/Row";
import requests from "./Requests";

function App() {
  return (
    <div className=" bg-black h-screen">
      <Hero />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchRomanceMoives />

      <Footer />
    </div>
  );
}

export default App;
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
