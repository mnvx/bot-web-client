from flask import Flask, jsonify
from flask.ext.cors import CORS, cross_origin

import random

app = Flask(__name__)

app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})


@app.route('/')
def index():
    return 'Smartbot Onepage backend started';


@app.route('/api/send-message', methods=['POST', 'OPTIONS'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def send_message():
    messages = [
        'Привет!',
        'Я всего лишь бот',
        'А как вы думаете?',
        'Это только политики бесконечно могут разговаривать.',
        'Я и не знаю что вам ответить.',
        'Минутку...',
    ]
    return jsonify(
        actionIncomplete=False,
        contexts=[],
        intent="Default Welcome Intent",
        parameters={},
        speech=random.choice(messages),
        status="success",
        status_message="",
    )


@app.route('/api/demo-message/<message_id>', methods=['GET'])
def demo_message(message_id):
    messages = [
        'Привет!',
        'Я всего лишь бот',
        'А как вы думаете?',
        'Это только политики бесконечно могут разговаривать.',
        'Я и не знаю что вам ответить.',
        'Минутку...',
    ]
    return jsonify(
        action="",
        delay_to_show=2,
        message=random.choice(messages),
        message_content_type="text",
        message_direction="to",
        next_message_id=4,
        show_typing=True,
        message_id=int(message_id),
    )
