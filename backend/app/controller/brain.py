from flask import jsonify
from flask.ext.classy import FlaskView, route
from flask.ext.cors import cross_origin
from app.service.brain_service import BrainService


class Brain(FlaskView):

    def __init__(self):
        self.brain_service = BrainService()

    @cross_origin()
    @route('/send-message', methods=['POST', 'OPTIONS'])
    def send_message(self):
        response = self.brain_service.query('')
        return jsonify(
            actionIncomplete=False,
            contexts=[],
            intent="Default Welcome Intent",
            parameters={},
            speech=response,
            status="success",
            status_message="",
        )
