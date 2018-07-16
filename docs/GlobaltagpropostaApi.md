# Pier.GlobaltagpropostaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPOST**](GlobaltagpropostaApi.md#alterarUsingPOST) | **POST** /api/propostas/{id}/alterar-status | {{{proposta_resource_alterar_status}}}
[**consultarUsingGET33**](GlobaltagpropostaApi.md#consultarUsingGET33) | **GET** /api/propostas/{id} | {{{proposta_resource_consultar}}}
[**listarStatusPropostaUsingGET**](GlobaltagpropostaApi.md#listarStatusPropostaUsingGET) | **GET** /api/status-propostas | {{{proposta_resource_listar_status}}}
[**listarUsingGET44**](GlobaltagpropostaApi.md#listarUsingGET44) | **GET** /api/propostas | {{{proposta_resource_listar}}}


<a name="alterarUsingPOST"></a>
# **alterarUsingPOST**
> PropostaResponse alterarUsingPOST(id, update)

{{{proposta_resource_alterar_status}}}

{{{proposta_resource_alterar_status_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpropostaApi()

var id = 789; // {Integer} {{{proposta_resource_alterar_status_param_id}}}

var update = new Pier.StatusPropostaUpdate(); // {StatusPropostaUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPOST(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{proposta_resource_alterar_status_param_id}}} | 
 **update** | [**StatusPropostaUpdate**](StatusPropostaUpdate.md)| update | 

### Return type

[**PropostaResponse**](PropostaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET33"></a>
# **consultarUsingGET33**
> PropostaResponse consultarUsingGET33(id)

{{{proposta_resource_consultar}}}

{{{proposta_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpropostaApi()

var id = 789; // {Integer} {{{proposta_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET33(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{proposta_resource_consultar_param_id}}} | 

### Return type

[**PropostaResponse**](PropostaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarStatusPropostaUsingGET"></a>
# **listarStatusPropostaUsingGET**
> PageStatusPropostaResponse listarStatusPropostaUsingGET(opts)

{{{proposta_resource_listar_status}}}

{{{proposta_resource_listar_status_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpropostaApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'status': 56, // {Integer} {{{status_proposta_request_status_value}}}
  'flagPermiteAlteracao': true // {Boolean} {{{status_proposta_request_flag_permite_alteracao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarStatusPropostaUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **status** | **Integer**| {{{status_proposta_request_status_value}}} | [optional] 
 **flagPermiteAlteracao** | **Boolean**| {{{status_proposta_request_flag_permite_alteracao_value}}} | [optional] 

### Return type

[**PageStatusPropostaResponse**](PageStatusPropostaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET44"></a>
# **listarUsingGET44**
> PagePropostaResponse listarUsingGET44(opts)

{{{proposta_resource_listar}}}

{{{proposta_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpropostaApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'status': 56 // {Integer} {{{proposta_request_status_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET44(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **status** | **Integer**| {{{proposta_request_status_value}}} | [optional] 

### Return type

[**PagePropostaResponse**](PagePropostaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

