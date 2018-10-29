import React from 'react';
import avImage from '../images/av.jpg'

const Card = () => {
	
	
	return (
	<div className="container">
	<h2>Card</h2>
		<div className="row">
		<div className="col-xs-12 col-sm4">
		<div className="card card1">
		<span className="card-category">POPULAR</span>
		<div className="card-description">
		<h3>Stripe</h3>
		<p>£320.00</p>
		</div>
		<img src={avImage} alt="avatar image" className="avatarSmall card-image"/>
		</div>
		</div>
		<div className="col-xs-12 col-sm4">
	
         <div className="card2">
         <div className="cardDesign2 transition">
         <h3>Stripe</h3>
         <p>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
         <div className="cta-container transition"><a href="#" className="cta">Call to action</a></div>
         <div className="card_circle transition"></div>
        </div>
        </div>

		</div>
	
		</div>
		</div>
	)
}
export default Card;