
import "./Main.css";

const Card = (props) => {
    const {eachItem,imageFunction} = props;
    const {id,name, description,idea,p1,date,isLiked,description1,description2,description3} = eachItem;
    const imageButton = () => {
        imageFunction(id)
    }
    let value = "https://pngimg.com/uploads/like/like_PNG73.png";
    if (isLiked === true){
        value = "https://th.bing.com/th/id/R.a5b2dd86cd06adfd31a7d1348a1bee73?rik=uXD3qN0Ov2Xlmg&riu=http%3a%2f%2fpngimg.com%2fuploads%2flike%2flike_PNG15.png&ehk=DG%2fOurEFOA24xCwhL0JmFuolOEqXQkXvmcEWUzLOcoU%3d&risl=&pid=ImgRaw&r=0"
    }
    return (
        <div className="col-12 col-md-6 col-lg-4 pt-3">
        <div className="Card-Container d-flex flex-row justify-content-between">
            <h1 className="header">{name}</h1>
            <button onClick={imageButton} className="button-like">
                <img src={value} alt="like" className="Image"/>
            </button>
        </div>
        <p className="description">{description}</p>
        <h6 className="description">{description1}</h6>
        <h6 className="description">{description2}</h6>
        <h6 className="description">{description3}</h6>
        <div className="d-flex flex-row justify-content-between">
            <p className="idea-color">{idea}<span className="p1-color">{p1}</span></p>
            <p className="date">{date}</p>

        </div>
        <hr className="horizontal d-md-none"></hr>
    </div>
    )
}

export default Card;