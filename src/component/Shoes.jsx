import style from "./css/shoes.module.css"
import { Link } from "react-router-dom"

const Shoes=()=>{
    return(
        <div>
            <div id={style.maindiv1}>
            <div id={style.d1}>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71DN-vAkLoL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>BATA</h4><h4 id={style.h2}>₹ 699</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61sWP8CfzjL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Centrino</h4><h4 id={style.h2}>₹ 589</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/81Vj658+g+L._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Centrino</h4><h4 id={style.h2}>₹ 850</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71TG2Jzpp6L._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>PARAGON</h4><h4 id={style.h2}>₹ 999</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61-qO2l0FUL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>SALOMON</h4><h4 id={style.h2}>₹ 10,181</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/81nxOFAFa9L._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Sparx</h4><h4 id={style.h2}>₹ 859</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/5136pUrx6kL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>U.S.POLO ASSN</h4><h4 id={style.h2}>₹ 2313</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71inPZ3i05L._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Clarks</h4><h4 id={style.h2}>₹ 3899</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71UvFaW3MAL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>ASIAN</h4><h4 id={style.h2}>₹ 815</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/81WKT7PBBoL._AC_UL400_.jpg" alt="" /><h4 id={style.h1}>Sparx</h4><h4 id={style.h2}>₹ 1099</h4><Link>View</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Shoes