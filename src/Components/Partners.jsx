import Partner1 from "../assets/Recommend/Partner1.png";    
import Partner2 from "../assets/Recommend/Partner2.png";
import Partner3 from "../assets/Recommend/Partner3.png";
import Partner4 from "../assets/Recommend/Partner4.png";



function OurPartners() {
  return (
    <div>   
        <div className="max-w-[1150px] w-11/12 flex md:flex-row flex-col md:gap-[10px] gap-[30px] mx-auto justify-around items-center py-[80px]">
            <img src={Partner1} alt="Partners" className="md:w-1/5 w-2/5" />
            <img src={Partner2} alt="Partners" className="md:w-1/5 w-2/5" />
            <img src={Partner3} alt="Partners" className="md:w-1/5 w-2/5" />
            <img src={Partner4} alt="Partners" className="md:w-1/5 w-2/5" />
        </div>
    </div>
  );
}

export default OurPartners;