import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="vishnu">
        <div className="footer__title">Vishnu 19 Online Camp</div>
        <div className="footer__subtitle">
          ถ้าหากยังไม่ได้รับการติดต่อจาก staff ภายในวันที่ 23 กรกฎาคม โปรดติดต่อ
          contact ด้านข้าง
        </div>
      </div>
      <div className="contact_credit">
        <div className="container">
          <div className="contact__title footer_details_title">contact</div>
          <div className="contact">
            <div>
              <div>แบม #2</div>
              <div>083-084-0953</div>
              <div>Line id : bamvirada </div>
            </div>
            <div>
              <div>ปิง #2</div>
              <div>092-976-4232</div>
              <div>Line id : _ping2001_</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="credit__title footer_details_title">credit</div>
          <div className="credit">
            <div>นนทพัฒน์ แก้วอัมพร #2</div>
            <div>ธชา ธนารักษ์โชค #2</div>
            <div>พาวรรธน์ สงเคราะห์พานิช #2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
