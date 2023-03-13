import { observer } from "mobx-react";
import React from "react";
import { AppState } from "../AppState";
import "../components/Styles/CommentForm.scss";
import { Post } from "../models/Post";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import { BindEditable } from "../utils/FormHandler.js";
import Pop from "../utils/Pop";

function CommentForm() {
  let editable = new Post({});
  const bindEditable = BindEditable(editable);
  const account = AppState.account;
  const placeholder = `What's on your mind, ${account?.name}?`;

  async function create() {
    try {
      window.event?.preventDefault();
      logger.log({ editable });
      await postsService.create(editable);
      editable = new Post({});
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  function insertImage() {
    if (AppState.photoBool == true) {
      return (
        <input
          className="col-12 mb-3 form-control inputForm"
          name="imgUrl"
          id="imgUrl"
          type="url"
          placeholder="Add Photo..."
          defaultValue={editable.imgUrl}
          onChange={bindEditable}
        />
      );
    }
  }

  function photoFlip() {
    logger.log(AppState.photoBool);
    AppState.photoBool = !AppState.photoBool;
    logger.log(AppState.photoBool);
    return AppState.photoBool;
  }

  return (
    <div className="commentForm col-12 textAreaBg">
      <form
        onSubmit={create}
        key={editable.id}
        className="row d-flex justify-content-center"
        action=""
      >
        <div className="form-group textAreaBg col-12">
          <textarea
            className="form-control textAreaBg"
            name="body"
            id="body"
            rows={4}
            placeholder={placeholder}
            defaultValue={editable.body}
            onChange={bindEditable}
          ></textarea>
        </div>
        <div className="col-11">{insertImage()}</div>
        <div className="col-11">
          <div className="row d-flex align-items-center addToPost rounded">
            <div className="col-4">Add to your post</div>
            <div
              onClick={() => photoFlip()}
              className="col-1 fs-1 offset-1 mdi mdi-image newColor"
            ></div>
          </div>
        </div>
        <button
          data-bs-dismiss="modal"
          type="submit"
          className="col-11 postButton d-flex align-items-center justify-content-center mb-3 mt-3 rounded"
        >
          <p className="m-2">Post</p>
        </button>
      </form>
    </div>
  );
}

export default observer(CommentForm);
