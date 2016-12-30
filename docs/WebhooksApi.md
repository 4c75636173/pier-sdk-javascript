# Pier.WebhooksApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT2**](WebhooksApi.md#alterarUsingPUT2) | **PUT** /api/webhooks | Alterar Webhook
[**consultarUsingGET9**](WebhooksApi.md#consultarUsingGET9) | **GET** /api/webhooks/{id_webhook} | Consultar Webhook
[**listarUsingGET10**](WebhooksApi.md#listarUsingGET10) | **GET** /api/webhooks | Lista os Webhooks
[**salvarUsingPOST3**](WebhooksApi.md#salvarUsingPOST3) | **POST** /api/webhooks | Salvar Webhook


<a name="alterarUsingPUT2"></a>
# **alterarUsingPUT2**
> WebHook alterarUsingPUT2(id, evento, metodo, url)

Alterar Webhook

Este m\u00C3\u00A9todo permite que seja modificado um webhooks j\u00C3\u00A1 cadastrado

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.WebhooksApi()

var id = 789; // {Integer} C\u00C3\u00B3digo identificador do Webhook

var evento = new Pier.ModelObject(); // {ModelObject} Evento a ser chamado pelo WebHook

var metodo = new Pier.ModelObject(); // {ModelObject} M\u00C3\u00A9todo que a ser chamado pelo WebHook

var url = "url_example"; // {String} URL que a ser consumida pelo WebHook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT2(id, evento, metodo, url, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo identificador do Webhook | 
 **evento** | [**ModelObject**](.md)| Evento a ser chamado pelo WebHook | 
 **metodo** | [**ModelObject**](.md)| M\u00C3\u00A9todo que a ser chamado pelo WebHook | 
 **url** | **String**| URL que a ser consumida pelo WebHook | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET9"></a>
# **consultarUsingGET9**
> WebHook consultarUsingGET9(idWebhook)

Consultar Webhook

Este m\u00C3\u00A9todo permite que sejam consultado um webhook do emissor atrav\u00C3\u00A9s de um id especifico

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.WebhooksApi()

var idWebhook = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Webhook (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET9(idWebhook, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idWebhook** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Webhook (id). | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET10"></a>
# **listarUsingGET10**
> PageWebHooks listarUsingGET10(opts)

Lista os Webhooks

Este m\u00C3\u00A9todo permite que sejam listados os webhooks existentes

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.WebhooksApi()

var opts = { 
  'id': 789, // {Integer} Id do WebHook
  'evento': new Pier.ModelObject(), // {ModelObject} Evento a ser chamado pelo WebHook
  'metodo': new Pier.ModelObject(), // {ModelObject} M\u00C3\u00A9todo que a ser chamado pelo WebHook
  'url': "url_example", // {String} URL que a ser consumida pelo WebHook
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET10(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id do WebHook | [optional] 
 **evento** | [**ModelObject**](.md)| Evento a ser chamado pelo WebHook | [optional] 
 **metodo** | [**ModelObject**](.md)| M\u00C3\u00A9todo que a ser chamado pelo WebHook | [optional] 
 **url** | **String**| URL que a ser consumida pelo WebHook | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 

### Return type

[**PageWebHooks**](PageWebHooks.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST3"></a>
# **salvarUsingPOST3**
> WebHook salvarUsingPOST3(evento, metodo, url)

Salvar Webhook

Este m\u00C3\u00A9todo permite que seja adicionado um novo webhook

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.WebhooksApi()

var evento = new Pier.ModelObject(); // {ModelObject} Evento a ser chamado pelo WebHook

var metodo = new Pier.ModelObject(); // {ModelObject} M\u00C3\u00A9todo que a ser chamado pelo WebHook

var url = "url_example"; // {String} URL que a ser consumida pelo WebHook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST3(evento, metodo, url, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evento** | [**ModelObject**](.md)| Evento a ser chamado pelo WebHook | 
 **metodo** | [**ModelObject**](.md)| M\u00C3\u00A9todo que a ser chamado pelo WebHook | 
 **url** | **String**| URL que a ser consumida pelo WebHook | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json
