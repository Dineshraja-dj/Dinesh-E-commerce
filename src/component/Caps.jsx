// import { useEffect, useState } from "react"
import style from "./css/cap.module.css"
// import style from "./css2/cap.module.css"
import { Link } from "react-router-dom"
// import axios from "axios"

const Caps=()=>{
    // let[datas,setDatas]=useState([])

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/caps")
    //     .then((r)=>{
    //         setDatas(r.data)
    //     })
    // },[])

    return(
        <div>
            <div id={style.maindiv1}>
            <div id={style.d1}>
                {/* {datas.map((x)=>{
                    return(
                        <div>
                            <div className={style.d21}><img src={x.image} alt="" /><h4 id={style.h1}>{x.name}</h4><h4 id={style.h2}>{x.price}</h4><Link>View</Link></div>
                        </div>
                    )

                })} */}
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71GSuj00O-L._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Puma</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61ASlsSnAjL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>X-LENT</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/616B0djW2EL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>VRITRAZ</h4><h4 id={style.h2}>₹ 499</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51RFigQOxHL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>RR DESIGN</h4><h4 id={style.h2}>₹ 305</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/5126nOZY4FL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Jack & Jones</h4><h4 id={style.h2}>₹ 799</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61ceLVWqfJL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>DRUNKEN</h4><h4 id={style.h2}>₹ 469</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/31NHIG-p74L._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>GUSTAVE</h4><h4 id={style.h2}>₹ 904</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51tPTZgFPFL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>GEOCARTER</h4><h4 id={style.h2}>₹ 512</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/5176PrnrJFL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Boldfit</h4><h4 id={style.h2}>₹ 399</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51YlCKeMLJL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>BAYEMA</h4><h4 id={style.h2}>₹ 449</h4><Link>View</Link></div>
                </div>
            </div>
        // </div>
    )
}
export default Caps