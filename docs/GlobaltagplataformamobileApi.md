# Pier.GlobaltagplataformamobileApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT1**](GlobaltagplataformamobileApi.md#atualizarUsingPUT1) | **PUT** /api/plataformas-mobile/{id} | {{{plataforma_mobile_resource_atualizar}}}
[**listarUsingGET42**](GlobaltagplataformamobileApi.md#listarUsingGET42) | **GET** /api/plataformas-mobile | {{{plataforma_mobile_resource_listar}}}
[**salvarUsingPOST27**](GlobaltagplataformamobileApi.md#salvarUsingPOST27) | **POST** /api/plataformas-mobile | {{{plataforma_mobile_resource_salvar}}}


<a name="atualizarUsingPUT1"></a>
# **atualizarUsingPUT1**
> PlataformaMobileResponse atualizarUsingPUT1(id, update)

{{{plataforma_mobile_resource_atualizar}}}

{{{plataforma_mobile_resource_atualizar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagplataformamobileApi()

var id = 789; // {Integer} {{{plataforma_mobile_resource_atualizar_param_id}}}

var update = new Pier.PlataformaMobileUpdateValue(); // {PlataformaMobileUpdateValue} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT1(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{plataforma_mobile_resource_atualizar_param_id}}} | 
 **update** | [**PlataformaMobileUpdateValue**](PlataformaMobileUpdateValue.md)| update | 

### Return type

[**PlataformaMobileResponse**](PlataformaMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET42"></a>
# **listarUsingGET42**
> PagePlataformaMobileResponse listarUsingGET42(opts)

{{{plataforma_mobile_resource_listar}}}

{{{plataforma_mobile_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagplataformamobileApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example" // {String} {{{plataforma_mobile_request_nome_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET42(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**| {{{plataforma_mobile_request_nome_value}}} | [optional] 

### Return type

[**PagePlataformaMobileResponse**](PagePlataformaMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST27"></a>
# **salvarUsingPOST27**
> PlataformaMobileResponse salvarUsingPOST27(persist)

{{{plataforma_mobile_resource_salvar}}}

{{{plataforma_mobile_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagplataformamobileApi()

var persist = new Pier.PlataformaMobilePersistValue(); // {PlataformaMobilePersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST27(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**PlataformaMobilePersistValue**](PlataformaMobilePersistValue.md)| persist | 

### Return type

[**PlataformaMobileResponse**](PlataformaMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

