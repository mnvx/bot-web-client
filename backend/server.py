from flask import Flask
import inject
from app.controller.demo_mode import DemoMode
from app.controller.brain import Brain
from app.service.brain_service import BrainService
from app.service.brain_service_interface import BrainServiceInterface

app = Flask(__name__)


@app.route('/')
def index():
    return 'Smartbot Onepage backend started';


def my_config(binder):
    binder.bind(BrainServiceInterface, BrainService())

inject.configure(my_config)

DemoMode.register(app, '/api')
Brain.register(app, '/api')

if __name__ == "__main__":
    app.run()