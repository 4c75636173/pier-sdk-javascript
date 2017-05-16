# Pier.AutorizacoesApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelarUsingPOST**](AutorizacoesApi.md#cancelarUsingPOST) | **POST** /api/cancelar-transacao | Cancela Transa\u00C3\u00A7\u00C3\u00A3o financeira
[**desfazerUsingPOST**](AutorizacoesApi.md#desfazerUsingPOST) | **POST** /api/autorizar-transacao | Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira
[**desfazerUsingPOST1**](AutorizacoesApi.md#desfazerUsingPOST1) | **POST** /api/desfazer-transacao | Desfazimento de Transa\u00C3\u00A7\u00C3\u00A3o
[**simularUsingPOST**](AutorizacoesApi.md#simularUsingPOST) | **POST** /api/simular-transacao | Simula Compra Parcelada


<a name="cancelarUsingPOST"></a>
# **cancelarUsingPOST**
> TransacaoOnUsResponse cancelarUsingPOST(cancelamentoRequest)

Cancela Transa\u00C3\u00A7\u00C3\u00A3o financeira

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
api.cancelarUsingPOST(cancelamentoRequest, callback);
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

<a name="desfazerUsingPOST"></a>
# **desfazerUsingPOST**
> TransacaoOnUsResponse desfazerUsingPOST(autorizacaoOnUsRequest)

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
api.desfazerUsingPOST(autorizacaoOnUsRequest, callback);
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

<a name="desfazerUsingPOST1"></a>
# **desfazerUsingPOST1**
> TransacaoOnUsResponse desfazerUsingPOST1(desfazimentoRequest)

Desfazimento de Transa\u00C3\u00A7\u00C3\u00A3o

Este m\u00C3\u00A9todo permite que seja desfeita uma transa\u00C3\u00A7\u00C3\u00A3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AutorizacoesApi()

var desfazimentoRequest = new Pier.DesfazimentoTransacaoOnURequest(); // {DesfazimentoTransacaoOnURequest} desfazimentoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desfazerUsingPOST1(desfazimentoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **desfazimentoRequest** | [**DesfazimentoTransacaoOnURequest**](DesfazimentoTransacaoOnURequest.md)| desfazimentoRequest | 

### Return type

[**TransacaoOnUsResponse**](TransacaoOnUsResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="simularUsingPOST"></a>
# **simularUsingPOST**
> TransacaoOnUsResponse simularUsingPOST(transacoesRequest)

Simula Compra Parcelada

Este m\u00C3\u00A9todo permite que seja simulada uma compra parcelada.

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

