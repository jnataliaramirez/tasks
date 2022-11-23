import ReactDOM from "react-dom";
import "./styles.css";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,

    document.getElementById("modal")
  );
};

export { Modal };
