/* Importing the useContext hook from react. */
import React, {useContext} from 'react'
import Image from 'next/image'

/* Importing the components and the styles from the folder. */

import homeStyles from './home.module.scss'
import CodeShot from  "@/assets/breeze-shot.png"


const Home = () => {


  return (
    <>
    <div className={homeStyles.Wrapper}>
       <div>
            <h2> Lets Solve the Challenge Together </h2>
            enjoy the full assets of a <strong>collaborative environment </strong>with visual <br/>interractions
       </div>
       <div className={homeStyles.joinBtn} 
       >
       </div>
        <div className = {homeStyles.codeShot}>
          <Image src={CodeShot} alt= "code-shot"/>
        </div>
    </div>
    <div className={homeStyles.arbitrary}>
    </div>
    </>
  )
}

export default Home