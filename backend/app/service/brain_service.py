import random


class BrainService:

    def query(self, query):
        messages = [
            'Привет!',
            'Я всего лишь бот',
            'А как вы думаете?',
            'Это только политики бесконечно могут разговаривать.',
            'Я и не знаю что вам ответить.',
            'Минутку...',
        ]
        return random.choice(messages)
