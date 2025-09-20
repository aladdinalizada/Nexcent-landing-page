import Logo1 from "../../assets/images/clients/Logo1.svg";
import Logo2 from "../../assets/images/clients/Logo2.svg";
import Logo3 from "../../assets/images/clients/Logo3.svg";
import Logo4 from "../../assets/images/clients/Logo4.svg";
import Logo5 from "../../assets/images/clients/Logo5.svg";
import Logo6 from "../../assets/images/clients/Logo6.svg";
import Logo7 from "../../assets/images/clients/Logo7.svg";

const OurClients = () => {
  const clients = [
    { id: 1, path: Logo1 },
    { id: 2, path: Logo2 },
    { id: 3, path: Logo3 },
    { id: 4, path: Logo4 },
    { id: 5, path: Logo5 },
    { id: 6, path: Logo6 },
    { id: 7, path: Logo7 },
  ];

  return (
    <section className="bg-white py-10 px-6 lg:px-16 xl:px-28 space-y-10">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-[var(--neutralgray)] font-semibold text-4xl">
          Our Clients
        </h2>
        <p className="text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        {clients.map((client) => (
          <div key={client.id}>
            <img src={client.path} alt={client.path} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
