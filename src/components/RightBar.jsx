import React, { useEffect } from "react";
import { AppState } from "../AppState";
import { profilesService } from "../services/ProfilesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import ContactCard from "./ContactCard";

export default function RightBar() {
  useEffect(() => {
    getAllProfiles();
  }, []);

  async function getAllProfiles() {
    try {
      await profilesService.getAll();
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  // @ts-ignore
  let contacts = AppState.allProfiles.map((profile) => {
    return (
      <div className="col-12" key={profile.picture}>
        <ContactCard profile={profile} />
      </div>
    );
  });

  return (
    <div className="RightBar">
      <div className="row mt-3">
        <div className="col-12 text-light d-flex align-items-center">
          <p className="contactsFont">Contacts</p>
        </div>
      </div>
      <div className="row">{contacts}</div>
    </div>
  );
}
