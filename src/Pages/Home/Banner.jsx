
import { easeOut } from "motion";
import * as motion from "motion/react-client"
import team1 from '../../assets/Lotti/team2.jpg'
import team2 from '../../assets/Lotti/hppteam1.jpg'
import { IoSearch } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Banner = () => {

    return (
        <div>
            <div className="hero min-h-[500px]">
  <div className="hero-content flex-col gap-20 lg:pl-20 lg:flex-row-reverse ">
  <div className="flex-1 space-y-5">
  < motion.img
  animate={{y: [50 , 100 , 50]}}
  transition={{duration: 8 , repeat:Infinity }}
  className="w-[250px] max-w-sm rounded-t-[40px]  rounded-br-[40px] border-b-6 border-l-6 border-blue-400 shadow-2xl"
      src={team1}
    />

< motion.img
  animate={{x: [100 , 150 , 100]}}
  transition={{duration: 8 , delay: 5 , repeat:Infinity }}
  className="w-[200px] max-w-sm rounded-t-[40px]  rounded-br-[40px] border-b-6 border-l-6 border-blue-400 shadow-2xl"
      src={team2}
    />
  </div>
    <div className="flex-1">
    
      <motion.h1
      
      animate={{
   x: 50 , color:['red' , 'green']
    }}
    transition={{duration: 2 , delay: 1 , ease:easeOut , 
        repeat:Infinity
    }}
  
 
    
    className="text-5xl font-bold">Latest <motion.span animate={{color: ['#d7c422 ', '#32d722' , '#cf22d7', '#d73b22' ]}}
    transition={{duration: 1.5 , repeat: Infinity}}
    >
        Job </motion.span  > for you </motion.h1>
      <p className="py-6 text-xl text-gray-200">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    

    {/* seacrbar */}
    <div className="grid grid-cols-1 rounded-2xl lg:grid-cols-4 bg-[#FFFFFF] items-center justify-center text-2xl py-3">
     
<div className="">

  <fieldset className="fieldset flex items-center  ">

  <select defaultValue="Pick a browser" className="select bg-[#FFFFFF] text-black border  ">

    <option disabled={true}>INc</option>
    <option>   Chrome</option>
    <option>FireFox</option>
    <option>Safari</option>
  </select>
</fieldset>
</div>
<div className="">
<fieldset className="fieldset">
  <select defaultValue="Pick a browser" className="select  bg-[#FFFFFF] text-black border">
    <option disabled={true}>INc</option>
    <option>Chrome</option>
    <option>FireFox</option>
    <option>Safari</option>
  </select>
</fieldset>
</div>

<div className="text-2xl col-span-2 ">
<label className="input  bg-[#FFFFFF] text-black border">
<kbd className="kbd kbd-sm text-white">⌘</kbd>
  <input type="search" className="" placeholder="your keyword" />
 <button className="btn btn-primary "> <span><IoSearch /></span> Search</button>
</label>

</div>
      </div>
      <div className="flex items-center mt-4">
<p className="text-gray-400 "> <span className="font-bold text-gray-200 text-xl">Popular Searches</span>  Designer, IOS, Developer, PHP, Senior, Engineer,</p>

</div>

    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;