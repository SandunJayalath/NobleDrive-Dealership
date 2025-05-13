
function TestimonialCard(props){
    return(
        <>
        
        <div className="container justify-content-center testimonialCard" style={{backgroundColor: "rgb(46, 46, 46)", padding: "10px 30px", borderRadius: "20px", maxWidth: "500px", width: "100%", alignItems: "center", color: "white", marginTop: "10px"}}>
            <div style={{display: "flex", gap: "10px", alignItems: "center", height: "40px", width: "100%"}}>
                <img src={props.image} alt="profile" width="30px" height="30px" style={{borderRadius: "50%"}}/>
                <h6>{props.name}</h6>
                <div className="d-flex align-items-center" style={{marginBottom: "10px", height: "30px", alignItems: "center", marginLeft: "20px", width: "100%"}}>
                    {props.data}
                    <div style={{marginLeft: "10px", fontWeight: "bold"}}>{props.amount}</div>
                </div>
            </div>
            <div style={{ textAlign: "left", display: "grid", placeItems: "center"}}>
                <div style={{width: "100%", height: "1px", backgroundColor: "rgb(139, 139, 139)", marginBottom: "10px"}}></div>
                <h6>{props.review}</h6>
            </div>
        </div>
        </>
    );
}
export default TestimonialCard;
