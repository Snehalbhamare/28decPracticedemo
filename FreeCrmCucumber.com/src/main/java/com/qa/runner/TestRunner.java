package com.qa.runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="/Users/admin/workspace/FreeCrmCucumber.com/src/main/java/com/qa/features/freecrm.feature",
glue={"com/qa/stepDefenition"} ,
format={"pretty","html:test-output","junit:junit_xml/cucumber.xml"},
monochrome=true,
strict=true,
dryRun= false)


public class TestRunner
{

	
}

