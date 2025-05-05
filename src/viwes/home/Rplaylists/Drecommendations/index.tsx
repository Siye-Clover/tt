import { Link } from "react-router-dom"
import img2 from '../../../.././assets/y.svg'
import { useState } from "react";
const Drecommendations =()=>{
    const ImgArr = [
        {url:"https://img1.kuwo.cn/star/userpl2015/10/13/1687855674366_132026710_500.jpg",title:"每日最新单曲推荐",bofang:"20526.9万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/25/40/1643010791284_551886925_500.jpg",title:"经典伤感丨被带入歌曲身临其境",bofang:"129.9万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/37/71/1588058861089_458076437_500.jpg",title:"一生很短，说什么来日方长",bofang:"1225.9万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/1/10/1519325299540_406692901_500.jpg",title:"【民谣】九十九首唱进心窝",bofang:"9.9万"},
        {url:"https://img1.kuwo.cn/star/userpl2015/98/73/1630209449966_530271298_500.jpg",title:"醉美车载女声｜懂你的人最温柔",bofang:"1.1万"}
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
export default Drecommendations;