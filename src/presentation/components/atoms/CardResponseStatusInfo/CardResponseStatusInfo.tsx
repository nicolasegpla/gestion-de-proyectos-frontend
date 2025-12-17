import './card-response-status-info.scss';

interface CardResponseStatusInfoProps {
    text: string;
    styleStatus?: string;
}

export const CardResponseStatusInfo = ({
    text,
    styleStatus = 'status-error',
}: CardResponseStatusInfoProps) => {
    return <div className={`card-response-status-info ${styleStatus}`}>{text}</div>;
};
