import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import OurClients from "./components/sections/OurClients";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white ">
        <Header />
        <main>
          <Hero />
          <OurClients />
        </main>
      </div>
    </>
  );
}

export default App;
