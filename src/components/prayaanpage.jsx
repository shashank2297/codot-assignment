import Sidebar from "./sidebar"

function PrayaanPage() {

    return (
        <div className="prayaan">
            <section>
                <Sidebar />
            </section>
            <section className="prayaan_content">
                <h2>Prayaan Notebook</h2>
                <hr />
                <p>No Prayaan Running, create your Instance</p>
            </section>
            <section className="feedback">
                <p>Give Your Feedback</p>
            </section>
        </div>
    )
}

export default PrayaanPage
