import { api } from "../../services/api";

export function Product ({productImg,productName,productId,productPrice, eventButton, iconButton}){


    return(
        <>
        <li className="li_card"  >
            <img className="img_card" src={productImg} alt="" />
            <div className="container_informations">
                <p className="title3">Titulo: {productName}</p>
                <span className="body"> ID : {productId} </span>
                <p>Preço: R${productPrice}</p>
                <button onClick={eventButton}>{iconButton}</button>
            </div>
        </li>
        </>
    )
}