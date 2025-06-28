package runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/test/resources/features/Smoke",
        glue = "apiStepDefinition",
        plugin = {"pretty", "json:target/cucumber-reports/Cucumber.json", "rerun:src/test/resources/projectFailedReport/failed-API-Report/failed.txt"},
        monochrome = true,
        tags = "@Smoke")

public class ApiSmokeRunner {
}
