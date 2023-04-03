import "./PricingSection.css"
import arrPricing from './PricingSectionData';

const PricingSection = () => {
    return (
        <>
            <div className="main-pricing-section">
                <div className="pricing-section">
                    <div style={{ padding: "0 0 40px" }}>
                        <div style={{ padding: "0 20px 20px" }}>
                            <h1 className="pricing-H1 text-center">Pricing</h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div
                                style={{ width: "52px", height: "6.2px", backgroundColor: "#4275dc", borderRadius: "20px", margin: "0 0 20px" }}>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-container">
                        <div style={{ padding: "0 20px 30px", margin: 0 }} className="row">
                            {
                                arrPricing.map((oItem, oIndex) => {
                                    return (

                                        <div key={oIndex} style={{ borderRadius: "12px" }} className="col-lg-4 col-md-12">
                                            <div className="pricing-div"
                                                style={{ backgroundColor:oItem.backgroundColor, borderRadius: "12px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}>
                                                <div style={{ padding: "50px 35px 10px" }}>
                                                    <h3 style={{ color: oItem.titleColor}} className="prising-H3">
                                                        {oItem.title}
                                                    </h3>
                                                </div>
                                                <div className="d-flex" style={{ padding: "0 35px 10px"  }}>

                                                    <div className="d-flex align-items-center"
                                                        style={{ fontSize: "25px", height: "55px", color:oItem.secondWriteColor }}>
                                                        {oItem.firstWrite}
                                                    </div>
                                                    <div style={{ fontSize: "52px", fontWeight: 600, color:oItem.secondWriteColor }}>
                                                        {oItem.secondWrite}
                                                    </div>
                                                    <div style={{ position: "relative" }}>
                                                        <span
                                                            style={{ fontSize: "14px", position: "absolute", bottom: "15px", color:oItem.secondWriteColor }}>{oItem.thirdWrite}</span>
                                                    </div>
                                                </div>
                                                <div style={{ padding: "0 0 40px" }}>
                                                    <div style={{ padding: "45px 35px 10px" }}>
                                                        <ul className="pricing-ul" style={{ listStyleType: "none" }}>
                                                            <li style={{color: oItem.color.colorOne }}> <i style={{color: oItem.iconsColor.iconOneColor}} className={oItem.icons.iconOne}></i>    {oItem.write.writeOne}</li>                                                            
                                                            <li style={{color: oItem.color.colorTwo }}><i style={{color: oItem.iconsColor.iconTwoColor}} className={oItem.icons.iconTwo}></i> {oItem.write.writeTwo}</li>
                                                            <li style={{color: oItem.color.colorThree }}><i style={{color: oItem.iconsColor.iconThreeColor}} className={oItem.icons.iconThree}></i>  {oItem.write.writeThree}</li>
                                                            <li style={{color: oItem.color.colorFour }}><i style={{color: oItem.iconsColor.iconFourColor}} className={oItem.icons.iconFour}></i>  {oItem.write.writeFour}</li>
                                                            <li style={{color: oItem.color.colorFive }}><i style={{color: oItem.iconsColor.iconFiveColor}} className={oItem.icons.iconFive}></i>  {oItem.write.writeFive}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button
                                                            style={{ margin: "35px 35px 10px", padding: " 15px 33px", border: "none", backgroundColor: oItem.titleColor, borderRadius: "30px" }}>
                                                            <a style={{ textDecoration: "none", fontWeight: 700, fontSize: "13px", color: oItem.aColor }}
                                                                href="">PURCHASE</a>
                                                        </button>
                                                    </div>
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
        </>
    )
}

export default PricingSection;