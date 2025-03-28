
const Loader = () => {
  return (
    <div className="absolute inset-0 bg-slate-200/20 backdrop-blur-sm flex items-center justify-center">
      <div className="w-60 h-60 border-40 border-red-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;