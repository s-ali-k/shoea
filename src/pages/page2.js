import { El } from "../utils/creatElement";
import {router} from"../routes/router";

export default function creatPage2() {
  const topPicture = El({
    element: "img",
    src: "./src/assets/icon/page2.svg",
    className: "w-[428px] h-[637px]",
  });
  const description=El({
    element:'h2',
    children:'Your satisfaction is our number one periority',
    className:" text-black font-bold text-[32px]  text-center"
  })
  const step=El({
    element:'img',
    src:"./src/assets/icon/dash2.svg",
    className:'w-[102px] h-[23px] ml-[163px] mt-[59px]'
  })
  const btn=El({
    element:"button",
    children:"next",
    className:"bg-[#212529] rounded-full w-[380px] h-[47px] text-white mt-[40px] ml-[24px]",
    eventListener: [
      {
      event: "click",
      callback: ()=>router.navigate("/page3")
      }
      ]
  })
  
  const page2=El({
    children:[topPicture,description , step, btn],
  }) 
  return page2;
}
