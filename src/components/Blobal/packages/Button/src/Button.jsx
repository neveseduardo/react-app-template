const Button = ({ children, disabled, type, className, ...props }) => {
    return (
        <button
            className={`btn btn-round btn-${type} ${className}`}
            {...props}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
    type: "primary",
    className: "",
};

export default Button;
