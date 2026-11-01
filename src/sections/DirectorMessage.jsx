
import './DirectorMessage.css'

function DirectorMessage() {
  return (
    <section className="director-section">
      <div className="director-image">
        <div className="director-image-placeholder">
          <span>NDORS</span>
          <p>FACULTY DIRECTOR</p>
        </div>
      </div>

      <div className="director-content">
        <span className="section-label">
          <span /> A WORD FROM OUR MENTOR
        </span>

        <h2>
          GUIDED BY
          <span> EXPERIENCE.</span>
        </h2>

        <p className="director-quote">
          Every engineering journey is built on curiosity,
          dedication and the willingness to push boundaries.
          Our journey continues with the support and guidance
          of our mentors.
        </p>

        <div className="director-signature">
          <span className="signature-line" />
          <div>
            <h3>Faculty Director</h3>
            <p>Team NDORS · NIT Durgapur</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DirectorMessage
