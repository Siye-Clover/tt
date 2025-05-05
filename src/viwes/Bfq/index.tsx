import img from '../.././assets/z.svg'
import img2 from '../.././assets/y.svg'
import img3 from '../.././assets/t.svg'
import img4 from '../.././assets/bf.svg'
import { useState } from 'react'
// import axios from 'axios'
const Bfq=()=>{
const [isfast,setIIsfast] = useState(false);
// const [isnull,setInull] = useState(true);
const dianj = ()=>{
setIIsfast(!isfast);
}

    return(
        <div className='shadow-2xl bg-[#f5f5f5] mt-3 rounded-lg fixed bottom-0 w-screen'>
            <div className={` flex flex-row `}>
              <img src="https://img1.kuwo.cn/star/userpl2015/91/1/1656335325848_578576791_500.jpg" alt=""  className="w-[100px] h-[100px] ml-50"/>  
                <div className="flex flex-col ml-5 mt-5">
                    <div className="mb-2">
                        <span>歌名称</span>
                        <span>歌的初始时长:0:00/歌的总时长:3:55</span>
                    </div>
                    <div>
                        <input type="range" min='0' max='100' className="w-[280px]"  />
                    </div>
                </div>
                <div className='flex flex-row gap-5 mt-2 ml-20'>
                      <span> <img src={img} alt=""  className='w-[50px] h-[50px]'/></span>
                      <span className='mx-10' onClick={dianj}>
                       {isfast? <img src={img3} alt=""  className='w-[50px] h-[50px]'/> : <img src={img4} alt=""  className='w-[50px] h-[50px]'/>}
                        </span>
                      <span><img src={img2} alt=""  className='w-[50px] h-[50px]'/></span>
                  </div>
            
            </div>
        </div>
    )
}
export default Bfq; 