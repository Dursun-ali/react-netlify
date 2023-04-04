import './footerSection.css';

const FeaturesSection= () =>{
    return(
        <>
         <div className="main-footer-section">
            <div className="footer-section">
                <div className="footer-container">
                    <div style={{padding: 0,marginBottom: "48px"}} className="row">
                        <div style={{padding: 0}} className="col-md-6 col-sm-12">
                            <div style={{padding: "0 20px",margin:"0 0 50px 0"}}>
                                <p style={{margin: "0 0 20px",padding: 0}}>
                                    <img src="https://demo.goodlayers.com/apzo/softwarehouse/wp-content/uploads/sites/2/2019/09/logo-footer.png"
                                        alt=""/>
                                </p>
                                <p style={{margin: "0 0 20px 0",color: "#FFFFFF",fontWeight: 500,width:"75%"}}>
                                    Manage the entire recruitment workflow from candidate sourcing  to submittal to
                                    placement, the APZO CRM.
                                </p>
                            </div>
                        </div>
                        <div style={{padding: 0}} className="col-md-6 col-sm-12">
                            <div style={{padding:"0 20px",margin:"0 0 50px 0"}}>
                                <h3 className="footer-H3">Concat</h3>
                                <div style={{margin: "0 0 20px 0",color: "#FFFFFF",fontWeight: 500,width:"43%"}}>
                                    Mon – Fre : 8.00am – 6.00pm 112W 34th St, New York
                                <div style={{marginBottom: "16px"}}>
                                    <i style={{color: "#FFFFFF",fontSize: "18px"}} className="fa-solid fa-phone me-2"></i>
                                    <a style={{color: "#6085EA",textDecoration: "none"}} href="">(1)-2340-33-455</a>
                                </div>
                                <div>
                                    <i style={{color: "#FFFFFF",fontSize: "18px"}} className="fa-regular fa-envelope me-2"></i>
                                    <a style={{color: "#6085EA",textDecoration: "none"}} href=""> email@apzosite.com</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: 0,marginBottom:"48px"}} className="row">
                            <div style={{padding: 0}} className="col-md-6 col-sm-12">
                                <div style={{padding:"0 20px",margin:"20px 0 50px 0 "}}>
                                    <h3 className="footer-H3">Quick Links</h3>
                                    <div style={{marginBottom: "20px"}} className="d-flex">
                                        <div>
                                            <ul className="footer-ul">
                                                <li><a href="">About Us</a></li>
                                                <li><a href="">Our Team</a></li>
                                                <li><a href="">Our News</a></li>
                                                <li><a href="">Case Studies</a></li>
                                                <li><a href="">Price Table</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="footer-ul">
                                                <li><a href="">Legal</a></li>
                                                <li><a href="">Terms</a></li>
                                                <li><a href="">Privacy</a></li>
                                                <li><a href="">Jobs</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding: 0}} className="col-md-6 col-sm-12">
                                <div style={{padding: "0 20px",margin:"20px 0 50px 0 "}}>
                                    <p
                                        style={{margin: "0 0 20px",padding: 0,color: "#FFFFFF",fontSize: "18px",fontWeight: 700}}>
                                        Subscribe to newsletter
                                    </p>
                                    <p style={{margin:" 0 0 36px 0",color: "#FFFFFF",fontWeight: 500}}>Get the latest
                                        business
                                        resources on the market delivered to your inbox</p>
                                    <div style={{backgroundColor: "#F4F4F4"}} className="d-flex">
                                        <input
                                            style={{width: "100%",padding:"10px 50px 10px 20px",outline: 0,border: 0,fontSize: "14px"}}
                                            type="text" placeholder="Enter Your Email Address"/>
                                        <i className="fa-sharp fa-solid fa-paper-plane d-flex align-items-center"
                                            style={{color: "#484DED",padding: "10px",backgroundColor: "#FFFFFF"}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="main-down-footer-section">
            <div className="down-section-section d-flex justify-content-between">
                <div style={{paddingRight: "20px",color:"#A9A9A9"}}>Copyright ©2019 GoodLayers. All Rights Reserved.</div>
                <div>
                    <div className="icon-container">
                        <div className="main-icon-box d-flex justify-content-end">
                            <div style={{padding: 0}} className="icon-box">
                                <div style={{marginLeft: "10px",width: "200px"}} className="icons">
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <i style={{marginLeft: "19px"}} className="fa-brands fa-linkedin-in"></i>
                                    <i className="fa-brands fa-pinterest-p"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-instagram"></i>
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
export default FeaturesSection;