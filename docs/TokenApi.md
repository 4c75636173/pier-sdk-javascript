# Pier.TokenApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callbackUsingPOST**](TokenApi.md#callbackUsingPOST) | **POST** /v1.1/tokens/callback | /tokens/callback
[**validarUsingPOST**](TokenApi.md#validarUsingPOST) | **POST** /v1.1/tokens/validar | /tokens/validar


<a name="callbackUsingPOST"></a>
# **callbackUsingPOST**
> BodyAccessToken callbackUsingPOST(bodyAccessToken)

/tokens/callback

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

<a name="validarUsingPOST"></a>
# **validarUsingPOST**
> Object validarUsingPOST(bodyAccessToken)

/tokens/validar

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
api.validarUsingPOST(bodyAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAccessToken** | [**BodyAccessToken**](BodyAccessToken.md)| bodyAccessToken | 

### Return type

**Object**

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

