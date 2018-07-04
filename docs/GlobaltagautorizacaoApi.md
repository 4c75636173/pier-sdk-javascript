# Pier.GlobaltagautorizacaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autorizarPorContaUsingPOST**](GlobaltagautorizacaoApi.md#autorizarPorContaUsingPOST) | **POST** /api/contas/{id}/autorizar-transacao | {{{transacao_on_us_resource_autorizar_por_conta}}}
[**autorizarUsingPOST**](GlobaltagautorizacaoApi.md#autorizarUsingPOST) | **POST** /api/autorizar-transacao | {{{transacao_on_us_resource_autorizar}}}
[**autorizarUsingPOST1**](GlobaltagautorizacaoApi.md#autorizarUsingPOST1) | **POST** /api/cartoes/{id}/autorizar-transacao | {{{transacao_on_us_resource_autorizar}}}
[**cancelarPorIdContaUsingPOST**](GlobaltagautorizacaoApi.md#cancelarPorIdContaUsingPOST) | **POST** /api/contas/{id}/cancelar-transacao | {{{transacao_on_us_resource_cancelar_por_id_conta}}}
[**cancelarUsingPOST2**](GlobaltagautorizacaoApi.md#cancelarUsingPOST2) | **POST** /api/cancelar-transacao | {{{transacao_on_us_resource_cancelar}}}
[**cancelarUsingPOST3**](GlobaltagautorizacaoApi.md#cancelarUsingPOST3) | **POST** /api/cartoes/{id}/cancelar-transacao | {{{transacao_on_us_resource_cancelar}}}
[**listarCodigosProcessamentoAutorizacaoUsingGET**](GlobaltagautorizacaoApi.md#listarCodigosProcessamentoAutorizacaoUsingGET) | **GET** /api/consultar-codigos-processamento-autorizacao | {{{enum_resource_listar_codigos_processamento_autorizacao}}}
[**simularUsingPOST**](GlobaltagautorizacaoApi.md#simularUsingPOST) | **POST** /api/simular-transacao | {{{transacao_on_us_resource_simular}}}


<a name="autorizarPorContaUsingPOST"></a>
# **autorizarPorContaUsingPOST**
> TransacaoOnUsResponse autorizarPorContaUsingPOST(id, transacaoOnUsPorIdCartaoRequest)

{{{transacao_on_us_resource_autorizar_por_conta}}}

{{{transacao_on_us_resource_autorizar_por_conta_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagautorizacaoApi()

var id = 789; // {Integer} {{{transacao_on_us_resource_autorizar_por_conta_param_id_conta}}}

var transacaoOnUsPorIdCartaoRequest = new Pier.TransacaoOnUsPorIdCartaoRequest(); // {TransacaoOnUsPorIdCartaoRequest} transacaoOnUsPorIdCartaoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.autorizarPorContaUsingPOST(id, transacaoOnUsPorIdCartaoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transacao_on_us_resource_autorizar_por_conta_param_id_conta}}} | 
 **transacaoOnUsPorIdCartaoRequest** | [**TransacaoOnUsPorIdCartaoRequest**](TransacaoOnUsPorIdCartaoRequest.md)| transacaoOnUsPorIdCartaoRequest | 

### Return type

[**TransacaoOnUsResponse**](TransacaoOnUsResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="autorizarUsingPOST"></a>
# **autorizarUsingPOST**
> TransacaoOnUsResponse autorizarUsingPOST(autorizacaoOnUsRequest)

{{{transacao_on_us_resource_autorizar}}}

{{{transacao_on_us_resource_autorizar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagautorizacaoApi()

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

{{{transacao_on_us_resource_autorizar}}}

{{{transacao_on_us_resource_autorizar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagautorizacaoApi()

var id = 789; // {Integer} {{{transacao_on_us_resource_autorizar_param_id_cartao}}}

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
 **id** | **Integer**| {{{transacao_on_us_resource_autorizar_param_id_cartao}}} | 
 **transacaoOnUsPorIdCartaoRequest** | [**TransacaoOnUsPorIdCartaoRequest**](TransacaoOnUsPorIdCartaoRequest.md)| transacaoOnUsPorIdCartaoRequest | 

### Return type

[**TransacaoOnUsResponse**](TransacaoOnUsResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelarPorIdContaUsingPOST"></a>
# **cancelarPorIdContaUsingPOST**
> TransacaoOnUsResponse cancelarPorIdContaUsingPOST(id, cancelamentoRequest)

{{{transacao_on_us_resource_cancelar_por_id_conta}}}

{{{transacao_on_us_resource_cancelar_por_id_conta_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagautorizacaoApi()

var id = 789; // {Integer} {{{transacao_on_us_resource_cancelar_por_id_conta_param_id_conta}}}

var cancelamentoRequest = new Pier.CancelamentoTransacaoPorIdCartaoRequest(); // {CancelamentoTransacaoPorIdCartaoRequest} cancelamentoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarPorIdContaUsingPOST(id, cancelamentoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transacao_on_us_resource_cancelar_por_id_conta_param_id_conta}}} | 
 **cancelamentoRequest** | [**CancelamentoTransacaoPorIdCartaoRequest**](CancelamentoTransacaoPorIdCartaoRequest.md)| cancelamentoRequest | 

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

{{{transacao_on_us_resource_cancelar}}}

{{{transacao_on_us_resource_cancelar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagautorizacaoApi()

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

{{{transacao_on_us_resource_cancelar}}}

{{{transacao_on_us_resource_cancelar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagautorizacaoApi()

var id = 789; // {Integer} {{{transacao_on_us_resource_cancelar_param_id_cartao}}}

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
 **id** | **Integer**| {{{transacao_on_us_resource_cancelar_param_id_cartao}}} | 
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

{{{enum_resource_listar_codigos_processamento_autorizacao}}}

{{{enum_resource_listar_codigos_processamento_autorizacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagautorizacaoApi()

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

{{{transacao_on_us_resource_simular}}}

{{{transacao_on_us_resource_simular_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagautorizacaoApi()

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

