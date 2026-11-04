import { useEffect, useMemo, useState } from 'react'
import {
  UserRound,
  Search,
  X,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react'
import './Alumni.css'

const alumniBatches = [
  {
    batch: '2025',
    members: Array.from({ length: 6 }, (_, index) => ({
      id: `2025-${index + 1}`,
      name: `Alumni Member ${String(index + 1).padStart(2, '0')}`,
      role: 'FORMER TEAM MEMBER',
      department: 'Mechanical Engineering',
      batch: '2025',
    })),
  },
  {
    batch: '2024',
    members: Array.from({ length: 6 }, (_, index) => ({
      id: `2024-${index + 1}`,
      name: `Alumni Member ${String(index + 1).padStart(2, '0')}`,
      role: 'FORMER TEAM MEMBER',
      department: 'Mechanical Engineering',
      batch: '2024',
    })),
  },
  {
    batch: '2023',
    members: Array.from({ length: 6 }, (_, index) => ({
      id: `2023-${index + 1}`,
      name: `Alumni Member ${String(index + 1).padStart(2, '0')}`,
      role: 'FORMER TEAM MEMBER',
      department: 'Mechanical Engineering',
      batch: '2023',
    })),
  },
]

function Alumni() {
  const [selectedBatch, setSelectedBatch] = useState('ALL')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAlumni, setSelectedAlumni] = useState(null)

  const allAlumni = useMemo(
    () => alumniBatches.flatMap((group) => group.members),
    [],
  )

  const filteredAlumni = useMemo(() => {
    return allAlumni.filter((member) => {
      const matchesBatch =
        selectedBatch === 'ALL' || member.batch === selectedBatch

      const matchesSearch =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.batch.includes(searchTerm)

      return matchesBatch && matchesSearch
    })
  }, [allAlumni, selectedBatch, searchTerm])

  useEffect(() => {
    if (!selectedAlumni) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') setSelectedAlumni(null)
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedAlumni])

  return (
    <main className="alumni-page">
      <section className="alumni-hero">
        <div className="alumni-hero-content">
          <span className="alumni-eyebrow">
            THE LEGACY BEHIND NDORS
          </span>

          <h1>
            OUR <span>ALUMNI</span>
          </h1>

          <p>
            The journey doesn't end when the chapter closes.
            Meet the people who helped build NDORS and carry
            its legacy forward.
          </p>
        </div>
      </section>

      <div className="alumni-content">
        <section className="alumni-intro">
          <div className="alumni-section-heading">
            <span className="alumni-eyebrow">ONE TEAM. MANY GENERATIONS.</span>
            <h2>Beyond <span>Graduation</span></h2>
            <p>
              Every generation leaves something behind.
              The knowledge, experience and memories continue
              to shape the team.
            </p>
          </div>

          <div className="alumni-stats">
            <div className="alumni-stat">
              <GraduationCap size={25} />
              <strong>{alumniBatches.length}</strong>
              <span>GENERATIONS</span>
            </div>

            <div className="alumni-stat">
              <UserRound size={25} />
              <strong>{allAlumni.length}</strong>
              <span>PROFILE PLACEHOLDERS</span>
            </div>
          </div>
        </section>

        <section className="alumni-directory">
          <div className="alumni-directory-heading">
            <div>
              <span className="alumni-eyebrow">THE NDORS FAMILY</span>
              <h2>Alumni <span>Directory</span></h2>
              <p>Explore members from different graduating batches.</p>
            </div>

            <span className="alumni-results-count">
              {String(filteredAlumni.length).padStart(2, '0')} PROFILES
            </span>
          </div>

          <div className="alumni-controls">
            <div className="alumni-batch-filters">
              <button
                className={selectedBatch === 'ALL' ? 'active' : ''}
                onClick={() => setSelectedBatch('ALL')}
              >
                ALL BATCHES
              </button>

              {alumniBatches.map((group) => (
                <button
                  key={group.batch}
                  className={selectedBatch === group.batch ? 'active' : ''}
                  onClick={() => setSelectedBatch(group.batch)}
                >
                  {group.batch}
                </button>
              ))}
            </div>

            <label className="alumni-search">
              <Search size={18} />
              <input
                type="search"
                placeholder="Search alumni..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          {filteredAlumni.length > 0 ? (
            <div className="alumni-grid">
              {filteredAlumni.map((member, index) => (
                <button
                  className="alumni-card"
                  key={member.id}
                  onClick={() => setSelectedAlumni(member)}
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <div className="alumni-card-top">
                    <div className="alumni-avatar">
                      <UserRound size={48} strokeWidth={1.1} />
                    </div>

                    <span className="alumni-card-batch">
                      BATCH {member.batch}
                    </span>
                  </div>

                  <div className="alumni-card-details">
                    <span className="alumni-card-role">{member.role}</span>
                    <h3>{member.name}</h3>
                    <p>{member.department}</p>
                  </div>

                  <div className="alumni-card-footer">
                    <span>VIEW PROFILE</span>
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="alumni-empty">
              <Search size={30} />
              <h3>No alumni found</h3>
              <p>Try another name or select a different batch.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedBatch('ALL')
                }}
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </section>

        <section className="alumni-legacy">
          <span className="alumni-eyebrow">BUILT BY MANY. CARRIED BY ALL.</span>
          <h2>The legacy <span>continues.</span></h2>
          <p>
            From the first idea to every machine built after it,
            every member is part of the NDORS story.
          </p>
        </section>
      </div>

      {selectedAlumni && (
        <div
          className="alumni-modal-backdrop"
          onClick={() => setSelectedAlumni(null)}
          role="presentation"
        >
          <section
            className="alumni-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="alumni-modal-name"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="alumni-modal-close"
              onClick={() => setSelectedAlumni(null)}
              aria-label="Close profile"
            >
              <X size={21} />
            </button>

            <div className="alumni-modal-avatar">
              <UserRound size={70} strokeWidth={1} />
            </div>

            <span className="alumni-eyebrow">
              NDORS ALUMNI · BATCH {selectedAlumni.batch}
            </span>

            <h2 id="alumni-modal-name">{selectedAlumni.name}</h2>

            <p>{selectedAlumni.role}</p>

            <div className="alumni-modal-info">
              <span>DEPARTMENT</span>
              <strong>{selectedAlumni.department}</strong>
            </div>

            <div className="alumni-modal-note">
              Profile details will be updated with verified alumni
              information.
            </div>
          </section>
        </div>
      )}
    </main>
  )
}

export default Alumni