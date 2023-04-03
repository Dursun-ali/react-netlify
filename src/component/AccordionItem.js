import { useState } from "react";

const AccordionItem = ({id, title, write, oIndex}) => {
    const [active, setActive] = useState(false)
    
    return (
    <div style={{ border: "none" }} className="accordion-item">
      <h2
        style={{ border: "none" }}
        className="accordion-header"
        id={"heading" + oIndex}
      >
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + id}
        //   aria-expanded="false"
          aria-controls={id}
        >
          <div
            style={{ height: "20px", width: "30px", position: "relative" }}
            className="acordion-icons"
          >
            <i
              style={{
                position: "absolute",
                right: 0,
                top: "3px",
                bottom: 0,
                left: "5px",
                color: "#404040",
                fontSize: "13px",
              }}
              className="fa-solid fa-minus"
            ></i>
            <i
              style={{
                position: "absolute",
                right: 0,
                top: "3px",
                bottom: 0,
                left: "5px",
                color: "#404040",
                fontSize: "13px",
              }}
              className={"plus-icon fa-solid fa-plus accordion-collapse collapse"}
              id={ id}
            aria-labelledby={"heading"+ oIndex}
            data-bs-parent="#accordionExample"
            ></i>
          </div>{" "}
          {title}
        </button>
      </h2>
      <div
        style={{ border: "none" }}
        id={id}
        className={id == 'collapse1'? "accordion-collapse collapse show": "accordion-collapse collapse"}
        aria-labelledby={"heading"+ oIndex}
        data-bs-parent="#accordionExample"
      >
        <div
          style={{
            borderBottom: "0.01px solid rgb(229, 229, 229)",
            paddingBottom: "20px",
            fontSize: "17px",
            color: "#5E5E5E",
          }}
          className="accordion-body"
        >
          {write}
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;
