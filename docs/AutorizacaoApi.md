# Pier.AutorizacaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autorizarUsingPOST**](AutorizacaoApi.md#autorizarUsingPOST) | **POST** /api/autorizar-transacao | Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira
[**autorizarUsingPOST1**](AutorizacaoApi.md#autorizarUsingPOST1) | **POST** /api/cartoes/{id}/autorizar-transacao | Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira por idCartao
[**cancelarUsingPOST2**](AutorizacaoApi.md#cancelarUsingPOST2) | **POST** /api/cancelar-transacao | Cancela transa\u00C3\u00A7\u00C3\u00A3o financeira
[**cancelarUsingPOST3**](AutorizacaoApi.md#cancelarUsingPOST3) | **POST** /api/cartoes/{id}/cancelar-transacao | Cancela transa\u00C3\u00A7\u00C3\u00A3o financeira por idCartao
[**listarCodigosProcessamentoAutorizacaoUsingGET**](AutorizacaoApi.md#listarCodigosProcessamentoAutorizacaoUsingGET) | **GET** /api/consultar-codigos-processamento-autorizacao | Retorna c\u00C3\u00B3digos de processamento de autoriza\u00C3\u00A7\u00C3\u00A3o
[**simularUsingPOST**](AutorizacaoApi.md#simularUsingPOST) | **POST** /api/simular-transacao | Simula planos de transa\u00C3\u00A7\u00C3\u00B5es


<a name="autorizarUsingPOST"></a>
# **autorizarUsingPOST**
> TransacaoOnUsResponse autorizarUsingPOST(autorizacaoOnUsRequest)

Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira

Este m\u00C3\u00A9todo faz uma autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o financeira.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AutorizacaoApi()

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

<a name="autorizarUsingPOST1"></a>
# **autorizarUsingPOST1**
> TransacaoOnUsResponse autorizarUsingPOST1(id, transacaoOnUsPorIdCartaoRequest)

Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira por idCartao

Este m\u00C3\u00A9todo faz uma autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o financeira com o idCartao.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AutorizacaoApi()

var id = 789; // {Integer} Id Cartao

var transacaoOnUsPorIdCartaoRequest = new Pier.TransacaoOnUsPorIdCartaoRequest(); // {TransacaoOnUsPorIdCartaoRequest} transacaoOnUsPorIdCartaoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.autorizarUsingPOST1(id, transacaoOnUsPorIdCartaoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Cartao | 
 **transacaoOnUsPorIdCartaoRequest** | [**TransacaoOnUsPorIdCartaoRequest**](TransacaoOnUsPorIdCartaoRequest.md)| transacaoOnUsPorIdCartaoRequest | 

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

var apiInstance = new Pier.AutorizacaoApi()

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

<a name="cancelarUsingPOST3"></a>
# **cancelarUsingPOST3**
> TransacaoOnUsResponse cancelarUsingPOST3(id, cancelamentoRequest)

Cancela transa\u00C3\u00A7\u00C3\u00A3o financeira por idCartao

Este m\u00C3\u00A9todo permite que seja cancelada uma transa\u00C3\u00A7\u00C3\u00A3o a partir do idCartao.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AutorizacaoApi()

var id = 789; // {Integer} Id Cartao

var cancelamentoRequest = new Pier.CancelamentoTransacaoPorIdCartaoRequest(); // {CancelamentoTransacaoPorIdCartaoRequest} cancelamentoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarUsingPOST3(id, cancelamentoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Cartao | 
 **cancelamentoRequest** | [**CancelamentoTransacaoPorIdCartaoRequest**](CancelamentoTransacaoPorIdCartaoRequest.md)| cancelamentoRequest | 

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

var apiInstance = new Pier.AutorizacaoApi()

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

var apiInstance = new Pier.AutorizacaoApi()

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

