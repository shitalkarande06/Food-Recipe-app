
import './ChildComponent.css'
 
// import { Data } from '../component/Data'



const ChildComponent = ({data}) => {
  
  return (
    <div className="main_container">
      <div className="inner_container">
    <nav className="navbar">
       <h3 className="heading">Food Corner</h3>
         <form>
           <input type="text"
            placeholder="Search Recipies" name="text"
             className="input"
            />
              <button type="submit" className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
           </button>
        </form>
      </nav>
   </div>
     
        <div className="main-div">
           {data.map((obj)=>{
           return(
            <div  className="container">
            <img src ={`../Assets/${obj.Img}`}
            alt="items" className="img-block"/>
            <a href={`${obj.Method}`} className="Title"><b>{obj.title}</b></a>
             </div>
           );
           })}

         </div>
    </div>
  )
}

export default ChildComponent