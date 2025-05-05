import { Link } from "react-router-dom"
const Nav =() =>{
    return(
        <div className="flex flex-row justify-between items-center bg-[#f5f5f5] h-[80px] px-[20px]">
            <div>
                <img src="https://h5s.kuwo.cn/www/kw-www/img/logo.ce08bf7.png" alt="" className="w-[131px] h-[39px]" />
            </div>
            <div className="flex flex-row justify-between items-center gap-[20px]">
            <Link to="/DiscoverMusic">排行榜</Link>
            <Link to="/MusicScene">歌单</Link>
            <Link to="/MyMusic">我的音乐</Link>
            <Link to="/More">更多</Link>
            </div>
        </div>
    )
}
export default Nav;