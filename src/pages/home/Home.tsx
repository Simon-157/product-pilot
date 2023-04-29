
/* Importing the useContext hook from react. */
import React, { useContext } from 'react'
import Image from 'next/image'

/* Importing the components and the styles from the folder. */

import homeStyles from './home.module.scss'
import CodeShot from "@/assets/e-commerce.png"
import Button from '@/components/button/Button'
import Link from 'next/link'


const Home = () => {
  return (
    <>
      <main className={homeStyles.Wrapper}>
        <div>
          <h2>Compare and conquer<br />Find the perfect product match</h2>
          looking for the best value or the highest quality?
          <br /> our <strong> product comparison table  </strong>makes it easy to find <br />the perfect fit for your needs. <br />
          <br />
         
        </div>
        <div>
        <Link
          className={homeStyles.joinBtn}
            href='/categories'
          >
            Get Started
          </Link>
        </div>
      </main>

    </>
  )
}

export default Home