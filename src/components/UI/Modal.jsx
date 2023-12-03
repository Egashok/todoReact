import cl from './Modal.module.css'
import React from 'react';

function Modal ({children,visible,setVisible}) {

    const rootClasses=[cl.Modal]
        if(visible){
        rootClasses.push(cl.active)
    }
    return (  
        
        <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className={cl.Modal.content} onClick={( e)=>e.stopPropagation()}>
                {children}

            </div>
        </div>
        );
}
 
export default Modal;