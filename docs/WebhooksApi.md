# Pier.WebhooksApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT10**](WebhooksApi.md#alterarUsingPUT10) | **PUT** /api/webhooks/{id} | Alterar Webhook
[**consultarUsingGET27**](WebhooksApi.md#consultarUsingGET27) | **GET** /api/webhooks/{id} | Consultar Webhook
[**listarUsingGET31**](WebhooksApi.md#listarUsingGET31) | **GET** /api/webhooks | Lista os Webhooks
[**salvarUsingPOST16**](WebhooksApi.md#salvarUsingPOST16) | **POST** /api/webhooks | Salvar Webhook


<a name="alterarUsingPUT10"></a>
# **alterarUsingPUT10**
> WebHookResponse alterarUsingPUT10(id, tipoEvento, url)

Alterar Webhook

Este m\u00C3\u00A9todo permite que seja modificado um webhooks j\u00C3\u00A1 cadastrado

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.WebhooksApi()

var id = 789; // {Integer} C\u00C3\u00B3digo identificador do Webhook

var tipoEvento = "tipoEvento_example"; // {String} TipoEvento a ser chamado pelo WebHook

var url = "url_example"; // {String} URL que a ser consumida pelo WebHook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT10(id, tipoEvento, url, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo identificador do Webhook | 
 **tipoEvento** | **String**| TipoEvento a ser chamado pelo WebHook | 
 **url** | **String**| URL que a ser consumida pelo WebHook | 

### Return type

[**WebHookResponse**](WebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET27"></a>
# **consultarUsingGET27**
> WebHookResponse consultarUsingGET27(id)

Consultar Webhook

Este m\u00C3\u00A9todo permite que sejam consultado um webhook do emissor atrav\u00C3\u00A9s de um id especifico

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.WebhooksApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Webhook (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET27(id, callback);
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

<a name="listarUsingGET31"></a>
# **listarUsingGET31**
> PageWebHookResponse listarUsingGET31(opts)

Lista os Webhooks

Este m\u00C3\u00A9todo permite que sejam listados os webhooks existentes

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.WebhooksApi()

var opts = { 
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
api.listarUsingGET31(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="salvarUsingPOST16"></a>
# **salvarUsingPOST16**
> WebHookResponse salvarUsingPOST16(tipoEvento, url)

Salvar Webhook

Este m\u00C3\u00A9todo permite que seja adicionado um novo webhook

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.WebhooksApi()

var tipoEvento = "tipoEvento_example"; // {String} TipoEvento a ser chamado pelo WebHook

var url = "url_example"; // {String} URL que a ser consumida pelo WebHook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST16(tipoEvento, url, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tipoEvento** | **String**| TipoEvento a ser chamado pelo WebHook | 
 **url** | **String**| URL que a ser consumida pelo WebHook | 

### Return type

[**WebHookResponse**](WebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

