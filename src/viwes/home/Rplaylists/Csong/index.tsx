// /翻/唱
import { Link } from "react-router-dom";
import img2 from '../../../.././assets/y.svg'
import { useState } from "react";
// import { log } from "console";
const Csong =()=>{
    const ImgArr = [
        {url:"https://img1.kuwo.cn/star/userpl2015/99/77/1743429475393_617658899_500.jpg",title:"尹昔眠丨治愈的嗓音，心动你的心灵",bofang:"137"},
        {url:"https://img1.kuwo.cn/star/userpl2015/71/43/1742639099975_617321671_500.jpg",title:"『万物起舞』我已经清楚，不会全盘皆输",bofang:"1223"},
        {url:"https://img1.kuwo.cn/star/userpl2015/56/38/1734445097705_488969156_500.jpg",title:"2025快来了,再听一遍2024的热歌",bofang:"2.4万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/34/74/1732948077702_568392734_500.jpg",title:"精神力100%：“风情万种  与世无争”.歌",bofang:"7257"},
        {url:"https://img4.kuwo.cn/star/albumcover/500/s4s75/70/2675814533.jpg",title:"【夜晚倾诉】情人泪在歌声中流淌",bofang:"2.3万"},
    ];
    const [count,setCount] = useState(-1);
    const block = (index:number)=>{
        if(index==index){
            console.log(index);
            
            setCount(index);
        }
        
    };
    const hidden = ()=>{
        setCount(-1);
    }

    return (
        <div>
             <div className="flex flex-row gap-3 mt-5 items-center w-[1200px] mx-auto">
               {ImgArr.map((item,index)=>{
                return(
                    <Link to="/Gedlist" key={index}>
                    <div className="nfd flex flex-col items-center justify-center w-[200px] h-[300px] relative bg-[#f5f5f5] rounded-[10px] mt-2 overflow-hidden" key={index}>
                        <div className="w-[200px] h-[200px] overflow-hidden">
                        <img src={item.url} alt={item.title} key={index} onMouseEnter={()=>{block(index)}} onMouseLeave={hidden} className=" transition-transform duration-300 hover:scale-110" />
                        <img src={img2} alt=""  className={`${count==index? ' block':' hidden'} absolute top-16 left-16 w-[80px] h-[80px] z-10 transition-none`} style={{ pointerEvents: 'none' }}/>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[200px] h-[100px] bg-[#f5f5f5] rounded-[10px]">
                        <p>{item.title}</p>
                        <p>{item.bofang}</p>
                        </div>
                    </div>
                    </Link>
                )
               })}            
            </div>
        </div>
    )
}
export default Csong;