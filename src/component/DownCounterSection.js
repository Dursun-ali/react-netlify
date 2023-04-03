import './DownCounterSection.css'
import arrDownCounter from './DownCounterSectionData';

const DownCounterSection = () => {
    return (
        <>
            <div className="main-down-counter-section" style={{ position: "relative" }}>
                <div className="down-counter-section">
                    <div className="down-counter-container">
                        <div className="row">
                            <div style={{ padding: 0 }} className="col-md-8 col-sm-12">
                                <div className="row">
                                    {
                                        arrDownCounter.map((oItem, oIndex) => {
                                            return (
                                                <div key={oIndex} style={{ padding: 0 }} className="col-md-6 col-sm-12">
                                                    <div className='text-center' style={{ padding: "0 20px 30px" }}>
                                                        <div className="d-flex justify-content-center" style={{ margin: "0 0 28px" }}>
                                                            <img src={oItem.img}
                                                                alt="" />
                                                        </div>
                                                        <div>
                                                            <h3 className="down-counter-H3 m-0 d-flex justify-content-center">
                                                                {oItem.title}
                                                            </h3>
                                                            <p className="down-counter-P text-center" style={{ margin: "20px auto",width:"85%" }}>
                                                                {oItem.write}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div style={{ padding: 0 }} className="col-md-4 down-counter-col-4"></div>
                        </div>
                    </div>
                    <div style={{ position: "absolute", left: 0, right: 0, bottom: "-2px" }}
                        className="gdlr-core-shape-divider-wrap  gdlr-core-pos-bottom gdlr-core-inverted"> <svg
                            xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 1697 124">
                            <title>Slice 1</title>
                            <desc>Created with Sketch.</desc>
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <path
                                    d="M411.434703,68.326704 C619.911251,68.326704 765.490611,122.191935 1018.76652,105.056894 C1272.04242,87.9218518 1260.77521,29.9880301 1543.35758,3.94096501 C1608.49156,-2.06276784 1647.83837,2.15385563 1696.1499,6.51953125 L1696.1499,124 L0,124 C135.305437,86.8844694 272.450338,68.326704 411.434703,68.326704 Z"
                                    fill="#FFFFFF"></path>
                            </g>
                        </svg> </div>
                </div>
            </div>
        </>
    )
}
export default DownCounterSection;