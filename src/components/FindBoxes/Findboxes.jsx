import Gendataoptions from '../../utils/Gendataoptions'
import './FindBoxes.css'
import { useState, useEffect } from 'react'
import { months, years } from '../../utils/Gendataoptions'



const Findboxes=({getmonthyear})=>{

    const [selectedmonth,setselectedmonth]=useState('January')
    const [selectedyear,setselectedyear]=useState(2023);
    
    const rendermonth=()=>Gendataoptions(months)
    const renderyear=()=> Gendataoptions(years)

    const handlemonth=(e)=>{ setselectedmonth(e.target.value)}
    const handleyear=(e)=>{ setselectedyear(Number(e.target.value))}

    const updateParent=()=>{
        getmonthyear(selectedmonth,selectedyear)  
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.value)
        updateParent();
    }

    useEffect(()=>{ updateParent();}  ,[])

    return <>
        <div > 
            <form className='filter-card' onSubmit={handleSubmit}>
                <div className='wrapper'> 

                        <div className='date'>
                            <label htmlFor="month">MONTH: </label>
                            <select  value={selectedmonth} onChange={handlemonth}  > {rendermonth()}  </select>
                        </div>

                        <div className='date'>
                            <label htmlFor="year">YEAR: </label>
                            <select value={selectedyear} onChange={handleyear}> {renderyear()}  </select>
                        </div>
                </div>
            <button type='submit' onClick={handleSubmit}> FIND EVENTS </button>
            </form>
        </div>
    </>
}

export default Findboxes;