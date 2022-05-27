import React, { useState } from "react";

function Product(props) {
  const [product] = useState(props.product);
  return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              #{product.id}
              <span
                className="float-end hand-icon"
                onClick={() => {
                  props.onDelete(product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h5 className="pt-5 border-top">{product.productName}</h5>
            <div className="">${product.price}</div>
          </div>

          <div className="card-footer">
            <div className="float-start">
              <span className="badge text-black">{product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    props.onIncrement(product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    props.onDecrement(product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>

            <div className="float-end">{props.children}</div>
          </div>
        </div>
      </div>
  );
}

export default Product;
