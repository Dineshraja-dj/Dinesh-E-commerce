import style from "./css/watch.module.css"
import { Link } from "react-router-dom"

const Watches=()=>{
    return(
        <div>
            <div id={style.maindiv1}>
            <div id={style.d1}>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61WfiRlT-uL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Fossil</h4><h4 id={style.h2}>₹ 7497</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61EFYJwDjuL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Casio</h4><h4 id={style.h2}>₹ 3415</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61t7DyFfewL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Noise</h4><h4 id={style.h2}>₹ 1599</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71EXddMCeSL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Fastrack</h4><h4 id={style.h2}>₹ 1655</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/81LhdIE4HhL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Fastrack</h4><h4 id={style.h2}>₹ 3221</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71pmJEPozpL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Fastrack</h4><h4 id={style.h2}>₹ 1836</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61Mtvk22K5L._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Seiko</h4><h4 id={style.h2}>₹ 23450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71rs0DJK0oL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>SKMEI</h4><h4 id={style.h2}>₹ 1979</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/712Rh-EFFyL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Titan</h4><h4 id={style.h2}>₹ 2705</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61WMBCxsjJL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Fire-Boltt</h4><h4 id={style.h2}>₹ 4599</h4><Link>View</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Watches