import { El } from "../utils/creatElement";
import { router } from "../routes/router";
export default function creatPage3() {
  const topPicture = El({
    element: "img",
    src: "./src/assets/icon/page3.svg",
    className: "w-[428px] h-[637px] mt-[-55px]",
  });
  const description = El({
    element: "h2",
    children: "Let’s fulfill your fashion needs with shoearight now!",
    className: " text-black font-bold text-[33px]  text-center",
  });
  const step = El({
    element: "img",
    src: "./src/assets/icon/dash3.svg",
    className: "w-[102px] h-[23px] ml-[163px] mt-[59px]",
  });
  const btn = El({
    element: "button",
    children: "Get Started",
    className:
      "bg-[#212529] rounded-full w-[380px] h-[47px] text-white mt-[40px] ml-[24px]",
    eventListener: [
      {
        event: "click",
        callback: ()=>router.navigate("/login"),
      },
    ],
  });
  const page3 = El({
    children: [topPicture, description, step, btn],
  });
  return page3;
}
