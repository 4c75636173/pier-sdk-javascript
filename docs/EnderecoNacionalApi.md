# Pier.EnderecoNacionalApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarEnderecoUsingGET**](EnderecoNacionalApi.md#consultarEnderecoUsingGET) | **GET** /api/ceps | Consultar Endere\u00C3\u00A7o


<a name="consultarEnderecoUsingGET"></a>
# **consultarEnderecoUsingGET**
> EnderecoResponse consultarEnderecoUsingGET(CEP)

Consultar Endere\u00C3\u00A7o

Este recurso permite consultar endere\u00C3\u00A7os atrav\u00C3\u00A9s do CEP.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EnderecoNacionalApi()

var CEP = "CEP_example"; // {String} CEP


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarEnderecoUsingGET(CEP, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CEP** | **String**| CEP | 

### Return type

[**EnderecoResponse**](EnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

