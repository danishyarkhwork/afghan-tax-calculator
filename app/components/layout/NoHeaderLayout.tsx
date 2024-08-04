const NoHeaderLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center p-4">
      {children}
    </div>
  );
};

export default NoHeaderLayout;
