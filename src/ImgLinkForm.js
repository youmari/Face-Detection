import React from 'react';
import './ImgLinkForm.css'



const ImgLinkForm = ({onInputChange , onSubmit}) => {
    
    return (
       <div>
        <p className="f3 center">
            {'This Magic will detect faces in your pictures. give it a try !'}
        </p>
           <div className='center'>
            <div className='pa4 form br3 shadow-5 w-80 center '>
             <input className='f4 pa2 w-60 ' onChange={onInputChange}/>
             <button style={{background:"#FF5EDF"}} className='pa2 w-40 grow link ph3 pv2 dib f4   white' onClick={onSubmit}>Detect</button>
            </div>
           </div>
       </div>
    )
}

export default ImgLinkForm;