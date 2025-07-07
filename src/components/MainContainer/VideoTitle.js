const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="cursor-pointer">
        <button className="bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg "> ▶ Play</button>
        <button className="bg-gray-500 text-black p-4 px-12 text-xl mx-2 bg-opacity-50 rounded-lg ">More Info</button>
      </div>
    </div>
  );
};
export default VideoTitle;
