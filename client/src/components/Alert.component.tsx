import { Alert } from "@mui/material";

interface err{
    message: String;
    type: String
}

const AlertComponent = (props: err) => {
    const {message,type} = props;
  return (
    <Alert severity={type==="danger"?"error":"success"}>
      {message}
    </Alert>
  );
};

export default AlertComponent;
