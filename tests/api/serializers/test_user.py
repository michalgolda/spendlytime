from tests.base import BaseTestCase
from spendlytime.api.serializers import UserSerializer


class TestUserSeraializer(BaseTestCase):

    def test_serialize(self):
        serializer = UserSerializer(
            data={"username": "test", "password": "test"})

        self.assertEqual(serializer.is_valid(), True)
        self.assertEqual(len(serializer.errors), 0)
