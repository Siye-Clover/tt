import Nav from "../nav";
import Foot from "../../Foot";
const Gedlist =() => {
  return (
    <div>
        <Nav/>
      <h1>Gedlist</h1>
    <div className="flex flex-row">
        <div>
        <img src="https://img1.kuwo.cn/star/userpl2015/91/54/1690515518324_578116791_700.jpg" alt="" className="w-[200px] h-[200px]"/>
        </div>
        <div className="flex flex-col ml-[50px]">
        <div>
            <h1>111</h1>
            <div>
                <img src="" alt="" />
                <p>名字</p>
            </div>
                <p>流行,抖音,00后</p>
        </div>
        <div className="flex flex-row gap-5">
            <button className="bg-amber-300 text-black text-[16px] rounded-[30px] w-[100px] h-[40px]"> 播放全部</button>
            <button className="bg-gray-200 text-black text-[16px] rounded-[30px] w-[100px] h-[40px]">添加</button>
            <button className="bg-gray-200 text-black text-[16px] rounded-[30px] w-[100px] h-[40px]">收藏</button>
            <button className="bg-gray-200 text-black text-[16px] rounded-[30px] w-[100px] h-[40px]"> 分享</button>
            <button className="bg-gray-200 text-black text-[16px] rounded-[30px] w-[100px] h-[40px]"> 评论</button>
        </div>
            <div className="mt-3">
                <div>
                    <ul className="flex flex-row bg-gray-50 h-[35px] items-center">
                        <li className="mx-5 w-[50px]">序号</li>
                        <li className="w-[50px]">歌曲</li>
                        <li className="mx-50 w-[50px]">歌手</li>
                        <li className="mx-5 w-[50px]">时长</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="flex flex-row bg-amber-100 h-[35px] items-center">
                            <p className="mx-5 w-[50px]">1</p>
                            <p className="w-[50px]">ee</p>
                            <p className="mx-50 w-[50px]">dgr</p>
                            <p className="mx-5 w-[50px]">3:45</p>
                        </li>
                        <li className="flex flex-row bg-amber-50 h-[35px] items-center">
                            <p className="mx-5 w-[50px]">2</p>
                            <p className="w-[50px]">ee</p>
                            <p className="mx-50 w-[50px]">dgr</p>
                            <p className="mx-5 w-[50px]">3:45</p>
                        </li>
                        <li className="flex flex-row bg-amber-100 h-[35px] items-center">
                            <p className="mx-5 w-[50px]">3</p>
                            <p className="w-[50px]">ee</p>
                            <p className="mx-50 w-[50px]">dgr</p>
                            <p className="mx-5 w-[50px]">3:45</p>
                        </li>
                        <li className="flex flex-row bg-amber-50 h-[35px] items-center">
                            <p className="mx-5 w-[50px]">4</p>
                            <p className="w-[50px]">ee</p>
                            <p className="mx-50 w-[50px]">dgr</p>
                            <p className="mx-5 w-[50px]">3:45</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

      <Foot/>
    </div>
  );
}
export default Gedlist;