
import  './SearchModalSection.css';

const SearchModalSection = ({active,isActive})=>{


   return(
    <div style={{display:active}}  className="main-search-container">
    <div className="search-section">
        <div className="search-container">
            <div style={{margin: "300px 0 0 0"}} className="row">
                <div style={{padding: 0}} className="col-sm-11 col-md-10 col-lg-9 col-xl-8 m-auto">
                     <div> 
                        <div style={{borderBottom: "3px solid rgb(56, 56, 56)",cursor: "pointer"}} className="d-flex">
                            <input className="search-input" type="text" placeholder="Search..."/>
                            <div className="search-div d-flex align-items-center">
                                <i  className="fa-solid fa-magnifying-glass first-search-icon"></i>
                                <i onClick={()=>{ isActive()}} className="fa-sharp fa-solid fa-xmark second-search-icon"></i>
                            </div>
                        </div>
                     </div>   
                </div>
            </div>
        </div>
    </div>
    </div>
   )
}
export default SearchModalSection;