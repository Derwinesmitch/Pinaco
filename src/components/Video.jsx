import YouTube from "react-youtube";

const MovieClip = () => {
  const options = {
    height: "auto",
    width: "550px",
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
    />
  );
};

export default MovieClip;
