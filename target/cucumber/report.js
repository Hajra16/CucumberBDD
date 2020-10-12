$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "free CRM application test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7757488400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefintion.user_open_browser()"
});
formatter.result({
  "duration": 8276884000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Login validation test with valid credentials",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enter email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user lands on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefintion.user_is_on_login_page()"
});
formatter.result({
  "duration": 137349100,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefintion.user_enter_email_and_password()"
});
formatter.result({
  "duration": 539814900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefintion.user_click_on_submit_button()"
});
formatter.result({
  "duration": 143130500,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefintion.user_lands_on_home_page()"
});
formatter.result({
  "duration": 23281900,
  "error_message": "java.lang.AssertionError: your title does not match expected [Cogmento] but found [Cogmento CRM]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\r\n\tat org.testng.Assert.assertEquals(Assert.java:122)\r\n\tat org.testng.Assert.assertEquals(Assert.java:629)\r\n\tat StepDefinition.loginStepDefintion.user_lands_on_home_page(loginStepDefintion.java:60)\r\n\tat ✽.Then user lands on home page(src/test/java/Features/Login.feature:12)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6675728200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefintion.user_open_browser()"
});
formatter.result({
  "duration": 8048385200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login validation test with wrong credentials",
  "description": "",
  "id": "free-crm-application-test;login-validation-test-with-wrong-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user enters the email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user lands on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefintion.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 48066700,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefintion.user_enters_the_email_and_password()"
});
formatter.result({
  "duration": 515478000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefintion.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 109046100,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefintion.user_lands_on_the_home_page()"
});
formatter.result({
  "duration": 37716100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"top-header-menu\"]/div[3]/span[1]\"}\n  (Session info: chrome\u003d85.0.4183.121)\n  (Driver info: chromedriver\u003d85.0.4183.87 (cd6713ebf92fa1cacc0f1a598df280093af0c5d7-refs/branch-heads/4183@{#1689}),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 32 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bceef1bc36d43f3dc0b83c88998168a363a0\u0027, time: \u00272014-09-10 09:43:55\u0027\nSystem info: host: \u0027Hajra-PC\u0027, ip: \u0027192.168.4.40\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62542}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d85.0.4183.87 (cd6713ebf92fa1cacc0f1a598df280093af0c5d7-refs/branch-heads/4183@{#1689}), userDataDir\u003dC:\\Users\\Hajra\\AppData\\Local\\Temp\\scoped_dir34796_773157936}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d85.0.4183.121, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: f1ab88515d64d8996d22706dd804b2ab\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat StepDefinition.loginStepDefintion.user_lands_on_the_home_page(loginStepDefintion.java:87)\r\n\tat ✽.Then user lands on the home page(src/test/java/Features/Login.feature:20)\r\n",
  "status": "failed"
});
});