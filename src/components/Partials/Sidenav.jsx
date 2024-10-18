import { Link } from "react-router-dom"

const Sidenav = () => {
    const links = [
        { name: "Trending", icon: "ri-fire-fill", to: "/", bgcolor: "text-yellow-500" },
        { name: "Movies", icon: "ri-movie-2-fill", to: "/movies", bgcolor: "text-blue-500" },
        { name: "TV Shows", icon: "ri-tv-fill", to: "/tv-shows", bgcolor: "text-green-500" },
        { name: "Popular", icon: "ri-bard-fill", to: "/popular", bgcolor: "text-yellow-500" },
        { name: "People", icon: "ri-team-fill", to: "/people", bgcolor: "text-red-500" },
    ]

    const info = [
        { name: "About ", icon: "ri-information-fill", to: "/about", bgcolor: "text-blue-500" },
        { name: "Contact Us", icon: "ri-mail-fill", to: "/contact", bgcolor: "text-green-500" },
    ]
    return (
        <div className="w-[20%] h-full border-r border-zinc-700 flex flex-col  p-10 ">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <img src="/images/recommendation.png" alt="logo" className="w-5 h-5 " />
                <span className=" ">MovieApp</span>
            </h2>
            <div className="flex flex-col gap-10 h-full">
                <nav className="mx-4" >
                    <h2 className="text-xl font-semibold text-white mt-10">New Feeds</h2>
                    <div className="flex flex-col gap-5 mt-2">
                        <div className="flex flex-col gap-3 p-3 mt-2">
                            {links.map((link, index) => (
                                <Link to={link.to} key={index} className="text-white text-md flex items-center mt-3 gap-3 ">
                                <i className={`${link.icon} ${link.bgcolor}`}></i>
                                <span className="hover:text-zinc-400">{link.name}</span>
                            </Link>
                        ))}
                        </div>
                    </div>
                </nav>
                <hr className="my-5" />
                <div className="flex flex-col gap-3 mx-4">
                    <h2 className="text-xl font-semibold text-white mt-10">Website Information</h2>
                    <div className="flex flex-col gap-3 p-3 mt-2">
                        {info.map((link, index) => (
                            <Link to={link.to} key={index} className="text-white text-md flex items-center mt-3 gap-3 ">
                                <i className={`${link.icon} ${link.bgcolor}`}></i>
                                <span className="hover:text-zinc-400 duration-500 transition-all ease-in-out">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidenav