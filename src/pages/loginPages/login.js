import { El } from "../../utils/creatElement";
export default function creatPage() {
  const arrowImg = El({
    element: "img",
    src: "../../src/assets/icon/arrow.svg",
    // src: "./src/assets/icon/arrow.svg",
    className: "w-[32px] h-[32px]  text-black mt-[12px] ml-[24px]",
  });
const arrowLink=El({
  element:"a",
  href:"http://localhost:5173/page3",
  children:[arrowImg]
})


  const logo = El({
    element: "button",
    src: "../../src/assets/icon/Slogo.svg",
    className: "w-[54px] h-[81px] mt-[76px] ml-[187px]",
    eventListener:[{
      event:"click",
      callback:()=>console.log("کلیک شد ")
      
    }]
  });
  const title = El({
    element: "h2",
    className: "text-[32px] font-bold mt-[118px] text-center",
    children: "Login to Your Account",
  });
  const emailInput = El({
    element: "input",
    type: "email",
    placeholder: "✉️ email",
    className:
      "w-[380px] h-[37px] ml-[24px] mt-[56px] pl-[12px] text-[24px]  text-gray-600",
  });
  const emailContainer = El({
    element: "form",
    children: [emailInput],
  });
  const passlInput = El({
    element: "input",
    type: "Password",
    placeholder: " 🔒 Password",
    className: "w-[380px] h-[37px] ml-[24px] mt-[56px] pl-[12px] text-[18px]",
  });
  const passContainer = El({
    element: "form",
    children: [passlInput],
  });

  const remeberme = El({
    element: "p",
    children: "Remember Me",
    className: "pl-[8px]",
  });
  const checkBox = El({
    element: "input",
    type: "checkbox",
    className: "w-[16px]",
  });
  const rememberContainer = El({
    element: "div",
    className: "flex flex-row ml-[149px] mt-[40px]",
    children: [checkBox, remeberme],
  });
  const btn=El({
    element:"button",
    children:"sign in",
    className:"bg-[#212529] rounded-full w-[380px] h-[47px] text-white mt-[250px] ml-[24px] opacity-65",

  })
  const container = El({
    element: "div",
    children: [
      arrowLink,
      logo,
      title,
      emailContainer,
      passContainer,
      rememberContainer,
      btn
    ],
  });
  return container;
}
