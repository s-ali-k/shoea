import { data } from "autoprefixer";
import { El } from "../utils/creatElement";

// console.log(response[0].title);
export const fetchData = await fetch("http://localhost:3000/Products");
export const response = await fetchData.json();

export function createHome() {
  const header = El({
    element: "header",
    className: "flex flex-row",
    children: [
      El({
        element: "div",
        className: "ml-[24px] mt-[16px] ",
        children: [
          El({
            element: "img",
            src: "../src/assets/icon/inner.svg",
            className: "rounded-full",
          }),
          El({
            element: "div",
            className: "flex flex-col ml-[75px] mt-[-46px] ",
            children: [
              El({
                element: "p",
                children: "Good Morning 👋",
                className: "text-[#757475] text-[16px]",
              }),
              El({
                element: "p",
                children: "Saeed Abdilar",
                className: "text-black text-[16px]",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-row mt-[32px] ml-[120px] ",
        children: [
          El({
            element: "img",
            className: "w-[24px] h-[22px] ",
            src: "../src/assets/icon/bell.svg",
          }),
          El({
            element: "img",
            className: "w-[24px] h-[24px] ",
            src: "../src/assets/icon/heart.svg",
          }),
        ],
      }),
    ],
  });
  const searchBox = El({
    element: "form",
    children: [
      El({
        element: "input",
        type: "search",
        placeholder: "🔍search",
        className: "w-[380px]  h-[37px] ml-[24px] mt-[20px] px-[12px]",
      }),
    ],
  });
  const brands = El({
    element: "div",
    className: "grid grid-cols-4 ml-[24px] mt-[10px] gap-y-5",
    children: [
      El({
        element: "div",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className:
              "w-[60px] h-[60px] bg-[#ECECEC] rounded-full  flex justify-center items-center ",
            children: [
              El({
                element: "img",
                src: "../src/assets/brands/nike.svg",
              }),
            ],
          }),
          El({
            element: "p",
            className: "ml-[13px] mt-[13px]",
            children: "Nike",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className:
              "w-[60px] h-[60px] bg-[#ECECEC] rounded-full  flex justify-center items-center",
            children: [
              El({
                element: "img",
                src: "../src/assets/brands/adidas.svg",
              }),
            ],
          }),
          El({
            element: "p",
            className: "ml-[4px]  mt-[13px]",
            children: "Adidas",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className:
              "w-[60px] h-[60px] bg-[#ECECEC] rounded-full flex justify-center items-center",
            children: [
              El({
                element: "img",
                src: "../src/assets/brands/puma.svg",
              }),
            ],
          }),

          El({
            element: "p",
            className: "ml-[10px]  mt-[13px]",
            children: "Puma",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className:
              "w-[60px] h-[60px] bg-[#ECECEC] rounded-full  flex justify-center items-center",
            children: [
              El({
                element: "img",
                src: "../src/assets/brands/asics.svg",
              }),
            ],
          }),
          El({
            element: "p",
            className: "ml-[10px]  mt-[13px]",
            children: "Asics",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className:
              "w-[60px] h-[60px] bg-[#ECECEC] rounded-full  flex justify-center items-center",
            children: [
              El({
                element: "img",
                src: "../src/assets/brands/reebok.svg",
              }),
            ],
          }),

          El({
            element: "p",
            className: "ml-[6px]  mt-[13px]",
            children: "Reebok",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className:
              "w-[60px] h-[60px] bg-[#ECECEC] rounded-full  flex justify-center items-center",
            children: [
              El({
                element: "img",
                src: "../src/assets/brands/newb.svg",
              }),
            ],
          }),

          El({
            element: "p",
            className: " mt-[13px]",
            children: "New Ba..",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className:
              "w-[60px] h-[60px] bg-[#ECECEC] rounded-full  flex justify-center items-center",
            children: [
              El({
                element: "img",
                src: "../src/assets/brands/converse.svg",
              }),
            ],
          }),
          El({
            element: "p",
            className: " mt-[13px]",
            children: "Converse",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className:
              "w-[60px] h-[60px] bg-[#ECECEC] rounded-full  flex justify-center items-center",
            children: [
              El({
                element: "img",
                src: "../src/assets/brands/more.svg",
              }),
            ],
          }),

          El({
            element: "p",
            className: "ml-[9px]  mt-[13px]",
            children: "More..",
          }),
        ],
      }),
    ],
  });
  const textContainer = El({
    element: "div",
    className: "flex justify-around ",
    children: [
      El({
        element: "p",
        className: "text-[20px]  text-[#152536] mt-[12px] mr-[22px]",
        children: "Most Popular",
      }),
      El({
        element: "p",
        className: "text-[16px] text-[#152536] mt-[22px] ml-[146px]",
        children: "See All",
      }),
    ],
  });
  const filter = El({
    element: "div",
    className:
      "flex flex-row ml-[24px] mt-[20px] overflow-x-auto whitespace-nowrap",
    children: [
      El({
        element: "button",
        className:
          "min-w-[60px] h-[39px] bg-[#343A40] text-white rounded-[20px]",
        children: "All",
      }),
      El({
        element: "button",
        className:
          " text-[16px] min-w-[75px] h-[39px]bg-[#343A40] text-[#343A40] bg-white rounded-[20px] border-2 border-solid border-black flex justify-center items-center ml-[12px] ",
        children: "Nike",
      }),
      El({
        element: "button",
        className:
          " text-[16px] min-w-[94px] h-[39px]bg-[#343A40] text-[#343A40] bg-white rounded-[20px] border-2 border-solid border-black flex justify-center items-center ml-[12px] ",
        children: "Adidas",
      }),
      El({
        element: "button",
        className:
          " text-[16px] min-w-[84px] h-[39px]bg-[#343A40] text-[#343A40] bg-white rounded-[20px] border-2 border-solid border-black flex justify-center items-center ml-[12px] ",
        children: "Puma",
      }),
      El({
        element: "button",
        className:
          " text-[16px] min-w-[75px] h-[39px]bg-[#343A40] text-[#343A40] bg-white rounded-[20px] border-2 border-solid border-black flex justify-center items-center ml-[12px] ",
        children: "Asics",
      }),
      El({
        element: "button",
        className:
          " text-[16px] min-w-[75px] h-[39px]bg-[#343A40] text-[#343A40] bg-white rounded-[20px] border-2 border-solid border-black flex justify-center items-center ml-[12px] ",
        children: "reebok",
      }),
      El({
        element: "button",
        className:
          " text-[16px] min-w-[75px] h-[39px]bg-[#343A40] text-[#343A40] bg-white rounded-[20px] border-2 border-solid border-black flex justify-center items-center ml-[12px] ",
        children: "New Ba",
      }),
      El({
        element: "button",
        className:
          " text-[16px] min-w-[75px] h-[39px]bg-[#343A40] text-[#343A40] bg-white rounded-[20px] border-2 border-solid border-black flex justify-center items-center ml-[12px] ",
        children: "Convers",
      }),
    ],
  });
  const products = El({
    element: "div",
    className: "grid grid-cols-2 mt-[24px] ml-[24px] mb-[40px]",
    children: response.slice(3, 9).map((item) =>
      El({
        element: "a",
        href:'/products/'+item.id,
        className: "flex flex-col rounded-md",
        children: [
          El({
            element: "img",
            src: item.images,
            className: "w-[182px] h-[182px] rounded-[24px]",
          }),
          El({ element: "h4", children: item.title }),
          El({ element: "span", children: `$ ${item.price}` }),
        ],
      })
    ),
  });
  const footer = El({
    element: "div",
    className: "flex flex-row  justify-around mb-[16px] mr-[48px]",
    children: [
      El({
        element: "img",
        src: "../src/assets/icon/home.svg",
        className: "pl-[44px]",
      }),
      El({
        element: "img",
        src: "../src/assets/icon/cart.svg",
        className: "pl-[44px]",
      }),
      El({
        element: "img",
        src: "../src/assets/icon/orders.svg",
        className: "pl-[44px]",
      }),
      El({
        element: "img",
        src: "../src/assets/icon/wallet.svg",
        className: "pl-[44px]",
      }),
      El({
        element: "img",
        src: "../src/assets/icon/profile2.svg ",
        className: "pl-[44px]",
      }),
    ],
  });
  const container = El({
    children: [
      header,
      searchBox,
      brands,
      textContainer,
      filter,
      products,
      footer,
    ],
  });
  return container;
}
