import HeroImg from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="bg-[#F5F7FA] flex flex-col md:flex-row justify-center items-center py-12 md:py-24 gap-10 md:gap-28">
      <div className="text-[var(--darkgray)]">
        <h1 className="font-semibold text-6xl">Lessons and insights </h1>
        <p className="text-[var(--brand)] font-semibold text-6xl pb-4">
          from 8 years
        </p>
        <p className="pb-8 text-[16px]">
          Where to grow your business as a photographer: site or social media?
        </p>
        <a
          href="#"
          className="bg-[var(--brand)] px-8 py-3.5 text-white rounded-md"
        >
          Register
        </a>
      </div>
      <img src={HeroImg}></img>
    </section>
  );
};

export default Hero;
