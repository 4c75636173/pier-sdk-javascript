# Pier.CartaoApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelarCartaoUsingPOST**](CartaoApi.md#cancelarCartaoUsingPOST) | **POST** /api/v1/contas/{idConta}/cartoes/{idCartao}/cancelar | /contas/{idConta}/cartoes/{idCartao}/cancelar
[**consultarCartaoUsingGET**](CartaoApi.md#consultarCartaoUsingGET) | **GET** /api/v1/contas/{idConta}/cartoes/{idCartao} | /contas/{idConta}/cartoes/{idCartao}
[**consultarCartoesUsingGET**](CartaoApi.md#consultarCartoesUsingGET) | **GET** /api/v1/contas/{idConta}/cartoes | /contas/{idConta}/cartoes
[**consultarExtratoFaturasUsingGET**](CartaoApi.md#consultarExtratoFaturasUsingGET) | **GET** /api/v1/contas/{idConta}/cartoes/{idCartao}/faturas | /contas/{idConta}/cartoes/{idCartao}/faturas
[**consultarSaldosLimitesUsingGET**](CartaoApi.md#consultarSaldosLimitesUsingGET) | **GET** /api/v1/contas/{idConta}/cartoes/{idCartao}/limites | /contas/{idConta}/cartoes/{idCartao}/limites
[**desbloquearCartaoUsingPOST**](CartaoApi.md#desbloquearCartaoUsingPOST) | **POST** /api/v1/contas/{idConta}/cartoes/{idCartao}/desbloquear | /contas/{idConta}/cartoes/{idCartao}/desbloquear


<a name="cancelarCartaoUsingPOST"></a>
# **cancelarCartaoUsingPOST**
> CancelarCartaoResponse cancelarCartaoUsingPOST(idConta, idCartao, motivo, observacao)

/contas/{idConta}/cartoes/{idCartao}/cancelar

Cancelar um determinado cart\u00C3\u00A3o

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoApi()

var idConta = 56; // {Integer} ID da Conta

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja cancelar

var motivo = 56; // {Integer} Motivo do cancelamento

var observacao = "observacao_example"; // {String} Alguma observa\u00C3\u00A7\u00C3\u00A3o para o cancelamento


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarCartaoUsingPOST(idConta, idCartao, motivo, observacao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja cancelar | 
 **motivo** | **Integer**| Motivo do cancelamento | 
 **observacao** | **String**| Alguma observa\u00C3\u00A7\u00C3\u00A3o para o cancelamento | 

### Return type

[**CancelarCartaoResponse**](CancelarCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarCartaoUsingGET"></a>
# **consultarCartaoUsingGET**
> ConsultarCartaoResponse consultarCartaoUsingGET(idConta, idCartao, opts)

/contas/{idConta}/cartoes/{idCartao}

Consultar as informa\u00C3\u00A7\u00C3\u00B5es de um determinado cart\u00C3\u00A3o de uma conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoApi()

var idConta = 56; // {Integer} ID da Conta que pertence o cart\u00C3\u00A3o

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja consultar

var opts = { 
  'numeroCartao': "numeroCartao_example" // {String} N\u00C3\u00BAmero do Cart\u00C3\u00A3o que deseja consultar (opcional)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarCartaoUsingGET(idConta, idCartao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta que pertence o cart\u00C3\u00A3o | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja consultar | 
 **numeroCartao** | **String**| N\u00C3\u00BAmero do Cart\u00C3\u00A3o que deseja consultar (opcional) | [optional] 

### Return type

[**ConsultarCartaoResponse**](ConsultarCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarCartoesUsingGET"></a>
# **consultarCartoesUsingGET**
> ConsultarCartaoResponse consultarCartoesUsingGET(idConta)

/contas/{idConta}/cartoes

Consultar todos os cart\u00C3\u00B5es de uma determinada conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoApi()

var idConta = 56; // {Integer} ID da Conta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarCartoesUsingGET(idConta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 

### Return type

[**ConsultarCartaoResponse**](ConsultarCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarExtratoFaturasUsingGET"></a>
# **consultarExtratoFaturasUsingGET**
> ConsultarExtratoContaResponse consultarExtratoFaturasUsingGET(idConta, idCartao, dataVencimento)

/contas/{idConta}/cartoes/{idCartao}/faturas

Consulte os extratos/faturas do cart\u00C3\u00A3o de uma determinada conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoApi()

var idConta = 56; // {Integer} ID da Conta

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja consultar o extrato

var dataVencimento = "dataVencimento_example"; // {String} Data limite para o vencimento das transa\u00C3\u00A7\u00C3\u00B5es


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarExtratoFaturasUsingGET(idConta, idCartao, dataVencimento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja consultar o extrato | 
 **dataVencimento** | **String**| Data limite para o vencimento das transa\u00C3\u00A7\u00C3\u00B5es | 

### Return type

[**ConsultarExtratoContaResponse**](ConsultarExtratoContaResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarSaldosLimitesUsingGET"></a>
# **consultarSaldosLimitesUsingGET**
> ConsultarSaldoLimitesResponse consultarSaldosLimitesUsingGET(idConta, idCartao)

/contas/{idConta}/cartoes/{idCartao}/limites

Consulte os limites de um determinado cart\u00C3\u00A3o

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoApi()

var idConta = 56; // {Integer} ID da Conta

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarSaldosLimitesUsingGET(idConta, idCartao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite | 

### Return type

[**ConsultarSaldoLimitesResponse**](ConsultarSaldoLimitesResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desbloquearCartaoUsingPOST"></a>
# **desbloquearCartaoUsingPOST**
> DesbloquearCartaoResponse desbloquearCartaoUsingPOST(idConta, idCartao, codigoSegurancao)

/contas/{idConta}/cartoes/{idCartao}/desbloquear

Desbloquear cart\u00C3\u00A3o de uma determinada conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoApi()

var idConta = 56; // {Integer} ID da Conta

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite

var codigoSegurancao = "codigoSegurancao_example"; // {String} C\u00C3\u00B3digo seguran\u00C3\u00A7a do cart\u00C3\u00A3o


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desbloquearCartaoUsingPOST(idConta, idCartao, codigoSegurancao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite | 
 **codigoSegurancao** | **String**| C\u00C3\u00B3digo seguran\u00C3\u00A7a do cart\u00C3\u00A3o | 

### Return type

[**DesbloquearCartaoResponse**](DesbloquearCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

