import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../models/Post";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import "./Styles/PostCard.scss";

/**@param {{post:Post}} props */
export default function PostCard({ post }) {
  async function remove() {
    try {
      await postsService.delete(post.id);
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  return (
    <div className="row my-2 cardBody">
      {/* AVATAR */}
      <div className="col-12">
        <div className="row d-flex align-items-center">
          <div className="col-2 my-2">
            <Link to={`profile/${post.creator.id}`}>
              <img className="postAvatar" src={post.creator.picture} alt="" />
            </Link>
          </div>
          <div className="col-5 align-items-center">
            <h6 className="m-0">{post.creator.name}</h6>
            <p className="m-0">{new Date(post.createdAt).toDateString()}</p>
          </div>
          <div
            className="col-1 offset-3 align-items-center marginRight d-flex justify-content-center"
            title="Post Dropdown"
          >
            <i className="fs-4 buttonColor mdi mdi-dots-horizontal d-flex align-items-center justify-content-center"></i>
          </div>
          <div
            className="col-1 borderRadius align-items-center d-flex marginRight justify-content-center"
            title="Delete Post"
          >
            <i
              onClick={() => remove()}
              className="fs-4 buttonColor mdi mdi-window-close d-flex align-items-center justify-content-center"
            ></i>
          </div>
        </div>
      </div>
      {/* USERNAME/WHEN POST WAS MADE/ EDIT/ REMOVE */}
      {/* BODY */}
      <div className="col-12 mb-2">
        <p className="p-0 m-0 textWeight">{post.body}</p>
      </div>
      {/* IMAGE */}
      <div className="col-12 px-0">
        <img
          className="postImg"
          src={post.imgUrl}
          title={post.creator.name}
          alt=""
        />
      </div>
      {/* LIKES COUNT */}
      {/* LIKES BAR/FAKE COMMENT CLICK */}
      {/* FAKE COMMENT FORM INPUT */}
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.instanceOf(Post),
};
