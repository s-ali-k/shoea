// export default function onbordingPage() {

// const title=El({
//   element:'h1',
//   className:'font-bold text-black',
//   children:'shoea'
// })
// const logo=El({
//   element:'img',
//   src:'./src/assets/icon/logo.svg',
//   className:'w-[26.54px] h-[39.93px] item-center '
// })
// const logoContainer=El({
//   element:'div',
//   className:' flex rounded-full bg-black w-[59px] h-[59px] items-center justify-center ',
//   children:[logo],
// })
// const firstPage=El({
//   element:'div',
//   className:'w-[426px] h-[926px]',
//   children:[titleContainer,logoContainer]
//     })
//     const titleContainer=El({
//       element:'div',
//       className:'flex-row ',
//       children:[title,logoContainer]
//     })
// return titleContainer;
// }
import { El } from "../utils/creatElement";
import { router } from "../routes/router";
export default function onbordingPage() {
  const loader = El({
    element: "img",
    src: "../src/assets/icon/spinner.svg",
    className: "absolute bottom-[117px] animate-spin ml-auto left-[190px]",
  });
  const title = El({
    element: "h1",
    children: "shoea",
    className: "font-bold text-[52px] text-[#152536]",
  });
  const logoImg = El({
    element: "img",
    src: "./src/assets/icon/logo.svg",
    className: "w-[26.54px] h-[39.93px]",
  });
  const logoContainer = El({
    element: "div",
    children: [logoImg],
    className:
      "w-[59px] h-[59px] rounded-full bg-black justify-center items-center grid",
  });
  const logo = El({
    element: "div",
    children: [logoContainer, title],
    className: "flex items-center gap-[12px]",
  });
  const container = El({
    element: "div",
    children: [logo, loader],
    className:
      "w-screen h-screen grid justify-center items-center overflow-hidden ",
  });
  setTimeout(()=>router.navigate('/welcom')
    ,4000)
  return container;
}

// let hasnavigated = false;
// if (!hasnavigated) {
//   setTimeout(() => router.navigate("/welcom"), 2000);
// } else {
//   hasnavigated = false;
// }
