# Pier.NotificacoesApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarSMSUsingPOST**](NotificacoesApi.md#atualizarSMSUsingPOST) | **POST** /api/notificacoes/sms/atualizar-status | Atualizar SMS
[**listarPushUsingGET**](NotificacoesApi.md#listarPushUsingGET) | **GET** /api/notificacoes/push | Listar Push
[**listarSMSUsingGET**](NotificacoesApi.md#listarSMSUsingGET) | **GET** /api/notificacoes/sms | Listar SMS
[**responderSMSUsingPOST**](NotificacoesApi.md#responderSMSUsingPOST) | **POST** /api/notificacoes/sms/responder | Responder SMS
[**salvarPushFCMUsingPOST**](NotificacoesApi.md#salvarPushFCMUsingPOST) | **POST** /api/notificacoes/push/fcm | Enviar Push FCM
[**salvarPushGCMUsingPOST**](NotificacoesApi.md#salvarPushGCMUsingPOST) | **POST** /api/notificacoes/push/gcm | Enviar Push GCM
[**salvarPushUsingPOST**](NotificacoesApi.md#salvarPushUsingPOST) | **POST** /api/notificacoes/push/apns | Enviar Push APNS
[**salvarSMSUsingPOST**](NotificacoesApi.md#salvarSMSUsingPOST) | **POST** /api/notificacoes/sms | Enviar SMS


<a name="atualizarSMSUsingPOST"></a>
# **atualizarSMSUsingPOST**
> NotificacaoSMSResponse atualizarSMSUsingPOST(opts)

Atualizar SMS

Esse recurso permite atualizar o status do SMS do emissor

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacoesApi()

var opts = { 
  'nsu': "nsu_example", // {String} Seu n\u00C3\u00BAmero
  'status': "status_example", // {String} Status
  'data': "data_example", // {String} Data
  'textoStatus': "textoStatus_example", // {String} TextoStatus
  'operadora': "operadora_example" // {String} Operadora
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarSMSUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nsu** | **String**| Seu n\u00C3\u00BAmero | [optional] 
 **status** | **String**| Status | [optional] 
 **data** | **String**| Data | [optional] 
 **textoStatus** | **String**| TextoStatus | [optional] 
 **operadora** | **String**| Operadora | [optional] 

### Return type

[**NotificacaoSMSResponse**](NotificacaoSMSResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarPushUsingGET"></a>
# **listarPushUsingGET**
> PagePushResponse listarPushUsingGET(opts)

Listar Push

Esse recurso permite listar os Pushes do emissor

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacoesApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataEnvio': "dataEnvio_example", // {String} Apresenta a data e em que o registro foi enviado para o dispositivo.
  'tipoEvento': "tipoEvento_example", // {String} Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o
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
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataEnvio** | **String**| Apresenta a data e em que o registro foi enviado para o dispositivo. | [optional] 
 **tipoEvento** | **String**| Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **status** | **String**| Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **plataforma** | **String**| Plataforma de Push notifications. | [optional] 
 **protocolo** | **String**| N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es | [optional] 

### Return type

[**PagePushResponse**](PagePushResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarSMSUsingGET"></a>
# **listarSMSUsingGET**
> PageSMSResponse listarSMSUsingGET(opts)

Listar SMS

Esse recurso permite listar os SMS do emissor

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacoesApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataInclusao': "dataInclusao_example", // {String} Apresenta a data e em que o registro foi inclu\u00C3\u00ADdo na base para ser enviado
  'tipoEvento': "tipoEvento_example", // {String} Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o
  'status': "status_example", // {String} Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
  'operadora': "operadora_example", // {String} Nome da operadora a qual a notifica\u00C3\u00A7\u00C3\u00A3o foi enviada.
  'protocolo': "protocolo_example", // {String} N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
  'nsu': 789 // {Integer} Apresenta o nsu da notifica\u00C3\u00A7\u00C3\u00A3o
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
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataInclusao** | **String**| Apresenta a data e em que o registro foi inclu\u00C3\u00ADdo na base para ser enviado | [optional] 
 **tipoEvento** | **String**| Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **status** | **String**| Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **operadora** | **String**| Nome da operadora a qual a notifica\u00C3\u00A7\u00C3\u00A3o foi enviada. | [optional] 
 **protocolo** | **String**| N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es | [optional] 
 **nsu** | **Integer**| Apresenta o nsu da notifica\u00C3\u00A7\u00C3\u00A3o | [optional] 

### Return type

[**PageSMSResponse**](PageSMSResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="responderSMSUsingPOST"></a>
# **responderSMSUsingPOST**
> NotificacaoSMSResponse responderSMSUsingPOST(opts)

Responder SMS

Esse recurso permite atualizar a resposta do SMS, fornecida pedo usu\u00C3\u00A1rio

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.NotificacoesApi()

var opts = { 
  'nsu': "nsu_example", // {String} Seu n\u00C3\u00BAmero
  'data': "data_example", // {String} Data
  'resposta': "resposta_example" // {String} TextoStatus
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.responderSMSUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nsu** | **String**| Seu n\u00C3\u00BAmero | [optional] 
 **data** | **String**| Data | [optional] 
 **resposta** | **String**| TextoStatus | [optional] 

### Return type

[**NotificacaoSMSResponse**](NotificacaoSMSResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPushFCMUsingPOST"></a>
# **salvarPushFCMUsingPOST**
> NotificacaoResponse salvarPushFCMUsingPOST(pushPersists)

Enviar Push FCM

Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma FCM (Firebase Cloud Messaging).

### Example
```javascript
var Pier = require('Pier');

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

[**NotificacaoResponse**](NotificacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPushGCMUsingPOST"></a>
# **salvarPushGCMUsingPOST**
> NotificacaoResponse salvarPushGCMUsingPOST(pushPersists)

Enviar Push GCM

Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma GCM (Google Cloud Messaging).

### Example
```javascript
var Pier = require('Pier');

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

[**NotificacaoResponse**](NotificacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPushUsingPOST"></a>
# **salvarPushUsingPOST**
> NotificacaoResponse salvarPushUsingPOST(pushPersists)

Enviar Push APNS

Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma APNS (Apple Push Notification Service).

### Example
```javascript
var Pier = require('Pier');

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

[**NotificacaoResponse**](NotificacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarSMSUsingPOST"></a>
# **salvarSMSUsingPOST**
> NotificacaoResponse salvarSMSUsingPOST(listaSMS)

Enviar SMS

Esse recurso permite enviar uma lista de SMS.

### Example
```javascript
var Pier = require('Pier');

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

[**NotificacaoResponse**](NotificacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

