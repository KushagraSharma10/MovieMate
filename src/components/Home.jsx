import Sidenav from "./Partials/Sidenav"
import TopNav from "./Partials/TopNav"
const Home = () => {
    document.title = "Home"
  return (
    <>
        <Sidenav />
        <div className="w-[80%] h-full ">
            <TopNav />
        </div>
    </>
  )
}

export default Home
