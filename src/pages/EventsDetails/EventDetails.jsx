import { useParams } from "react-router-dom";
import eventdb from "../../utils/EventDatabase";
import NavBar from "../../components/Navigation/Navigation";
import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
import "./EventDetails.css";
const Eventdetails = ()=>{
  const {id}=useParams()
  const numId = Number(id)

  const filteredEvent = eventdb.find(e=>e.id===numId)

  return(
    <div className="event-details-container">
      <NavBar/>
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">
                {filteredEvent.date.month}
              </span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Eventdetails;