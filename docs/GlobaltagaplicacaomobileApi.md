# Pier.GlobaltagaplicacaomobileApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT**](GlobaltagaplicacaomobileApi.md#atualizarUsingPUT) | **PUT** /api/aplicacoes-mobile/{id} | {{{aplicacao_mobile_resource_atualizar}}}
[**listarUsingGET3**](GlobaltagaplicacaomobileApi.md#listarUsingGET3) | **GET** /api/aplicacoes-mobile | {{{aplicacao_mobile_resource_listar}}}
[**salvarUsingPOST**](GlobaltagaplicacaomobileApi.md#salvarUsingPOST) | **POST** /api/aplicacoes-mobile | {{{aplicacao_mobile_resource_salvar}}}


<a name="atualizarUsingPUT"></a>
# **atualizarUsingPUT**
> AplicacaoMobileResponse atualizarUsingPUT(id, update)

{{{aplicacao_mobile_resource_atualizar}}}

{{{aplicacao_mobile_resource_atualizar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagaplicacaomobileApi()

var id = 789; // {Integer} {{{aplicacao_mobile_resource_atualizar_param_id}}}

var update = new Pier.AplicacaoMobileUpdateValue(); // {AplicacaoMobileUpdateValue} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{aplicacao_mobile_resource_atualizar_param_id}}} | 
 **update** | [**AplicacaoMobileUpdateValue**](AplicacaoMobileUpdateValue.md)| update | 

### Return type

[**AplicacaoMobileResponse**](AplicacaoMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET3"></a>
# **listarUsingGET3**
> PageAplicacaoMobileResponse listarUsingGET3(opts)

{{{aplicacao_mobile_resource_listar}}}

{{{aplicacao_mobile_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagaplicacaomobileApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': "id_example", // {String} {{{aplicacao_mobile_request_id_value}}}
  'idPlataformaMobile': 789 // {Integer} {{{aplicacao_mobile_request_id_plataforma_mobile_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET3(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **String**| {{{aplicacao_mobile_request_id_value}}} | [optional] 
 **idPlataformaMobile** | **Integer**| {{{aplicacao_mobile_request_id_plataforma_mobile_value}}} | [optional] 

### Return type

[**PageAplicacaoMobileResponse**](PageAplicacaoMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST"></a>
# **salvarUsingPOST**
> AplicacaoMobileResponse salvarUsingPOST(persist)

{{{aplicacao_mobile_resource_salvar}}}

{{{aplicacao_mobile_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagaplicacaomobileApi()

var persist = new Pier.AplicacaoMobilePersistValue(); // {AplicacaoMobilePersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**AplicacaoMobilePersistValue**](AplicacaoMobilePersistValue.md)| persist | 

### Return type

[**AplicacaoMobileResponse**](AplicacaoMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

