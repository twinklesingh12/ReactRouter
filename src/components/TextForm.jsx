import { useState } from 'react'

function TextForm(props) {
   // Change To Upper Case
   const upClick = () => {
      let newText = text.toUpperCase();
      setText(newText)
   }
   // Change To Lower Case
   const lcase = () => {
      let newText = text.toLowerCase();
      setText(newText)
   }
   // Remove Extra Space
   const removeWhiteSpace = () => {
      let newtext = text.split(/[]+/)
      setText(newtext.join(" "))
   }

   const handleCopy=()=>{
      let text=document.getElementById("exampleFormControlTextarea1")
      text.select()
      // text.setSelectionRange(0,9999)
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copied to Clipboard","sucess")
   }
   const onChange = (event) => {
      setText(event.target.value)
   }
   const [text, setText] = useState()

   return (
      <>
         <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 style={{fontFamily : "Cambria"}}>{props.heading}</h2>
            <div className="mb-3">
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} 
               onChange={onChange} style={{color:props.mode==='dark'?'light':'dark',
               backgroundColor: props.mode==='dark'?'##326B94':'white'}}></textarea>
            </div>
            <button className='btn btn-primary my-3 mx-3' onClick={upClick}>ChangeToUppercase</button>
            <button className='btn btn-primary my-3 ' onClick={lcase}>ChangeToLowerCase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={removeWhiteSpace}>RemoveExtraSpace</button>
            <button className='btn btn-primary my-3 ' onClick={handleCopy}>CopyText</button>
            <h2>Text Summary</h2>
         </div>
      </>
   )
}
export default TextForm

