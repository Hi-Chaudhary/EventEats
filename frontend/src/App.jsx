import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [events, setEvents] = useState([])

  // Fetch data from your Django Backend
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events/')
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Check if Django is running on port 8000:", err))
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>EventEats Dashboard</h1>
          <p>
            Connected to Django API at <code>127.0.0.1:8000</code>
          </p>

          {/* This section maps through the events from your Django views.py */}
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            marginTop: '40px' 
          }}>
            {events.length > 0 ? (
              events.map((event, index) => (
                <div key={index} style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  padding: '15px', 
                  borderRadius: '12px', 
                  width: '280px',
                  textAlign: 'left',
                  border: '1px solid #333'
                }}>
                  <img src={event.image} alt={event.title} style={{ 
                    width: '100%', 
                    height: '150px', 
                    objectFit: 'cover', 
                    borderRadius: '8px' 
                  }} />
                  <h3 style={{ margin: '10px 0 5px 0' }}>{event.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#aaa', margin: '0' }}>{event.date}</p>
                  <p style={{ fontSize: '0.85rem', color: '#646cff' }}>{event.location}</p>
                </div>
              ))
            ) : (
              <p>Loading events from Django...</p>
            )}
          </div>
        </div>

        <button
          className="counter"
          style={{ marginTop: '40px' }}
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Project Links</h2>
          <p>Quick access to tools</p>
          <ul>
            <li>
              <a href="http://127.0.0.1:8000/admin" target="_blank" rel="noreferrer">
                Django Admin
              </a>
            </li>
            <li>
              <a href="http://127.0.0.1:8000/api/events/" target="_blank" rel="noreferrer">
                API JSON Raw
              </a>
            </li>
          </ul>
        </div>
        
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Community</h2>
          <p>Vite & React Ecosystem</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">Discord</a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App