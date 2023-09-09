import style from "./css/chain.module.css"
import { Link } from "react-router-dom"

const Chains=()=>{
    return(
        <div>
            <div id={style.maindiv1}>
            <div id={style.d1}>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51SJJO6Wm1L._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>M Men Style</h4><h4 id={style.h2}>₹ 1879</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61aHSl17+mL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Nakabh</h4><h4 id={style.h2}>₹ 1450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61j4WSE8nIL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>THE MEN THING</h4><h4 id={style.h2}>₹ 4599</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61Oe48ycbxL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>WONIRY</h4><h4 id={style.h2}>₹ 2999</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61fnIUTOFCL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Yellow Chimes</h4><h4 id={style.h2}>₹ 3159</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51lsRW7jaSL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Nakabh</h4><h4 id={style.h2}>₹ 450099</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/41AWOHW3EhL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Obsession's</h4><h4 id={style.h2}>₹ 499</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51X7yLKeE1L._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>M Men Style</h4><h4 id={style.h2}>₹ 1999</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61o24Qx5GUL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>WONIRY</h4><h4 id={style.h2}>₹ 7299</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51H1aP3iNxL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Nakabh</h4><h4 id={style.h2}>₹ 5429</h4><Link>View</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Chains