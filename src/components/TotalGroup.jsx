import "./TotalGroup.css";

function TotalGroup(props) {
  return (
    <div className="total-group">
      {props.groupList.map((group) => {
        const imgSrc = `./images/${props.groupImage[group.name]}.png`;
        return (
          <div className="group">
            <img src={imgSrc} alt="group" />
            <div>{group.name}</div>
          </div>
        );
      })}
    </div>
  );
}
export default TotalGroup;
