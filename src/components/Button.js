import '../css/button.css'

const Button = ({text, handleClick}) => {

    return (
        <button className='submit_button' onClick={handleClick}>{text}</button>
    )

}

export default Button