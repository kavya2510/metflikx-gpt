const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[16%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="cursor-pointer">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-gray-100/80 cursor-pointer">
          ▶Play
        </button>
        <button className="mx-2 bg-gray-500/30 text-white p-4 px-12 text-xl rounded-lg cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
