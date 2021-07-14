import React from "react";
import NavbarTab from "./NavbarTab";
import AdminTab from "./AdminTab";

const NormalMenu = ({ admin, user }) => {
  return (
    <>
      <NavbarTab name={"Frontpage"} pathTo={"/"} />
      <NavbarTab id={"productsTab"} name={"Products"} pathTo={"/products"} />

      {admin && <AdminTab pathTo={"/admin"} />}
      {!user && <NavbarTab name={"Sign up"} pathTo={"/signup"} />}
    </>
  );
};

export default NormalMenu;
