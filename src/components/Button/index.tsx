import './button.scss';

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <button disabled className="btn">
      {title}
    </button>
  );
}

export default Button;
