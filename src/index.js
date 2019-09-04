let loopBeat
let bassSynth

const button = document.querySelector('button')

button.addEventListener('click', setup())

function setup() {

  console.log("Yo")

  bassSynth = new Tone.MembraneSynth().toMaster()

  loopBeat = new Tone.Loop(song, "4n")
  Tone.Transport.start()
  loopBeat.start(0)
}

function song(time) {
  bassSynth.triggerAttackRelease('c1', '8n', time)
  console.log(time)
}