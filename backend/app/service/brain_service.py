import random
from app.service.brain_service_interface import BrainServiceInterface


class BrainService(BrainServiceInterface):

    def query(self, query: str):
        messages = [
            'Привет!',
            'Я всего лишь бот',
            'А как вы думаете?',
            'Это только политики бесконечно могут разговаривать.',
            'Я и не знаю что вам ответить.',
            'Минутку...',
        ]
        return random.choice(messages)
