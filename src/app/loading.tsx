const Loading = () => {
  return (
    <div className="grid grid-cols-3 gap-6 w-full h-full">
      <div className="text-6xl text-black leading-relaxed">Loading...</div>
      <div className="col-span-2 h-64 flex justify-center shadow-md bg-gradient-to-r from-slate-200 to-slate-600 rounded-md animate-pulse"></div>
      <div className="col-span-3 h-64 flex justify-center shadow-md bg-gradient-to-r from-slate-200 to-slate-600 rounded-md animate-pulse"></div>
    </div>
  );
};

export default Loading;
