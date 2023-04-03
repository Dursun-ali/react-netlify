import './AccordionSection.css';
import AccordionSectionData from './AccordionSectionData';

const AccordionSection = () => {
    return (
        <>
            <div className="main-acordion-section">
                <div className="acordion-section">
                    <div className="acordion-secton">
                        <div style={{ padding: 0, margin: 0 }} className="row">
                            <div style={{ padding: 0 }} className="col-md-6 col-sm-12">
                                <div style={{ padding: "0 20px 30px" }}>
                                    <img src="https://a6e8z9v6.stackpathcdn.com/apzo/mobileapp/wp-content/uploads/sites/7/2019/09/phone-4.png"
                                        width="100%" alt="" />
                                </div>
                            </div>
                            <div style={{ padding: 0 }} className="col-md-6 col-sm-12">
                                <div>
                                    <div className="acordion-section-H3-div">
                                        <h3 className="acordion-section-H3">Core Features</h3>
                                    </div>
                                    <div className="accordion" id="accordionExample">
                                        <div style={{ border: "none" }} className="accordion-item">
                                            <h2 style={{ border: "none" }} className="accordion-header" id="headingOne">
                                                <button className="accordion-button collapsed"
                                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                    aria-expanded="false" aria-controls="collapseOne">
                                                    <div style={{ height: "20px", width: "30px", position: "relative" }} className="acordion-icons">
                                                        <i style={{ position: "absolute", right: 0, top: "3px", bottom: 0, left: "5px", color: "#404040", fontSize: "13px" }}
                                                            className="fa-solid fa-minus"></i>
                                                        <i style={{ position: "absolute", right: 0, top: "3px", bottom: 0, left: "5px", color: "#404040", fontSize: "13px" }}
                                                            className="plus-icon fa-solid fa-plus"></i>
                                                    </div> Live Video
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div style={{ borderBottom: "0.01px solid rgb(229, 229, 229)", paddinBottom: "20px", fontSize: "17px", color: "#5E5E5E" }}
                                                    className="accordion-body">
                                                    A social network is a social structure made up of a set of social actors
                                                    (such as individuals or organizations), sets of dyadic ties, and other
                                                    social.
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            AccordionSectionData.map((oItem, oIndex) => {
                                                return (
                                                    <div key={oIndex} style={{ border: "none" }} className="accordion-item">
                                                        <h2 style={{ border: "none" }} className="accordion-header" id="headingTwo">
                                                            <button className="accordion-button collapsed"
                                                                type="button" data-bs-toggle="collapse" data-bs-target={"#" + oItem.id}
                                                                aria-expanded="false" aria-controls={oItem.id}>
                                                                <div style={{ height: "20px", width: "30px", position: "relative" }} className="acordion-icons">
                                                                    <i style={{ position: "absolute", right: 0, top: "3px", bottom: 0, left: "5px", color: "#404040", fontSize: "13px" }}
                                                                        className="fa-solid fa-minus"></i>
                                                                    <i style={{ position: "absolute", right: 0, top: "3px", bottom: 0, left: "5px", color: "#404040", fontSize: "13px" }}
                                                                        className="plus-icon fa-solid fa-plus"></i>
                                                                </div> {oItem.title}
                                                            </button>
                                                        </h2>
                                                        <div style={{ border: "none" }} id={oItem.id} className="accordion-collapse collapse"
                                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                            <div style={{ borderBottom: "0.01px solid rgb(229, 229, 229)", paddingBottom: "20px", fontSize: "17px", color: "#5E5E5E" }}
                                                                className="accordion-body">
                                                                {oItem.write}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
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
export default AccordionSection;