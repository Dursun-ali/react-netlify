import "./CounterSection.css";
import arrCounter from './CounterSectionData';

const CounterSection = () => {
    return (
        <>
            <div className="main-counter-section">
                <div className="counter-section">
                    <div className="counter-container counter-section-div">
                        <div style={{ padding: 0, margin: 0, bordeRadius: "25px" }} className="row">
                            <div className="counter-box-wrapper">
                                {
                                    arrCounter.map((oItem, oIndex) => {
                                        return (
                                            <div key={oIndex} style={{ padding: 0 }} className="col-md-3 col-sm-12">
                                                <div className="counter-box">
                                                    <div  style={{ padding: "0 20px 30px" }}>
                                                        <div style={{ margin: "0 0 25px 0" }} className="d-flex justify-content-center">
                                                            <span className="counter-span-1">{oItem.firstSpan}</span>
                                                            <span className="counter-span-2">{oItem.secondSpan}</span>
                                                        </div>
                                                        <div className="counter-write d-flex justify-content-center">
                                                            {oItem.write}
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
            </div>
        </>
    );
};
export default CounterSection;
