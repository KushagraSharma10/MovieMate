import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const slinks = [
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
    { name: "Hello eveyone", img: "/", src: "" },
  ];
  return (
    <div className="w-full h-[10vh] relative flex items-center justify-start gap-3 ml-[10%]">
      <i className="ri-search-line text-2xl text-white cursor-pointer left-5"></i>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-[50%] bg-transparent border border-zinc-700 rounded-md text-white p-3 mx-auto-10 focus:outline-none"
      />
      {query.length> 0 && (
        <i onClick={() => setQuery("")} className="ri-close-line cursor-pointer text-2xl text-white right-5"></i>
      )}
      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-800 top-[90%] rounded-lg overflow-hidden ml-[3%] overflow-y-auto">
        {slinks.map((link) => (
          <Link
            key={link.name}
            to={link.src}
            className="flex items-center justify-start border-b-[1px] border-zinc-700 text-white p-3 gap-2 hover:bg-zinc-700 duration-500 transition-all ease-in-out"
          >
            <img src={link.img} alt="" />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
