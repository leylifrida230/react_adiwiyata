import React, {Fragment} from "react"
import './style.css';
import Gallery from './gallery/Gallery';
import Header from './HeaderGallery';
import getData from './gallery/data'

function GApp() {
    let images = getData();
    return(
        <Fragment>
            <Header/>
            <div className="gallery">
                <Gallery imgarr={images}/>
            </div>
        </Fragment>
    )
}
export default GApp;



{/** class Gallery extends React.Component{
    render(){
        return(
            <div className="media my-3 App">
                <h1>Welcome to our Gallery</h1>
                  
            </div>
        )
    }
} */}
