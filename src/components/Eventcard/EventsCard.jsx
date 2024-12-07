import { Link } from 'react-router-dom'
import './Events.css'

const EventCard=({id,heading,date,location,desc,img})=>{
    const {year,month }=date;
    return <>
    <Link to={`/events/${id}`} > 
    <div className='card'> 
        <div className='card-content'>
            <h3>{ heading} </h3>
            <p>
                <span>year: {year} </span>
                <span>Month: {month}</span>
            </p>
            <p> {location}</p>
            {/* <p>Desc: {desc}</p> */}
        </div>
        <div className='card-img-wrapper'>
            <img src={img} alt="not found img" />
        </div>  
    </div>
    </Link>
    </>
};

export default EventCard;