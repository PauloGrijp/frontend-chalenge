import './button.scss';

interface ButtonProps {
  title: string;
  isDisabled: boolean;
  onPagination: () => void;
}

function Button({ title, onPagination, isDisabled }: ButtonProps) {
  return (
    <button
    onClick={onPagination}
    disabled={isDisabled}
    className="btn">
      {title}
    </button>
  );
}

export default Button;
