import "./App.css";
import "./components/TitleSearch";
import React, { useState } from "react";
import TitleSearch from "./components/TitleSearch";
import TotalGroup from "./components/TotalGroup";
import groupList from "./group-list";

function App() {
  const [findName, setFindName] = useState("");
  const getName = (name) => {
    console.log(name);
    setFindName(name);
  };
  const firstName = findName.split(" ")[0];
  const lastName = findName.split(" ")[1];
  const searchGroup = groupList.filter((group) => {
    for (var name of group.content) {
      if (
        findName.split(" ").length === 2 &&
        firstName === name.name &&
        lastName === name.surname
      ) {
        return true;
      }
    }
    return false;
  });
  if (searchGroup.length > 0) console.log(searchGroup[0].name);
  const groupImage = {
    ทะเลหรือเขาเธอก็ไม่เลือกเราอยู่ดี: "ทะเล",
    "ทะจริง ๆ ว่าใจเธอเปลี่ยนไปหรือเปล่า": "ทะจริง",
    ทะกับฉันเราเป็นอะไรช่วยบอกฉันที: "ทะกับ",
    ทะจะชอบเพื่อนพี่มาชอบพี่ดีกว่า: "ทะจะ",
    "ทะอะไรก็ได้ ไม่ได้ขอตังใคร": "ทะอะไร",
    ทะถามชาวประมงก็คงไม่เข้าใจ: "ทะถาม",
    "ทะเลเรียกว่า sea ช่วงเวลาดี ๆ เรียกว่าเธอ": "ทะเรียก",
    ทะนี่ที่ไหนใช่ที่รักรึเปล่า: "ทะนี่",
    "ทะเบิดเวลา อ๊าาา": "ทะเบิด",
    "ทะมะติดเคอร์ฟิว ผมจะปลิวไปหาคุณ": "ทะมะ",
    "ทะเป็นคนเดียวที่ไม่ควรเสียใจ alright": "ทะเป็น",
    "ทะพีเอาไว้ตักข้าว ถ้าคุณห้าวกินข้าวมั้ยค้าบ": "ทะพี",
    ทะเลาะทุกวันเป็นแฟนกันดีกว่าไหม: "ทะเลาะ",
    ทะยานไปเลยเฟลมไคเซอร์: "ทะยาน",
    ทะเขาไม่รักเธอควรจะพักก่อนดีมั้ย: "ทะเขา",
    ทะเลทรายก็ไม่แห้งเท่าใจเธอ: "ทะเล",
    ทะหากรักนี้ไม่บอกไม่พูดไม่กล่าว: "ทะหาก",
    "ทะเหนื่อยก็พัก ทะเค้าไม่รักก็พอ": "ทะเหนื่อย",
  };
  return (
    <div>
      <TitleSearch findName={findName} getName={getName} />
      <TotalGroup groupImage={groupImage} groupList={groupList} />
      <div className="footer">VISHNU 19 online camp</div>
    </div>
  );
}

export default App;
