import "../css/style.css"
import Sidebar from "./sidebar"
import Cardsection from "./cardssection"
import Footer from "./footer"

function Main() {

    return (
        <>
            <main >
                <section>
                        <Sidebar />
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