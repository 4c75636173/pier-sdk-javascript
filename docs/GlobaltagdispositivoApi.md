# Pier.GlobaltagdispositivoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ativarUsingPOST**](GlobaltagdispositivoApi.md#ativarUsingPOST) | **POST** /api/dispositivos/{id}/ativar-dispositivo | {{{dispositivo_resource_ativar}}}
[**desativarUsingPOST**](GlobaltagdispositivoApi.md#desativarUsingPOST) | **POST** /api/dispositivos/{id}/desativar-dispositivo | {{{dispositivo_resource_desativar}}}
[**listarUsingGET20**](GlobaltagdispositivoApi.md#listarUsingGET20) | **GET** /api/dispositivos | {{{dispositivo_resource_listar}}}
[**salvarUsingPOST10**](GlobaltagdispositivoApi.md#salvarUsingPOST10) | **POST** /api/dispositivos | {{{dispositivo_resource_salvar}}}


<a name="ativarUsingPOST"></a>
# **ativarUsingPOST**
> DispositivoResponse ativarUsingPOST(id)

{{{dispositivo_resource_ativar}}}

{{{dispositivo_resource_ativar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdispositivoApi()

var id = 789; // {Integer} {{{dispositivo_resource_ativar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{dispositivo_resource_ativar_param_id}}} | 

### Return type

[**DispositivoResponse**](DispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarUsingPOST"></a>
# **desativarUsingPOST**
> DispositivoResponse desativarUsingPOST(id)

{{{dispositivo_resource_desativar}}}

{{{dispositivo_resource_desativar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdispositivoApi()

var id = 789; // {Integer} {{{dispositivo_resource_desativar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{dispositivo_resource_desativar_param_id}}} | 

### Return type

[**DispositivoResponse**](DispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET20"></a>
# **listarUsingGET20**
> PageDispositivoResponse listarUsingGET20(opts)

{{{dispositivo_resource_listar}}}

{{{dispositivo_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdispositivoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'token': "token_example", // {String} {{{dispositivo_request_token_value}}}
  'idUsuario': 789, // {Integer} {{{dispositivo_request_id_usuario_value}}}
  'idAplicacaoMobile': 789, // {Integer} {{{dispositivo_request_id_aplicacao_mobile_value}}}
  'dataCriacao': "dataCriacao_example", // {String} {{{dispositivo_request_data_criacao_value}}}
  'dataDesativacao': "dataDesativacao_example" // {String} {{{dispositivo_request_data_desativacao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET20(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **token** | **String**| {{{dispositivo_request_token_value}}} | [optional] 
 **idUsuario** | **Integer**| {{{dispositivo_request_id_usuario_value}}} | [optional] 
 **idAplicacaoMobile** | **Integer**| {{{dispositivo_request_id_aplicacao_mobile_value}}} | [optional] 
 **dataCriacao** | **String**| {{{dispositivo_request_data_criacao_value}}} | [optional] 
 **dataDesativacao** | **String**| {{{dispositivo_request_data_desativacao_value}}} | [optional] 

### Return type

[**PageDispositivoResponse**](PageDispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST10"></a>
# **salvarUsingPOST10**
> DispositivoResponse salvarUsingPOST10(persist)

{{{dispositivo_resource_salvar}}}

{{{dispositivo_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdispositivoApi()

var persist = new Pier.DispositivoPersistValue(); // {DispositivoPersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST10(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DispositivoPersistValue**](DispositivoPersistValue.md)| persist | 

### Return type

[**DispositivoResponse**](DispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

