# Pier.GlobaltagfaqApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adicionarUsingPOST**](GlobaltagfaqApi.md#adicionarUsingPOST) | **POST** /api/faqs | {{{faq_resource_adicionar}}}
[**alterarUsingPUT7**](GlobaltagfaqApi.md#alterarUsingPUT7) | **PUT** /api/faqs/{id} | {{{faq_resource_alterar}}}
[**consultarUsingGET20**](GlobaltagfaqApi.md#consultarUsingGET20) | **GET** /api/faqs/{id} | {{{faq_resource_consultar}}}
[**listarUsingGET26**](GlobaltagfaqApi.md#listarUsingGET26) | **GET** /api/faqs | {{{faq_resource_listar}}}


<a name="adicionarUsingPOST"></a>
# **adicionarUsingPOST**
> FaqResponse adicionarUsingPOST(pergunta, resposta, opts)

{{{faq_resource_adicionar}}}

{{{faq_resource_adicionar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaqApi()

var pergunta = "pergunta_example"; // {String} {{{faq_persist_pergunta_value}}}

var resposta = "resposta_example"; // {String} {{{faq_persist_resposta_value}}}

var opts = { 
  'relevancia': 56, // {Integer} {{{faq_persist_relevancia_value}}}
  'plataforma': "plataforma_example", // {String} {{{faq_persist_plataforma_value}}}
  'categoria': "categoria_example", // {String} {{{faq_persist_categoria_value}}}
  'status': "status_example" // {String} {{{faq_persist_status_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.adicionarUsingPOST(pergunta, resposta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pergunta** | **String**| {{{faq_persist_pergunta_value}}} | 
 **resposta** | **String**| {{{faq_persist_resposta_value}}} | 
 **relevancia** | **Integer**| {{{faq_persist_relevancia_value}}} | [optional] 
 **plataforma** | **String**| {{{faq_persist_plataforma_value}}} | [optional] 
 **categoria** | **String**| {{{faq_persist_categoria_value}}} | [optional] 
 **status** | **String**| {{{faq_persist_status_value}}} | [optional] 

### Return type

[**FaqResponse**](FaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT7"></a>
# **alterarUsingPUT7**
> FaqResponse alterarUsingPUT7(id, pergunta, resposta, opts)

{{{faq_resource_alterar}}}

{{{faq_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaqApi()

var id = 789; // {Integer} {{{faq_resource_alterar_param_id_faq}}}

var pergunta = "pergunta_example"; // {String} {{{faq_persist_pergunta_value}}}

var resposta = "resposta_example"; // {String} {{{faq_persist_resposta_value}}}

var opts = { 
  'relevancia': 56, // {Integer} {{{faq_persist_relevancia_value}}}
  'plataforma': "plataforma_example", // {String} {{{faq_persist_plataforma_value}}}
  'categoria': "categoria_example", // {String} {{{faq_persist_categoria_value}}}
  'status': "status_example" // {String} {{{faq_persist_status_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT7(id, pergunta, resposta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{faq_resource_alterar_param_id_faq}}} | 
 **pergunta** | **String**| {{{faq_persist_pergunta_value}}} | 
 **resposta** | **String**| {{{faq_persist_resposta_value}}} | 
 **relevancia** | **Integer**| {{{faq_persist_relevancia_value}}} | [optional] 
 **plataforma** | **String**| {{{faq_persist_plataforma_value}}} | [optional] 
 **categoria** | **String**| {{{faq_persist_categoria_value}}} | [optional] 
 **status** | **String**| {{{faq_persist_status_value}}} | [optional] 

### Return type

[**FaqResponse**](FaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET20"></a>
# **consultarUsingGET20**
> FaqResponse consultarUsingGET20(id)

{{{faq_resource_consultar}}}

{{{faq_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaqApi()

var id = 789; // {Integer} {{{faq_resource_consultar_param_id_faq}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET20(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{faq_resource_consultar_param_id_faq}}} | 

### Return type

[**FaqResponse**](FaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET26"></a>
# **listarUsingGET26**
> PageFaqResponse listarUsingGET26(opts)

{{{faq_resource_listar}}}

{{{faq_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaqApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idFaq': 789, // {Integer} {{{faq_request_id_faq_value}}}
  'pergunta': "pergunta_example", // {String} {{{faq_request_pergunta_value}}}
  'resposta': "resposta_example", // {String} {{{faq_request_resposta_value}}}
  'relevancia': 56, // {Integer} {{{faq_request_relevancia_value}}}
  'plataforma': "plataforma_example", // {String} {{{faq_request_plataforma_value}}}
  'categoria': "categoria_example", // {String} {{{faq_request_categoria_value}}}
  'status': "status_example" // {String} {{{faq_request_status_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET26(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idFaq** | **Integer**| {{{faq_request_id_faq_value}}} | [optional] 
 **pergunta** | **String**| {{{faq_request_pergunta_value}}} | [optional] 
 **resposta** | **String**| {{{faq_request_resposta_value}}} | [optional] 
 **relevancia** | **Integer**| {{{faq_request_relevancia_value}}} | [optional] 
 **plataforma** | **String**| {{{faq_request_plataforma_value}}} | [optional] 
 **categoria** | **String**| {{{faq_request_categoria_value}}} | [optional] 
 **status** | **String**| {{{faq_request_status_value}}} | [optional] 

### Return type

[**PageFaqResponse**](PageFaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

