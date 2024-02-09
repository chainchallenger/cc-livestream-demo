import styled from "styled-components";

export const StyledBrowse = styled.div`
  // Mobile
  .browse-mobile {
    display: none;

    .browse-box {
      padding: 55px 10px;
      color: ${(props) => props.theme.textColor};
      background-color: ${(props) => props.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .navigation {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 18px;
        font-weight: 500;

        & > div {
          border-bottom: 2px solid transparent;
          padding: 5px 0;
          cursor: pointer;
          user-select: none;
        }

        .nav-liveChannels {
          margin-left: 10px;
        }

        .nav-active {
          border-bottom: 2px solid ${(props) => props.theme.color};
          color: ${(props) => props.theme.color};
          transition: 0.3s;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  // Desktop
  .live-desktop {
    display: none;

    .live-box {
      margin-left: 180px;
      width: 100%
      display: none;


      .title {
        margin-bottom: 5px;
        height: 55px;
        display: flex;
        align-items: center;
        max-width: 1100px;
        
        

        color: ${(props) => props.theme.textColor};
        font-size: 20px;

        img {
          max-width: 45px;
          margin: 0px 20px;
        }

        button {
          margin-left: auto;
          width: 100px;
          height: 80%;
          color: #fcfaff;
          font-weight: bold;
          background-color: #0B9EFF;
        }

      }

      .stream {
        img {
          max-width: 1100px;
        }
        
      }

      .donation {
        img {
          max-width: 1100px;
        }
      }

      .ad {
        img {
          max-width: 1100px;
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
