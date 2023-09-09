import style from "./css/pant.module.css"
import { Link } from "react-router-dom"

const Pants=()=>{
    return(
        <div>
            <div id={style.maindiv1}>
            <div id={style.d1}>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/91Xa7rKN5yL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>The Pant Project</h4><h4 id={style.h2}>₹ 2190</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61IIKfT7AZL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>JUGULAR</h4><h4 id={style.h2}>₹ 700</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71NW-l5RvEL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Alan Jones Clothing</h4><h4 id={style.h2}>₹ 899</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61xPuLuFwPL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Jack and Jini</h4><h4 id={style.h2}>₹ 999</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71XOj98mDDL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>VEGO</h4><h4 id={style.h2}>₹ 569</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71we5owDPsL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>CLUB TWENTY ONE</h4><h4 id={style.h2}>₹ 799</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71t7ZWb67wL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Jockey</h4><h4 id={style.h2}>₹ 1499</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/81ykkt3s0hL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Neostreak</h4><h4 id={style.h2}>₹ 589</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71dw5hOAiBL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Chromozome</h4><h4 id={style.h2}>₹ 699</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51Z0X0LM3yL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Peter England</h4><h4 id={style.h2}>₹ 1049</h4><Link>View</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Pants