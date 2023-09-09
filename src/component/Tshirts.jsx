import style from "./css/tshirt.module.css"
import { Link } from "react-router-dom"

const Tshirts=()=>{
    return(
        <div>
            <div id={style.maindiv1}>
                <div id={style.d1}>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51ZfgoeDDrL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>EYEBOGLER</h4><h4 id={style.h2}>₹ 319</h4><Link>View</Link>
                   </div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71zEOQ5d7dL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>ADRO</h4><h4 id={style.h2}>₹ 699</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71iROQv+0LL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Maniac</h4><h4 id={style.h2}>₹ 664</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71iFXbwGVKL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>New Style</h4><h4 id={style.h2}>₹ 619</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51JE7Y0SFmL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>London Hills</h4><h4 id={style.h2}>₹ 970</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61M0OtXVRGL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>ADRO</h4><h4 id={style.h2}>₹ 699</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61h9-8vUpLL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>GRITSTONES</h4><h4 id={style.h2}>₹ 900</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61FLwZwvHFL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Basics</h4><h4 id={style.h2}>₹ 799</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/41Tig8nfUjL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>SS</h4><h4 id={style.h2}>₹ 620</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61MmzYTW9pL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>LEWEL</h4><h4 id={style.h2}>₹ 550</h4><Link>View</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Tshirts