import "./css/success_screen.css"
import SuccessIcon from "./assets/images/icon-success.svg"
import Button from './components/Button'


const SuccessScreen = ({ email, resetScreen }) => {



    return (
        <main className="success_screen">
            <div className="success_container">
                <section className="success_main">
                    <img className="success_icon" src={SuccessIcon} alt="Success Check" />
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <span className="success_email">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                </section>
                <Button text="Dismiss message" handleClick={resetScreen} />
            </div>
        </main>
    )

}

export default SuccessScreen