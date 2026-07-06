import React, { useRef, useState } from 'react'

// Drop a royalty-free looping ambience file at public/audio/dusk-ambience.mp3
// (e.g. from mixkit.co or freesound.org, license permitting) and it will play here.
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
    } catch (err) {
      setMissing(true)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {missing && (
        <p className="font-mono text-[10px] text-parchment-faint bg-pine-deep/90 px-3 py-2 rounded-md max-w-[180px] text-right">
          Add an audio file at public/audio/dusk-ambience.mp3 to enable sound
        </p>
      )}
      <audio ref={audioRef} src="/audio/dusk-ambience.mp3" loop preload="none" />
      <button
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Mute forest ambience' : 'Play forest ambience'}
        className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500 ${
          playing
            ? 'bg-ember-bright/20 border-ember-bright shadow-lantern animate-flicker'
            : 'bg-pine-light border-moss-dim/50'
        }`}
      >
        <span className="text-xl">{playing ? '🔥' : '🕯️'}</span>
      </button>
    </div>
  )
}

export default SoundToggle
