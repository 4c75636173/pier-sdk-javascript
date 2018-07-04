# Pier.GlobaltagchavecriptografiaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**descriptografarUsingPOST**](GlobaltagchavecriptografiaApi.md#descriptografarUsingPOST) | **POST** /api/chaves-criptografia/descriptografar | {{{chave_criptografia_recurso_descriptografar}}}


<a name="descriptografarUsingPOST"></a>
# **descriptografarUsingPOST**
> ChaveCriptografiaResponse descriptografarUsingPOST(chaveCriptografiaRequest)

{{{chave_criptografia_recurso_descriptografar}}}

{{{chave_criptografia_recurso_descriptografar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagchavecriptografiaApi()

var chaveCriptografiaRequest = new Pier.ChaveCriptografiaRequest(); // {ChaveCriptografiaRequest} chaveCriptografiaRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.descriptografarUsingPOST(chaveCriptografiaRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chaveCriptografiaRequest** | [**ChaveCriptografiaRequest**](ChaveCriptografiaRequest.md)| chaveCriptografiaRequest | 

### Return type

[**ChaveCriptografiaResponse**](ChaveCriptografiaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

