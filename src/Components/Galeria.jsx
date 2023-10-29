import React from 'react'
import Styles from "./galeria.module.css";
import {motion} from "framer-motion";
import {useRef, useEffect,useState} from 'react'
import images from "./Images"
const Galeria = () => {
    const[width, setWidth] = useState(0);
    const carousel = useRef();


    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    
    }, []);
  return (
    <div>
      <div className={Styles.container}>
      <div className={Styles.textContainer2}>
          <h1 className={Styles.textInH12}>Loren Ipsum</h1>
          <p className={Styles.Text2}>Quais lugares você vai visitar</p>
        </div>
            <motion.div ref={carousel} className={Styles.carrosel} whiLeTap={'grabbing'}>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width}}
                 className={Styles.inner}>
                    {images.map(image =>{
                        return(
                           <motion.div className={Styles.fotos} key={image}> 
            <img src={image} alt=""/>
        </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Galeria
