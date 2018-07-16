# Pier.GlobaltagendereconacionalApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarEnderecoUsingGET**](GlobaltagendereconacionalApi.md#consultarEnderecoUsingGET) | **GET** /api/ceps | {{{c_e_p_endereco_resource_consultar_endereco}}}


<a name="consultarEnderecoUsingGET"></a>
# **consultarEnderecoUsingGET**
> EnderecoResponse consultarEnderecoUsingGET(CEP)

{{{c_e_p_endereco_resource_consultar_endereco}}}

{{{c_e_p_endereco_resource_consultar_endereco_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagendereconacionalApi()

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

