
import mouseEffect from "@/common/mouseEffect";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    mouseEffect();
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
