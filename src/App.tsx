import { useEffect, useState } from 'react'
import './App.css'

type Stat = {
  value: string
  label: string
}

type Certificate = {
  title: string
  issuer: string
  date: string
  fileHref: string
}

type ExpoPhoto = {
  title: string
  imageHref: string
}

const stats: Stat[] = [
  { value: '12+', label: 'conference appearances' },
  { value: '5', label: 'certificate PDFs' },
  { value: '9', label: 'featured project demos' },
]

const certificates: Certificate[] = [
  {
    title: 'P Vivek',
    issuer: 'ICEARS Conferences 2026',
    date: 'Feb 2026',
    fileHref: new URL('../29-1.pdf', import.meta.url).href,
  },
  {
    title: 'M. Raju',
    issuer: 'ICEARS Conferences 2026',
    date: 'Feb 2026',
    fileHref: new URL('../29-2.pdf', import.meta.url).href,
  },
  {
    title: 'S. Pravalika',
    issuer: 'ICEARS Conferences 2026',
    date: 'Feb 2026',
    fileHref: new URL('../29-3.pdf', import.meta.url).href,
  },
  {
    title: 'R Nirmal',
    issuer: 'ICEARS Conferences 2026',
    date: 'Feb 2026',
    fileHref: new URL('../29-4.pdf', import.meta.url).href,
  },
  {
    title: 'B Kaartheesha',
    issuer: 'ICEARS Conferences 2026',
    date: 'Feb 2026',
    fileHref: new URL('../29-5.pdf', import.meta.url).href,
  },
]

const expoPhotos: ExpoPhoto[] = [
  {
    title: 'Expo Moment 01',
    imageHref: new URL('../WhatsApp Image 2026-03-18 at 6.45.06 PM.jpeg', import.meta.url).href,
  },
  {
    title: 'Expo Moment 02',
    imageHref: new URL('../IMG_20260317_162210.jpg.jpeg', import.meta.url).href,
  },
  {
    title: 'Expo Moment 03',
    imageHref: new URL('../IMG_20260316_153025.jpg.jpeg', import.meta.url).href,
  },
  {
    title: 'Expo Moment 04',
    imageHref: new URL('../20260317_32918PMByGPSMapCamera.jpg.jpeg', import.meta.url).href,
  },
  {
    title: 'Expo Moment 05',
    imageHref: new URL('../20260317_12312PMByGPSMapCamera.jpg.jpeg', import.meta.url).href,
  },
  {
    title: 'Expo Moment 06',
    imageHref: new URL('../20260317_12311PMByGPSMapCamera.jpg.jpeg', import.meta.url).href,
  },
  {
    title: 'Expo Moment 07',
    imageHref: new URL('../20260316_11923PMByGPSMapCamera.jpg.jpeg', import.meta.url).href,
  },
  {
    title: 'Expo Moment 08',
    imageHref: new URL('../20260316_115541AMByGPSMapCamera.jpg.jpeg', import.meta.url).href,
  },
  {
    title: 'Expo Moment 09',
    imageHref: new URL('../20260316_115538AMByGPSMapCamera.jpg.jpeg', import.meta.url).href,
  },
  {
    title: 'Expo Moment 10',
    imageHref: new URL('../Picsart_26-03-10_18-50-54-017.jpg.jpeg', import.meta.url).href,
  },
]

const videoSource = new URL('../video .mp4', import.meta.url).href

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    if (!isVideoOpen) {
      return undefined
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVideoOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isVideoOpen])

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <div>
          <p className="eyebrow">An emphathic Ai companion</p>
          <h1>Certificates, expo photos, and project storytelling in one place.</h1>
        </div>

        <nav className="topbar-nav" aria-label="Primary">
          <a href="#certificates">Certificates</a>
          <a href="#expo-photos">Expo Photos</a>
          <a href="#project-video">Video</a>
        </nav>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <p className="eyebrow">Conference-ready presentation site</p>
            <h2>Show your best work with a layout that feels polished, modern, and credible.</h2>
            <p className="hero-text">
              This site is built to present real conference certificates, expo photos,
              and a project explanation video so visitors can understand your story fast.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#project-video">
                Watch project video
              </a>
              <a className="secondary-action" href="#certificates">
                Review certificates
              </a>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="spotlight-card">
              <p className="spotlight-label">Current focus</p>
              <h3>Portfolio, conference, and project showcase</h3>
              <p>
                Use the sections below to highlight milestones, proof of recognition,
                and your project explanation video in a single professional experience.
              </p>
            </div>

            <dl className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section className="section-block" id="certificates">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Conference certificates</p>
              <h2>Organize your learning and speaking credentials with clarity.</h2>
            </div>
            <p className="section-note">
              Replace the sample text with your real certificates, conference names,
              and dates. The layout is already ready for your content.
            </p>
          </div>

          <div className="card-grid certificates-grid">
            {certificates.map((certificate) => (
              <article className="certificate-card" key={certificate.title}>
                <div className="certificate-mark">Certificate</div>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
                <span>{certificate.date}</span>
                <a className="certificate-link" href={certificate.fileHref} target="_blank" rel="noreferrer">
                  View PDF
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="project-video">
          <div className="video-panel">
            <div>
              <p className="eyebrow">Project explanation</p>
              <h2>Let visitors click and watch a video walkthrough of your project.</h2>
              <p className="section-note">
                The demo opens in a modal so the page stays clean while the explanation
                remains easy to reach.
              </p>
            </div>

            <button className="video-launcher" type="button" onClick={() => setIsVideoOpen(true)}>
              <span className="play-badge" aria-hidden="true">
                ▶
              </span>
              <span>
                <strong>Open project video</strong>
                <em>Click to watch the explanation</em>
              </span>
            </button>
          </div>
        </section>

        <section className="section-block" id="expo-photos">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Expo photos</p>
              <h2>Moments from An emphathic Ai companion presentations and exhibition events.</h2>
            </div>
            <p className="section-note">
              A visual gallery from conference and expo sessions connected to this project.
            </p>
          </div>

          <div className="expo-gallery">
            {expoPhotos.map((photo) => (
              <article className="expo-photo-card" key={photo.title}>
                <img src={photo.imageHref} alt={photo.title} loading="lazy" />
                <p>{photo.title}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built for a professional portfolio experience with certificates, expo photos, and a featured video.</p>
      </footer>

      {isVideoOpen ? (
        <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="video-title">
          <button
            className="video-modal-backdrop"
            type="button"
            aria-label="Close video modal"
            onClick={() => setIsVideoOpen(false)}
          />

          <div className="video-modal-card">
            <div className="video-modal-header">
              <div>
                <p className="eyebrow">Project explanation video</p>
                <h3 id="video-title">A clean walkthrough of the project story and outcome.</h3>
              </div>
              <button className="close-button" type="button" onClick={() => setIsVideoOpen(false)}>
                Close
              </button>
            </div>

            <video className="project-video" controls playsInline autoPlay>
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p className="video-caption">
              Replace the sample source with your own project explanation video when you are ready.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
