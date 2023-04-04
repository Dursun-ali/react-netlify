import "./apzoSection.css";

const ApzoSection = () => {
  return (
    <>
      <div style={{position: "relative"}} className="main-section-container">
        <div className="section-container">
          <div style={{padding: "0 20px", margin: 0}} className="row">
            <div style={{padding: 0}} className="col-md-5 firstSection-box">
              <div
                style={{padding: "0px 20px 30px 20px",position: "relative"}}
                className="img-container"
              >
                <div style={{position:"absolute",zIndex:99}}>
                  <img
                    src="https://a6e8z9v6.stackpathcdn.com/apzo/mobileapp/wp-content/uploads/sites/7/2019/09/phone-0-5.png"
                    width="100%"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              style={{padding: 0}}
              className="col-md-7 col-sm-12 secondSection-box"
            >
              <div className="apzosial-div">
                <h3 className="section-H3">Apzosial</h3>
                <p className="section-P1">
                  Apzosial Business is a free to download app, and was built
                  with the small business owner in mind. With the app,
                  businesses can interact with customers easily by using tools
                  to automate, sort, and quickly respond to messages.
                </p>
                
                <div className="apozial-img-div">
                  <p className="section-img-P d-flex">
                    <img
                      src="https://demo.goodlayers.com/apzo/softwarehouse/wp-content/uploads/sites/2/2019/09/apple.png"
                      alt=""
                    />
                    <img
                      src="https://demo.goodlayers.com/apzo/softwarehouse/wp-content/uploads/sites/2/2019/09/andoil.png"
                      alt=""
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{position: "absolute",left: 0,right: 0,bottom:"-2px"}}
          className="gdlr-core-shape-divider-wrap  gdlr-core-pos-bottom gdlr-core-inverted"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1697 124"
          >
            <title>Slice 1</title>
            <desc>Created with Sketch.</desc>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M411.434703,68.326704 C619.911251,68.326704 765.490611,122.191935 1018.76652,105.056894 C1272.04242,87.9218518 1260.77521,29.9880301 1543.35758,3.94096501 C1608.49156,-2.06276784 1647.83837,2.15385563 1696.1499,6.51953125 L1696.1499,124 L0,124 C135.305437,86.8844694 272.450338,68.326704 411.434703,68.326704 Z"
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>{" "}  
          
        </div>
      </div>
    </>
  );
};
export default ApzoSection;
