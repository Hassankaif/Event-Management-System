import './EventList.css'
import eventdb from '../../utils/EventDatabase'
import EventCard from '../../components/Eventcard/EventsCard'

const Eventlistpg=()=>{

    const geteventinfo=()=>{
       return eventdb.map(({id,heading,date,location,description,img})=>{
            // const {year,month}=date
            return (
                <EventCard Key={id} id={id} heading={heading} date={date} location={location} desc={description} img={img} />
            )
        });
    }
    
    return <>
        <div>

        <div className='event-list-wrapper'>
            <div className='event-list'>
                {eventdb.length>0? (geteventinfo()): (<h3> NO EVENTS TO DISPLAY !!!</h3>)}
            </div> 
        </div>
        </div>

    </>
}

export default Eventlistpg;