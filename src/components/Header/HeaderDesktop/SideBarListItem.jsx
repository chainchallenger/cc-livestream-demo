import { StyledSideBarListItem } from "./SideBarList.styled";

const SideBarListItem = ({ stream }) => {
  return (
    <StyledSideBarListItem>
      <li>
        <div className="item">
          <div className="pp">
            <img src={stream.pp} />
          </div>
          <div className="hover-section">
            <div className="info">
              <div className="username">{stream.title}</div>
            </div>
          </div>
        </div>
      </li>
    </StyledSideBarListItem>
  );
};

export default SideBarListItem;
