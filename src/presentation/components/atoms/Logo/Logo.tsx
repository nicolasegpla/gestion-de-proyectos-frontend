import './logo.scss';

interface LogoProps {
    text: string;
}

export const Logo = ({ text }: LogoProps) => {
    return (
        <div className="logo">
            <p className="logo__p">{text}</p>
        </div>
    );
};
