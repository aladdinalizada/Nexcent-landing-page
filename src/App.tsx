import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#F5F7FA] px-6 lg:px-16 xl:px-28">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
