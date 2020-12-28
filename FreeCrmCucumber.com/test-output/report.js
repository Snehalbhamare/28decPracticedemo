$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/admin/workspace/FreeCrmCucumber.com/src/main/java/com/qa/features/freecrm.feature");
formatter.feature({
  "line": 1,
  "name": "free CRM Application Test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "to validate response code of latest exchange rate",
  "description": "",
  "id": "free-crm-application-test;to-validate-response-code-of-latest-exchange-rate",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Rates API for Latest Foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The API is available",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "An automated test suite should run which will assert the success status of the response",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "Validate Free CRM Home Page Test",
  "description": "",
  "id": "free-crm-application-test;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login btn",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user logs into apps",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "validate home page page title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePagesteps.user_opens_browser()"
});
formatter.result({
  "duration": 8939341491,
  "status": "passed"
});
formatter.match({
  "location": "HomePagesteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 24720815,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.88)\n  (Driver info: chromedriver\u003d86.0.4240.22 (398b0743353ff36fb1b82468f63a3a93b4e2e89e-refs/branch-heads/4240@{#378}),platform\u003dWindows NT 6.1.7600 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027admin-PC\u0027, ip: \u0027192.168.43.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49421}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d86.0.4240.22 (398b0743353ff36fb1b82468f63a3a93b4e2e89e-refs/branch-heads/4240@{#378}), userDataDir\u003dC:\\Users\\admin\\AppData\\Local\\Temp\\scoped_dir4788_1909661954}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d87.0.4280.88, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 68ef06229d54860cdb9138fa81f60c8a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:310)\r\n\tat com.qa.pages.LoginPage.validateLoginPageTitle(LoginPage.java:38)\r\n\tat com.qa.stepDefenition.HomePagesteps.user_is_on_login_page(HomePagesteps.java:31)\r\n\tat ✽.Then user is on login page(/Users/admin/workspace/FreeCrmCucumber.com/src/main/java/com/qa/features/freecrm.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePagesteps.user_clicks_on_login_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePagesteps.user_logs_into_apps()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePagesteps.validate_home_page_page_title()"
});
formatter.result({
  "status": "skipped"
});
});