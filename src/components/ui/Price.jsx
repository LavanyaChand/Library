import React from 'react'

const Price = ({ salePrice, originalPrice }) => {
  const original = Number(originalPrice);
  const sale = Number(salePrice);

  return (
    <div className="book__price">
      {sale
        ? (
          <>
            <span className="book__price--normal">
              ${original.toFixed(2)}
            </span>
            ${sale.toFixed(2)}
          </>
        ) : (
          <>${original.toFixed(2)}</>
        )
      }
    </div>
  );
}


export default Price