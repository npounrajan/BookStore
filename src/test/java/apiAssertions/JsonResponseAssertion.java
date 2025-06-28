package apiAssertions;

import io.restassured.response.Response;

import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

public class JsonResponseAssertion {

    public void assertResponseCode(int actualCode, Integer expectedCode) {
        assertThat(actualCode, is(expectedCode));
    }

    public void verifyBookIdIsNotNull(String bookId) {
        assertThat("Book ID should not be null", bookId, notNullValue());
    }

    public void verifyResponseValues(Response response, Map<String, String> expectedFields) {
        for (Map.Entry<String, String> entry : expectedFields.entrySet()) {
            String key = entry.getKey();
            String expectedValue = entry.getValue();
            assertThat(response.jsonPath().getString(key), is(expectedValue));
        }
    }

    public void verifyBookTitle(Response response, String title) {
        boolean found = response.jsonPath().getList("title").contains(title);
        assertThat("Book with title [" + title + "] should exist", found, is(true));
    }

    public void verifyBookTitleIsNull(Response response) {

       assertThat(response.jsonPath().getList("title") == null,is(true));
    }

    public void verifyBookAuthorIsNull(Response response) {
        assertThat(response.jsonPath().getList("author") == null,is(true));
    }

    public void verifyBookPriceIsNull(Response response, int value) {
        assertThat(response.jsonPath().getList("price")==null,is(true));
    }
    public void verifyBookPrice(Response response, int value) {
        assertThat(response.jsonPath().getList("price").contains(value),is(true));

    }
}
