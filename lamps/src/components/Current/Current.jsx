import React from 'react'
import s from "./style.module.css"


import arrow from "../../images/arrow.png";
import n from "../../images/new.png";



  export default function Current({title, image}) {
    return (
    
          <div className={s.lamps_scale}>
            <img className={s.new} src={n} alt=""/>
              <img  className={s.img} src={image} alt=""/>
                      <div className={s.link}>
                          <div className={s.link_name}>
                                  <p className={s.lamps_name}>{title}</p>
                                  <img className={s.arrow} src={arrow} alt=""/>
                          </div>
                      </div>
          </div>
 
    )
}

