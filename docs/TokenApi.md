# Pier.TokenApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callbackUsingPOST**](TokenApi.md#callbackUsingPOST) | **POST** /api/tokens/callback | /api/tokens/callback


<a name="callbackUsingPOST"></a>
# **callbackUsingPOST**
> BodyAccessToken callbackUsingPOST(bodyAccessToken)

/api/tokens/callback

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TokenApi()

var bodyAccessToken = new Pier.BodyAccessToken(); // {BodyAccessToken} bodyAccessToken


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.callbackUsingPOST(bodyAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAccessToken** | [**BodyAccessToken**](BodyAccessToken.md)| bodyAccessToken | 

### Return type

[**BodyAccessToken**](BodyAccessToken.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

