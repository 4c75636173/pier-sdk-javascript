# Pier.TokenApi

All URIs are relative to *https://localhost/*

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
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

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

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

