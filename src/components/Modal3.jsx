import Big from"../assets/modal-big-pic.png"
import pic4 from"../assets/modal-4-pics.png"
import fork from"../assets/modal-fork.png"
import time from"../assets/modal-time.png"
import line from"../assets/modal-linr.png"

function Modal3(){
    return(
        <>
        <div id="wrapper123" className="flex w-[100%] gap-[20px]">
            <div id="big-pic" className="w-[30%] ">
                <img src={Big} alt="" />
            </div>
            <div id="text">
                <h1 className="font-bold text-[#261B6C] text-left ml-[20px] text-[30px]">Shwarma Sandwich</h1>
                <div id="time-fork" className="flex justify-left gap-[100px] my-[10px]">
                <div id="time" className="flex items-center">
                    <img src={time} alt="" />
                    <h3 className="font-bold text-[#261B6C] ">
                    5 Minutes
                    </h3>
                </div>
                <div id="fork" className="flex items-center">
                    <img src={fork} alt="" />
                    <h3 className="font-bold text-[#261B6C] ">
                     <span className="hidden">.</span> 6 People
                    </h3>
                </div>
                </div>
               
                <div id="line" className="flex items-center gap-[30px]">
                    <h3 className="text-[#261B6C] font-bold text-[22px]">
                    Ingredient
                    </h3>
                    <img src={line} alt="" />
                </div>
                <div id="recipes" className="flex items-center gap-[50px]">
                
                <div id="one" className="text-[#261B6C] text-[10px]">
<p>
½ cup olive oil
</p>
<p>
½ cup ranch dressing
</p>
<p>
3 tablespoons Worcestershire sauce
</p>
<p>
1 tablespoon minced fresh rosemary
</p>
                </div>
                <div id="two" className="text-[#261B6C]">
                    <p>
                    2 teaspoons salt
                    </p>
                    <p>
                    1 teaspoon lemon juice
                    </p>
                    <p>
                    1 teaspoon white vinegar
                    </p>
                    <p>
                    ¼ teaspoon ground black pepper
                    </p>
                </div>
                  
                </div>
                <div id="line" className="flex items-center gap-[30px]">
                    <h3  className="text-[#261B6C] font-bold text-[22px]">
                    Directions
                    </h3>
                    <img src={line} alt="" />
                </div>



            </div>

        </div>
        <div id="wrapper1234" className="flex gap-[20px]">
            <div id="grouped-pics" className="w-[30%] pt-[30px]">
                <img src={pic4} className="w-[90%]" alt="" />
            </div>
            <div id="text"  className="text-[#261B6C] text-[10px] w-[70%]">
                <div id="two2" className="flex gap-[50px]">
                <div id="step1" className="w-[50%]">
                    <h1  className="font-bold">Step 1</h1>
                    <p >
                    In a medium bowl, stir together the olive oil, ranch dressing, Worcestershire sauce, rosemary, salt, lemon juice, white vinegar, pepper, and sugar. Let stand for 5 minutes. Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes.
                    </p>
                </div>
                <div id="step2"  className="w-[70%]">
                    <h1 className="font-bold">Step 2</h1>
                    <p>
                    `Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.
                    </p>
                </div>

                </div>
                <div id="one"  className="w-[40%]">
                <h1 className="font-bold">Step 2</h1>
                    <p>
                    Lightly oil the grill grate. Grill skewers for 8 to 12 minutes, or until the chicken is no longer pink in the center, and the juices run clear.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Modal3