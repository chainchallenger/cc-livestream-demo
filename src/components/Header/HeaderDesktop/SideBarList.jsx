import { StyledSideBarList } from "./SideBarList.styled";

import SideBarListItem from "./SideBarListItem";

import { useSelector } from "react-redux";

const SideBarList = () => {
  const { games } = useSelector((state) => state.game);

  return (
    <StyledSideBarList>
      <div className="list">
        <ul>
          {games.map((game, index) => {
            if (index > 4) return;
            return <SideBarListItem stream={game}/>;
          })}
        </ul>
        <div className="show-more">
          <span>Show More</span>
        </div>
      </div>
    </StyledSideBarList>
  );
};

export default SideBarList;
