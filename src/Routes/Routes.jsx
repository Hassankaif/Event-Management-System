import Eventlistpg from '../pages/EventList/Eventlist'
import Eventdetails from '../pages/EventsDetails/EventDetails'
import Findevents from '../pages/FindEvents/Findevents'

const route=[
    {path:'/', element:<Eventlistpg/>},
    {path:'/events/:id', element:<Eventdetails/>},
    {path:'/find-events', element:<Findevents/>}
]

export default route;