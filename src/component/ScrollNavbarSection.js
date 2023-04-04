import './scrollNavbarSection.css';

const ScrollNavbarSection = ({open, setOpen}) => {
    return (
        <>
            <div style={{display:open}} className="main-scroll-navbar">
                <div  style={{marginBottom: "8px"}} className="d-flex align-items-center">
                    <i 
                      style={{fontSize: "24px",color:"#979797",marginLeft: "16px"}} 
                      className="fa-sharp fa-solid fa-xmark"
                      onClick={() => {
                        setOpen('none')
                      }} 
                      >   
                    </i>
                </div>
                <ul className="scroll-navbar-ul">
                    <li><a style={{color: "#FFFFFF"}} href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">SERVİCES</a></li>
                    <li><a href="">PORTFOLIO</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">SHOP</a></li>
                </ul>
            </div>
        </>
    )
}
export default ScrollNavbarSection;