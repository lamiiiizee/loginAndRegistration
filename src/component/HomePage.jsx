import React from "react";

function HomePage() {
  const LogOut = () => {
    localStorage.removeItem("auther");
    window.location.reload();
  };

  const DeleteAccpunt = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="navbar flex justify-between">
        <div className="flex items-center gap-3	">
          <p className="activeStatus"></p>
          <img
            class=" h-10 w-10 rounded-full outline outline-2 outline-cyan-500 outline-offset-2"
            src="https://i.pravatar.cc/200"
            alt="profile picture"
          />
          <p class="">{localStorage.getItem("name")}</p>
        </div>
        <div className="d-flex-log-logou">
          <a className="navbar-item" onClick={LogOut}>
            logout
          </a>
          <a className="navbar-item" onClick={DeleteAccpunt}>
            Delete Account
          </a>
        </div>
      </div>
      <div className="container">
        <h1>Home Page Wrappers</h1>
      </div>
    </>
  );
}

export default HomePage;
