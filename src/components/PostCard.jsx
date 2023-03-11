import PropTypes from 'prop-types';
import React from 'react';
import { Post } from "../models/Post";
import './Styles/PostCard.scss'

/**@param {{post:Post}} props */
export default function PostCard({post}) {

  return (

    <div className="row my-2 cardBody"> 
      {/* AVATAR */}
      <div className="col-12">
        <div className="row d-flex align-items-center">
        <div className="col-2 my-2"><img className="postAvatar" src={post.creator.picture} alt="" /></div>
      <div className="col-5 align-items-center">
        <h6 className="m-0">{post.creator.name}</h6>
        <p className="m-0">{new Date(post.createdAt).toDateString()}</p>
      </div>
      <div className="col-1 offset-3 align-items-center marginRight d-flex"><i className="fs-4 buttonColor mdi mdi-dots-horizontal"></i></div>
      <div className="col-1 borderRadius align-items-center d-flex marginRight">
      <i className="fs-4 buttonColor mdi mdi-window-close"></i>
      </div>
        </div>
      </div>
      {/* USERNAME/WHEN POST WAS MADE/ EDIT/ REMOVE */}
      {/* BODY */}
      <div className="col-12 mb-2">
        <p className="p-0 m-0 textWeight">
      {post.body}
        </p>
      </div>
      {/* IMAGE */}
      <div className="col-12 px-0">
      <img className="postImg" src={post.imgUrl} title={post.creator.name} alt="" />
      </div>
      {/* LIKES COUNT */}
      {/* LIKES BAR/FAKE COMMENT CLICK */}
      {/* FAKE COMMENT FORM INPUT */}
    </div>
  )

}

PostCard.propTypes = {
  post: PropTypes.instanceOf(Post)
}