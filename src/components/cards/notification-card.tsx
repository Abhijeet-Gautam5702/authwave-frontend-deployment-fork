import { BiErrorCircle } from "react-icons/bi";

interface NotificationCardProps {
  cardStyle: string;
  text: string;
  textStyle: string;
  icon: React.ReactNode;
  iconStyle: string;
}

const NotificationCard = ({
  cardStyle,
  text,
  textStyle,
  icon,
  iconStyle,
}: NotificationCardProps) => {
  return (
    <div
      className={`${cardStyle} flex flex-row justify-between items-start gap-10 p-12 2xl:p-18 rounded-6 2xl:rounded-10 transition-all duration-300`}
    >
      {icon && <div className={`${iconStyle} flex-center`}>{icon}</div>}
      <p className={textStyle}>{text}</p>
    </div>
  );
};

export const ErrorNotificationCard = ({ text }: { text: string }) => {
  return (
    <NotificationCard
      cardStyle="bg-danger-2"
      text={text}
      textStyle="text-14 2xl:text-18 text-white font-medium"
      icon={<BiErrorCircle className="text-yellow-400 text-24 2xl:text-30" />}
      iconStyle="text-14 2xl:text-18"
    />
  );
};

export const SuccessNotificationCard = ({ text }: { text: string }) => {
  return <div>SuccessNotificationCard</div>;
};

export const WarningNotificationCard = ({ text }: { text: string }) => {
  return <div>WarningNotificationCard</div>;
};
