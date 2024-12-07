import Gendataoptions from '../../utils/Gendataoptions'
const Findboxes=()=>{

    const HandleFindevents=(e)=>{
        e.preventDefault();
    }

    return <>
        <div className="filter-card form"> 
            <form>

            </form>
            <button onClick={HandleFindevents}> FIND EVENTS </button>
        </div>
    </>
}

export default Findboxes;