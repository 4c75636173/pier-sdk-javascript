# Pier.NotificacoesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarSMSUsingPUT**](NotificacoesApi.md#atualizarSMSUsingPUT) | **PUT** /api/notificacoes/sms/atualizar-status | Atualizar SMS
[**responderSMSUsingPUT**](NotificacoesApi.md#responderSMSUsingPUT) | **PUT** /api/notificacoes/sms/responder | Responder SMS


<a name="atualizarSMSUsingPUT"></a>
# **atualizarSMSUsingPUT**
> SMS atualizarSMSUsingPUT(seuNum, status, data, textoStatus, operadora)

Atualizar SMS

Esse recurso permite atualizar o status do SMS do emissor

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.NotificacoesApi()

var seuNum = "seuNum_example"; // {String} Seu n\u00C3\u00BAmero

var status = "status_example"; // {String} Status

var data = "data_example"; // {String} Data

var textoStatus = "textoStatus_example"; // {String} TextoStatus

var operadora = "operadora_example"; // {String} Operadora


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarSMSUsingPUT(seuNum, status, data, textoStatus, operadora, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seuNum** | **String**| Seu n\u00C3\u00BAmero | 
 **status** | **String**| Status | 
 **data** | **String**| Data | 
 **textoStatus** | **String**| TextoStatus | 
 **operadora** | **String**| Operadora | 

### Return type

[**SMS**](SMS.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="responderSMSUsingPUT"></a>
# **responderSMSUsingPUT**
> SMS responderSMSUsingPUT(seunum, data, textoSmsMo)

Responder SMS

Esse recurso permite atualizar a resposta do SMS, fornecida pedo usu\u00C3\u00A1rio

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.NotificacoesApi()

var seunum = "seunum_example"; // {String} Seu n\u00C3\u00BAmero

var data = "data_example"; // {String} Data

var textoSmsMo = "textoSmsMo_example"; // {String} TextoStatus


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.responderSMSUsingPUT(seunum, data, textoSmsMo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seunum** | **String**| Seu n\u00C3\u00BAmero | 
 **data** | **String**| Data | 
 **textoSmsMo** | **String**| TextoStatus | 

### Return type

[**SMS**](SMS.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

