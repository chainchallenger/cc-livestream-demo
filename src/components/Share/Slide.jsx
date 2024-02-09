import { StyledSlide } from "./Slide.styled";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { GiPauseButton } from "react-icons/gi";
import { HiVolumeUp } from "react-icons/hi";
import { BiFullscreen } from "react-icons/bi";
import { AiFillSetting, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slide = () => {
  const { users } = useSelector((state) => state.user);
  return (
    <StyledSlide>
      <div className="slide">
        <div className="three">
          <img src={users[7].liveScreen} />
          <img src={users[2].liveScreen} />
          <img src={users[6].liveScreen} />

          <div className="two">
            <img src={users[4].liveScreen} />
            <img src={users[5].liveScreen} />

            
            <div className="one">
              <div className="img">
                <Link to="/live" className="link">
                  <img src="../public/images/games/game-fortnite.png" /> 
                </Link>
                <div className="screen-icons">
                  <div className="left">
                    <GiPauseButton className="icon-screen" />
                    <HiVolumeUp className="icon-screen" />
                  </div>
                  <div className="right">
                    <AiFillSetting className="icon-screen" />
                    <BiFullscreen className="icon-screen" />
                  </div>
                </div>

                <div className="screen-live">
                  <span>live</span>
                </div>
              </div>
              <div className="info">
                <div className="info-top">
                  <div className="profile">
                    <div className="pp">
                      <img src="../public/images/profiles/profile-yellowpanther.png" />
                    </div>
                    <div className="profile-info">
                      <div className="username">Yellowpanther</div>
                      <div className="game">Fortnite</div>
                      <div className="viewers">110.3k followers</div>
                    </div>
                  </div>
                  <div className="tags">
                    <div className="tag">Esports</div>
                    <div className="tag">MMORPG</div>
                  </div>
                </div>
                <div className="info-bottom">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow arrow-left">
          <AiOutlineLeft />
        </div>
        <div className="arrow arrow-right">
          <AiOutlineRight />
        </div>
      </div>
    </StyledSlide>
  );
};

export default Slide;
