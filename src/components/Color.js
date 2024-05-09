
    
    import React, { useState, useEffect } from 'react';

    function Color() {
        const [backgroundColor, setBg] = useState('aqua');
    
      
    
        const abc = () => {
        
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            setBg(randomColor);
        };
    
        return ( 
        < div  className="container-fluid" style = {
                { backgroundColor}
            } >
            
           <button  className='btn btn-danger  justify-content-center '  onClick = { abc } > Change Background Color </button> </div>
        );
    }
    
    export default Color;


