import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { AppState } from "../AppState";
import { profilesService } from "../services/ProfilesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export function profilePage() {
  useEffect(() => {
    getProfile();
  }, []);
  let search = window.location.hash;
  let route = search.split("/")[2];
  let profile = AppState.profile;

  async function getProfile() {
    try {
      logger.log(route);
      await profilesService.getById(route);
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  return <div className="profilePage">{profile?.bio}</div>;
}
export default observer(profilePage);
