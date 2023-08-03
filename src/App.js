
import './css/App.css';
import { useState } from 'react';
import SignupForm from './SignupForm';
import SuccessScreen from './SuccessScreen';

/* eslint-disable */
var EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
/* eslint-enable */

function App() {

  const [successSignup, setSuccessSignup] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const checkEmail = (event) => {
    event.preventDefault()
    EMAIL_REGEX.test(email) ? setSuccessSignup(true) : setError(true)
  }

  const resetScreen = () => {
    setSuccessSignup(false)
    setEmail("")
  }

  return (
    <div className="App">
      {!successSignup && <SignupForm
        email={email}
        setEmail={setEmail}
        checkEmail={checkEmail}
        showError={error} 
        resetError={() => setError(false)}
        />}
      {successSignup && <SuccessScreen email={email} resetScreen={resetScreen} />}
    </div>
  );
}

export default App;
