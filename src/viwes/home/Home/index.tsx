import {Outlet} from "react-router-dom";
import Carousel from "../Carousel";
import Nav from "../nav";
import Rplaylists from "../Rplaylists";
import Foot from "../../Foot";
import Bfq from "../../Bfq";

const Home = () => {
    return (
        <div>
            <Nav/>
            <Carousel/>
            <Rplaylists/>
            <Outlet/>
            <Foot/>
            <Bfq/>
        </div>
    )
}
export default Home;