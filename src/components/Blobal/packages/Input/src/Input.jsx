const Button = ({ children, disabled, type, className, ...props }) => (
    <input
        type="text"
        className={`form-control ${className}`}
        {...props}
        disabled={disabled}
    />
);

Button.defaultProps = {
    disabled: false,
    type: "text",
    className: "",
};

export default Button;
