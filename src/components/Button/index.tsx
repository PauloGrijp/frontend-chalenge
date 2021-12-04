import './button.scss';

interface ButtonProps {
  title: string;
  isDisabled: boolean;
  onClick: () => void;
}

function Button({ title, onClick, isDisabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className="btn"
    >
      {title}
    </button>
  );
}

export default Button;
