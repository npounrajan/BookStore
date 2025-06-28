package apiStepDefinition;

import apiAssertions.JsonResponseAssertion;
import apiObjectRepository.ApiPage;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;


public class BookManagementTest {

    private Response response;
    private Map<String, Object> requestBody;
    private final String token = "dummy-auth-token"; // Replace with a real token if needed
    private static String bookId;
    public ApiPage apiPage;
    public JsonResponseAssertion jsonResponseAssertion;


    public BookManagementTest() {

        this.apiPage = new ApiPage();
        this.jsonResponseAssertion = new JsonResponseAssertion();
    }

    @Given("the API is running")
    public void the_api_is_running() {
        RestAssured.baseURI = "http://localhost:8090";
//            RestAssured.baseURI =bookStoreConfiguration.getApiUrl();
    }

    @Given("I have a valid authentication token")
    public void i_have_a_valid_authentication_token() {
        // Token is pre-defined above; generate here if dynamic
    }

    @When("I send a POST request to {string} with:")
    public void i_send_a_post_request_with(String endpoint, DataTable dataTable) {

        requestBody = apiPage.getRequestBody(dataTable);
        response = apiPage.postMethodApi(requestBody, endpoint);
        bookId = response.jsonPath().getString("id");
    }

    @When("I send a GET request to {string}")
    public void i_send_a_get_request(String endpoint) {
        response = apiPage.getMethodApi(requestBody, endpoint, bookId);
    }

    @When("I send a PUT request to {string} with:")
    public void i_send_a_put_request_with(String endpoint, DataTable dataTable) {
        requestBody = apiPage.getRequestBody(dataTable);
        response = apiPage.putMethodApi(requestBody, endpoint, bookId);
    }

    @When("I send a DELETE request to {string}")
    public void i_send_a_delete_request(String endpoint) {
        response = apiPage.deleteMethodApi(requestBody, endpoint, bookId);

    }

    @Then("the response status should be {int}")
    public void the_response_status_should_be(Integer statusCode) {
        jsonResponseAssertion.assertResponseCode(response.getStatusCode(), statusCode);
    }

    @Then("the response should contain:")
    public void the_response_should_contain(Map<String, String> expectedFields) {
        jsonResponseAssertion.verifyResponseValues(response, expectedFields);
    }

    @Then("the response should include a book with title {string}")
    public void the_response_should_include_a_book_with_title(String title) {
        jsonResponseAssertion.verifyBookTitle(response,title);
    }

    @And("I store the book ID")
    public void i_store_the_book_id() {
        bookId = response.jsonPath().getString("id");
        jsonResponseAssertion.verifyBookIdIsNotNull(bookId);
    }

    @And("Title in response should be null")
    public void titleInResponseShouldBeNull() {
        jsonResponseAssertion.verifyBookTitleIsNull(response);
    }

    @And("Author in response should be null")
    public void authorInResponseShouldBeNull() {
        jsonResponseAssertion.verifyBookAuthorIsNull(response);
    }

    @And("Price in response should be {double}")
    public void priceInResponseShouldBe(int arg0) {
        jsonResponseAssertion.verifyBookPriceIsNull(response,arg0);
    }

    @When("I send a malformed POST request to {string}")
    public void i_send_a_malformed_post_request_to(String endpoint) {
        String malformedJson = "{ title: \"Missing quotes, missing braces }";
        response = apiPage.postMethodInvalidBodyApi(malformedJson, endpoint);
    }


    @When("I send a POST request to {string} with content type {string} and body:")
    public void iSendAPOSTRequestToWithContentTypeAndBody(String endpoint, String content) {
        response = apiPage.postMethodInvalidContentTypeApi(requestBody, endpoint,content);

    }

    @And("the response should contain field {string}")
    public void theResponseShouldContainField(String price) {

        jsonResponseAssertion.verifyBookPrice(response,Integer.parseInt(price));
    }
}
