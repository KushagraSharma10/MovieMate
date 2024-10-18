import Sidenav from "./Partials/Sidenav"

const Home = () => {
    document.title = "Home"
  return (
    <>
        <Sidenav />
        <div className="w-[80%] h-full "></div>
    </>
  )
}

export default Home
