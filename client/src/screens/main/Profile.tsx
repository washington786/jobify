import React from "react";

const Profile = () => {
  return (
    <div className="col-8 bg-light py-2 px-4">
      <h1 className="fs-5 fw-medium text-secondary text-uppercase ">
        Update profile
      </h1>
      <form method="post" className="form col-12 my-3">
        <div className="d-flex gap-2 my-2">
          <div className="form-group col-6">
            <label htmlFor="" className="form-label">
              First Name
            </label>
            <input type="text" name="firstName" className="form-control" />
          </div>
          <div className="form-group col-6">
            <label htmlFor="" className="form-label">
              Last Name
            </label>
            <input type="text" name="lastName" className="form-control" />
          </div>
        </div>
        <div className="form-group col-6">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="text" name="email" className="form-control" />
        </div>

        <button type="submit" className="btn btn-success text-uppercase w-50 my-2">update profile</button>
      </form>
    </div>
  );
};

export default Profile;
