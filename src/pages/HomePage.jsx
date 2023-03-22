import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { AppState } from "../AppState";
import CommentForm from "../components/CommentForm";
import PostCard from "../components/PostCard";
import { Account } from "../models/Account";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";
import "../components/Styles/HomePage.scss";
import { logger } from "../utils/Logger";
import LeftBar from "../components/LeftBar";
import { Spotify } from "react-spotify-embed";
import { profilesService } from "../services/ProfilesService";
import RightBar from "../components/RightBar";

export function HomePage() {
  useEffect(() => {
    getPost();
  }, []);

  let posts = AppState.posts.map((post) => {
    return (
      <div className="col-12 col-md-12" key={post.id}>
        <PostCard post={post} />
      </div>
    );
  });

  const account = AppState.account;
  let time = AppState.time;
  function timer() {
    // console.log("Yo");
    AppState.time = new Date().toLocaleTimeString();
    // logger.log("timer  AppState.time:", AppState.time);
  }
  setInterval(timer, 1000);

  async function getPost() {
    try {
      await postsService.get();
    } catch (error) {
      Pop.error(error);
    }
  }

  // async function getAllProfiles() {
  //   try {
  //     await profilesService.getAll();
  //   } catch (error) {
  //     logger.error("[ERROR]", error);
  //     Pop.error("[ERROR]", error.message);
  //   }
  // }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* SECTION LEFT ROW */}

        <div className="d-none d-md-block col-md-3 col-lg-3">
          <LeftBar />
        </div>

        {/* SECTION MIDDLE ROW */}

        <div className="col-sm-10 col-md-6 col-lg-5 justify-content mx-auto middleRow">
          <div className="row my-5 spotify rounded d-flex justify-content-center text-light">
            <div className="col-12 d-flex justify-content-center my-2">
              <h3 className="border-bottom">Your Daily Mix</h3>
            </div>
            <Spotify
              className="p-1"
              link="https://open.spotify.com/playlist/37i9dQZF1E3a3SZtwgkfb1"
            />
          </div>
          <div className="col-12"></div>
          {/* <div className="row fillerRow"></div> */}
          <div className="row d-flex align-items-center my-3 whatsOnYourMind p-3 rounded">
            <div className="col-3 col-sm-3 col-md-1 p-0">
              <div className="avatarPicture">
                <img className="avatarPicture" src={account?.picture} />
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-11 p-0 rounded-pill backgroundPost"
              data-bs-toggle="modal"
              data-bs-target="#postModal"
            >
              <p className="m-0 m-2">What's on your mind?</p>
            </div>
          </div>
          {/* <CommentForm /> */}
          <div className="row d-flex justify-content-center">{posts}</div>
        </div>

        {/* SECTION RIGHT ROW */}

        <div className="d-none d-md-block col-md-3 col-lg-3 rightBarPadding">
          <RightBar />
        </div>
      </div>

      {/* SECTION MODAL */}
      <div
        className="modal fade "
        id="postModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="postModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered  roundedCorners"
          role="document"
        >
          <div className="modal-content modalBackground roundedCorners">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100 text-light" id="modalTitleId">
                Create Post
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container-fluid ">
              <div className="row mt-2">
                <div className="col-2 col-sm-2 col-md-1 m-2 ">
                  <div className="avatarPicture">
                    <img className="avatarPicture" src={account?.picture} />
                  </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <div className="row d-flex align-items-center">
                    <div className="col-12 text-light">{account?.name}</div>
                    <div className="col-12">{time}</div>
                  </div>
                </div>
                <CommentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(HomePage);
