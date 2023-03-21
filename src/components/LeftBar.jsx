import React from "react";
import { AppState } from "../AppState";
import "../components/Styles/LeftBar.scss";

export default function LeftBar() {
  let account = AppState.account;

  return (
    <div className="leftBar">
      <div className="row mt-2  mx-1 row d-flex align-items-center text-light">
        <div className="col-12">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <img
                className="profileImage my-1 p-0"
                src={account?.picture}
                alt=""
              />
            </div>
            <div className="col-9 p-0 ">
              <p className="p-0 m-0 newFontSize">{account?.name}</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="marketplace fs-2 interact mdi mdi-store"></i>
            </div>
            <div className="col-9 p-0">
              <p className="p-0 m-0 newFontSize">Marketplace</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="news fs-2 interact mdi mdi-newspaper"></i>
            </div>
            <div className="col-9 p-0">
              <p className="p-0 m-0 newFontSize">News</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="fs-2 youtube interact mdi mdi-youtube"></i>
            </div>
            <div className="col-9 p-0">
              <p className="p-0 m-0 newFontSize">YouTube</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-4 col-md-2">
              <i className="fs-2 instagram interact mdi mdi-instagram"></i>
            </div>
            <div className="col-8 col-md-9 p-0 d-flex align-items-center">
              <p className="p-0 m-0 newFontSize">Instagram</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="marketplace fs-2 interact mdi mdi-store"></i>
            </div>
            <div className="col-9 p-0">
              <p className="p-0 m-0 newFontSize">Marketplace</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="news fs-2 interact mdi mdi-newspaper"></i>
            </div>
            <div className="col-9 p-0">
              <p className="p-0 m-0 newFontSize">News</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="fs-2 youtube interact mdi mdi-youtube"></i>
            </div>
            <div className="col-9 p-0">
              <p className="p-0 m-0 newFontSize">YouTube</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-4 col-md-2">
              <i className="fs-2 instagram interact mdi mdi-instagram"></i>
            </div>
            <div className="col-8 col-md-9 p-0 d-flex align-items-center">
              <p className="p-0 m-0 newFontSize">Instagram</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="marketplace fs-2 interact mdi mdi-store"></i>
            </div>
            <div className="col-9 p-0">
              <p className="p-0 m-0 newFontSize">Marketplace</p>
            </div>
          </div>
        </div>

        {/* <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="news fs-2 interact mdi mdi-newspaper"></i>
            </div>
            <div className="col-9 p-0">
              <p className="p-0 m-0 newFontSize">News</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-2">
              <i className="fs-2 youtube interact mdi mdi-youtube"></i>
            </div>
            <div className="col-9 p-0">
              <p className="p-0 m-0 newFontSize">YouTube</p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-2">
          <div className="row interact d-flex align-items-center rounded">
            <div className="col-4 col-md-2">
              <i className="fs-2 instagram interact mdi mdi-instagram"></i>
            </div>
            <div className="col-8 col-md-9 p-0 d-flex align-items-center">
              <p className="p-0 m-0 newFontSize">Instagram</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
