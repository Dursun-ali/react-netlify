import './newestSection.css';

const NewestSection = () => {
    return (
        <>
            <div className="newest-main-wrapper">
            <div  style={{
            background: "url(https://a6e8z9v6.stackpathcdn.com/apzo/mobileapp/wp-content/uploads/sites/7/2019/09/bg-mb-2.jpg)",
            backgroundSize: "auto 100%",
            
            backgroundPositionX: "55%"}}
           className="newest-main-section">
                <div className="newest-section">
                    <div className="newest-container">
                        <div style={{padding: 0, margin: 0}} className="row">
                            <div style={{padding: 0}} className="col-md-6 col-sm-12">
                                <div className="newest-div">
                                    <h3 className="newest-H3">Newest Way<br />To Create Network</h3>
                                    <div className="newestImgAndWrite d-flex">
                                        <div className="me-4">
                                            <img src="https://a6e8z9v6.stackpathcdn.com/apzo/mobileapp/wp-content/uploads/sites/7/2019/09/icon-diamond.png"
                                                width="100%" alt="" />
                                        </div>
                                        <div className="d-flex align-items-center" style={{margin: "0 0 16px 0", padding: "5px 0 0 0"}}>
                                            <h3 className="newest-second-H3" style={{margin: 0}}>
                                                Immersive experience
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="newest-P-box">
                                        <p className="newest-P">
                                            A social network is a social structure made up of a set
                                            of social actors (such as individuals or organizations),
                                            sets of dyadic ties, and other social interactions
                                            between actors. The social network perspective provides
                                            a set of methods for analyzing the structure of whole
                                            social entities as well as a variety of theories.
                                        </p>
                                    </div>
                                    <div className="newest-link-button-div">
                                        <button className="newest-link-button">
                                            <a  style={{textDecoration: "none"}} href=""><span style={{color: "#ffffff"}}> Learn
                                                    More </span></a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding: 0}} className="col-md-6 col-sm-10 m-auto">
                                <div className="d-flex justify-content-center m-auto" style={{padding: "0 20px 30px 20px"}}>
                                    <img src="https://a6e8z9v6.stackpathcdn.com/apzo/mobileapp/wp-content/uploads/sites/7/2019/09/phone-1-2.png"
                                        width="80%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default NewestSection;