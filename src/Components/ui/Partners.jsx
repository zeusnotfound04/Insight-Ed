import Partner1 from "../../assets/Recommend/Partner1.png";    
import Partner2 from "../../assets/Recommend/Partner2.png";
import Partner3 from "../../assets/Recommend/Partner3.png";
import Partner4 from "../../assets/Recommend/Partner4.png";

function OurPartners() {
  return (
    <div>   
      <h1 className="font-bold text-xl md:text-4xl font-fira text-center text-[#4a4a4b]">OUR PARTNERS</h1>
      <div className="max-w-[1150px] w-11/12 flex flex-row gap-5 mx-auto justify-around items-center py-[35px]">
        
        <img src={Partner1} alt="Partner 1" className="md:w-24 w-16" />
        <img src={Partner2} alt="Partner 2" className="md:w-24 w-16" />
        <img src={Partner3} alt="Partner 3" className="md:w-24 w-16" />
        <img src={Partner4} alt="Partner 4" className="md:w-24 w-16" />

      </div>
    </div>
  );
}

export default OurPartners;
