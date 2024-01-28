import React from 'react'
import Img_1 from "../../assets/images/img_1.jpg"
const Newplan = ({title, price, days, percent, daily, total}) => {
  return (
    <div className='mt-4 mx-2'>
     <div className="w-full flex justify-bewteen items-start bg-[crimson] rounded p-2">
        <div className="w-[50%] h-auto">
            <div className="w-full">
                <img src={Img_1} className="w-full h-full object-cover rounded" alt="Image" />
            </div>
            <div className='flex justify-between gap-2 items-center p-2'>
                <p style={{color: "white", fontSize: "11px"}}>need: vip0</p>
                <button className="p-2 bg-blue-500 text-white text-[11px] rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    buy now
                </button>
            </div>
        </div>
        <div className="w-[60%]">
            <h2 className='mx-auto p-1 text-[14px] font-bold text-center'>{title}</h2>
            <div className='flex flex-col justify-center items-start px-2 project_detail'>
                <p>invest: ₹ {price}/-</p>
                <p>time: {days} days</p>
                <p>buy: {percent}% of project</p>
                <p>daily income: ₹ {daily}/-</p>
                <p>total: ₹ {total}/-</p>
               
            </div>
        </div>
     </div>
    </div>
  )
}

export default Newplan