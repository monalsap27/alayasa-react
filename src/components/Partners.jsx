import {  } from "../styles/Partners.css";

function Partners(props) {
  return (
    <div className="partner-list">

{
    props.partnersListHome.map((list,index) => {
        return (<div className="kartu-partner" key={index}>
            <img src={list.Image} />
        </div>)
      }      )
    
}

 </div>
  
)}

export default Partners
