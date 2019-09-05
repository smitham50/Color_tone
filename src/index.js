let loopBeat
let synth
let filter

const button = document.querySelector('button')

button.addEventListener('click', () => setup())

const notes = ['a', 'c', 'e', 'd', 'f']
const octaves = ['1', '2', '3', '4', '5']
const durations = ['2', '4', '8', '16']


function setup() {
  synth = new Tone.Synth().toMaster()
  // filter = new Tone.Filter({
  //   type: 'lowpass'
  // })
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

  return `${notesArray[noteIndex]}${octaveArray[octaveIndex]}`
}

function randomDuration(durationsArray) {
  let durationIndex = Math.floor(Math.random() * 4)

  return `${durationsArray[durationIndex]}n`
}