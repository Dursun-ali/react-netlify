import { useState } from 'react';
import './AccordionSection.css';
import AccordionSectionData from './AccordionSectionData';
import AccordionItem from './AccordionItem';
const AccordionSection = () => {

    const[first,setFirst]=useState(false);

        const change=(e)=>{
            setFirst(a=>!a);
        }

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
                                        {
                                            AccordionSectionData.map((oItem, oIndex) => {
                                                return (
                                                    <div key={oIndex}>
                                                        <AccordionItem 
                                                            id={oItem.id} 
                                                            title={oItem.title}
                                                            write={oItem.write}
                                                            oIndex={oIndex}
                                                        />
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