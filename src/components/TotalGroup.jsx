import "./TotalGroup.css";
import imgList from "./imageList";

function TotalGroup(props) {
  return (
    <div className="total-group">
      {props.groupList.map((group, index) => {
        return (
          <div className="group" style={{ "--order": index }} key={group.name}>
            <img src={imgList[index]} alt="group" />
            <div>{group.name}</div>
          </div>
        );
      })}
    </div>
  );
}
export default TotalGroup;
