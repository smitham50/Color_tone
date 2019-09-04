let loopBeat
let bassSynth

const button = document.querySelector('button')

button.addEventListener('click', () => setup())

const notes = ['a', 'c', 'e', 'd']
const octaves = ['1', '2', '3', '4']
const durations = ['2', '4', '8', '16']


function setup() {
  bassSynth = new Tone.Synth().toMaster()

  loopBeat = new Tone.Loop(song, "4n")
 
  Tone.Transport.bpm.value = 160
  Tone.Transport.start()
  loopBeat.start(0)
}

function song(time) {
  bassSynth.triggerAttackRelease(randomNote(notes, octaves), randomDuration(durations), time)
  console.log(randomNote(notes, octaves))
}

function randomNote(notesArray, octaveArray) {
  let noteIndex = Math.floor(Math.random() * 4)
  let octaveIndex = Math.floor(Math.random() * 4)

  return `${notesArray[noteIndex]}${octaveArray[octaveIndex]}`
}

function randomDuration(durationsArray) {
  let durationIndex = Math.floor(Math.random() * 4)

  return `${durationsArray[durationIndex]}n`
}