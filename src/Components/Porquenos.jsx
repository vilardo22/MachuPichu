import React from 'react'
import Styles from "./porquenos.module.css"

const Porquenos = () => {
  return (
    <>
    <div className={Styles.container}>
    <div className={Styles.textContainer}>
          <p className={Styles.Text}>Where does it come from?</p>
          <h1 className={Styles.textInH1}>Por que nós</h1>
        </div>

        <div className={Styles.cardcontainer}>
        <div className={Styles.card1}>
        <h1 className={Styles.textInH2}>Lorem ipsum dolor</h1>
        <p className={Styles.Text2}>is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
        <div className={Styles.card2}>
        <h1 className={Styles.textInH2}>Lorem ipsum dolor</h1>
        <p className={Styles.Text2}>is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
        <div className={Styles.card3}>
        <h1 className={Styles.textInH2}>Lorem ipsum dolor</h1>
        <p className={Styles.Text2}>is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
        <div className={Styles.card4}>
        <h1 className={Styles.textInH2}>Lorem ipsum dolor</h1>
        <p className={Styles.Text2}>is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
        </div>

    </div>
    </>
  )
}

export default Porquenos
