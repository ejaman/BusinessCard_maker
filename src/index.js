import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/auth_service";
import ImgUploader from "./service/img_uploader";
import ImgFile from "./components/imgFile/imgFile";

const authService = new AuthService();
const imgUploader = new ImgUploader();
const FileInput = (props) => <ImgFile {...props} imgUploader={imgUploader} />;

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
