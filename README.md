## Postman

#### Auto update variables
```
var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("postmanVarName", jsonData.varName);
```
