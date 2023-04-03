import './Header.css';

const Header = ({isActive, isActives, isPasives, isDefauldActive}) => {
    return (
        <>
            
                <div className="header-container" style={{ position: "absolute", top: 0, right: 0, left: 0, zIndex: 99 }}>
                    <div style={{ paddingTop: "24px" }} className="icon-container">
                        <div className="main-icon-box d-flex justify-content-end">
                            <div className="icon-box">
                                <div style={{ marginLeft: "10px" }} className="icons">
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <i style={{ marginLeft: "19px" }} className="fa-brands fa-linkedin-in"></i>
                                    <i className="fa-brands fa-pinterest-p"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainNavbarContainer">
                        <nav style={{ padding: 0 }} className="navbar navbar-expand-lg navbar-light">
                            <div style={{ padding: 0 }} className="container-fluid">
                                <div className="logo-inner">
                                    <a href="">
                                        <img src="https://a6e8z9v6.stackpathcdn.com/apzo/mobileapp/wp-content/uploads/sites/7/2019/09/logo-saas.png"
                                            width="68px" alt="" />
                                    </a>
                                </div>
                                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                                    <div className="navbar-write-container">
                                        <ul onMouseLeave={() => {isDefauldActive()}}className="navbar-nav">
                                            <li style={{ padding: "0 18px 0 0" }} className="nav-item">
                                                <a onMouseOver={isActives} onMouseLeave={isPasives} id="nav-item-0" style={{ padding: "0 0 10px 0", color: "#ffffff" }} className="nav-link active navActive"
                                                    aria-current="page" href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a onMouseOver={isActives} onMouseLeave={isPasives} id="nav-item-1" style={{ padding: "0 0 10px 0", color: "#ffffff" }} className="nav-link active"
                                                    aria-current="page" href="#">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a onMouseOver={isActives} onMouseLeave={isPasives} id="nav-item-2" style={{ padding: "0 0 10px 0", color: "#ffffff" }} className="nav-link active"
                                                    aria-current="page" href="#">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a onMouseOver={isActives} onMouseLeave={isPasives} id="nav-item-3" style={{ padding: "0 0 10px 0", color: "#ffffff" }} className="nav-link active"
                                                    aria-current="page" href="#">Portfolio</a>
                                            </li>
                                            <li className="nav-item">
                                                <a onMouseOver={isActives} onMouseLeave={isPasives} id="nav-item-4" style={{ padding: "0 0 10px 0", color: "#ffffff" }} className="nav-link active"
                                                    aria-current="page" href="#">Blog</a>
                                            </li>
                                            <li style={{ padding: "0 0 0 18px" }} className="nav-item">
                                                <a onMouseOver={isActives} onMouseLeave={isPasives} id="nav-item-5" style={{ padding: "0 0 10px 0", color: "#ffffff" }} className="nav-link active"
                                                    aria-current="page" href="#">Shop</a>
                                            </li>
                                            <div className="header-search-icon"
                                                style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                <i  onClick={()=>{isActive()}} style={{ fontSize: "20px", margin: "3px 0 0 25px", color: "#ffffff" }}
                                                    className="fa-sharp fa-solid fa-magnifying-glass"></i>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            

        </>
    )
}
export default Header;