import "../css/style.css"
import SideBar from "./sidebar"
import Hoverbar from "./hoverbar"
import { useState } from "react"
import Cardsection from "./cardssection"
import Footer from "./footer"

function Main() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <main style={{ gridTemplateColumns: isHovered ? '20% 75% 5%' : '5% 90% 5%' }}>
                <section className="sidebar" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {isHovered ? (
                        <Hoverbar />) : (<SideBar />)}
                </section>
                <section className="header">
                    <p className="heading">Hi Suman,</p>
                    <span className="header_welcome">Welcome to Ola Krutrim Cloud</span><span className="header_beta"> Beta</span>
                    <Cardsection />
                    <Footer />
                </section>
                <section className="feedback">
                    <p>Give Your Feedback</p>
                </section>
            </main>
        </>
    )
}

export default Main