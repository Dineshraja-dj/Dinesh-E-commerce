import style from "./css/hoodies.module.css"
import { Link } from "react-router-dom"

const Hoodies=()=>{
    return(
        <div>
            <div id={style.maindiv1}>
            <div id={style.d1}>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51yBKvqHn+L._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Alan Jones</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61TQiA49VoL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Zuby Duby</h4><h4 id={style.h2}>₹ 650</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61CY9WCPHAL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Palm Island</h4><h4 id={style.h2}>₹ 500</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/41Xrr6Qte6L._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Vero Lie</h4><h4 id={style.h2}>₹ 750</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/719CUW4JQBL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Men Full Sleve</h4><h4 id={style.h2}>₹ 430</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71zum6ACBuL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Bee Brezo</h4><h4 id={style.h2}>₹ 550</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61EAQ1Xh0+L._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Wild Born</h4><h4 id={style.h2}>₹ 650</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71k2JftJkfL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Basic</h4><h4 id={style.h2}>₹ 400</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/81+3g00XzmL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Alan Jones</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/718L5+YnyKL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Palm Island</h4><h4 id={style.h2}>₹ 500</h4><Link>View</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Hoodies