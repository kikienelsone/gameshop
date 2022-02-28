import React from 'react';
import "./OrderPage.css"
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../components/utils";
import OrderItem from "../../components/OrderItem/OrderItem";

const OrderPage = () => {

    const items = useSelector(state => state.cart.itemsInCart)

    if (items.length < 0) {
        return <h2>empty</h2>
    }

    return (
        <div className="order-page">
            <div className="order-page-left">
                {items.map(game => <OrderItem game={game}/>)}
            </div>
            <div className="order-page-right">
                <div className="order-page-total-price">
                    <span> {items.length} items on  {calcTotalPrice(items)}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;