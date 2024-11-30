import { El } from "../../utils/creatElement";
import { router } from "../../routes/router";
import { changePage } from "../../utils/changepage";
import { createHome } from "../home";
export default function creatPage() {
  const arrowImg = El({
    element: "img",
    src: "../../src/assets/icon/arrow.svg",
    // src: "./src/assets/icon/arrow.svg",
    className: "w-[32px] h-[32px]  text-black mt-[12px] ml-[24px]",
  });
  const arrowLink = El({
    element: "a",
    href: "http://localhost:5173/page3",
    children: [arrowImg],
  });

  const logo = El({
    element: "img",
    src: "../../src/assets/icon/Slogo.svg",
    className: "w-[54px] h-[81px] mt-[76px] ml-[187px]",
   
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
    id: "email",
    className:
      "w-[380px] h-[37px] ml-[24px] mt-[56px] pl-[12px] text-[24px]  text-gray-600",
    eventListener: [
      {
        event: "change",
        // callback:()=>document.getElementById("input").style.opacity='1'
        callback: () => {
          document.getElementById("btn").style.opacity = "1";
        },
      },
    ],
  });
  const emailContainer = El({
    element: "form",
    children: [emailInput],
  });
  const passlInput = El({
    element: "input",
    id: "password",
    type: "Password",
    placeholder: " 🔒 Password",
    className: "w-[380px] h-[37px] ml-[24px] mt-[56px] pl-[12px] text-[18px]",
    eventListener: [
      {
        event: "change",
        // callback:()=>document.getElementById("input").style.opacity='1'
        callback: () => {
          document.getElementById("btn").style.opacity = "1";
        },
      },
    ],
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
  const btn = El({
    element: "button",
    type: "submit",
    id: "btn",
    children: "sign in",
    className:
      "bg-[#212529] rounded-full w-[380px] h-[47px] text-white mt-[250px] ml-[24px] opacity-65",
    eventListener: [
      {
        event: "click",
        callback: async (e) => {
          const email= document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const response = await fetch("http://localhost:3000/users");
          const data = await response.json();
          const user = data.find(
            (x) => x.email === email && x.password === password
          );
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
             changePage(createHome);            
          } else {
            alert("incorrect username or password");
          }
        },
      },
    ],
  });

  const container = El({
    element: "div",
    children: [
      arrowLink,
      logo,
      title,
      emailContainer,
      passContainer,
      rememberContainer,
      btn,
    ],
  });

  return container;
}
