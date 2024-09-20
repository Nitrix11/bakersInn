function core(props){
    return(
        <div className="bg-[#F7F5E8] py-[30px] ">
              <div id="value-box" >
            <img src={props.image} alt={props.title2} />
            <h3 className="font-bold">{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.description2}</p>
            <p>{props.description3}</p>
            <p><span className="">{props.bold1}</span>{ props.description4}</p>
            <p><span >{props.bold}</span>{ props.description5}</p>
            <h4><span >{props.h11}</span>{ props.description6}</h4>
          </div> 
        </div>
    )
}
export default core