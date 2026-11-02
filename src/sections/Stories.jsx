
import './Stories.css'

import story01 from '../assets/images/stories/story-01.jpg'
import story02 from '../assets/images/stories/story-02.jpg'
import story03 from '../assets/images/stories/story-03.jpg'
import story04 from '../assets/images/stories/story-04.jpg'
import story05 from '../assets/images/stories/story-05.jpg'
import story06 from '../assets/images/stories/story-06.jpg'
import story07 from '../assets/images/stories/story-07.jpg'
import story08 from '../assets/images/stories/story-08.jpg'
import story09 from '../assets/images/stories/story-09.jpg'
import story10 from '../assets/images/stories/story-10.jpg'
import story11 from '../assets/images/stories/story-11.jpg'
import story12 from '../assets/images/stories/story-12.jpg'
import story13 from '../assets/images/stories/story-13.jpg'
import story14 from '../assets/images/stories/story-14.jpg'
import story15 from '../assets/images/stories/story-15.jpg'

const stories = [
  {
    number: '01',
    category: 'INSIDE THE WORKSHOP',
    title: 'Where Ideas Take Shape',
    description: 'Every machine begins with an idea, a workshop and the people who bring it to life.',
    image: story01,
  },
  {
    number: '02',
    category: 'TEAM NDORS',
    title: 'The Team on the Ground',
    description: 'The people behind the machines, representing NDORS at the competition.',
    image: story02,
  },
  {
    number: '03',
    category: 'ENGINEERING & FABRICATION',
    title: 'Precision in Fabrication',
    description: 'Hands-on work, sparks and the process of turning engineering ideas into reality.',
    image: story03,
  },
  {
    number: '04',
    category: 'VEHICLE DEVELOPMENT',
    title: 'A Machine Takes Shape',
    description: 'A closer look at one of the off-road machines built by the team.',
    image: story04,
  },
  {
    number: '05',
    category: 'OFF-ROAD MACHINES',
    title: 'Built for the Trail',
    description: 'A buggy designed to take on demanding off-road terrain.',
    image: story05,
  },
  {
    number: '06',
    category: 'COMPETITION',
    title: 'Competition Day',
    description: 'Taking the machine beyond the workshop and onto the competition ground.',
    image: story06,
  },
  {
    number: '07',
    category: 'RACING & PERFORMANCE',
    title: 'Ready for the Challenge',
    description: 'The vehicle and its team preparing for the challenges ahead.',
    image: story07,
  },
  {
    number: '08',
    category: 'TEAMWORK',
    title: 'Teamwork Beyond the Track',
    description: 'Every successful build depends on collaboration and shared effort.',
    image: story08,
  },
  {
    number: '09',
    category: 'TEAM NDORS',
    title: 'The NDORS Crew',
    description: 'A team united by engineering, friendship and a shared passion for motorsport.',
    image: story09,
  },
  {
    number: '10',
    category: 'COMPETITION GROUND',
    title: 'On the Competition Field',
    description: 'The atmosphere, preparation and experiences that make competition memorable.',
    image: story10,
  },
  {
    number: '11',
    category: 'NDORS HISTORY',
    title: 'A Team Through the Years',
    description: 'A glimpse into the people and memories that shaped the team.',
    image: story11,
  },
  {
    number: '12',
    category: 'TEAM NDORS',
    title: 'A New Chapter for NDORS',
    description: 'The team continues to grow through experience and shared ambition.',
    image: story12,
  },
  {
    number: '13',
    category: 'VEHICLE ENGINEERING',
    title: 'Engineering in Motion',
    description: 'From design and fabrication to a machine ready for the terrain.',
    image: story13,
  },
  {
    number: '14',
    category: 'VEHICLE DESIGN',
    title: 'Designed for Off-Road',
    description: 'A closer look at the details of an NDORS off-road vehicle.',
    image: story14,
  },
  {
    number: '15',
    category: 'WORKSHOP LIFE',
    title: 'Hands-on Engineering',
    description: 'Learning, building and improving through practical engineering.',
    image: story15,
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

              <span className="story-number">{story.number}</span>
            </div>

            <div className="story-content">
              <span className="story-category">{story.category}</span>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="stories-scroll-hint">
        <span>SCROLL TO EXPLORE</span>
        <div className="stories-scroll-line" />
        <span>15 STORIES</span>
      </div>
    </section>
  )
}

export default Stories
