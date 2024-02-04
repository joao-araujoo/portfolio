import Particle from "../components/Atoms/Particle/Particle";
import Main from "../components/Organisms/Main";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Thanks() {
  document.title = "Thank You! | João Araujo";

  return (
    <>
      <Particle />
      <h1 className="background-title">Thanks.</h1>
      <Main footerText="Go Back Home" footerPath="/">
        <h1 className="title" style={{ textAlign: "center", margin: "30px auto" }}>
          <MdOutlineMarkEmailRead size={200} />
          <br />
          Thanks for submitting!
        </h1>
      </Main>
    </>
  );
}
