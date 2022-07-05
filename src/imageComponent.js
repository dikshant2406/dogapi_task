const ImageComponent = ({url}) => {
    console.log(url) ;
    
    // console.log(typeof(props.url)) ;
    return ( 
        <div>
            <img src = {url} alt="display image" /> 
        </div>
     );
}
 
export default ImageComponent;