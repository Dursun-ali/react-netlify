import './UpdatedSection.css';

const UpdatedSection=() =>{
    return(
        <>
        <div className="main-updated-section">
            <div className="updated-section">
                <div className="updated-container">
                    <div className="row m-auto">
                        <div className="m-auto col-xxl-5 col-xl-6 col-lg-7 col-md-8  ">
                            <div>
                                <div style={{padding: "0 0 30px"}}>
                                    <div className="updated-H3-div">
                                        <h3 className="updatet-H3 text-center">Get Updated</h3>
                                    </div>
                                    <div style={{padding: "0 20px 30px"}}>
                                        <p className="updated-P text-center">
                                            Get the latest updates on our app delivered to your inbox.No bligations and
                                            we don’t share your data with anyone.
                                        </p>
                                    </div>
                                </div>
                                <div style={{paddingLeft:"20px",backgroundColor:"#FFFFFF"}}>
                                    <div className="d-flex align-items-center"
                                        style={{borderRadius: "30px",border: "0.01px solid rgb(215, 215, 215)",boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"}}>
                                        <i style={{fontSize: "18px",padding: "15px"}} className="fa-solid fa-paper-plane"></i>
                                        <input
                                            style={{width: "100%",padding: "15px 40px 15px 0px",border: "none",borderRadius: "10px",outline: "none"}}
                                            className="updated-input" type="text" placeholder="Your Email Address"/>
                                        <div style={{padding: "15px 40px",backgroundColor: "#484DED",borderRadius: "30px"}}>
                                            <span
                                                style={{fontSize: "13px",fontWeight: 700,color:" #FFFFFF"}}>SUBSCRIBE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default UpdatedSection;