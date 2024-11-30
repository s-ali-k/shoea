import Navigo from "navigo";
import { El } from "../../utils/creatElement";
import { response } from "../home";

export const carts = (id) => {
  return fetch("http://localhost:3000/Products")
    .then((response) => response.json())
    .then((elem) => {
      let product = elem.find((x) => x.id == id);
      
      return El({
        element: "div",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className: "flex flex-col",
            children: [
              // "" + product?.title,
              El({
                element: "img",
                src: product.images,
                className: "object-cover w-screen h-96",
              }),
              El({
                element: "div",
                className: "flex flex-row justify-between",
                children: [
                  El({
                    element: "h1",
                    className: "text-[32px] font-bold mt-[5ox]",
                    children: product.title,
                  }),
                  El({
                    element: "img",
                    src: "../../src/assets/icon/heart.svg",
                  }),
                ],
              }),
              El({
                element: "p",
                className:
                  "w-[60px] h-[20px] bg-[#eeeff0] text-[10px] text-center rounded-[5px] pt-[3px]",
                children: "sold 5731",
              }),
            ],
          }),
          El({
            element: "h1",
            className: "mt-[10px] border-solid border-t border-gray-200",
            children: "description",
          }),
          El({
            element: "p",
            className: "text-[#98959b] mt-[10px]",
            children:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, t ut labore et dolore magna aliqua. Ut enim ad minim",
          }),
          El({
            element: "p",
            className: "mt-[10px]",
            children: "Size",
          }),
          El({
            element: "div",
            className: "flex flex-row",
            children:[
              // El({
              //   element:'button',
              //   className:"w-[10px] h-[10px] rounded-full border-black text-center bg-red-500",
              //   children:product.size.slice(0,1)

              // })
            ]
          }),
        ],
      });
    });
};
