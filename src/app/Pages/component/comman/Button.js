import {BsWhatsapp, BsStarFill} from "react-icons/Bs"
import {BiSolidPhoneCall,BiLogoAirbnb} from "react-icons/Bi"

function Button({buttonname, clickMe = null, className=null}) {
    return (
      <>
        <button className={`rounded-full flex items-center gap-5 w-auto hover:scale-105 duration-500 hover:px-8 lg:font-semibold text-white text-center text-sm lg:text-lg ${className}`} onClick={clickMe}> 
              {buttonname}       <BiSolidPhoneCall className="text-2xl" />          
        </button>
        
      </>
    );
  }
  
  export function ButtonWhatapp({buttonname, clickMe = null, className=null}) {
    return (
      <>
        <button className={` rounded-full flex  gap-5 w-auto hover:scale-105 duration-500 hover:px-8 lg:font-semibold text-white text-center  text-sm lg:text-lg ${className}`} onClick={clickMe}> 
              {buttonname} <BsWhatsapp className="text-2xl" />          
        </button>
        
      </>
    );
  }
  
  export function ButtonAbn({buttonname, clickMe = null, className=null}) {
    return (
      <>
        <button className={` rounded-full flex items-center gap-5 w-auto hover:scale-105 duration-500 hover:px-8 lg:font-semibold text-white text-center ${className}`} onClick={clickMe}> 
              {buttonname}<BiLogoAirbnb className="text-2xl" />          
        </button>
        
      </>
    );
  }
  
  
  
  export default Button;
  
export function Starbutton(){
    return(
      <>
        <div className="flex">
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />        
        </div>
        </>
    )
  }
  
  export function SimpleButton({buttonname, clickMe = null, className}) {
    return (
      <>
        <button className={`${className}`} onClick={clickMe}> 
          {buttonname}
        </button>
      </>
    );
  }