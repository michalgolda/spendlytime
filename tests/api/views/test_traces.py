from tests.base import BaseAPITestCase
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK, HTTP_404_NOT_FOUND
from spendlytime.models import Trace


class TestTracesApiView(BaseAPITestCase):

    def test_create_trace(self):
        response = self.client.post(
            "/api/traces/", {"trace_url": "https://spendlytime.com", "trace_time": "0:0"})

        self.assertEqual(response.status_code, HTTP_201_CREATED)

    def test_delete_trace(self):
        trace = Trace(trace_url="https://spendlytime.com",
                      trace_time="0:0", user=self.user)
        trace.save()
        response = self.client.delete(f"/api/traces/{trace.id}/")

        self.assertEqual(response.status_code, HTTP_200_OK)

    def test_get_all_traces(self):
        trace = Trace(trace_url="https://spendlytime.com",
                      trace_time="0:0", user=self.user)
        trace.save()
        response = self.client.get("/api/traces/")

        self.assertEqual(response.status_code, HTTP_200_OK)

    def test_get_trace_by_id(self):
        trace = Trace(trace_url="https://spendlytime.com",
                      trace_time="0:0", user=self.user)
        trace.save()
        response = self.client.get(f"/api/traces/{trace.id}/")

        self.assertEqual(response.status_code, HTTP_200_OK)
