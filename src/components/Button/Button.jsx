import s from "./Button.module.css";

const Button = ({ handleLoadMore }) => {
    return (<button className={s.Button} onClick={handleLoadMore}>Load more</button>)
};
export default Button;