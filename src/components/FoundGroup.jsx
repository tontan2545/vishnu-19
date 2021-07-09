import "./FoundGroup.css";
import imgList from "./imageList";

function FoundGroup(props) {
  return (
    <div className="found-group">
      <div className="found-group__head">
        <img src={imgList[props.imgIndex]} alt="group" />
        <div>{props.foundGroup.name}</div>
      </div>
      <div className="found-group__name_header">
        <div>ชื่อ</div>
        <div>นามสกุล</div>
        <div>ภาค</div>
      </div>
      <div className="found-group__name_list">
        {props.foundGroup.content.map((name) => {
          var className =
            props.findName.split(" ")[0].trim() === name.name &&
            props.findName.split(" ")[1].trim() === name.surname
              ? "dot"
              : "";
          return (
            <div className="found-group__name">
              <div className={className}>
                <div />
              </div>
              <div>{name.name}</div>
              <div>{name.surname}</div>
              <div>{name.dept}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FoundGroup;
