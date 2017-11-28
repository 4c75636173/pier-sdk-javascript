# Pier.BoletoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registrarBoletoUsingPOST**](BoletoApi.md#registrarBoletoUsingPOST) | **POST** /api/boletos/{id}/registrar | Registra uma cobranca na entidade banco relacionada a cobranca informado.


<a name="registrarBoletoUsingPOST"></a>
# **registrarBoletoUsingPOST**
> BoletoResponse registrarBoletoUsingPOST(id)

Registra uma cobranca na entidade banco relacionada a cobranca informado.

Este recurso registra uma cobranca emitido.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.BoletoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Cobranca (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.registrarBoletoUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Cobranca (id) | 

### Return type

[**BoletoResponse**](BoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

