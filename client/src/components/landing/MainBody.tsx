import landing from "../../assets/landing.png";

type content = {
  title: String;
  body: String;
  onClick():void;
};

export const MainBody = (props: content) => {
  const { title, body,onClick } = props;
  return (
    <div className="row vh-100 align-items-center justify-content-start w-75 mx-auto">
      <div className="col-6 align-items-center justify-content-center">
        <h1 className="display-5">{title}</h1>
        <p className="text-secondary">{body}</p>
        <button className="btn btn-success text-uppercase" onClick={onClick}>
          login / register
        </button>
      </div>
      <div className="col-6 align-items-center justify-content-center">
        <img src={landing} alt="jobify" className="img-fluid" />
      </div>
    </div>
  );
};
