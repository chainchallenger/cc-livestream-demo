import { StyledSideBar } from "./SideBar.styled";

// React
import { useSelector, useDispatch } from "react-redux";
import { setSideBarStatus } from "../../../store/site";

// React icons
import { BiArrowFromLeft, BiHeart } from "react-icons/bi";

// Components
import SideBarList from "./SideBarList";
import Search from "../../Share/Search";

const SideBar = ({ mySize }) => {
  const { sideBarStatus } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  return (
    <StyledSideBar>
      <div
        className={`sidebar-box ${
          sideBarStatus && mySize > 1199 ? "side-open" : ""
        }`}
      >
        <div className="list-title">
          <h1>Trending Games</h1>
          <div
            className="title-icon"
            onClick={() => dispatch(setSideBarStatus(!sideBarStatus))}
          >
            <BiArrowFromLeft />
          </div>
          <div className="followed">
            <BiHeart />
          </div>
        </div>
        <SideBarList />

        <div className="list-title">
          <h1>Language</h1>
        </div>
        <ul className="language">
          <li><input type="checkbox"/>English</li>
          <li><input type="checkbox"/>Bahasa Indonesia</li>
          <li><input type="checkbox"/>Català</li>
          <li><input type="checkbox"/>Dansk</li>
          <li><input type="checkbox"/>中文</li>
        </ul>
        <div className="side-search">
          <Search placeholder={"Search to Add Friends"} />
        </div>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
