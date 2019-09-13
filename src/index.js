let loopBeat
let synth
let mono

const body = document.querySelector('body')
const button = document.querySelector('button')

button.addEventListener('click', () => setup())

const notes = ['ab', 'g', 'eb', 'db', 'bb', 'c']
const octaves = ['1', '2', '3', '4', '5']
const durations = ['2', '4', '8', '16']
const monoNotes = ['ab', 'bb', 'eb']


function setup() {
  synth = new Tone.Synth({
    "oscillator": {
      "type": "sine"
    }
  }).toMaster()

  mono = new Tone.MonoSynth({
    "oscillator": {
      "type": "triangle"
    },
    "filter": {
      "frequency": 300,
      "type": "lowpass",
      "rolloff": -24
    },
    "envelope": {
      "attack": 0.1,
      "decay": .05
    }
  }).toMaster()

  loopBeat = new Tone.Loop(song, "4n")
 
  Tone.Transport.bpm.value = 280
  Tone.Transport.start()
  loopBeat.start(0)
}

function triggerMono(note) {
  mono.triggerAttackRelease(note, "16n")
}

function song(time) {
  synth.triggerAttackRelease(randomNote(notes, octaves), randomDuration(durations), time)
}

function randomNote(notesArray, octaveArray) {
  let noteIndex = Math.floor(Math.random() * 5)
  let octaveIndex = Math.floor(Math.random() * 5)

  if (noteIndex === 0) {
    body.style.background = 'red'
    button.style.transform = "scale(1.2)"
    triggerMono(`${monoNotes[2]}${octaveArray[octaveIndex]}`)
  } else if (noteIndex === 1) {
    body.style.background = 'yellow'
    button.style.transform = "scale(1.4)"
  } else if (noteIndex === 2) {
    body.style.background = 'turquoise'
  } else if (noteIndex === 3) {
    body.style.background = 'orchard'
  } else if (noteIndex === 4) {
    body.style.background = 'orange'
    button.style.transform = "scale(1.6)"
  } else if (noteIndex === 5) {
    body.style.background = 'pink'
    triggerMono(`${monoNotes[0]}${octaveArray[octaveIndex]}`)
  }

  return `${notesArray[noteIndex]}${octaveArray[octaveIndex]}`
}

function randomDuration(durationsArray) {
  let durationIndex = Math.floor(Math.random() * 4)

  return `${durationsArray[durationIndex]}n`
}