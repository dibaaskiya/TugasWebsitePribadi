import { useEffect } from 'react'
import './css/style.css'
import heroImg from './assets/diba.png'

export default function App() {
  useEffect(() => {
    const motionIsReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealElements = document.querySelectorAll('.reveal:not(.is-revealed)')

    if (motionIsReduced || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15 }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Kembali ke awal">
            DIBSI PAGE<span>.</span>
          </a>
          <nav aria-label="Navigasi utama">
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="mailto:dibaadzkia@student.upi.edu">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="hero-copy reveal is-revealed">
            <p className="eyebrow">
              <span></span> Computer Science Education · 2025
            </p>
            <h1 style={{ color: 'black' }} id="hero-title">
              Adiba Adzkia<br />
              <em>Azzahra.</em>
            </h1>
            <p className="hero-intro">
              Get to Know me As Mahasiswi Ilmu Komputer di Universitas Pendidikan Indonesia yang senang eksplor ide, berbagai macam genre musik, dan film.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">
                Get to know me <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="https://instagram.com/dibaadzkia" target="_blank" rel="noopener noreferrer">
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual reveal is-revealed">
            <div className="hero-image-wrap">
              <img src={heroImg} alt="Abstract purple layered tiles" width="343" height="361" />
            </div>
            <span className="floating-tag tag-year">UPI '25</span>
            <span className="floating-tag tag-place">Based in Indonesia</span>
          </div>
        </section>

        <aside className="identity-strip" aria-label="Ringkasan profil">
          <span>Computer Science Education</span>
          <i aria-hidden="true">✦</i>
          <span>UPI 2025</span>
          <i aria-hidden="true">✦</i>
          <span>BEM KEMAKOM</span>
        </aside>

        <section className="about-section section-shell" id="about" aria-labelledby="about-title">
          <div className="section-label reveal">
            <span>01</span> / About
          </div>
          <div className="about-content">
            <h2 style={{ color: 'black' }} className="reveal" id="about-title">
              Curious mind,<br />
              <em>creative heart.</em>
            </h2>
            <div className="about-details reveal">
              <p>
                Alohaa aku diba, mahasiswi Ilmu Komputer Universitas Pendidikan Indonesia angkatan 2025. 
                Di luar kesibukan dikelas dan organisasi, musik dan film menjadi bagian dari keseharian akuu.
              </p>
              <div className="hobby-grid">
                <article className="hobby-card">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 18V5l11-2v13M9 9l11-2M6 21c2 0 3-1.1 3-2.5S8 16 6 16s-3 1.1-3 2.5S4 21 6 21Zm11-2c2 0 3-1.1 3-2.5S19 14 17 14s-3 1.1-3 2.5S15 19 17 19Z" />
                  </svg>
                  <span>Listening to</span>
                  <strong>Music</strong>
                </article>
                <article className="hobby-card">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M7 5v14M17 5v14M3 9h4m10 0h4M3 15h4m10 0h4" />
                  </svg>
                  <span>Watching</span>
                  <strong>Films</strong>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section section-shell" id="journey" aria-labelledby="journey-title">
          <div className="section-label reveal">
            <span>02</span> / Journey
          </div>
          <div className="journey-grid">
            <div className="journey-card reveal">
              <div className="journey-mark" aria-hidden="true">
                <span>01</span>
                <i></i>
              </div>
              <div className="journey-copy">
                <p className="current-label">Currently</p>
                <h2 style={{ color: 'black' }} id="journey-title">Badan Eksekutif Mahasiswa KEMAKOM</h2>
                <p className="journey-institution">Universitas Pendidikan Indonesia</p>
                <p className="journey-role">Talent and Recreation</p>
              </div>
              <span className="journey-arrow" aria-hidden="true">↗</span>
            </div>

            <div className="journey-card reveal">
              <div className="journey-mark" aria-hidden="true">
                <span>02</span>
                <i></i>
              </div>
              <div className="journey-copy">
                <p className="past-label">Past Experience</p>
                <h2 style={{ color: 'black' }}>Majelis Perwakilan Kelas</h2>
                <p className="journey-institution">MAN 2 Kota Makassar</p>
              </div>
              <span className="journey-arrow" aria-hidden="true">↗</span>
            </div>
          </div>
        </section>

        <section className="gallery-section section-shell" id="gallery" aria-labelledby="gallery-title">
          <div className="section-label reveal">
            <span>03</span> / Gallery
          </div>
          <div className="gallery-content">
            <h2 style={{ color: 'black' }} className="reveal" id="gallery-title">
              Moments &<br />
              <em>Memories.</em>
            </h2>
            <div className="gallery-grid reveal">
              <div className="gallery-item">
                <img src="src/assets/campus.png" alt="Moment 1"style={{width: '300px' , height: '200px'}} />
                <div >
                  <span><b>Campus Life - Universitas Pendidikan Indonesia </b><br/></span><br></br>

                </div>
              </div>
              <div className="gallery-item">
                <img src="src/assets/bem.png" alt="Moment 2"style={{width: '300px' , height: '200px'}} /> 
                <div>
                  <span><b>Organization - BEM KEMAKOM Activity </b><br/> </span> <br></br>
                  
                </div>
              </div>
              <div className="gallery-item">
                <img src="/src/assets/shs.png" alt="Moment 3"style={{width: '300px' , height: '200px'}} />
                <div>
                  <span><b>High School - MAN 2 Kota Makassar </b><br/></span><br></br>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel reveal">
            <div className="contact-heading">
              <p className="contact-eyebrow">Let's connect</p>
              <h2 id="contact-title">Find me in your favorite corner of the internet.</h2>
            </div>
            <div className="contact-links">
              <a href="mailto:dibaadzkia@student.upi.edu">
                <span>Email</span>
                <strong>dibaadzkia@student.upi.edu</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a href="https://open.spotify.com/search/diba%20adzkiy" target="_blank" rel="noopener noreferrer">
                <span>Spotify</span>
                <strong>diba adzkiy</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a href="https://instagram.com/dibaadzkia" target="_blank" rel="noopener noreferrer">
                <span>Instagram</span>
                <strong>@dibaadzkia</strong>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Adiba Adzkia Azzahra</p>
        <p>Made with curiosity.</p>
      </footer>
    </>
  )
}