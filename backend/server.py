from flask import Flask
import inject
from onepage.controller.demo_mode import DemoMode
from onepage.controller.brain import Brain
from onepage.service.brain_service import BrainService
from onepage.service.brain_service_interface import BrainServiceInterface
from app_config import BRAIN_API_URL


app = Flask(__name__)


@app.route('/')
def index():
    return 'Smartbot Onepage backend started';


def my_config(binder):
    binder.bind(BrainServiceInterface, BrainService(BRAIN_API_URL))

inject.configure(my_config)

DemoMode.register(app, '/api')
Brain.register(app, '/api')

if __name__ == "__main__":
    app.run()