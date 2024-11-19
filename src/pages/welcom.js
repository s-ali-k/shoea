import { El } from "../utils/creatElement";
import { router } from "../routes/router";
 export function welcom(){
     const title=El({
         element:'h2',
         children:'welcom to 👋 ',
         className:" text-[40px] text-white font-bold",
     })

const shoea=El({
    element:'h2',
    children:'Shoea',
    className: "font-bold text-[72px] text-white",
})
const description=El({
    element:'p',
    children:'The best sneakers & shoes e-commerse app of the century for your fashion needs!',
    className: " text-[16px] text-white font-bold",
})
const container=El({
    element:'div',
    className:"flex  flex-col-reverse ml-[32px] mb-[74px] z-10",
    children:[description,shoea,title]
})
const filter=El({
    element:'div',
    className: "bg-gradient-to-b from-[#00000000] to-[#000000CC] w-screen h-screen absolute"
})
const back=El({
    element:'div',
    className:'bg-[url("./src/assets/icon/shoes.svg")] flex h-screen w-screen object-cover item-center justify-center ',
    children:[ container,filter]
    
})
setTimeout(()=>router.navigate('/page1')
    ,3000)
return back
 }