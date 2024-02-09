import { StyledBrowse } from "./Live.styled";

// React
import { useSelector } from "react-redux";
import { useState } from "react";

// Mobile Components
import BigChannel from "../../components/Channels/ChannelsMobile/BigChannel";
import BigCategories from "../../components/Categories/CategoriesMobile/BigCategories";


const Browse = () => {
  const [categoriesButton, setCategoriesButton] = useState(true);
  const { users } = useSelector((state) => state.user);

  return (
    <>
      <StyledBrowse>
        <div className="browse-mobile">
          <div className="browse-box">
            <h1>Browse</h1>
            <div className="navigation">
              <div
                onClick={() => setCategoriesButton(true)}
                className={`nav-categories ${
                  categoriesButton ? "nav-active" : ""
                }`}
              >
                Categories
              </div>
              <div
                onClick={() => setCategoriesButton(false)}
                className={`nav-liveChannels ${
                  !categoriesButton ? "nav-active" : ""
                }`}
              >
                Live Channels
              </div>
            </div>
            {categoriesButton ? (
              <div className="categories">
                <BigCategories />
              </div>
            ) : (
              <div className="live-channels">
                {users.map((user, index) => {
                  return <BigChannel user={user} key={index} imageId={index} />;
                })}
              </div>
            )}
          </div>
        </div>
        <div className="live-desktop">
          <div className="live-box">
            <div className="title">
              <img src="../public/images/profiles/profile-yellowpanther.png" />
              <span>[신입] 롤아가 협곡 나들이(시참환영!)</span>
              <button>Follow</button>
            </div>
            <div className="stream">
              <img src="../public/images/games/game-fortnite.png" /> 
            </div>
            <div className="donation">
              <img src="../public/images/donation.png" /> 
            </div>
            <div className="ad">
              <img src="../public/images/ad.png" /> 
            </div>
            
          </div>
        </div>
      </StyledBrowse>
    </>
  );
};

export default Browse;
