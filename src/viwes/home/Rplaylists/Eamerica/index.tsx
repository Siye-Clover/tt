import { Link } from "react-router-dom";
import img2 from '../../../.././assets/y.svg'
import { useState } from "react";
// 欧美
const Eamerica =()=>{
    const ImgArr = [
        {url:"https://img1.kuwo.cn/star/userpl2015/16/41/1739062842726_607219016_500.jpg",title:"【重温】经典欧美流行歌曲",bofang:"2.2万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/77/32/1709289006152_581155277_500.jpg",title:"百首欧美热曲：感受心跳之余的悸动",bofang:"5.4万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/7/24/1656765085295_445798707_500.jpg",title:"美式复古 | 永久炽热，致爱与不羁",bofang:"1.1万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/69/57/1745810706713_499998369_500.jpg",title:"灵魂之声 · 阿黛尔生日挚选",bofang:"47"},
        {url:"https://img1.kuwo.cn/star/userpl2015/13/68/1745849678814_601509713_500.jpg",title:"欧美歌单丨流行歌曲，熟悉的旋律ღ",bofang:"217"},
    ]
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
export default Eamerica;