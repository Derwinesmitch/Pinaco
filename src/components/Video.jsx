import YouTube from "react-youtube";

const MovieClip = () => {
  const options = {
    height: "auto",
    width: "auto",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <YouTube
      videoId="NZCE3ot6lf8"
      options={options}
      onReady={_onReady}
      id="video"
      className="flex container"
    />
  );
};

export default MovieClip;
