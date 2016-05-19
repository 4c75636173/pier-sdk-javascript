# Pier.CartaoApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bloquearCartaoUsingPOST**](CartaoApi.md#bloquearCartaoUsingPOST) | **POST** /v1/contas/{idConta}/cartoes/{idCartao}/bloquear | /contas/{idConta}/cartoes/{idCartao}/bloquear
[**consultarCartaoUsingGET**](CartaoApi.md#consultarCartaoUsingGET) | **GET** /v1/contas/{idConta}/cartoes/{idCartao} | /contas/{idConta}/cartoes/{idCartao}
[**consultarCartoesUsingGET**](CartaoApi.md#consultarCartoesUsingGET) | **GET** /v1/contas/{idConta}/cartoes | /contas/{idConta}/cartoes
[**desbloquearCartaoUsingPOST**](CartaoApi.md#desbloquearCartaoUsingPOST) | **POST** /v1/contas/{idConta}/cartoes/{idCartao}/desbloquear | /contas/{idConta}/cartoes/{idCartao}/desbloquear


<a name="bloquearCartaoUsingPOST"></a>
# **bloquearCartaoUsingPOST**
> CancelarCartaoResponse bloquearCartaoUsingPOST(idConta, idCartao, motivo, opts)

/contas/{idConta}/cartoes/{idCartao}/bloquear

Bloquear um determinado cart\u00C3\u00A3o

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

var motivo = 56; // {Integer} Motivo do bloqueio

var opts = { 
  'observacao': "observacao_example" // {String} Alguma observa\u00C3\u00A7\u00C3\u00A3o para o bloqueio
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.bloquearCartaoUsingPOST(idConta, idCartao, motivo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja cancelar | 
 **motivo** | **Integer**| Motivo do bloqueio | 
 **observacao** | **String**| Alguma observa\u00C3\u00A7\u00C3\u00A3o para o bloqueio | [optional] 

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

<a name="desbloquearCartaoUsingPOST"></a>
# **desbloquearCartaoUsingPOST**
> DesbloquearCartaoResponse desbloquearCartaoUsingPOST(idConta, idCartao, opts)

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

var opts = { 
  'codigoSegurancao': "codigoSegurancao_example" // {String} C\u00C3\u00B3digo seguran\u00C3\u00A7a do cart\u00C3\u00A3o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desbloquearCartaoUsingPOST(idConta, idCartao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite | 
 **codigoSegurancao** | **String**| C\u00C3\u00B3digo seguran\u00C3\u00A7a do cart\u00C3\u00A3o | [optional] 

### Return type

[**DesbloquearCartaoResponse**](DesbloquearCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

