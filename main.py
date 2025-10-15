import http.server
import socketserver
import os
import webbrowser

PORT = 8000

task = input("Name of task (eg. JS Ex1): ").strip()

path = os.path.join(os.getcwd(), "Exam 2 Kochnev - Answers", task)
if not os.path.exists(path):
    print("Folder no exist:", path)
    exit()

os.chdir(path)
handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), handler) as httpd:
    webbrowser.open(f"http://127.0.0.1:{PORT}/index.html")
    httpd.serve_forever()
