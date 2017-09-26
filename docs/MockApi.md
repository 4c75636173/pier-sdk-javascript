# Pier.MockApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarProdutoUsingPOST**](MockApi.md#alterarProdutoUsingPOST) | **POST** /api/contas/{id}/alterar-produto | Altera o produto associado \u00C3\u00A0 conta.


<a name="alterarProdutoUsingPOST"></a>
# **alterarProdutoUsingPOST**
> Object alterarProdutoUsingPOST(id, request)

Altera o produto associado \u00C3\u00A0 conta.

O recurso permite fazer modifica\u00C3\u00A7\u00C3\u00A3o do produto associado \u00C3\u00A0 conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.MockApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var request = new Pier.AlterarProdutoRequest(); // {AlterarProdutoRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarProdutoUsingPOST(id, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **request** | [**AlterarProdutoRequest**](AlterarProdutoRequest.md)| request | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

