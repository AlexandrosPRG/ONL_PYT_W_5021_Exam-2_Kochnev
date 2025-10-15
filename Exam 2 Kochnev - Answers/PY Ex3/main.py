from flask import Flask

app = Flask(__name__)

# /divide/a/b
@app.route('/divide/<int:a>/<int:b>')
def divide(a, b):
    if b == 0:
        return "Cannot divide by 0!"
    result = a / b
    return f"The result of {a} divided by {b} is {result}"

@app.route('/')
@app.route('/index.html')
def index():
    return 'Use /divide/<a>/<b> (e.g., /divide/10/2)'

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)

# http://127.0.0.1:5000/divide/10/2  = 5
# http://127.0.0.1:5000/divide/10/0  = 0