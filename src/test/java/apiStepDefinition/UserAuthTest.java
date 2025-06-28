package apiStepDefinition;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserAuthTest {

    private RequestSpecification request;
    private Response response;
    private Map<String, Object> requestBody = new HashMap<>();

    @Given("the user API is running")
    public void theUserAPIIsRunning() {
        RestAssured.baseURI = "http://localhost:8090";
    }

    @When("I send a POST user request to {string} with:")
    public void i_send_a_post_user_request_to_with(String endpoint, DataTable dataTable) {
        requestBody.clear();
        requestBody.putAll(dataTable.asMap(String.class, String.class));
        response = given()
                .contentType("application/json")
                .body(requestBody)
                .when()
                .post(endpoint);
    }

    @Then("the user response status should be {int}")
    public void the_user_response_status_should_be(int statusCode) {
        System.out.println("Request body: " + requestBody);
        response.prettyPrint();
        response.then().statusCode(statusCode);
    }

    @And("the user response should contain:")
    public void the_user_response_should_contain(DataTable expectedTable) {
        Map<String, String> expected = expectedTable.asMap(String.class, String.class);
        for (Map.Entry<String, String> entry : expected.entrySet()) {
            response.then().body(entry.getKey(), equalTo(entry.getValue()));
        }
    }

    @And("the user response should contain a token")
    public void the_user_response_should_contain_a_token() {
        response.then().body("token", notNullValue());
    }

    @Given("a user already exists with:")
    public void a_user_already_exists_with(DataTable dataTable) {
        Map<String, String> data = dataTable.asMap(String.class, String.class);

        given()
                .contentType("application/json")
                .body(data)
                .when()
                .post("/signup")
                .then()
                .statusCode(anyOf(equalTo(201), equalTo(400)));
    }

    @Given("a user exists with:")
    public void a_user_exists_with(DataTable dataTable) {
        a_user_already_exists_with(dataTable);
    }


}
