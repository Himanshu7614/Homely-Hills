import Sliderwrapper from "./Sliderwrapper"
import Gallery from "./Featured"
import Featured from "./Gallery"
import Feedback from "./Feedback"
import Reelsection  from "./Reelsection"

function Homepage(){
    return(
        <>
        <div className='back font-serif '>
            <Sliderwrapper />
            <Gallery />
            <Featured />
            <Feedback />
            <Reelsection />
        </div>
        </>
    )
}

export default Homepage;