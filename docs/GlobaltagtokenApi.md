# Pier.GlobaltagtokenApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callbackUsingPOST**](GlobaltagtokenApi.md#callbackUsingPOST) | **POST** /api/tokens/callback | {{{token_resource_callback}}}


<a name="callbackUsingPOST"></a>
# **callbackUsingPOST**
> BodyAccessToken callbackUsingPOST(bodyAccessToken)

{{{token_resource_callback}}}

{{{token_resource_callback_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtokenApi()

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

