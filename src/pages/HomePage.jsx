import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { AppState } from "../AppState";
import CommentForm from "../components/CommentForm";
import PostCard from "../components/PostCard";
import { Account } from "../models/Account";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";
import "../components/Styles/HomePage.scss"

export function HomePage() {
  useEffect(() => {
    getPost()
  },[])

  let posts = (AppState.posts.map(post => {
    return (
      <div className="col-12 col-md-12" key={post.id}>
        <PostCard post={post} />
      </div>
    )
  }))

const account = AppState.account
  
  async function getPost() {
    try {
      await postsService.get()
    }
    catch (error){
      Pop.error(error);
    }
  }

  return (
   <div className="container-fluid">
    <div className="row">
      <div className="col-1 col-md-3 col-lg-4">
      </div>
      <div className="col-sm-10 col-md-6 col-lg-4">
        <div className="row fillerRow">

        </div>
        <div className="row d-flex align-items-center my-3">
          <div className="col-2 col-sm-2 col-md-1 p-0">
            <div className="avatarPicture">
            <img className="avatarPicture" src={account?.picture} />
          </div>
          </div>
          <div className="col-10 col-sm-10 col-md-11 rounded-pill backgroundPost" data-bs-toggle="modal" data-bs-target="#postModal">
            <p className="m-0 m-2">What's on your mind?</p>
          </div>
        </div>
      {/* <CommentForm /> */}
        <div className="row d-flex justify-content-center">
        {posts}
        </div>
      </div>
      <div className="col-1 col-md-3 col-lg-4">
      
      </div>
    </div>

    <div className="modal fade " id="postModal" tabIndex={-1} role="dialog" aria-labelledby="postModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  roundedCorners" role="document">
          <div className="modal-content modalBackground roundedCorners">
              <div className="modal-header">
                  <h5 className="modal-title " id="modalTitleId">Create Post</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              <div className="container-fluid ">
                <div className="row">
                  <CommentForm />
                </div>
              </div>
          </div>
        </div>
        </div>
   </div>


  )
}

export default observer(HomePage)