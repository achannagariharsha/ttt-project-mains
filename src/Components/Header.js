import "./Main.css";

const ProfileSection = () => (
  <div>
    <div className="parent">
    <img
      src="https://www.kevmrc.com/wp-content/uploads/2016/12/pont-neuf-paris-1.jpg"
      alt="image-fort"
      className="paris-Image"
    />
    </div>
    
    <div className="container">
      <div className="row d-flex flex-row justify-content-between">
        <div className="child">
          <img src="https://media.licdn.com/dms/image/D4D03AQEXdD5HHqzN3g/profile-displayphoto-shrink_400_400/0/1667373388482?e=1706140800&v=beta&t=VAjLpewvTSdIQ1dTzyeTw9m0fahrZ_Pf0fShu37bHdw" alt="profile-img" className="profile-img" />
        </div>
        <div className="col-7 pt-3 col-md-7 ">
          <div className="d-flex flex-row">
            <p className="person">Achannagari Harsha Vardhan Reddy</p>
            <img className="verified-image  ml-2 " src="https://img.icons8.com/color/48/diamond.png" alt="diamond"
            />
            <img className="verified-image  ml-2 " src="https://cdn0.iconfinder.com/data/icons/simplie-essential-action/22/action_039-checkmark-check-done-verify-1024.png" />
          </div>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <button className="button-follow">1200</button>
              <p className="description-para">Followers</p>
            </div>
            <div className="d-flex flex-column ml-2">
              <button className="button-follow">240</button>
              <p className="description-para">Following</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="description-h">Full Stack Developer</h1>
      <a href="./" className="i-color">
        https://instagram.com/harsha_reddy_
      </a>
      <div className="d-flex flex-row pt-3 pb-3">
        <div className="d-flex flex-row">
          <img width="25" height="25" src="https://img.icons8.com/flat-round/64/star--v1.png" alt="star--v1" />
          <p className="pl-2 header-count">1000</p>
        </div>
        <div className="d-flex flex-row pl-4">
          <img width="25" height="25" src="https://img.icons8.com/material-rounded/24/facebook-like--v1.png" alt="star--v2" />
          <p className="pl-2 header-count">1200</p>
        </div>
        <div className="d-flex flex-row pl-4">
          <img width="25" height="25" src="https://img.icons8.com/material-sharp/24/visible.png" alt="star--v3"/>
          <p className="pl-2 header-count">1506</p>
        </div>
        <div className="d-flex flex-row pl-4">
          <img width="25" height="25" src="https://img.icons8.com/fluency/48/filled-like--v1.png" alt="star--v4"/>
          <p className="pl-2 header-count">10.2k</p>
        </div>
      </div>
      <div className="post">
        <p className="total-posts">134 posts</p>
      </div>
      <hr className="hor" />
    </div>
  </div>
);

export default ProfileSection;