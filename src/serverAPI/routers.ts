import {createBrowserRouter, redirect} from "react-router-dom";
import Home from "../viwes/home/Home";
import DiscoverMusic from "../viwes/home/page/DiscoverMusic";
import MusicScene from "../viwes/home/page/MusicScene";
import More from "../viwes/home/page/More";
import MyMusic from "../viwes/home/page/MyMusic";
import NOn from "../viwes/home/Non";
import Drecommendations from "../viwes/home/Rplaylists/Drecommendations";
import Csong from "../viwes/home/Rplaylists/Csong";
import Eamerica from "../viwes/home/Rplaylists/Eamerica";
import Sad from "../viwes/home/Rplaylists/Sad";
import Gedlist from "../viwes/home/Gedlist";

const routers = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                path:'/',
                loader:()=>{
                    return redirect('Drecommendations')
                },
            },
            {
                path: 'Drecommendations',
                Component: Drecommendations,

            },
            {
                path: 'Csong',
                Component: Csong,

            },
            {
                path: 'Eamerica',
                Component: Eamerica,

            },
            {
                path: 'Sad',
                Component: Sad,

            },
        ]
    },
    {
        path:'Gedlist',
        Component: Gedlist,
    },
    {
        path: 'DiscoverMusic',
        Component: DiscoverMusic,

    },
    {
        path: 'More',
        Component: More,

    },
    {
        path: 'MusicScene',
        Component: MusicScene,

    },
    {
        path: 'MyMusic',
        Component: MyMusic,

    },
    {
        path: 'NOn',
        Component: NOn,

    },
])

export default routers;