import React from 'react'
import './Banner.css'
import cerveja from '../../../img/cerveja.svg';

export const Banner = () => {
    return (
        <div className="box">
          <div className="banner">
            <h2 className="text-wrapper">Ipa BAden</h2>
            <div className="center">
                  <img className="EAN" alt="Ean" src={cerveja} />
              <button className="button">Venha conferir</button>
            </div>
            <div className="text">
              <p className="text-wrapper-2">Promoção</p>
              <h2 className="text-wrapper-3">30% Desconto</h2>
            </div>
          </div>
        </div>
      );
}
