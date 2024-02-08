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
    </div>
  );
}

export default App;
