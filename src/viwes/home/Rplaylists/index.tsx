import { NavLink,Navigate } from "react-router-dom";
const Rplaylists =()=>{
    return(
        <div className="flex flex-row gap-5 mt-2 ml-5 items-center ">
           <h2 className="text-2xl"> 推荐歌单</h2> 
            <NavLink to="/Drecommendations" end className={({isActive})=>isActive? ' font-black  underline decoration-yellow-300 decoration-5':''}>每日推荐</NavLink>
            <NavLink to="/Csong" className={({isActive})=>isActive? ' font-black  underline decoration-yellow-300 decoration-5':''}>翻唱</NavLink>
            <NavLink to="/Eamerica" className={({isActive})=>isActive? ' font-black  underline decoration-yellow-300 decoration-5':''}>欧美</NavLink>
            <NavLink to="/Sad" className={({isActive})=>isActive? ' font-black  underline decoration-yellow-300 decoration-5':''}>伤感</NavLink>
        </div>
    )
}
export default Rplaylists;  