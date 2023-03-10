import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { AppState } from "../AppState";
import PostCard from "../components/PostCard";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";

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
        <form action="">
          <textarea name="" id="" rows={10} ></textarea>
        </form>
        <div className="row d-flex justify-content-center">
        {posts}
        </div>
      </div>
      <div className="col-1 col-md-3 col-lg-4">
      
      </div>
    </div>
   </div>
  )
}

export default observer(HomePage)