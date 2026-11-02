import './BackgroundVideo.css'

export default function BackgroundVideo() {
  return (
    <div className="background-video" aria-hidden="true">
      <video
        className="background-video__media"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={(event) => {
          event.currentTarget.pause()
        }}
      >
        <source src="/videos/ndors-background.mp4" type="video/mp4" />
      </video>

      <div className="background-video__overlay" />
    </div>
  )
}
