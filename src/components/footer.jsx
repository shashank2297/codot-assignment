import Quoterequest from "../assets/Quote request.png"

function Footer() {
    return (
        <div className="footer">
            <section>
                <span><img src={Quoterequest} alt="quote_request" /></span>
                <p>To know more about enterprise queries, custom quotes, and pricing</p>
            </section>
            <button>Contact us</button>
        </div>
    )

}

export default Footer