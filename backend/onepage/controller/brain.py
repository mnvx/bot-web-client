from flask import jsonify
from flask import request
from flask_classy import FlaskView, route
from flask_cors import cross_origin
import inject
from onepage.service.brain_service_interface import BrainServiceInterface


class Brain(FlaskView):

    brain_service = inject.attr(BrainServiceInterface)

    @cross_origin()
    @route('/send-message', methods=['POST', 'OPTIONS'])
    def send_message(self):

        message = request.get_json()['message']
        replies = self.brain_service.query(message)

        return jsonify(
            actionIncomplete=False,
            contexts=[],
            intent="Default Welcome Intent",
            parameters={},
            messages=replies,
            status="success",
            status_message="",
        )
