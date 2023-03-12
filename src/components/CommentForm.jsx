import React from "react";
import { AppState } from "../AppState";
import "../components/Styles/CommentForm.scss";

export default function CommentForm() {
  const account = AppState.account;
  const placeholder = `What's on your mind, ${account?.name}?`;

  return (
    <div className="commentForm col-12 textAreaBg">
      <form className="row d-flex justify-content-center" action="">
        <div className="form-group textAreaBg col-12">
          <textarea
            className="form-control textAreaBg"
            name=""
            id=""
            rows={5}
            placeholder={placeholder}
          ></textarea>
        </div>
        <div className="col-11 postButton d-flex align-items-center justify-content-center mb-3 rounded">
          <p className="m-2">Post</p>
        </div>
      </form>
    </div>
  );
}
