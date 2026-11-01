
import { ArrowUpRight } from 'lucide-react'
import './Stories.css'

import workshop from '../assets/images/stories/workshop.jpg'
import fabrication from '../assets/images/stories/fabrication.jpg'
import competition from '../assets/images/stories/competition.jpg'

const stories = [
  {
    number: '01',
    category: 'INSIDE THE WORKSHOP',
    title: 'Where Ideas Take Shape',
    description:
      'The work behind every machine begins with people, ideas and hands-on engineering.',
    image: workshop,
  },
  {
    number: '02',
    category: 'ENGINEERING & FABRICATION',
    title: 'Built Through Hard Work',
    description:
      'A look at the fabrication and effort that go into bringing an off-road vehicle to life.',
    image: fabrication,
  },
  {
    number: '03',
    category: 'ON THE COMPETITION GROUND',
    title: 'Beyond The Workshop',
    description:
      'Moments from the competition ground and the experience of taking our machines out to the track.',
    image: competition,
  },
]

function Stories() {
  return (
    <section className="stories-section" id="stories">
      <div className="stories-header">
        <div>
          <span className="section-label">
            <span /> THE NDORS CHRONICLES
          </span>

          <h2>
            MORE THAN
            <span> MACHINES.</span>
          </h2>
        </div>

        <p>
          Behind every vehicle is a journey of people,
          persistence, engineering and memories.
        </p>
      </div>

      <div className="stories-grid">
        {stories.map((story) => (
          <article className="story-card" key={story.number}>
            <div className="story-image">
              <img
  src={story.image}
  alt={story.title}
  loading="lazy"
  decoding="async"
/>

              <span className="story-number">
                {story.number}
              </span>

              <span className="story-image-arrow">
                <ArrowUpRight size={23} />
              </span>
            </div>

            <div className="story-content">
              <span className="story-category">
                {story.category}
              </span>

              <h3>{story.title}</h3>

              <p>{story.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Stories
