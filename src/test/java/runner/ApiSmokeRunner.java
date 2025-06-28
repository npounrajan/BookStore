package runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/test/resources/features/Smoke",
        glue = "apiStepDefinition",
        plugin = {"pretty", "html:target/cucumber-html-report", "rerun:src/test/resources/projectFailedReport/failed-API-Report/failed.txt"},
        monochrome = true,
        tags = "@Smoke")

public class ApiSmokeRunner {
}
