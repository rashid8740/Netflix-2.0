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
      <Row title="Horror Movies" fetchUrl={requests.fetchTrending} />

      <Footer />
    </div>
  );
}

export default App;
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;
