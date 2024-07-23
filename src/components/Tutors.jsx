import {  } from "../styles/Tutors.css";
function Tutors(props) {
  return (
    <div className="tutor-list">
    {
        
        props.tutorsListHome.map((list, index) => {
            return (
        <div className="kartu-tutor" key={index}> 
        <img src ={list.image} />
        <p>{list.name}</p>
        </div>

            )
        })
    }
</div>
  )
}

export default Tutors
