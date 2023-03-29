import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { AppState } from "../AppState";
import { profilesService } from "../services/ProfilesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import "../components/Styles/ProfilePage.scss";
import PostCard from "../components/PostCard";
import { App } from "../App";
import ProfileCard from "../components/ProfileCard";
import EditAccountForm from "../components/EditAccountForm";

export function profilePage() {
  useEffect(() => {
    getProfile();
    getPosts();
  }, []);
  let profile = AppState.profile;

  let posts = AppState.posts.map((post) => {
    return (
      <div className="col-md-12" key={post.id}>
        <ProfileCard post={post} />
      </div>
    );
  });

  async function getProfile() {
    try {
      await profilesService.getById(AppState.account?.id);
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  async function getPosts() {
    try {
      await profilesService.getPost(AppState.account?.id);
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
            <div
              data-bs-target="#editAccountModal"
              data-bs-toggle="modal"
              className="pleaseWork graduated mdi text-light mdi-pencil-outline"
            >
              {/* <div className="pleaseWork   graduated text-light mdi mdi-school-outline"></div> */}
            </div>
          </div>

          <div className="col-5 px-0 mx-0">
            <h1 className="text-light mt-4">{profile?.name}</h1>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-8 col-md-6 col-lg-5 mx-auto justify-content-center">
          <div className="row">{posts}</div>
        </div>
      </div>

      {/* SECTION MODAL */}
      <div
        className="modal fade "
        id="editAccountModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="editAccountModal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered  roundedCorners"
          role="document"
        >
          <div className="modal-content modalBackground roundedCorners">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100 text-light" id="modalTitleId">
                Update Account
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
                    <img className="avatarPicture" src={profile?.picture} />
                  </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <div className="row d-flex align-items-center">
                    <div className="col-12 text-light">{profile?.name}</div>
                  </div>
                </div>
                <EditAccountForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default observer(profilePage);
