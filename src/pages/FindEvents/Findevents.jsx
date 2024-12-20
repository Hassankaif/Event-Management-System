import './Findevents.css'
import NavBar from '../../components/Navigation/Navigation';
import Findboxes from '../../components/FindBoxes/Findboxes';
import Searcheventlist from '../../components/SearchEvents/SearchEventlist';
import { useCallback,useState } from 'react';

const Findevents=()=>{

    const [monthyear, setmonthyear]= useState({ month:null, year:null});

    const getmonthyear= useCallback((selectedmonth,selectedyear)=>{
        setmonthyear({selectedmonth,selectedyear}),[]
        }
    );

    return <>

    <div>
        <NavBar/>
        <div className='find-events-wrapper'>
            <Findboxes getmonthyear={getmonthyear}/>
            <Searcheventlist monthyear={monthyear}/>
        </div>
    </div>
    </>
}

export default Findevents;