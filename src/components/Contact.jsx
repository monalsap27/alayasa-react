import {  } from "../styles/Contact.css";
import  parse  from "html-react-parser";

function Contact(props) {
  return (
    <div id="contact">
        <div className="wrapper">
            <div className="footer">

{
    props.contactListHome.map((list, index) => {
        return (
<div className="footer-section" key={index}>
                   {parse(list.content)}
                </div>
        )
})
}
            </div>
        </div>
    </div>
  )
}

export default Contact
