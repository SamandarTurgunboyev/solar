import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

export const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className="absolute z-[100] bottom-[140px] md:right-[130px] right-[calc(50%-65px)] w-[40px] h-[40px] bg-blue md:flex hidden items-center justify-center"
      onClick={onClick}
    >
      <BsArrowRightShort className="text-white text-2xl" />
    </button>
  );
};

export const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className="absolute z-[100] bottom-[140px] md:right-[190px] right-[calc(50%+25px)] w-[40px] h-[40px] bg-blue md:flex hidden items-center justify-center"
      onClick={onClick}
    >
      <BsArrowLeftShort className="text-white text-2xl" />
    </button>
  );
};

export const SampleNextArrow2 = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className="absolute z-[100] top-[12px] left-[60px] w-[40px] h-[40px] bg-blue flex items-center justify-center"
      onClick={onClick}
    >
      <BsArrowRightShort className="text-white text-2xl" />
    </button>
  );
};

export const SamplePrevArrow2 = (props) => {
  const { style, onClick } = props;
  return (
    <button
      className="absolute z-[100] top-[12px] left-[12px] w-[40px] h-[40px] bg-blue flex items-center justify-center"
      onClick={onClick}
    >
      <BsArrowLeftShort className="text-white text-2xl" />
    </button>
  );
};
