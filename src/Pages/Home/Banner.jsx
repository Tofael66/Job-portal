
import { easeOut } from "motion";
import * as motion from "motion/react-client"
import team1 from '../../assets/Lotti/team2.jpg'
import team2 from '../../assets/Lotti/hppteam1.jpg'

const Banner = () => {

    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="flex-1">
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
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;