import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const HomePage = () =>{
    const circle = useRef();

   useGSAP(()=>{
    gsap.to(circle.current, {x:400, duration: 2, borderRadius: "50%"})
    console.log(circle)
   })
    return <div ref={circle} className="w-100 h-100 bg-red-700">

    </div>

}

export default HomePage