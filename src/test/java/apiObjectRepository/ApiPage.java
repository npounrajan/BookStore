package apiObjectRepository;

import io.cucumber.datatable.DataTable;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ApiPage {

    String token = "dummy-auth-token";
    Response response;

    public Map<String, Object> getRequestBody(DataTable dataTable) {

        List<Map<String, String>> rows = dataTable.asMaps(String.class, String.class);
        Map<String, String> bookData = rows.get(0);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("title", bookData.get("title"));
        requestBody.put("author", bookData.get("author"));
        requestBody.put("price", Double.parseDouble(bookData.get("price")));

        return requestBody;
    }

    public Response postMethodApi(Map<String, Object> body, String endpoint) {
        response = RestAssured.given()
                .contentType(ContentType.JSON)
                .header("Authorization", "Bearer " + token)
                .body(body)
                .post(endpoint);
        return response;
    }

    public Response postMethodInvalidBodyApi(String body, String endpoint) {
        response = RestAssured.given()
                .contentType(ContentType.JSON)
                .header("Authorization", "Bearer " + token)
                .body(body)
                .post(endpoint);
        return response;
    }

    public Response putMethodApi(Map<String, Object> body, String endpoint, String bookId) {
        response = RestAssured.given()
                .contentType(ContentType.JSON)
                .header("Authorization", "Bearer " + token)
                .body(body)
                .put(endpoint.replace("{bookId}", bookId));
        return response;
    }


    public Response getMethodApi(Map<String, Object> body, String endpoint, String bookId) {
        response = RestAssured.given()
                .header("Authorization", "Bearer " + token)
                .get(endpoint.replace("{bookId}", bookId));
        return response;
    }

    public Response deleteMethodApi(Map<String, Object> requestBody, String endpoint, String bookId) {
        response = RestAssured.given()
                .header("Authorization", "Bearer " + token)
                .delete(endpoint.replace("{bookId}", bookId));
        return response;
    }

    public Response postMethodInvalidContentTypeApi(Map<String, Object> requestBody, String endpoint,String content) {
        response = RestAssured.given()
                .contentType(content)
                .header("Authorization", "Bearer " + token)
                .body(requestBody)
                .post(endpoint);
        return response;
    }
}
