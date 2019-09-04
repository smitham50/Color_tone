let loopBeat
let bassSynth

const button = document.querySelector('button')

button.addEventListener('click', () => setup())

const notes = ['a', 'c', 'e']
const octaves = ['2', '3', '4', '5', '1']


function setup() {

  bassSynth = new Tone.Synth().toMaster()

  loopBeat = new Tone.Loop(song, "4n")
 
  Tone.Transport.bpm.value = 160
  Tone.Transport.start()
  loopBeat.start(0)
}

function song(time) {
  bassSynth.triggerAttackRelease(randomNote(notes, octaves), '8n', time)
  console.log(randomNote(notes, octaves))
}

function randomNote(notesArray, octaveArray) {
  let noteIndex = Math.floor(Math.random() * 3)
  let octaveIndex = Math.floor(Math.random() * 5)

  return `${notesArray[noteIndex]}${octaveArray[octaveIndex]}`
}