# Pier.GlobaltagwebhookApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT24**](GlobaltagwebhookApi.md#alterarUsingPUT24) | **PUT** /api/webhooks/{id} | {{{web_hook_resource_alterar}}}
[**consultarUsingGET52**](GlobaltagwebhookApi.md#consultarUsingGET52) | **GET** /api/webhooks/{id} | {{{web_hook_resource_consultar}}}
[**listarUsingGET66**](GlobaltagwebhookApi.md#listarUsingGET66) | **GET** /api/webhooks | {{{web_hook_resource_listar}}}
[**salvarUsingPOST35**](GlobaltagwebhookApi.md#salvarUsingPOST35) | **POST** /api/webhooks | {{{web_hook_resource_salvar}}}


<a name="alterarUsingPUT24"></a>
# **alterarUsingPUT24**
> WebHookResponse alterarUsingPUT24(id, webhook, opts)

{{{web_hook_resource_alterar}}}

{{{web_hook_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagwebhookApi()

var id = 789; // {Integer} {{{web_hook_resource_alterar_param_id}}}

var webhook = new Pier.WebHookPersistValue(); // {WebHookPersistValue} webhook

var opts = { 
  'status': "status_example" // {String} {{{web_hook_resource_alterar_param_status}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT24(id, webhook, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{web_hook_resource_alterar_param_id}}} | 
 **webhook** | [**WebHookPersistValue**](WebHookPersistValue.md)| webhook | 
 **status** | **String**| {{{web_hook_resource_alterar_param_status}}} | [optional] 

### Return type

[**WebHookResponse**](WebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET52"></a>
# **consultarUsingGET52**
> WebHookResponse consultarUsingGET52(id)

{{{web_hook_resource_consultar}}}

{{{web_hook_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagwebhookApi()

var id = 789; // {Integer} {{{web_hook_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET52(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{web_hook_resource_consultar_param_id}}} | 

### Return type

[**WebHookResponse**](WebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET66"></a>
# **listarUsingGET66**
> PageWebHookResponse listarUsingGET66(opts)

{{{web_hook_resource_listar}}}

{{{web_hook_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagwebhookApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{web_hook_request_id_value}}}
  'tipoEvento': "tipoEvento_example", // {String} {{{web_hook_request_tipo_evento_value}}}
  'metodo': "metodo_example", // {String} {{{web_hook_request_metodo_value}}}
  'url': "url_example" // {String} {{{web_hook_request_url_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET66(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{web_hook_request_id_value}}} | [optional] 
 **tipoEvento** | **String**| {{{web_hook_request_tipo_evento_value}}} | [optional] 
 **metodo** | **String**| {{{web_hook_request_metodo_value}}} | [optional] 
 **url** | **String**| {{{web_hook_request_url_value}}} | [optional] 

### Return type

[**PageWebHookResponse**](PageWebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST35"></a>
# **salvarUsingPOST35**
> WebHookResponse salvarUsingPOST35(webhook)

{{{web_hook_resource_salvar}}}

{{{web_hook_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagwebhookApi()

var webhook = new Pier.WebHookPersistValue(); // {WebHookPersistValue} webhook


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST35(webhook, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**WebHookPersistValue**](WebHookPersistValue.md)| webhook | 

### Return type

[**WebHookResponse**](WebHookResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

