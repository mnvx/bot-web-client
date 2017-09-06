from flask import jsonify
from flask import request
from flask.ext.classy import FlaskView, route
from flask.ext.cors import cross_origin
import json
import inject
from app.service.brain_service_interface import BrainServiceInterface


class Brain(FlaskView):

    brain_service = inject.attr(BrainServiceInterface)

    @cross_origin()
    @route('/send-message', methods=['POST', 'OPTIONS'])
    def send_message(self):

        message = request.get_json()['message']
        speech = self.brain_service.query(message)

        return jsonify(
            actionIncomplete=False,
            contexts=[],
            intent="Default Welcome Intent",
            parameters={},
            speech=speech,
            status="success",
            status_message="",
        )
