import React from "react"

function Cardsection() {
    return (
        <div className="cards">
            <section>
                <button className="free_trial">Free Trial</button>
                <p className="card_icons"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M13.5 13.5H22.5V22.5H13.5V13.5Z" stroke="black" stroke-width="2" />
                    <path d="M30 9C30 7.3455 28.6545 6 27 6H24V3H21V6H15V3H12V6H9C7.3455 6 6 7.3455 6 9V12H3V15H6V21H3V24H6V27C6 28.6545 7.3455 30 9 30H12V33H15V30H21V33H24V30H27C28.6545 30 30 28.6545 30 27V24H33V21H30V15H33V12H30V9ZM8 28V8H28L28.003 28H8Z" fill="black" />
                </svg></p>
                <h3>Get GPU Instance</h3>
                <p className="card_content">Managed AI cloud services for full lifecycle of Generative AI needs from training to inferencing supported by platforms.</p>
                <div className="cards_detail">
                    <section className="card_info">
                        <p>GPU Card: <span>Nvidia- 1xA100</span></p>
                        <p>OS: <span>Linux</span></p>
                        <p>Type: <span>Reserved Instances</span></p>
                        <p>vCPU: <span>32</span></p>
                    </section>
                    <section className="card_info">
                        <p >GPU Memory: <span>40 GB</span></p>
                        <p >Root Disk:<span> 500GB</span></p>
                        <p >Time Period:<span> 36 hours</span></p>
                        <p >Ram: <span>128GB</span></p>
                    </section>
                </div>
                <button className="card_button">Request for GPU Instance</button>
            </section>
            <section>
                <button className="free_trial">Free Trial</button>
                <p className="card_icons"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M8.25 27.75C11.25 30.75 15.375 28.875 16.5 27.75L18.75 25.5L10.5 17.25L8.25 19.5C7.125 20.625 5.25 24.75 8.25 27.75ZM8.25 27.75L4.5 31.5M27.75 8.25C24.75 5.25 20.625 7.125 19.5 8.25L17.25 10.5L25.5 18.75L27.75 16.5C28.875 15.375 30.75 11.25 27.75 8.25ZM27.75 8.25L31.5 4.5M18.75 12L15.75 15M24 17.25L21 20.25" stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg></p>
                <h3>Get Inferencing Service </h3>
                <p className="card_content" id="interface_content">Integrate Inference API into your application or business app</p>
                <div className="cards_detail">
                    <section className="card_service">
                        <p>Rate Limit: <span>600 API calls per day</span></p>

                        <p >Time Period: <span>90 days</span></p>
                    </section>
                </div>
                <button className="card_button">Request for Interference Service</button>
            </section>
            <section>
                <button className="free_trial">Free Trial</button>
                <p className="card_icons"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M18 0C8.07492 0 0 8.07473 0 18C0 27.9253 8.07492 36 18 36C27.9251 36 36 27.9253 36 18C36 8.07473 27.9251 0 18 0ZM18 33.3119C9.55681 33.3119 2.68806 26.443 2.68806 18C2.68806 9.557 9.55681 2.68806 18 2.68806C26.4432 2.68806 33.3119 9.557 33.3119 18C33.3119 26.443 26.4432 33.3119 18 33.3119Z" fill="black" />
                    <path d="M19.5902 10.5237H14.4964C13.7541 10.5237 13.1523 11.1254 13.1523 11.8677V18.0001V24.1326C13.1523 24.8748 13.7541 25.4766 14.4964 25.4766C15.2387 25.4766 15.8404 24.8748 15.8404 24.1326V19.3442H19.5902C22.0222 19.3442 24.0006 17.3657 24.0006 14.9338C24.0006 12.5021 22.0222 10.5237 19.5902 10.5237ZM19.5902 16.6561H15.8404V13.2117H19.5902C20.5399 13.2117 21.3125 13.9844 21.3125 14.934C21.3125 15.8837 20.5401 16.6561 19.5902 16.6561Z" fill="black" />
                </svg></p>
                <h3>Prayaan Notebook</h3>
                <p className="card_content" id="prayaan_content">Integrate Inference API into your application or business app</p>
                <div className="cards_detail">
                    <section className="card_info">
                        <p>GPU Card: <span>Nvidia A100 40GB</span></p>
                        <p>OS: <span>2vCPU</span></p>
                        <p>Max Duration: <span>12 hrs</span></p>
                    </section>
                    <section className="card_info">
                        <p >OS: <span>Ubuntu 22.04.3 LTS</span></p>
                        <p >Memory: <span>15 GB</span></p>
                        <p >Python version: <span> 3.10</span></p>
                        <p >Storage: <span>20GB</span></p>
                    </section>
                </div>
                <button className="card_button">Request for Prayaan</button>
            </section>
        </div>
    )
}

export default Cardsection