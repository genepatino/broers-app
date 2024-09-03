import { useRef, useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { GlobalState } from "../../context";

function ReCaptcha() {
  const { setCaptcha } = useContext(GlobalState);
  const captchaRef = useRef(null);

  const onChange = () => {
    setCaptcha(captchaRef.current.getValue());
  };

  return (
    <ReCAPTCHA
      ref={captchaRef}
      sitekey="6LdUPjUqAAAAAJ7oMLFpLB83nIdjAtqZiUVBlcAM"
      onChange={onChange}
    />
  );
}

export { ReCaptcha };
