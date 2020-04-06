from tests.base import BaseTestCase
from spendlytime.models import Trace


class TestTraceModel(BaseTestCase):

    def setUp(self):
        self.trace = Trace(trace_url="https://spendlytime.com")

    def test_string_representation(self):
        self.assertEqual(str(self.trace), "https://spendlytime.com")

    def tearDown(self):
        del self.trace
