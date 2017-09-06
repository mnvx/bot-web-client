from flask import Flask
from app.controller.demo_mode import DemoMode
from app.controller.brain import Brain

app = Flask(__name__)


@app.route('/')
def index():
    return 'Smartbot Onepage backend started';


DemoMode.register(app, '/api')
Brain.register(app, '/api')

if __name__ == "__main__":
    app.run()