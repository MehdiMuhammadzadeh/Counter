import React from "react";
import Decrement from "./buttons/Decrement";
import Delete from "./buttons/Delete";
import Increment from "./buttons/Increment";
import Reset from "./buttons/Reset";
import Zero from "./buttons/Zero";



function TableButton() {

  return (

    <div className="container bg-light text-center">
      <h1 className="m-4">React Counter</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <div className="buttons">
              <Reset/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="buttons">
                <Zero />
                <Increment />
                <Decrement />
                <Delete />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="buttons">
                <Zero />
                <Increment />
                <Decrement />
                <Delete />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="buttons">
                <Zero />
                <Increment />
                <Decrement />
                <Delete />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="buttons">
                <Zero />
                <Increment />
                <Decrement />
                <Delete />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableButton;
