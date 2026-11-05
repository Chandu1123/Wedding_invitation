import React, { useState, useEffect, useRef } from 'react';
import { VolumeUpIcon, VolumeMuteIcon, IslamicStarIcon } from './IslamicOrnaments';

/**
 * Procedural Web Audio API ambient oud/acoustic harp generator
 * Provides a soothing, gentle oriental pentatonic melody (D Hijaz / Bayati feel)
 * if no external MP3 is supplied or if network blocks audio loading.
 */
class AmbientMusicSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    // Notes in Hz for a warm, contemplative oriental mode (D, Eb, F#, G, A, Bb, C, D)
    this.scale = [
      146.83, 155.56, 185.00, 196.00, 220.00, 233.08, 261.63, 293.66,
      311.13, 369.99, 392.00, 440.00, 466.16, 523.25, 587.33
    ];
  }

  start() {
    if (this.isPlaying) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.ctx = new AudioContext();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.isPlaying = true;
      this.playNoteStep();
    } catch (e) {
      console.warn('Web Audio synthesis unavailable:', e);
    }
  }

  playNoteStep() {
    if (!this.isPlaying || !this.ctx) return;

    try {
      // Pick a random harmonizing note from the mode
      const freq = this.scale[Math.floor(Math.random() * this.scale.length)];
      const now = this.ctx.currentTime;

      // Master gain node with smooth attack and long organic decay
      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0.0001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.12, now + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      // Warm triangle oscillator mimicking an acoustic string / oud
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Lowpass filter for warm, soothing timbre
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(850, now);

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 3.0);
    } catch (err) {
      // ignore audio tick glitch
    }

    // Schedule next note with calm organic timing (between 700ms and 1500ms)
    const nextInterval = 800 + Math.random() * 800;
    this.timer = setTimeout(() => this.playNoteStep(), nextInterval);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.ctx) {
      try {
        this.ctx.close();
      } catch (e) {}
      this.ctx = null;
    }
  }
}

/**
 * Section 11: Background Music Player
 * Unobtrusive luxury floating audio badge with instant play/pause
 */
export default function MusicPlayer({ config, autoPlayTriggered = false, autoPlay = false }) {
  const shouldAutoPlay = autoPlayTriggered || autoPlay;
  const { music } = config;
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const synthRef = useRef(null);

  // Initialize synth instance
  useEffect(() => {
    synthRef.current = new AmbientMusicSynthesizer();
    return () => {
      if (synthRef.current) {
        synthRef.current.stop();
      }
    };
  }, []);

  // Handle auto-play triggered after user interaction on OpeningScreen
  useEffect(() => {
    if (shouldAutoPlay && !hasInteracted) {
      setHasInteracted(true);
      startPlayback();
    }
  }, [shouldAutoPlay]);

  const startPlayback = () => {
    if (!music.enabled) return;

    const audio = audioRef.current;
    if (audio && music.audioFilePath) {
      audio.volume = 0.4;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.info('Audio file playback fallback to ambient synth:', err.message);
            // Fallback to procedural synth if file missing or errored
            if (music.enableSynthesizerFallback && synthRef.current) {
              synthRef.current.start();
              setIsPlaying(true);
            }
          });
      }
    } else if (music.enableSynthesizerFallback && synthRef.current) {
      synthRef.current.start();
      setIsPlaying(true);
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (synthRef.current) {
      synthRef.current.stop();
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  if (!music.enabled) return null;

  return (
    <div className="luxury-music-widget" role="region" aria-label="Background Music Controls">
      {/* Hidden audio element for user-provided MP3 */}
      {music.audioFilePath && (
        <audio
          ref={audioRef}
          src={music.audioFilePath}
          loop
          preload="none"
          onError={() => {
            // If audio file doesn't exist, we silently let synth take over when played
          }}
        />
      )}

      <button
        type="button"
        className={`btn-music-toggle ${isPlaying ? 'is-playing' : 'is-muted'}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        title={isPlaying ? 'Mute Music' : 'Play Wedding Music'}
      >
        <span className="music-pulse-halo" aria-hidden="true" />
        <span className="music-icon-wrap">
          {isPlaying ? <VolumeUpIcon size={20} /> : <VolumeMuteIcon size={20} />}
        </span>
        <span className="music-label-tag">
          {isPlaying ? 'Music On' : 'Music Off'}
        </span>
        {isPlaying && (
          <span className="sound-wave-bars" aria-hidden="true">
            <span className="bar bar-1" />
            <span className="bar bar-2" />
            <span className="bar bar-3" />
          </span>
        )}
      </button>
    </div>
  );
}
