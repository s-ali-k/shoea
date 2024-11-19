import Navigo from "navigo";
import { changePage } from "../utils/changepage";
import OnboardingPage from "../pages/onboarding";
import { welcom } from "../pages/welcom";
import creatPage1 from "../pages/page1";
import creatPage2 from "../pages/page2";
import creatPage3 from "../pages/page3";
import creatPage from  "../pages/loginPages/login";
export const router = new Navigo("/");
router
  .on("/", () => {
    changePage(OnboardingPage);
  })
  .on("/welcom", () => {
    changePage(welcom);
  })
  .on("/page1", () => changePage(creatPage1))
  .on("/page2", () => changePage(creatPage2))
  .on("/page3", () => changePage(creatPage3))
  .on("/login", ()=>changePage(creatPage))
