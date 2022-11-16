from http import server
import pyttsx3
from pydub import AudioSegment
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.parse as urlparse
import base64

# from urllib.parse import urlencode, parse_qs, uses_relative
print("start")

HOST = "localhost"
PORT = 9000


# check if the logs on pythonanywhere change, they probably don't so figure it out somehow


# sound
engine = pyttsx3.init()

voices = engine.getProperty('voices')

engine.setProperty('voice', "czech")
engine.setProperty('rate', 150)
engine.setProperty('volume', 5.5)


def soundgen(u):
    print("starting soundgen")
    engine.save_to_file(u, "./output/name.wav")
    print("save")
    engine.runAndWait()
    print("name generated")

    sound0 = AudioSegment.from_file(
        "./output/name.wav", format="wav")
    sound1 = AudioSegment.from_file("./input/volati1.wav", format="wav")
    sound2 = AudioSegment.from_file("./input/volati2.wav", format="wav")

    comb = sound0 + sound1 + sound0 + sound2
    comb.export("./output/output.mp3", format="mp3")
    print("ringtone generated")


class NeuralHTTP(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        n = urlparse.parse_qs(urlparse.urlparse(
            self.path).query).get('n', None)
        username = n[0]
        print(username)
        soundgen(username)
        output = base64.encode(open('./output/output.mp3', 'rb'),
                               open('./output/baseout.dat', 'wb'))
        o = open("./output/baseout.dat").readlines()

        self.wfile.write(
            bytes("<html><body>% s</body></html>" % o, "utf-8"))


server = HTTPServer((HOST, PORT), NeuralHTTP)
print("server running")
server.serve_forever()
server.server_close()
print("server stopped")
