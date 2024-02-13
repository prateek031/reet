/**
 * It's a function that takes in an array of objects and returns a filtered array of objects based on
 * the propertyType
 * @returns A list of properties
 */
import React from "react";
import { useDispatch } from "react-redux";

const Category = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <div className='advance-card'>
      <h6>Category</h6>
      <div className='category-property'>
        <ul>
        <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "LOT" })}>
              <i className='fas fa-arrow-right me-2'></i>LOT <span className='float-end'>({value?.filter((x) => x.propertyType === "LOT").length || 3})</span>
            </a>
          </li>
        <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Commercial Building" })}>
              <i className='fas fa-arrow-right me-2'></i>Commercial Building <span className='float-end'>({value?.filter((x) => x.propertyType === "Commercial Building").length || 5})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Stores" })}>
              <i className='fas fa-arrow-right me-2'></i>Stores <span className='float-end'>({value?.filter((x) => x.propertyType === "Stores").length || 12})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Farms" })}>
              <i className='fas fa-arrow-right me-2'></i>Farms <span className='float-end'>({value?.filter((x) => x.propertyType === "Farms").length || 8})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Apartment" })}>
              <i className='fas fa-arrow-right me-2'></i>Apartment <span className='float-end'>({value?.filter((x) => x.propertyType === "Apartment").length || 15})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Villa" })}>
              <i className='fas fa-arrow-right me-2'></i>Villa <span className='float-end'>({value?.filter((x) => x.propertyType === "Villa").length || 10})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Studio" })}>
              <i className='fas fa-arrow-right me-2'></i>Studio <span className='float-end'>({value?.filter((x) => x.propertyType === "Studio").length || 3})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Investment Projects" })}>
              <i className='fas fa-arrow-right me-2'></i>Investment Projects <span className='float-end'>({value?.filter((x) => x.propertyType === "Investment Projects").length || 3})</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
