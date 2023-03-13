import React from "react";
import { AppState } from "../AppState";
import "../components/Styles/LeftBar.scss";

export default function LeftBar() {
  let account = AppState.account;

  return (
    <div className="leftBar">
      <div className="row mt-3  mx-1 row d-flex align-items-center text-light">
        <div className="col-10">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <img
                className="profileImage my-2 p-0"
                src={account?.picture}
                alt=""
              />
            </div>
            <div className="col-9 ">
              <p className="p-0 m-0">{account?.name}</p>
            </div>
          </div>
        </div>

        <div className="col-10 mt-3">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="marketplace fs-1 interact mdi mdi-store"></i>
            </div>
            <div className="col-9">
              <p className="p-0 m-0">Marketplace</p>
            </div>
          </div>
        </div>

        <div className="col-10 mt-3">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="news fs-1 interact mdi mdi-newspaper"></i>
            </div>
            <div className="col-9">
              <p className="p-0 m-0">News</p>
            </div>
          </div>
        </div>

        <div className="col-10 mt-3">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="fs-1 youtube interact mdi mdi-youtube"></i>
            </div>
            <div className="col-9">
              <p className="p-0 m-0">YouTube</p>
            </div>
          </div>
        </div>

        <div className="col-10 mt-3">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="fs-1 instagram interact mdi mdi-instagram"></i>
            </div>
            <div className="col-9">
              <p className="p-0 m-0">Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
