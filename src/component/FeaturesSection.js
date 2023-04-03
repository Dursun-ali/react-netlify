import "./FeaturesSection.css"
import arrFeatures from "./FeaturesSectionData";

const FeaturesSection = () => {
  return (
    <>
      <div className="main-features-section">
        <div className="features-section">
          <div className="features-container">
            <div className="row">
              <div style={{ padding: 0 }} className="col-md-5 col-sm-10 m-auto">
                <div style={{ position: "relative"}} className="features-img">
                  <img
                    src="https://a6e8z9v6.stackpathcdn.com/apzo/mobileapp/wp-content/uploads/sites/7/2019/09/phone-2.png"
                    width="100%"
                    alt=""
                  />
                </div>
              </div>
              <div style={{ padding: 0 }} className="col-md-7 col-sm-12">
                <div className="features-col-7">
                  <div className="features-H3-div">
                    <h3 className="features-H3">Core Features</h3>
                  </div>

                  {arrFeatures.map((oItem, oIndex) => {
                    return (
                      <div key={oIndex} style={{ padding: "0 20px 50px" }}>
                        <div
                          style={{ marginBottom: "20px" }}
                          className="d-flex"
                        >
                          <img className="me-4" src={oItem.img} alt="" />
                          <h3 className="d-flex align-items-center m-0 features-second-H3">
                            {oItem.title}
                          </h3>
                        </div>
                        <p className="features-P">{oItem.write}</p>
                      </div>
                    );
                  })}

                  <div
                    style={{
                      width: "60px",
                      height: "8px",
                      backgroundColor: "#4275dc",
                      borderRadius: "20px",
                      margin: "0 20px 0 20px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturesSection;
