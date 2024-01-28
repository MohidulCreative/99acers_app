import React from 'react'
import Img_1 from "../../assets/images/img_1.jpg"
const Newplan = () => {
  return (
    <div className='mt-20 mx-2'>
     <div className="w-full flex justify-bewteen items-center bg-[crimson] rounded p-0">
        <div className="w-[40%] h-auto">
            <img src={Img_1} alt="project image" />
        </div>
        <div className="w-[60%]">
            <h2 className='mx-auto p-1 text-[16px] font-bold text-center'>Mahalaxmi Apartment</h2>
            <div className='flex flex-col justify-center items-start px-2 project_detail'>
                <p>price: 1000/-</p>
                <p>time: 12 days</p>
                <p>buy: 0.3% of project</p>
                <p>daily income: 200/-</p>
                <p>total income: 2400/-</p>
                <div className='flex justify-between gap-4 items-center p-2'>
                    <p style={{color: "white"}}>need: vip2</p>
                    <button className="p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                       buy now
                    </button>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Newplan