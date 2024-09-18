 import flag from"../assets/flag.png"
 import eye from"../assets/eye.png"
 function Mission(){
    return(
        <>
        <div id="wrapper" className="bg-[#F7F5E8] height-[80vh] mt-[45px] mb-[45px] ">
        <section className="mission-vision">
      <div className="container">
        <div className="box">
          <div className="icon">
            <img src={flag}alt="Mission Icon" />
          </div>
          <div className="content">
            <h2>Our Mission</h2>
            <p>
              To sharpen our edge in the manufacture and marketing of quality
              baked products.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <img src={eye} alt="Vision Icon" />
          </div>
          <div className="content">
            <h2>Our Vision</h2>
            <p>
              To provide a nourishing, convenient, and accessible answer to
              hunger’s call.
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
        </>
    )
}

// const MissionVision = () => {
//   return (
   
//   );
// };

export default Mission;
