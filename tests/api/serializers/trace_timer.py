from tests.base import BaseTestCase
from spendlytime.api.serializers import TimerSerializer


class TestTimerSeraializer(BaseTestCase):

    def test_serialize(self):
        serializer = TimerSerializer(data={"time": "00:10:00"})

        self.assertEqual(serializer.is_valid(), True)
        self.assertEqual(len(serializer.errors), 0)
