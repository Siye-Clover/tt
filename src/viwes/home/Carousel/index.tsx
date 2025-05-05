import { useState, useEffect , useRef} from "react";
import img from '../../.././assets/lunbl.svg'
import img1 from '../../.././assets/lunby.svg'
const Carousel = ()=>{
const arr = ["https://kwimg3.kuwo.cn/star/upload/12/80/1744622980068_.jpg",
"https://kwimg3.kuwo.cn/star/upload/11/52/1744620328748_.jpg",
"https://kwimg2.kuwo.cn/star/upload/58/30/1745561095798_.jpg",
"https://kwimg3.kuwo.cn/star/upload/11/52/1744620328748_.jpg",
"//y.qq.com/music/common/upload/ocs/0c63da8e591df23d6524db18291b1300.jpg?max_age=2592000",
"https://kwimg2.kuwo.cn/star/upload/58/30/1745561095798_.jpg",
"https://kwimg3.kuwo.cn/star/upload/11/52/1744620328748_.jpg",
"https://kwimg3.kuwo.cn/star/upload/12/80/1744622980068_.jpg",
"//y.qq.com/music/common/upload/MUSIC_FOCUS/7024688.jpg?max_age=2592000"];
const[nowArr, setnowArr] = useState([arr[0], arr[1], arr[2]]);
const [count, setCount] = useState(0);
const interval = useRef<NodeJS.Timeout | null>(null);
const l = () => {
    let newCount = count - 3;
    if (newCount < 0) {
        newCount = arr.length - (Math.abs(newCount) % arr.length);
    }
    const newArr1 = arr.slice(newCount, newCount + 3);
    setnowArr(newArr1);
    setCount(newCount);
};
    const r = () => {
        let newCount = count + 3;
        if (newCount >= arr.length) {
            newCount = newCount % arr.length;
        }
        const newArr1 = arr.slice(newCount, newCount + 3);
        setnowArr(newArr1);
        setCount(newCount);
    };
    const d = () => {
        if (interval.current !== null) {
            clearInterval(interval.current);
        }
    };
    const f = () => {
        if(interval.current!==null){

        }
         interval.current = setInterval(() => {
            r();
        }, 3000);
    }

    useEffect(()=>{
        f();
        return () => clearInterval(interval.current as NodeJS.Timeout);
    },[count])
          
    return(
        <div className="relative mt-3" >
            <div className="flex flex-row w-[1200px] h-[200px] mx-auto overflow-hidden relative gap-2">
            <span className="w-[30px] absolute top-20 left-12 bg-amber-300 z-10" onClick={l}>
                <img src={img} alt="" />
            </span>
                {nowArr.map((item, index) => {
                    return(
                        <img src={item} alt=""  key={index} className="w-[350px] h-[200px] transition-transform duration-300 hover:scale-110" onMouseEnter={d} onMouseLeave={f}/>
                    )
                    })
                }
                <span className="w-[30px] absolute top-20 right-45 bg-amber-300" onClick={r}>
                <img src={img1} alt="" />
                </span>
            </div>
            <div className="flex flex-row absolute bottom-5 left-[45%] gap-2">
                <span className={`${count == 0? 'bg-red-100':'bg-white'} w-[10px] h-[10px] rounded-[50%] ` }></span>
                <span className={`${count == 3? 'bg-red-100':'bg-white'} w-[10px] h-[10px] rounded-[50%] ` }></span>
                <span className={`${count == 6? 'bg-red-100':'bg-white'} w-[10px] h-[10px] rounded-[50%] ` }></span>
            </div>
           
        </div>
    )
}
export default Carousel;
