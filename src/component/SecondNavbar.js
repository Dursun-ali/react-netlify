import { useEffect, useState } from 'react';

import './SecondNavbar.css';

const SecondNavbar= ({isActives, isPasives, isDefauldActive, windowWidht, menuActive ,isActive,open,Opens}) =>{

    console.log(menuActive);
    const [show, setShow] = useState(false)
    
    console.log(windowWidht);

    const controlNavbar = () => {
        if(windowWidht>991.98) {
            if (window.scrollY > 250 ) {
                setShow(true)
            }else{
              setShow(false)
            }
        }
     }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    useEffect(() => {
        if (windowWidht < 991.98) {
            setShow(true)
        }
    }, [windowWidht])
    
 
 
    return(
        <>
        <div style={{display:open}} className='bar-wrapper'></div>
        <div style={menuActive} className={`mainNavbarContainer-2 ${show && 'hidden'}`}  >
            <nav style={{padding: 0}} className="navbar navbar-expand-lg navbar-light">
                <div style={{padding: 0}} className="container-fluid secondNavbar">
                    <div className="logo-inner">
                        <a href="">
                            <img src="https://a6e8z9v6.stackpathcdn.com/apzo/mobileapp/wp-content/uploads/sites/7/2019/09/logo-saas.png"
                                width="68px" alt="" />
                        </a>
                    </div>
                    <div   id="search-icon-div" style={{color: "#CCCCCC",display: "flex"}}>
                        <i onClick={()=>{ isActive()}} id="search-icon"  className="search-bar-icon fa-solid fa-magnifying-glass"></i>

                        <i onClick={()=>Opens()} style={{fontSize: "25px",marginRight: "24px"}}
                            className="bar-icon-1 fa-solid fa-bars"></i>
                    </div>
                    <div  className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <div className="navbar-write-container-1 d-flex align-items-center">
                            <ul onMouseLeave={() => {isDefauldActive()}}  className="navbar-nav secondNavbar-ul d-flex align-items-center">
                                <li id="nav-item-0" style={{padding: "0 18px 0 0"}} className="nav-item">
                                    <a onMouseOver={isActives} onMouseLeave={isPasives}  id="nav-item-00" style={{ color: "#ffffff"}}
                                        className="nav-link active nav-link-a navActive " aria-current="page" href="#">Home</a>
                                </li> 
                                <li  id="nav-item-1" style={{padding: "0 18px  0 0"}} className="nav-item">
                                    <a onMouseOver={isActives} onMouseLeave={isPasives}  id="nav-item-10" style={{ color: "#ffffff"}} className="nav-link active"
                                        aria-current="page" href="#">About</a>
                                </li>
                                <li  id="nav-item-2" style={{padding: "0 18px  0 0"}} className="nav-item">
                                    <a onMouseOver={isActives} onMouseLeave={isPasives}  id="nav-item-20" style={{ color: "#ffffff"}} className="nav-link active"
                                        aria-current="page" href="#">Services</a>
                                </li>
                                <li  id="nav-item-3" style={{padding: "0 18px 0  0"}} className="nav-item">
                                    <a onMouseOver={isActives} onMouseLeave={isPasives} id="nav-item-30" style={{ color: "#ffffff"}} className="nav-link active"
                                        aria-current="page" href="#">Portfolio</a>
                                </li>
                                <li  id="nav-item-4" style={{padding:"0 18px 0  0", color: "#ffffff"}} className="nav-item">
                                    <a onMouseOver={isActives} onMouseLeave={isPasives} id="nav-item-40" style={{ color: "#ffffff"}} className="nav-link active"
                                        aria-current="page" href="#">Blog</a>
                                </li>
                                <li  id="nav-item-5" style={{padding:"0"}} className="nav-item">
                                    <a onMouseOver={isActives} onMouseLeave={isPasives} id="nav-item-50" style={{ color: "#ffffff"}} className="nav-link active"
                                        aria-current="page" href="#">Shop</a>
                                </li>

                                <div onClick={()=>{ isActive()}} className="secondNavbar-div">
                                    <i  
                                     style={{
                        cursor: "pointer",
                      fontSize: "20px",
                      margin: "3px 0 0 25px",
                      paddingRight:"20px",
                      color: "#ffffff"}}
                     className="fa-sharp fa-solid fa-magnifying-glass"></i>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )

            


}
export default SecondNavbar;