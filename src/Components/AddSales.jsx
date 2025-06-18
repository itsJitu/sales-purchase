import { CiCirclePlus } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { PiBarcode } from "react-icons/pi";

import "./AddSales.css";

function AddSales() {
  return (
    <>
      <div>
        {/* Header & close-icon */}
        <div className="header">
          <h1>Add Sales Return </h1>
          <IoMdCloseCircle className="close" />
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

          {/* Order-table */}

          <div style={{ display: "flex", justifyContent: "flex-end", }}>
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


        </div>
      </div>
    </>
  );
}

export default AddSales;
