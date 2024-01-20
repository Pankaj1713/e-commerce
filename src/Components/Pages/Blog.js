import React from 'react'
import "./Blog.css"
import { minusIcon, plusIcon } from './Icons'
import questions from './Data'
import SingleQuestion from './Question';


const Blog = () => {
  return (
    <div className='blog'>
      <div className="section1">
        <div className="girl">
          <img className="girl-img" src='./assets/images/girl.webp' alt='Girl'/>
        </div>
        <div className="product-data">
          <div className="top-data">
            <a className='home' href="/">Home</a>
            <span className='slash'> / </span>
            <a className='home' href="/">Sweatshirts</a>
            <span className='slash'> / </span>
          </div>
          <div className="product-heading">BRADLEY ZIPPERED FAIR TRADE HOODIE - UNISEX 😀😀😀💚🐝👩‍👧‍👦</div>
          <div className="item-detail">Item # US-4212-49802</div>
          <div className="item-price">Unit price: $68.00</div>
          <div className="item-total">Estimated Total: $2,720.00</div>
          <div className="shipping"> <a href="/">Shipping</a> calculated at checkout.</div>
          <div className="product-qty">HOW MANY UNITS DO YOU NEED?</div>
          <div className="product-qty-wrapper">
            <button className="input-total">
              <span className="minus-svg">{minusIcon({width:20,height:20})}</span>
              40
              <span className="plus-svg">{plusIcon({width:20,height:20})}</span>
              </button>
              <div className="min-qty">Min. quantity: 40</div>
          </div>
          <div className="product-color-wrap">
          <div className="product-color">CHOOSE YOUR PRODUCT COLOR: — Black</div>
            <div className="product-img-wrap">
              <div className="product-img"><img src="assets/black_50x.webp" alt="color" /></div>
              <div className="product-img"><img src="assets/navy-blue_50x.webp" alt="color" /></div>
            </div>
          </div>
          <form className='customization'>
            <label className='customization-heading'>SELECT CUSTOMIZATION TYPE:</label>
            <select className='decoration-input' name="decoration" id="decoration">
              <option className='color' value="color">4-Color Decoration</option>
              <option className='color' value="decoration">No Decoration</option>
              <option className='color' value="color">3-Color Decoration</option>
              <option className='color' value="embroidery">Embroidery</option>
              <option className='color' value="color">2-Color Decoration</option>
              <option className='color' value="color">1-Color Decoration</option>
           </select>
           </form>
           <div className='upload'>
            <button className='upload-file' type='submit'>Upload File</button>
            <span className='choose-file' >No file uploaded</span>
            </div>
            <div className="estimated-btn">
              <button className='estimated' type='submit'>ADD TO BULK ESTIMATE</button>
              <button className='estimated' type='submit'>ADD TO SWAG PACK</button>
            </div>
            <p className="bottom-desc">Total estimate doesn't include taxes and shipping fees.Payment is made after mockups are approved.</p>
            <section className='info'>
            {questions.map((question) => {
              return (
                <SingleQuestion key={question.id} {...question}></SingleQuestion>
              );
            })}
            </section>
        </div>
      </div>
    </div>
  )
}

export default Blog