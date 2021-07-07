import "./TitleSearch.css";

function TitleSearch() {
  return (
    <div className="title">
      <img className="title-image" src="vishnu.png" alt="vishnu logo" />
      <form>
        <input
          className="title-input"
          type="text"
          placeholder="ชื่อจริงและนามสกุล"
        ></input>
      </form>
    </div>
  );
}
export default TitleSearch;
