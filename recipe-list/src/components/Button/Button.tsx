import style from './Button.module.scss';

type ButtonProps = {
    type: 'button' | 'submit';
    onClick?: () => void;
    label: string;
}

export default function Button (props: ButtonProps) {
    const { label, onClick, type } = props;
    return (
        <button
            className={style.button}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
}
