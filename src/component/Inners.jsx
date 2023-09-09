import style from "./css/inner.module.css"
import { Link } from "react-router-dom"

const Inners=()=>{
    return(
        <div>
            <div id={style.maindiv1}>
            <div id={style.d1}>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/81MfjxIbRsL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Jockey</h4><h4 id={style.h2}>₹ 599</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/81Rz7UQaIkL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>HAP</h4><h4 id={style.h2}>₹ 1999</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/81PDt4-VkrL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Jockey</h4><h4 id={style.h2}>₹ 699</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71s3RJcoIPL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Dixcy Scott</h4><h4 id={style.h2}>₹ 1450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71c5yqqgArL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Heelium</h4><h4 id={style.h2}>₹ 1299</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71jXMYdi5FL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Lux Cozi</h4><h4 id={style.h2}>₹ 599</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/71k7-Cp6owL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Jockey</h4><h4 id={style.h2}>₹ 1990</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/51GxUjGiZ-L._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Lux Cozi</h4><h4 id={style.h2}>₹ 969</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61tX765YhOL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Dixcy Scott</h4><h4 id={style.h2}>₹ 869</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://m.media-amazon.com/images/I/61NVMRq5keL._AC_UL320_.jpg" alt="" /><h4 id={style.h1}>Jockey</h4><h4 id={style.h2}>₹ 699</h4><Link>View</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Inners