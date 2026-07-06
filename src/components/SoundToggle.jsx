import React, { useRef, useState } from 'react'

// Drop a royalty-free looping ambience file at public/audio/dusk-ambience.mp3
// (e.g. from mixkit.co or freesound.org, license permitting) and it will play here.
const FlameIcon = ({ lit }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={lit
      ? 'M12 2.5c-1 3-4 4.2-4 8a4 4 0 0 0 8 0c0-1.4-.6-2.3-1.2-3.2.2 1.4-.4 2.4-1.3 2.4-1.2 0-1-1.6-1.5-2.6C11.4 5.7 12.6 4.2 12 2.5Z'
      : 'M12 3c-.6 2-2.4 3-2.4 5.6a2.4 2.4 0 0 0 4.8 0C14.4 6 12.6 5 12 3Z'} />
  </svg>
)

const SoundToggle = () => {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }
    try {
      await audio.play()
      setPlaying(true)
      setMissing(false)
    } catch (err) {
      setMissing(true)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {missing && (
        <p className="font-mono text-[10px] text-ink-faint bg-surface-deep px-3 py-2 rounded-md max-w-[180px] text-right border border-subtle">
          Add an audio file at public/audio/dusk-ambience.mp3 to enable sound
        </p>
      )}
      <audio ref={audioRef} src="/audio/dusk-ambience.mp3" loop preload="none" />
      <button
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Mute ambience' : 'Play ambience'}
        className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500 text-accent ${
          playing ? 'bg-[var(--accent)]/15 border-[var(--accent)] shadow-lantern animate-flicker' : 'bg-panel border-subtle'
        }`}
      >
        <FlameIcon lit={playing} />
      </button>
    </div>
  )
}

export default SoundToggle
