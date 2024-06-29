import { useState } from 'react'

function About() {
   // Styling by own
   const [text, setText] = useState({
      color: 'black',
      backgroundColor: 'white',
   })
   const [btntext, setBtnText] = useState()

   const toggledDm = () => {
      if (text.color === 'black') {
         setText({
            color: 'white',
            backgroundColor: 'black',
            border: '1px solid green'

         })
         setBtnText("Enable Light Mode")
      }
      else {
         setText({
            color: 'black',
            backgroundColor: 'white'
         })
         setBtnText("Enable Dark Mode")
      }
   }
   return (
      <>
         <div id="accordion" >
            <div className="card" class='text' style={text}>
               <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                     <button className="btn btn-link my-3" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={text}>
                        Collapsible Group Item
                     </button>
                  </h5>
               </div>

               <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion" style={text}>
                  <div className="card-body">
                     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
               </div>
            </div>
            <button onClick={toggledDm} className='btn btn-primary my-3' >{btntext}</button>
         </div>
      </>
   )
}
export default About
