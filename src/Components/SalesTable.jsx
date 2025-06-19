import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import "./SalesTable.css";

import img1 from "../img/01.jpg";
import img2 from "../img/02.jpg";

// SalesTable component
// This component renders a sales table with search functionality, filters, and pagination.

const dummyData = [
  {
    id: 1,
    img: img1,
    product: "Lenovo ideaPad 3",
    date: "19 nov 2022",
    person: img2,
    customer: "Carl Evans",
    Status: "Received",
    total: "1000",
    paid: "1000",
    due: "0",
    paymentStatus: "Paid",
  },
  {
    id: 2,
    img: img1,
    product: "Apple tablet",
    date: "19 nov 2022",
    person: img2,
    customer: "Minerva Rameriz",
    Status: "Pending",
    total: "1500",
    paid: "0",
    due: "1500",
    paymentStatus: "Unpaid",
  },
  {
    id: 3,
    img: img1,
    product: "Headphone",
    date: "19 nov 2022",
    person: img2,
    customer: "Robert Lamon",
    Status: "Received",
    total: "1000",
    paid: "1000",
    due: "1000",
    paymentStatus: "Overdue",
  },
  {
    id: 4,
    img: img1,
    product: "Nike Jordan",
    date: "19 nov 2022",
    person: img2,
    customer: "Mark Joslyn",
    Status: "Received",
    total: "1000",
    paid: "1000",
    due: "0",
    paymentStatus: "Paid",
  },
  {
    id: 5,
    img: img1,
    product: "Red Premium Satchel",
    date: "19 nov 2022",
    person: img2,
    customer: "Marsha Betts",
    Status: "Pending",
    total: "750",
    paid: "0",
    due: "750",
    paymentStatus: "Unpaid",
  },
  {
    id: 6,
    img: img1,
    product: "Apple earpods",
    date: "19 nov 2022",
    person: img2,
    customer: "Daniel Jude",
    Status: "Received",
    total: "1000",
    paid: "1000",
    due: "0",
    paymentStatus: "Paid",
  },
  {
    id: 7,
    img: img1,
    product: "Iphone 14 Pro",
    date: "19 nov 2022",
    person: img2,
    customer: "Emma Bates",
    Status: "Received",
    total: "1100",
    paid: "1100",
    due: "0",
    paymentStatus: "Paid",
  },
  {
    id: 8,
    img: img1,
    product: "Gaming Chair",
    date: "19 nov 2022",
    person: img2,
    customer: "Richard Fraick",
    Status: "Pending",
    total: "2300",
    paid: "2300",
    due: "0",
    paymentStatus: "Paid",
  },
  {
    id: 9,
    img: img1,
    product: "Boreealis Backpack",
    date: "19 nov 2022",
    person: img2,
    customer: "Michelle Smith",
    Status: "Return",
    total: "1700",
    paid: "1700",
    due: "0",
    paymentStatus: "Paid",
  },
];

const SupplierRow = ({ supplier }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Received":
        return "received";
      case "Pending":
        return "pending";
      case "Return":
        return "return";
      default:
        return "";
    }
  };

  const getPaymentStatusColor = (paymentStatus) => {
    switch (paymentStatus) {
      case "Paid":
        return "paid";
      case "Unpaid":
        return "unpaid";
      case "Overdue":
        return "overdue";
      default:
        return "rpaid";
    }
  };

  return (
    <tr className="t-row">
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <img src={img1} alt="product" className="img" />{" "}
        <span>{supplier.product}</span>
      </td>
      <td>{supplier.date}</td>
      <td>
        <img src={img2} alt="customer" className="img" />{" "}
        <span>{supplier.customer}</span>
      </td>
      <td>
         <span className={getStatusColor(supplier.Status)}>
          {supplier.Status}
        </span>
      </td>
      <td>${supplier.total}</td>
      <td>${supplier.paid}</td>
      <td>${supplier.due}</td>
      <td>
        <span className={getPaymentStatusColor(supplier.paymentStatus)}>
         • {supplier.paymentStatus}
        </span>
      </td>
      <td>
        <span className="t-icon" style={{ display: "flex", gap: "8px" }}>
          <FaRegEdit className="eye" />
          <RiDeleteBinFill className="eye" />
        </span>
      </td>
    </tr>
  );
};

function SalesTable() {
  const filteredData = dummyData;

  const paginatedData = filteredData;

  return (
    <div>
      {/* Search tab */}
      <div className="search">
        <div className="search-box">
          <IoIosSearch />{" "}
          <input type="text" placeholder="search" className="search-bar" />
        </div>

        {/* Header */}

        <div className="selects">
          <select name="" id="" className="select">
            <option>Customer</option>
          </select>

          <select name="" id="" className="select">
            <option>Status</option>
          </select>

          <select name="" id="" className="select">
            <option>Payment Status</option>
          </select>

          <select name="" id="" className="select">
            <option>Sort By: Last 7 Days</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="">
        <div className="">
          <table className="tab">
            <thead>
              <tr>
                <th style={{ textAling: "start" }}>
                  <input type="checkbox"></input>
                </th>
                <th style={{ textAling: "start" }}>Product </th>
                <th style={{ textAling: "start" }}>Date</th>
                <th style={{ textAling: "start" }}>Customer</th>
                <th style={{ textAling: "start" }}>Status</th>
                <th style={{ textAling: "start" }}>Total</th>
                <th style={{ textAling: "start" }}>Paid</th>
                <th style={{ textAling: "start" }}>Due</th>
                <th style={{ textAling: "start" }}>Payment Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((supplier) => (
                <SupplierRow key={supplier.id} supplier={supplier} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* setting icon */}

      <div className="setting">
        <span>
          <IoSettingsOutline className="i-setting" />
        </span>
      </div>

      {/* Footer */}
      <div className="sec">
        <div className="raw">
          <p>Row Per Page </p>
          <select className="opt">
            <option>10</option>
          </select>
          <p>Entries</p>
        </div>
        <div className="arrow-back">
          {/* icon*/}
          <IoIosArrowBack />
          {/* number */}
          <div className="num">1</div>
          {/* icon */}
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default SalesTable;
