import React from 'react'
import Student from './Student';
import img from './assets/image.png'
function App() {
  // let a=20;
  // let mystyle={
  //   backgroundColor:'cyan',
  //   color:'red' ,
  //   border:'7px solid black' ,
  //   height:'100px' ,
  //   fontSize:'100px'
  // }
  return (
    // <div style={{color:'red'}}>
    //   {/* <h2>Abes engineering college</h2>
    //   <div style={mystyle}>{a}</div>
    //   <div><Student>
    //     </Student></div> */}
    //   </div>
    <div className='icards'>

      <Student pic={<img src={img} />} name="Ishank" branch="CSE-AIML" college="ABES ENGINEERING COLLEGE" roll="220032130082" section="B"  />
      <Student pic={<img src={img} />} name="Ishank" branch="CSE-AIML" college="ABES ENGINEERING COLLEGE" roll="220032130082" section="B"  />
      <Student pic={<img src={img} />} name="Ishank" branch="CSE-AIML" college="ABES ENGINEERING COLLEGE" roll="220032130082" section="B"  />
      <Student pic={<img src={img} />} name="Ishank" branch="CSE-AIML" college="ABES ENGINEERING COLLEGE" roll="220032130082" section="B"  />
      <Student pic={<img src={img} />} name="Ishank" branch="CSE-AIML" college="ABES ENGINEERING COLLEGE" roll="220032130082" section="B"  />
      <Student pic={<img src={img} />} name="Ishank" branch="CSE-AIML" college="ABES ENGINEERING COLLEGE" roll="220032130082" section="B"  />
    </div>
  )
}

export default App