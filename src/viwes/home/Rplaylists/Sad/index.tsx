import { Link } from "react-router-dom";
import img2 from '../../../.././assets/y.svg'
import { useState } from "react";
// 伤感
const Sad =()=>{
    const ImgArr = [
        {url:"https://img1.kuwo.cn/star/userpl2015/61/28/1648204331233_556832161_500.jpg",title:"车载怀旧伤感｜回忆那么伤，我却依旧想你",bofang:"9.6万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/4/4/1725007182242_489911404_500.jpg",title:"抖音热门伤感｜走不出的回忆",bofang:"2.2万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/91/56/1745974174297_614687591_500.jpg",title:"「深夜酒馆」唱尽失恋少男少女的心声",bofang:"74"},
        {url:"https://img1.kuwo.cn/star/userpl2015/41/22/1746005541249_599849041_500.jpg",title:"失恋症状：心痛如刀割，无法言说.歌",bofang:"66"},
        {url:"https://img1.kuwo.cn/star/userpl2015/32/48/1745970086672_595041132_500.jpg",title:"【夜晚倾诉】情人泪在歌声中流淌",bofang:"46"}
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
    return(
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
export default Sad;