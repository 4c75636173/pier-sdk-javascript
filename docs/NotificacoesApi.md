# Pier.NotificacoesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarSMSUsingPOST**](NotificacoesApi.md#atualizarSMSUsingPOST) | **POST** /api/notificacoes/sms/atualizar-status | Atualizar SMS
[**limparAcessoTWWUsingGET**](NotificacoesApi.md#limparAcessoTWWUsingGET) | **GET** /api/notificacoes/sms/limpar | Limpar Acessos
[**listarPushUsingGET**](NotificacoesApi.md#listarPushUsingGET) | **GET** /api/notificacoes/push | Listar Push
[**listarSMSUsingGET**](NotificacoesApi.md#listarSMSUsingGET) | **GET** /api/notificacoes/sms | Listar SMS
[**responderSMSUsingPOST**](NotificacoesApi.md#responderSMSUsingPOST) | **POST** /api/notificacoes/sms/responder | Responder SMS
[**salvarPushFCMUsingPOST**](NotificacoesApi.md#salvarPushFCMUsingPOST) | **POST** /api/notificacoes/push/fcm | Enviar Push FCM
[**salvarPushGCMUsingPOST**](NotificacoesApi.md#salvarPushGCMUsingPOST) | **POST** /api/notificacoes/push/gcm | Enviar Push GCM
[**salvarPushUsingPOST**](NotificacoesApi.md#salvarPushUsingPOST) | **POST** /api/notificacoes/push/apns | Enviar Push APNS
[**salvarSMSUsingPOST**](NotificacoesApi.md#salvarSMSUsingPOST) | **POST** /api/notificacoes/sms | Enviar SMS


<a name="atualizarSMSUsingPOST"></a>
# **atualizarSMSUsingPOST**
> SMS atualizarSMSUsingPOST(nsu, status, data, textoStatus, operadora)

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

var nsu = "nsu_example"; // {String} Seu n\u00C3\u00BAmero

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
api.atualizarSMSUsingPOST(nsu, status, data, textoStatus, operadora, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nsu** | **String**| Seu n\u00C3\u00BAmero | 
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

<a name="limparAcessoTWWUsingGET"></a>
# **limparAcessoTWWUsingGET**
> &#39;String&#39; limparAcessoTWWUsingGET

Limpar Acessos

Esse recurso permite limpar a lista de emissores que possuem acesso a envio de SMS pela TWW.

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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.limparAcessoTWWUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarPushUsingGET"></a>
# **listarPushUsingGET**
> PagePush listarPushUsingGET(opts)

Listar Push

Esse recurso permite listar os Pushes do emissor

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

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'dataEnvio': new Pier.ModelDate(), // {ModelDate} Apresenta a data e em que o registro foi enviado para o dispositivo.
  'evento': "evento_example", // {String} Nome do evento da notifica\u00C3\u00A7\u00C3\u00A3o
  'status': "status_example", // {String} Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
  'plataforma': "plataforma_example", // {String} Plataforma de Push notifications.
  'protocolo': "protocolo_example" // {String} N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarPushUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **dataEnvio** | **ModelDate**| Apresenta a data e em que o registro foi enviado para o dispositivo. | [optional] 
 **evento** | **String**| Nome do evento da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **status** | **String**| Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **plataforma** | **String**| Plataforma de Push notifications. | [optional] 
 **protocolo** | **String**| N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es | [optional] 

### Return type

[**PagePush**](PagePush.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarSMSUsingGET"></a>
# **listarSMSUsingGET**
> PageSMS listarSMSUsingGET(opts)

Listar SMS

Esse recurso permite listar os SMS do emissor

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

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'dataInclusao': new Date("2013-10-20T19:20:30+01:00"), // {Date} Apresenta a data e em que o registro foi inclu\u00C3\u00ADdo na base para ser enviado
  'evento': "evento_example", // {String} Nome do evento da notifica\u00C3\u00A7\u00C3\u00A3o
  'status': "status_example", // {String} Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
  'operadora': "operadora_example", // {String} Nome da operadora a qual a notifica\u00C3\u00A7\u00C3\u00A3o foi enviada.
  'protocolo': "protocolo_example" // {String} N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarSMSUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **dataInclusao** | **Date**| Apresenta a data e em que o registro foi inclu\u00C3\u00ADdo na base para ser enviado | [optional] 
 **evento** | **String**| Nome do evento da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **status** | **String**| Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **operadora** | **String**| Nome da operadora a qual a notifica\u00C3\u00A7\u00C3\u00A3o foi enviada. | [optional] 
 **protocolo** | **String**| N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es | [optional] 

### Return type

[**PageSMS**](PageSMS.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="responderSMSUsingPOST"></a>
# **responderSMSUsingPOST**
> SMS responderSMSUsingPOST(nsu, data, resposta)

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

var nsu = "nsu_example"; // {String} Seu n\u00C3\u00BAmero

var data = "data_example"; // {String} Data

var resposta = "resposta_example"; // {String} TextoStatus


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.responderSMSUsingPOST(nsu, data, resposta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nsu** | **String**| Seu n\u00C3\u00BAmero | 
 **data** | **String**| Data | 
 **resposta** | **String**| TextoStatus | 

### Return type

[**SMS**](SMS.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPushFCMUsingPOST"></a>
# **salvarPushFCMUsingPOST**
> NotificacaoSMSResponse salvarPushFCMUsingPOST(pushPersists)

Enviar Push FCM

Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma FCM (Firebase Cloud Messaging).

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

var pushPersists = [new Pier.PushFCMEGCM()]; // {[PushFCMEGCM]} pushPersists


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPushFCMUsingPOST(pushPersists, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushPersists** | [**[PushFCMEGCM]**](PushFCMEGCM.md)| pushPersists | 

### Return type

[**NotificacaoSMSResponse**](NotificacaoSMSResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPushGCMUsingPOST"></a>
# **salvarPushGCMUsingPOST**
> NotificacaoSMSResponse salvarPushGCMUsingPOST(pushPersists)

Enviar Push GCM

Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma GCM (Google Cloud Messaging).

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

var pushPersists = [new Pier.PushFCMEGCM()]; // {[PushFCMEGCM]} pushPersists


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPushGCMUsingPOST(pushPersists, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushPersists** | [**[PushFCMEGCM]**](PushFCMEGCM.md)| pushPersists | 

### Return type

[**NotificacaoSMSResponse**](NotificacaoSMSResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPushUsingPOST"></a>
# **salvarPushUsingPOST**
> NotificacaoSMSResponse salvarPushUsingPOST(pushPersists)

Enviar Push APNS

Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma APNS (Apple Push Notification Service).

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

var pushPersists = [new Pier.PushAPNS()]; // {[PushAPNS]} pushPersists


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPushUsingPOST(pushPersists, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushPersists** | [**[PushAPNS]**](PushAPNS.md)| pushPersists | 

### Return type

[**NotificacaoSMSResponse**](NotificacaoSMSResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarSMSUsingPOST"></a>
# **salvarSMSUsingPOST**
> NotificacaoSMSResponse salvarSMSUsingPOST(listaSMS)

Enviar SMS

Esse recurso permite enviar uma lista de SMS.

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

var listaSMS = [new Pier.NotificacaoSMSBody()]; // {[NotificacaoSMSBody]} listaSMS


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarSMSUsingPOST(listaSMS, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listaSMS** | [**[NotificacaoSMSBody]**](NotificacaoSMSBody.md)| listaSMS | 

### Return type

[**NotificacaoSMSResponse**](NotificacaoSMSResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

