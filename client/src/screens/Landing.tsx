import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { MainBody } from "../components/landing/MainBody";

const Landing = () => {
  const title: String = "Job Tracking App";

  const navigation = useNavigate();

  const transitToRegister = ()=>{
    navigation('/register');
  }

  const body: String =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita repudiandae libero ad fugiat ullam architecto quod culpa sint voluptas, non corrupti sequi natus beatae saepe eligendi at. Consequuntur, alias sequi?";

  return (
    <Wrapper>
      <MainBody title={title} body={body} onClick={transitToRegister}/>
    </Wrapper>
  );
};

export default Landing;
