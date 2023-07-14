import "./Button.scss";
const Button = (props) => {
  console.log(props.className);
  return (
    <button className={props.className || `button`}>{props.children}</button>
  );
};

export default Button;
