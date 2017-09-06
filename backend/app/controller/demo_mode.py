from flask import jsonify
from flask.ext.classy import FlaskView, route
from flask.ext.cors import cross_origin
import random


class DemoMode(FlaskView):

    @cross_origin()
    @route('/demo-message/<message_id>')
    def message(self, message_id):
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