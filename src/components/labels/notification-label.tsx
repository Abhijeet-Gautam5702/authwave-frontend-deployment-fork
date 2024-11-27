const NotificationLabel = ({ text }: { text: string }) => {
  return (
    <div className="bg-warning/10 rounded-6 p-10">
      <p className="text-warning text-12 2xl:text-16 tracking-wider font-medium">{text}</p>
    </div>
  );
};

export default NotificationLabel;
