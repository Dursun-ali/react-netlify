import './articlesSection.css';
import arrArticles from './ArticlesSectionData'

    const ArticlesSection = () =>{
        return(
            <>
                    <div className="main-articles-section">
            <div className="articles-section">
                <div style={{padding: "0 20px 14px"}}>
                    <h3 className="aticles-H3 text-center">We are featured</h3>
                </div>
                <div style={{padding: "0 20px 30px"}}>
                    <p className="articles-P text-center">IN DOZEN OF TECH ARTICLES</p>
                </div>
                <div className="articles-container">
                    <div style={{padding: 0,margin: 0}} className="row d-flex ">
                       {
                        arrArticles.map((oItem,oIndex)=>{
                            return(
                                <div key={oIndex} style={{padding: 0}} className="col-md col-sm-12">
                                <div style={{margin: "0 0 40px",padding: "0 20px"}}>
                                    <img src={oItem.img}
                                        width="100%" alt=""/>
                                </div>
                            </div>
                            )
                        })
                       }
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    }
    export default ArticlesSection;