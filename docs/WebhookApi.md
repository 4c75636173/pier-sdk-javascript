# Pier.WebhookApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT22**](WebhookApi.md#alterarUsingPUT22) | **PUT** /api/webhooks/{id} | Alterar Webhook
[**consultarUsingGET44**](WebhookApi.md#consultarUsingGET44) | **GET** /api/webhooks/{id} | Consultar Webhook
[**listarUsingGET53**](WebhookApi.md#listarUsingGET53) | **GET** /api/webhooks | Lista os Webhooks
[**salvarUsingPOST30**](WebhookApi.md#salvarUsingPOST30) | **POST** /api/webhooks | Salvar Webhook


<a name="alterarUsingPUT22"></a>
# **alterarUsingPUT22**
> WebHookResponse alterarUsingPUT22(id, webhook, opts)

Alterar Webhook

Este m\u00C3\u00A9todo permite que seja modificado um webhooks j\u00C3\u00A1 cadastrado

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.WebhookApi()

var id = 789; // {Integer} C\u00C3\u00B3digo identificador do Webhook

var webhook = new Pier.WebHook(); // {WebHook} webhook

var opts = { 
  'status': "status_example" // {String} Status
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT22(id, webhook, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo identificador do Webhook | 
 **webhook** | [**WebHook**](WebHook.md)| webhook | 
 **status** | **String**| Status | [optional] 

### Return type

[**WebHookResponse**](WebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET44"></a>
# **consultarUsingGET44**
> WebHookResponse consultarUsingGET44(id)

Consultar Webhook

Este m\u00C3\u00A9todo permite que sejam consultado um webhook do emissor atrav\u00C3\u00A9s de um id especifico

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.WebhookApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Webhook (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET44(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Webhook (id). | 

### Return type

[**WebHookResponse**](WebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET53"></a>
# **listarUsingGET53**
> PageWebHookResponse listarUsingGET53(opts)

Lista os Webhooks

Este m\u00C3\u00A9todo permite que sejam listados os webhooks existentes

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.WebhookApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} Id do WebHook
  'tipoEvento': "tipoEvento_example", // {String} TipoEvento a ser chamado pelo WebHook
  'metodo': "metodo_example", // {String} M\u00C3\u00A9todo que a ser chamado pelo WebHook
  'url': "url_example" // {String} URL que a ser consumida pelo WebHook
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET53(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| Id do WebHook | [optional] 
 **tipoEvento** | **String**| TipoEvento a ser chamado pelo WebHook | [optional] 
 **metodo** | **String**| M\u00C3\u00A9todo que a ser chamado pelo WebHook | [optional] 
 **url** | **String**| URL que a ser consumida pelo WebHook | [optional] 

### Return type

[**PageWebHookResponse**](PageWebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST30"></a>
# **salvarUsingPOST30**
> WebHookResponse salvarUsingPOST30(webhook)

Salvar Webhook

Este m\u00C3\u00A9todo permite que seja adicionado um novo webhook

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.WebhookApi()

var webhook = new Pier.WebHook(); // {WebHook} webhook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST30(webhook, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**WebHook**](WebHook.md)| webhook | 

### Return type

[**WebHookResponse**](WebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

