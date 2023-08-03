import "./css/signup_form.css"
import ImageMobile from "./assets/images/illustration-sign-up-mobile.svg"
import ImageDesktop from "./assets/images/illustration-sign-up-desktop.svg"
import Button from "./components/Button"

const SignupForm = ({email, setEmail, checkEmail, showError, resetError}) => {


    return (
        <main className="signup">
            <img className="signup_image_mobile" src={ImageMobile} alt="Newsletter Layout" />
            <section className="container signup_info">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>

                <form className="email_signup">
                    <div className="label_area">
                        <label htmlFor="email">Email address</label>
                        <p className={`error_message ${showError ? "show" : ''}`}>Valid email required</p>
                    </div>
                    <input type="text" className={`${showError ? "error" : ""}`} id='email' placeholder="email@company.com" onFocus={resetError} onChange={event => setEmail(event.target.value)}  value={email}/>
                    <Button text='Subscribe to monthly newsletter' handleClick={checkEmail} />
                </form>
            </section>
            <img className="signup_image_desktop" src={ImageDesktop} alt="Newsletter Layout" />
        </main>
    )

}

export default SignupForm