import { CiCirclePlus } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { PiBarcode } from "react-icons/pi";
import { Link } from 'react-router-dom';

import "./AddSales.css";

function AddSales() {
  return (
    <>
      <div>
        {/* Header & close-icon */}
        <div className="header">
          <h1>Add Sales Return </h1>
        <Link to="/SalesTable">
          <IoMdCloseCircle className="close" />
          </Link>
        </div>

        {/* Customer Name Date & Reference */}
        <div>

          <div className="pro">
            {/* customer Name */}
            <div className="box">
              <p>
                Customer Name <span className="thunder">*</span>
              </p>
              <div className="circle-icon">
                <select className="input">
                  <option>Customer Name </option>
                </select>
                {/* for icon */}
                <button className="button">
                  <CiCirclePlus className="plus" />
                </button>
              </div>
            </div>

            {/* Date */}

            <div className="box">
              <p>
                Date <span className="thunder">*</span>
              </p>
              <input type="date" className="input"></input>
            </div>

            {/* Reference */}

            <div className="box">
              <p>
                Reference <span className="thunder">*</span>
              </p>
              <input type="text" className="input"></input>
            </div>
          </div>

          {/* Barcode */}
          <div className="bar">
            <p>
              Product <span className="thunder">*</span>
            </p>

            <div className="barcode-box">
              <input
                type="text"
                className="input-bar"
                placeholder="Please type product code and select"
              ></input>
              <PiBarcode />
            </div>
          </div>

          {/* net-Unit Product Name Sub-Total Tax Discount */}

        <div className="details-bar">
          <div className="details">
            <p>Product Name</p>
            <p>Net Unit price($)</p>
            <p>Stock</p>
            <p>QTY</p>
            <p>Discount($)</p>
            <p>Tax %</p>
            <p>Subtotal($)</p>
          </div>

          <hr></hr>

          {/* Order-Tax-Discount-table */}

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <table className="summary-table">
              <tbody>
                <tr>
                  <td className="income-rel">Order tax</td>
                  <td className="income-det">$0.00</td>
                </tr>
                <tr>
                  <td className="income-rel">Discount</td>
                  <td className="income-det">$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Barcode */}
          <div className="bar-2">
            <div className="barcode-box">
              <input
                type="text"
                className="input-bar"
                placeholder="Please type product code and select"
              ></input>
              <PiBarcode />
            </div>
          </div>

        </div>

        
        <div className="details-bar">
          <div className="details">
            <p>Product Name</p>
            <p>Net Unit price($)</p>
            <p>Stock</p>
            <p>QTY</p>
            <p>Discount($)</p>
            <p>Tax %</p>
            <p>Subtotal($)</p>
          </div>
          <hr></hr>
       

        
          {/* order-tax Discount-Shipping-Grand-Total */}

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <table className="summary-table">
              <tbody>
                <tr>
                  <td className="income-rel">Order tax</td>
                  <td className="income-det">$0.00</td>
                </tr>
                <tr>
                  <td className="income-rel">Discount</td>
                  <td className="income-det">$0.00</td>
                </tr>
                <tr>
                  <td className="income-rel">Shipping</td>
                  <td className="income-det">$0.00</td>
                </tr>
                <tr>
                  <td className="income-rel">Grand Total</td>
                  <td className="income-det">$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

             
        {/* Footer */}
      
          <div className="footer">
            {/* Order */}

            <div className="box-2">
              <p>
                Order <span className="thunder">*</span>
              </p>
              <input type="text" placeholder="0" className="input-2"></input>
            </div>

            {/* Discount */}

            <div className="box-2">
              <p>
                Discount <span className="thunder">*</span>
              </p>
              <input type="text" placeholder="0" className="input-2"></input>
            </div>

            {/* Shipping */}

            <div className="box-2">
              <p>
                Shipping <span className="thunder">*</span>
              </p>
              <input type="text" placeholder="0" className="input-2"></input>
            </div>

            {/* Reference */}
            <div className="box-2">
              <p>
                Status<span className="thunder">*</span>
              </p>
                <select className="input-2">
                  <option>Select </option>
                </select>
            </div>

          </div>
        </div>

        <hr></hr>

        {/* Button */}
        <div>
          <div className="button-group">
            <Link to="/SalesTable" className="button-cancel">Cancel</Link>
            <Link to="/SalesTable" className="button-save">Save</Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default AddSales;
