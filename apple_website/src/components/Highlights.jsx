import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Highlights = () => {
useGSAP(()=>{
    gsap.to('#title',{
        opacity:1,
        y:0,
    })
},[])
    return (
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width ">
                <div className="mb-12 w-full itesm-end justify-between">
                    <h1 id="title" className="section-heading">Get the Highlights.</h1>
                </div>

            </div>

        </section>
    )
}

export default Highlights
