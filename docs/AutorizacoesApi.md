# Pier.AutorizacoesApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autorizarUsingPOST**](AutorizacoesApi.md#autorizarUsingPOST) | **POST** /api/autorizar-transacao | Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira
[**cancelarUsingPOST2**](AutorizacoesApi.md#cancelarUsingPOST2) | **POST** /api/cancelar-transacao | Cancela transa\u00C3\u00A7\u00C3\u00A3o financeira
[**listarCodigosProcessamentoAutorizacaoUsingGET**](AutorizacoesApi.md#listarCodigosProcessamentoAutorizacaoUsingGET) | **GET** /api/consultar-codigos-processamento-autorizacao | Retorna c\u00C3\u00B3digos de processamento de autoriza\u00C3\u00A7\u00C3\u00A3o
[**simularUsingPOST**](AutorizacoesApi.md#simularUsingPOST) | **POST** /api/simular-transacao | Simula planos de transa\u00C3\u00A7\u00C3\u00B5es


<a name="autorizarUsingPOST"></a>
# **autorizarUsingPOST**
> TransacaoOnUsResponse autorizarUsingPOST(autorizacaoOnUsRequest)

Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira

Este m\u00C3\u00A9todo faz uma autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o financeira.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AutorizacoesApi()

var autorizacaoOnUsRequest = new Pier.AutorizacaoOnUsRequest(); // {AutorizacaoOnUsRequest} autorizacaoOnUsRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.autorizarUsingPOST(autorizacaoOnUsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autorizacaoOnUsRequest** | [**AutorizacaoOnUsRequest**](AutorizacaoOnUsRequest.md)| autorizacaoOnUsRequest | 

### Return type

[**TransacaoOnUsResponse**](TransacaoOnUsResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelarUsingPOST2"></a>
# **cancelarUsingPOST2**
> TransacaoOnUsResponse cancelarUsingPOST2(cancelamentoRequest)

Cancela transa\u00C3\u00A7\u00C3\u00A3o financeira

Este m\u00C3\u00A9todo permite que seja cancelada uma transa\u00C3\u00A7\u00C3\u00A3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AutorizacoesApi()

var cancelamentoRequest = new Pier.CancelamentoTransacaoOnUsRequest(); // {CancelamentoTransacaoOnUsRequest} cancelamentoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarUsingPOST2(cancelamentoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelamentoRequest** | [**CancelamentoTransacaoOnUsRequest**](CancelamentoTransacaoOnUsRequest.md)| cancelamentoRequest | 

### Return type

[**TransacaoOnUsResponse**](TransacaoOnUsResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarCodigosProcessamentoAutorizacaoUsingGET"></a>
# **listarCodigosProcessamentoAutorizacaoUsingGET**
> [Object] listarCodigosProcessamentoAutorizacaoUsingGET

Retorna c\u00C3\u00B3digos de processamento de autoriza\u00C3\u00A7\u00C3\u00A3o

Este m\u00C3\u00A9todo retorna a lista dos c\u00C3\u00B3digos de processamento para autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00B5es financeiras.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AutorizacoesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarCodigosProcessamentoAutorizacaoUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="simularUsingPOST"></a>
# **simularUsingPOST**
> TransacaoOnUsResponse simularUsingPOST(transacoesRequest)

Simula planos de transa\u00C3\u00A7\u00C3\u00B5es

Este m\u00C3\u00A9todo permite que seja simulada um plano de transa\u00C3\u00A7\u00C3\u00B5es.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AutorizacoesApi()

var transacoesRequest = new Pier.TransacaoOnUsRequest(); // {TransacaoOnUsRequest} transacoesRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.simularUsingPOST(transacoesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transacoesRequest** | [**TransacaoOnUsRequest**](TransacaoOnUsRequest.md)| transacoesRequest | 

### Return type

[**TransacaoOnUsResponse**](TransacaoOnUsResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

