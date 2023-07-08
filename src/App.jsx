import { useState } from 'react'
import reactLogo from './assets/react.svg'
import myLogo from './assets/myLogo.svg'
import dockerLogo from './assets/docker.svg'
import viteLogo from './assets/vite.svg'
import gitLogo from './assets/git.svg'
import githubLogo from './assets/github-2.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/Maverick7274" target="_blank" rel="noreferrer">
          <img src={myLogo} className="logo mylogo" alt="My logo" />
        </a>
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
          <img src={dockerLogo} className="logo docker" alt="Docker logo" />
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <img src={gitLogo} className="logo git" alt="git logo" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img src={githubLogo} className="logo github" alt="GitHub logo" />
        </a>
        <a href="https://overleaf.com/" target="_blank" rel="noreferrer">
          <img src="https://images.ctfassets.net/nrgyaltdicpt/h9dpHuVys19B1sOAWvbP6/5f8d4c6d051f63e4ba450befd56f9189/ologo_square_colour_light_bg.svg" className="logo overleaf" alt="GitHub logo" />
        </a>
      </div>
      <h1>Vite + React + Git + Docker + GitHub + Overleaf</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>This is a Test for Docker</p>
        <div className='link-tab'>
          <a href='https://www.overleaf.com/read/rzrdkkhdgpph' rel='noreferrer' target='_blank'>
            Overleaf Report
          </a>
          <a href='https://github.com/Maverick7274/NTCC-Report-2023' rel='noreferrer' target='_blank'>
            Main NTCC GitHub Repository
          </a>
          <a href='https://github.com/Maverick7274/NTCC-Git.git' rel='noreferrer' target='_blank'>
            Git & GitHub Practical Experiment Repository
          </a>
          <a href='https://github.com/Maverick7274/NTCC-Docker.git' rel='noreferrer' target='_blank'>
            Docker Practical Experiment Repository
          </a>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, Git, GitHub, & Docker logos to learn more
      </p>
    </>
  )
}

export default App
