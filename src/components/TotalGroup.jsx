import "./TotalGroup.css";
import imgList from "./imageList";
import { useHistory } from "react-router-dom";

function TotalGroup(props) {
  const history = useHistory();
  return (
    <div className="total-group">
      {props.groupList.map((group, index) => {
        return (
          <div
            className="group"
            style={{ "--order": index + 1 }}
            key={group.name}
            onClick={() => {
              props.setSelectedGroupIndex(index);
              history.push(`/group/${group.name}`);
            }}
          >
            <img src={imgList[index]} alt="group" />
            <div>{group.name}</div>
          </div>
        );
      })}
    </div>
  );
}
export default TotalGroup;
