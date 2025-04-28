import { useContext } from "react";
import AuthContext from './../../Context/AuthContext/AuthContext';



const useAuthh = () => {

    const context = useContext(AuthContext)
    return context ; 
};

export default useAuthh;   