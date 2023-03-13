import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { AppState } from "../AppState";
import { profilesService } from "../services/ProfilesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import "../components/Styles/ProfilePage.scss";
import PostCard from "../components/PostCard";
import { App } from "../App";

export function profilePage() {
  useEffect(() => {
    getProfile();
    console.log(AppState.posts);
    getPosts();
  }, []);
  let search = window.location.hash;
  let route = search.split("/")[2];
  let profile = AppState.profile;

  let posts = AppState.posts.map((post) => {
    return (
      <div className="col-md-12" key={post.id}>
        <PostCard post={post} />
      </div>
    );
  });

  async function getProfile() {
    try {
      logger.log(route);
      await profilesService.getById(route);
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  async function getPosts() {
    try {
      await profilesService.getPost(route);
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  return (
    <div className="container-fluid">
      <div className="bgProfile mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <img className="coverImg" src={profile?.coverImg} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-2 offset-2 parent">
            <img className="movement parent" src={profile?.picture} alt="" />
            <div className="pleaseWork   graduated text-light mdi mdi-school-outline"></div>
          </div>

          <div className="col-5 px-0 mx-0">
            <h1 className="text-light mt-4">{profile?.name}</h1>
            <a href={profile?.github}>
              {" "}
              <img
                className="icon mx-2"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
            </a>
            <a href={profile?.linkedin}>
              {" "}
              <img
                className="icon mx-2"
                src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png"
                alt=""
              />
            </a>
            <a href={profile?.resume}>
              {" "}
              <img
                className="icon mx-2"
                src="https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-15.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-8 col-md-6 col-lg-4 justify-content-center">
          <div className="row">{posts}</div>
        </div>
      </div>
    </div>
  );

  //   {
  // //     /* <div className="row justify-content-center">
  // //   <div className="col-4 justify-content-center">
  // //     <div className="row">
  // //       <PostForm />
  // //     </div>
  // //   </div>
  // // </div> */
  //   }

  //   {
  //     /*
  // <div @click.prevent="pageNext(nextPage)" className="downArrow mdi mdi-arrow-down-thin-circle-outline"></div> */
  //   }
}
export default observer(profilePage);
