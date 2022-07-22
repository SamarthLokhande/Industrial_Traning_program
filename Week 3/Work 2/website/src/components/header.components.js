import Lottie from "lottie-react";
import Animation from "../animation/s.json"

const Header = () => {
    return(
        <>
         <div class="abc">
  <div class="row">
    <div class="col">
    <Lottie animationData={Animation} loop={true} />
    </div>
    <div class="col display-2 ">
       <p>..WELCOME</p>
       <p class="abc display-4">Website Design</p>
       <p class="xyz display-6">(Hello,welcome to our website for search anything)</p>
       <button type="button" class="btn btn-primary m-2">NEXT</button>
    </div>
  </div>
</div>
        
        </>
    )
}
export default Header;