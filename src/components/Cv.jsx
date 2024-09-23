import people from"../assets/people.png"
import "../components/Cv.css"
function Cv(){
    return(
        <>
        <div id="wrapperCV" className="flex flex-col  justify-center bg-[#F8F8F8] pt-[60px] pb-[50px]">
            <div id="pic" className="flex item-center justify-center">
            <img src={people} className="w-[90%]" alt="" />
            </div>
           
            <div id="text" className="flex gap-[50px]  item-center justify-center">
                <div id="h1-p">
                    <h1 className="text-[#261B6C] font-bold ">
                    For job enquiries , email your CV to
                    </h1>
                    <p className="text-[#261B6C] ">
                    hr@bakersinnzim.com
                    </p>
                </div>
                <div id="h1-p">
                    <h1 className="text-[#261B6C] font-bold ">
                    For general enquiries, email
                    </h1>
                    <p className="text-[#261B6C] ">
                    marketing@bakersinnzim.com
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cv