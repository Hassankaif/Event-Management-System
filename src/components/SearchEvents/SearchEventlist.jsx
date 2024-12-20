import EventsCard from '../Eventcard/EventsCard'
import eventdb from '../../utils/EventDatabase'
import "./SearchEvents.css"

const Searcheventlist = ({monthyear})=>{
    const {selectedMonth,selectedYear}=monthyear;

    const filteredEvents = eventdb.filter((eventDetail)=>{
        return(
            eventDetail.date.year=== selectedYear &&
            eventDetail.date.month===selectedMonth
        )
    })

    const renderEventCards =()=>{
        return filteredEvents.map(({ id, date, heading, location, img })=>{
            return(
                <EventsCard
                key={id}
                id={id}
                date={date}
                heading={heading}
                location={location}
                img={img}
                />
            )
        })
    }

    return(
       <>
         {filteredEvents.length>0 ?(
            renderEventCards()
         ):(
            <p>No Events in the date</p>
         )}
       </>
    )
}
export default Searcheventlist;