import pyttsx3
import wave
import pyttsx3
from pydub import AudioSegment

username = "Petr Novák"



engine = pyttsx3.init()

voices = engine.getProperty('voices')


engine.setProperty('voice', "czech")
engine.setProperty('rate', 150)
engine.setProperty('volume', 5.5)
engine.save_to_file(username, "./name.wav")

engine.runAndWait()



sound0 = AudioSegment.from_file("./name.wav", format="wav")
sound1 = AudioSegment.from_file("./volati1.wav", format="wav")
sound2 = AudioSegment.from_file("./volati2.wav", format="wav")

comb = sound0 + sound1 + sound0 + sound2

file_handle = comb.export("./output.mp3", format="mp3")


