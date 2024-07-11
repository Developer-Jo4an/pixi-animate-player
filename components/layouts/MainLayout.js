import React, {useMemo} from "react";
import {node} from "prop-types";
import ModalProvider from "../baseComponents/controllers/modalController/ModalProvider";

export default function MainLayout({children}) {
  return (
    <ModalProvider
      aliases={useMemo(() => ({
        // infoModal: {Modal: InfoModal, props: {message: "Lorem ipsum"}}
      }), [])}
    >
      <div className={"main-container"}>
        <div className={"content-wrapper"}>{children}</div>
      </div>
    </ModalProvider>
  );
}

MainLayout.propTypes = {
  children: node,
};
