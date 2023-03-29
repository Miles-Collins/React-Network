import { observer } from "mobx-react-lite";
import React from "react";
import { AppState } from "../AppState";
import { Account } from "../models/Account";
import { accountService } from "../services/AccountService";
import { BindEditable } from "../utils/FormHandler";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import "../components/Styles/CommentForm.scss";

function EditAccountForm() {
  let editable = { ...(AppState.account || new Account({})) };
  const bindEditable = BindEditable(editable);
  const account = AppState.account;
  const placeholder = `What's on  your mind, ${account?.name}?`;

  async function update() {
    try {
      debugger;
      window.event?.preventDefault();
      logger.log("[EDITABLE]", { editable });
      await accountService.edit(editable);
      editable = new Account({});
    } catch (error) {
      logger.error("[ERROR]", error);
      Pop.error("[ERROR]", error.message);
    }
  }

  return (
    <div className="EditAccountForm col-12">
      <form
        onSubmit={update}
        key={editable.id}
        className="row d-flex justify-content-center"
      >
        {/* STUB NAME */}
        <div className="col-6 mt-3 mb-3 textAreaBg">
          <label className="form-label" htmlFor="">
            Name
          </label>
          <input
            defaultValue={editable.name}
            className="form-control inputForm editFontSize"
            name="name"
            id="name"
            type="text"
            placeholder="Name..."
            onChange={bindEditable}
          />
        </div>

        {/* STUB EMAIL */}
        <div className="col-6 mt-3 mb-3 textAreaBg">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            defaultValue={editable.email}
            className="form-control inputForm editFontSize"
            name="email"
            id="email"
            type="text"
            onChange={bindEditable}
          />
        </div>

        {/* STUB PICTURE */}
        <div className="col-6 mb-3 textAreaBg">
          <label className="form-label" htmlFor="">
            Picture
          </label>
          <input
            defaultValue={editable.picture}
            className="form-control inputForm editFontSize"
            name="picture"
            id="picture"
            type="url"
            onChange={bindEditable}
          />
        </div>

        {/* STUB COVER IMAGE */}
        <div className="col-6 mb-3 textAreaBg">
          <label className="form-label" htmlFor="">
            Cover Image
          </label>
          <input
            defaultValue={editable.coverImg}
            className="form-control inputForm editFontSize"
            name="coverImg"
            id="coverImg"
            type="url"
            onChange={bindEditable}
          />
        </div>

        {/* STUB CLASS */}
        <div className="col-3 mb-3 textAreaBg">
          <label className="form-label" htmlFor="">
            Class
          </label>
          <input
            defaultValue={editable.class}
            className="form-control inputForm"
            name="class"
            id="class"
            type="text"
            onChange={bindEditable}
          />
        </div>

        {/* STUB GITHUB */}
        <div className="col-3 mb-3 textAreaBg">
          <label className="form-label" htmlFor="">
            GitHub
          </label>
          <input
            defaultValue={editable.github}
            className="form-control inputForm"
            name="github"
            id="github"
            type="url"
            onChange={bindEditable}
          />
        </div>

        {/* STUB LINKEDIN */}
        <div className="col-3 mb-3 textAreaBg">
          <label className="form-label" htmlFor="">
            LinkedIn
          </label>
          <input
            className="form-control inputForm"
            name="linkedin"
            id="linkedin"
            type="text"
          />
        </div>

        {/* STUB RESUME */}
        <div className="col-3 mb-3 textAreaBg">
          <label className="form-label" htmlFor="">
            Resume
          </label>
          <input
            className="form-control inputForm"
            name="resume"
            id="resume"
            type="text"
          />
        </div>

        {/* STUB GRADUATED */}
        <div className="col-12 mb-3 textAreaBg">
          <label className="form-check-label" htmlFor="">
            Has Graduated?
          </label>
          <input
            className="form-check-control inputForm"
            name="graduated"
            id="graduated"
            type="checkbox"
            onChange={bindEditable}
          />
        </div>

        {/* STUB BIO */}
        <div className="col-12 mb-3 textAreaBg">
          <label className="form-label" htmlFor="">
            Biography
          </label>
          <textarea
            defaultValue={editable.bio}
            className="form-control inputForm editFontSize"
            name="bio"
            id="bio"
            onChange={bindEditable}
          />
        </div>

        {/* STUB SUBMIT BUTTON */}
        <button
          data-bs-dismiss="modal"
          type="submit"
          className="col-12 postButton d-flex align-items-center justify-content-center my-3 rounded"
        >
          <p className="m-2">Save</p>
        </button>
      </form>
    </div>
  );
}
export default observer(EditAccountForm);
