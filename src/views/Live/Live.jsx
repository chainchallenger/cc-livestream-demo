import { StyledBrowse } from "./Live.styled";

// React
import { useSelector } from "react-redux";
import { useState } from "react";
import React from 'react';

// This imports the functional component from the previous sample.
import VideoJS from './Player'

// Mobile Components
import BigChannel from "../../components/Channels/ChannelsMobile/BigChannel";
import BigCategories from "../../components/Categories/CategoriesMobile/BigCategories";


const Browse = () => {
  const [categoriesButton, setCategoriesButton] = useState(true);
  const { users } = useSelector((state) => state.user);
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    muted: false,
    preload: 'auto',
    liveui: false,
    responsive: true,
    poster: 'https://images.pond5.com/4k-please-stand-glitch-screen-170131610_prevstill.jpeg',
    fluid: true,
    html5: {
      hls: {
        overrideNative: true,
        limitRenditionByPlayerDimensions: true,
        useDevicePixelRatio: true,
      },
      nativeAudioTracks: false,
      nativeVideoTracks: false,
      useBandwidthFromLocalStorage: true,
    },
    sources: [
      {
        src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8', //test video
        // src: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8', //test stream
        // src: 'https://16d48ae036fa.entrypoint.cloud.wowza.com/app-9g4L7W5Q/ngrp:ebd9559a_all/playlist.m3u8', //actual stream
        type: 'application/x-mpegURL',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

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
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
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
