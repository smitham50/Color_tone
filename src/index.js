let loopBeat
let synth

const body = document.querySelector('body')
const button = document.querySelector('button')

button.addEventListener('click', () => setup())

const notes = ['ab', 'g', 'eb', 'db', 'bb', 'c']
const octaves = ['1', '2', '3', '4', '5']
const durations = ['2', '4', '8', '16']


function setup() {
  synth = new Tone.Synth().toMaster()
  loopBeat = new Tone.Loop(song, "4n")
 
  Tone.Transport.bpm.value = 300
  Tone.Transport.start()
  loopBeat.start(0)
}

function song(time) {
  synth.triggerAttackRelease(randomNote(notes, octaves), randomDuration(durations), time)
  console.log(randomNote(notes, octaves), randomDuration(durations))
}

function randomNote(notesArray, octaveArray) {
  let noteIndex = Math.floor(Math.random() * 5)
  let octaveIndex = Math.floor(Math.random() * 5)

  if (noteIndex === 0) {
    body.style.background = 'red'
    button.style.transform = "scale(1.2)"
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
  }

  return `${notesArray[noteIndex]}${octaveArray[octaveIndex]}`
}

function randomDuration(durationsArray) {
  let durationIndex = Math.floor(Math.random() * 4)

  return `${durationsArray[durationIndex]}n`
}