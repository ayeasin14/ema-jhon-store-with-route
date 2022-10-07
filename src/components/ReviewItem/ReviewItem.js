import React from 'react';
import './ReviewItem.css';
import { TrashIcon } from '@heroicons/react/24/solid';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, quantity, img, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <TrashIcon className='delete-icon'></TrashIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;