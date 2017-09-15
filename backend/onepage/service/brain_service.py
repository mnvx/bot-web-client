import random

import requests
from .brain_service_interface import BrainServiceInterface


class BrainService(BrainServiceInterface):

    CHATBOT_QUERY_PATH = 'chatbot/query'

    def __init__(self, api_url: str):
        self.api_url = api_url

    def query(self, query: str):
        stubs = [
            'Привет!',
            'Я всего лишь бот...',
            'Это только политики могут бесконечно разговаривать',
            'Попробуйте выразиться более точно',
            'А хотите анекдот?',
            'И чё?',
        ]
        return [
            {
                "speech": random.choice(stubs)
            }
        ]

        response = requests.post(self.api_url + self.CHATBOT_QUERY_PATH, json={
            "session_id": "fb_12345",
            "lang": "ru",
            "query": query
         })
        return response.json()['data']['parameters']['messages']
