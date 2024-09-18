function core(props){
    return(
        <>
              <div id="value-box" className="">
            <img src={props.image} alt={props.title2} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.description2}</p>
            <p>{props.description3}</p>
            <p><span>{props.bold}</span>{ props.description4}</p>
            <p><span>{props.bold}</span>{ props.description5}</p>

          </div> 
        </>
    )
}
export default core