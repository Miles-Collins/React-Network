import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { AppState } from "../AppState";
import { Post } from "../models/Post";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import "./Styles/PostCard.scss";

/**@param {{post:Post}} props */
export default function PostCard({ post }) {
  let account = AppState.account;
  async function remove() {
    try {
      const yes = await Pop.confirm(
        `Are you sure you want to delete this post ${post.creator.name}?`
      );
      if (!yes) {
        return;
      }
      await postsService.delete(post.id);
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  async function likePost() {
    try {
      await postsService.likePost(post.id);
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  function editPost() {
    if (post.creator.id == account?.id) {
      return (
        <div
          className="col-1 offset-4 align-items-center marginRight d-flex justify-content-center"
          title="Post Dropdown"
        >
          <i className="fs-4 buttonColor mdi mdi-dots-horizontal d-flex align-items-center justify-content-center"></i>
        </div>
      );
    }
  }

  function deletePost() {
    if (post.creator.id == account?.id) {
      return (
        <div
          className="col-1 borderRadius align-items-center d-flex marginRight justify-content-center"
          title="Delete Post"
        >
          <i
            onClick={() => remove()}
            className="fs-4 buttonColor mdi mdi-window-close d-flex align-items-center justify-content-center"
          ></i>
        </div>
      );
    }
  }

  function likes() {
    if (post.likeIds.includes(account?.id)) {
      return (
        <div className="row d-flex align-items-center">
          <div className="col-2 my-2">
            <i className="text-primary mdi mdi-thumb-up-outline"></i>
            <span className="text-primary"> {post.likeIds.length}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row d-flex align-items-center">
          <div className="col-2 my-2">
            <i className="greyColor mdi mdi-thumb-up-outline"></i>
            <span className="greyColor"> {post.likeIds.length}</span>
          </div>
        </div>
      );
    }
  }

  function likePostButton() {
    if (post.likeIds.includes(account?.id)) {
      return (
        <div className="container">
          <div className="row mb-2 mx-auto borderComment">
            <div
              onClick={() => likePost()}
              className="d-flex justify-content-center align-items-center rounded likeButton py-2 col-6 mx-auto fs-5 my-1 text-center"
            >
              <i className="text-primary mdi mdi-thumb-up"></i>
              <span className="ms-2 text-primary"> Like</span>
            </div>
            <div className="d-flex justify-content-center align-items-center likeButton py-2 rounded col-6 fs-5 my-1 text-center">
              <i className="mdi mdi-comment-outline"></i>
              <span className="ms-2"> Comment</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row mb-2 borderComment mx-auto">
            <div
              onClick={() => likePost()}
              className="d-flex justify-content-center align-items-center rounded likeButton py-2 col-6 mx-auto fs-5 my-1 text-center"
            >
              <i className=" mdi mdi-thumb-up"></i>
              <span className="ms-2"> Like</span>
            </div>
            <div className="d-flex justify-content-center align-items-center rounded likeButton py-2  col-6 fs-5 my-1 text-center">
              <i className="mdi mdi-comment-outline"></i>
              <span className="ms-2"> Comment</span>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="row my-2 cardBody">
      {/* AVATAR */}
      <div className="col-12">
        <div className="row d-flex align-items-center">
          <div className="col-1 my-2">
            <Link to={`profile/${post.creator.id}`}>
              <img className="postAvatar" src={post.creator.picture} alt="" />
            </Link>
          </div>
          <div className="col-5 align-items-center">
            <h6 className="m-0">{post.creator.name}</h6>
            <p className="m-0">{new Date(post.createdAt).toDateString()}</p>
          </div>
          {/* <div
            className="col-1 offset-4 align-items-center marginRight d-flex justify-content-center"
            title="Post Dropdown"
          >
            <i className="fs-4 buttonColor mdi mdi-dots-horizontal d-flex align-items-center justify-content-center"></i>
          </div> */}
          {editPost()}
          {deletePost()}
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
      {likes()}
      {/* LIKES BAR/FAKE COMMENT CLICK */}
      {likePostButton()}
      {/* FAKE COMMENT FORM INPUT */}
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.instanceOf(Post),
};
