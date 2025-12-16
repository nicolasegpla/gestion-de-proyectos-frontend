import './title.scss';

interface TitleProps {
    text: string;
    subText?: string;
}

export const Title = ({ text, subText }: TitleProps) => {
    return (
        <div className="title">
            <p className="title__text">{text}</p>
            <p className="title__subText">{subText && subText}</p>
        </div>
    );
};
