let loopBeat
let synth
let mono
let randomizer

const body = document.querySelector('body')
const button = document.querySelector('button')
const moon1 = document.querySelector('#moon-1')

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
      "type": "sine"
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
  let noteIndex = Math.floor(Math.random() * 6)
  let octaveIndex = Math.floor(Math.random() * 5)
  let binary = Math.floor(Math.random() * 2)
  
  if (binary === 0) {
    randomizer = false
  } else if (binary === 1) {
    randomizer = true
  }

  if (noteIndex === 0) {  
    body.style.background = 'red'
    button.style.transform = "scale(1.2)"
    triggerMono(randomizer ? `${monoNotes[2]}${octaveArray[octaveIndex]}` : `${monoNotes[1]}${octaveArray[octaveIndex]}`)
    moon1.style.boxShadow = '6px 6px 0 0 #ff00ce'
    moon1.style.transform = `rotate(${octaveIndex * 7}deg)`
    moon1.style.marginLeft = `${octaveIndex * 60}px`
    moon1.style.transform = "scale(.8)"
  } else if (noteIndex === 1) {
    body.style.background = 'yellow'
    button.style.transform = "scale(1.4)"
    moon1.style.boxShadow = '7px 7px 0 0 turquoise'
    moon1.style.transform = `rotate(${octaveIndex * 8}deg)`
    moon1.style.marginBottom = `${octaveIndex * 60}px`
    moon1.style.transform = "scale(1.5)"
  } else if (noteIndex === 2) {
    body.style.background = 'turquoise'
  } else if (noteIndex === 3) {
    body.style.background = 'orchard'
    moon1.style.boxShadow = '5px 5px 0 0 yellow'
    moon1.style.transform = `rotate(${binary * 30}deg)`
    moon1.style.marginTop = `${octaveIndex * 40}px`
    moon1.style.transform = "scale(1.3)"
  } else if (noteIndex === 4) {
    body.style.background = 'orange'
    button.style.transform = "scale(1.6)"
    triggerMono(randomizer ? `${monoNotes[0]}${octaveArray[octaveIndex]}` : `${monoNotes[1]}${octaveArray[octaveIndex]}`)
  } else if (noteIndex === 5) {
    body.style.background = '#ff00ce'
  }

  return `${notesArray[noteIndex]}${octaveArray[octaveIndex]}`
}

function randomDuration(durationsArray) {
  let durationIndex = Math.floor(Math.random() * 4)

  return `${durationsArray[durationIndex]}n`
}