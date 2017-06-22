# Pier.FAQApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adicionarUsingPOST**](FAQApi.md#adicionarUsingPOST) | **POST** /api/faqs | Adiciona uma nova FAQ
[**alterarUsingPUT2**](FAQApi.md#alterarUsingPUT2) | **PUT** /api/faqs/{id} | Alterar FAQ
[**consultarUsingGET7**](FAQApi.md#consultarUsingGET7) | **GET** /api/faqs/{id} | Consultar FAQ por id
[**listarUsingGET11**](FAQApi.md#listarUsingGET11) | **GET** /api/faqs | Lista FAQs


<a name="adicionarUsingPOST"></a>
# **adicionarUsingPOST**
> FaqResponse adicionarUsingPOST(pergunta, resposta, opts)

Adiciona uma nova FAQ

Adiciona uma nova FAQ

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FAQApi()

var pergunta = "pergunta_example"; // {String} Conte\u00C3\u00BAdo da pergunta.

var resposta = "resposta_example"; // {String} Conte\u00C3\u00BAdo da resposta.

var opts = { 
  'relevancia': 56, // {Integer} N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta.
  'plataforma': "plataforma_example", // {String} Plataforma em que a FAQ se encaixa.
  'categoria': "categoria_example", // {String} Categoria de assunto do qual a FAQ se trata.
  'status': "status_example" // {String} Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ.
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
 **pergunta** | **String**| Conte\u00C3\u00BAdo da pergunta. | 
 **resposta** | **String**| Conte\u00C3\u00BAdo da resposta. | 
 **relevancia** | **Integer**| N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta. | [optional] 
 **plataforma** | **String**| Plataforma em que a FAQ se encaixa. | [optional] 
 **categoria** | **String**| Categoria de assunto do qual a FAQ se trata. | [optional] 
 **status** | **String**| Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ. | [optional] 

### Return type

[**FaqResponse**](FaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT2"></a>
# **alterarUsingPUT2**
> FaqResponse alterarUsingPUT2(id, pergunta, resposta, opts)

Alterar FAQ

Alterar FAQ

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FAQApi()

var id = 789; // {Integer} Id

var pergunta = "pergunta_example"; // {String} Conte\u00C3\u00BAdo da pergunta.

var resposta = "resposta_example"; // {String} Conte\u00C3\u00BAdo da resposta.

var opts = { 
  'relevancia': 56, // {Integer} N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta.
  'plataforma': "plataforma_example", // {String} Plataforma em que a FAQ se encaixa.
  'categoria': "categoria_example", // {String} Categoria de assunto do qual a FAQ se trata.
  'status': "status_example" // {String} Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT2(id, pergunta, resposta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 
 **pergunta** | **String**| Conte\u00C3\u00BAdo da pergunta. | 
 **resposta** | **String**| Conte\u00C3\u00BAdo da resposta. | 
 **relevancia** | **Integer**| N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta. | [optional] 
 **plataforma** | **String**| Plataforma em que a FAQ se encaixa. | [optional] 
 **categoria** | **String**| Categoria de assunto do qual a FAQ se trata. | [optional] 
 **status** | **String**| Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ. | [optional] 

### Return type

[**FaqResponse**](FaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET7"></a>
# **consultarUsingGET7**
> FaqResponse consultarUsingGET7(id)

Consultar FAQ por id

Consulta os detalhes de uma determinada FAQ

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FAQApi()

var id = 789; // {Integer} Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET7(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 

### Return type

[**FaqResponse**](FaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET11"></a>
# **listarUsingGET11**
> PageFaqResponse listarUsingGET11(opts)

Lista FAQs

Lista todas as FAQs

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FAQApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idFaq': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da FAQ (id).
  'pergunta': "pergunta_example", // {String} Conte\u00C3\u00BAdo da pergunta.
  'resposta': "resposta_example", // {String} Conte\u00C3\u00BAdo da resposta.
  'relevancia': 56, // {Integer} N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta.
  'plataforma': "plataforma_example", // {String} Plataforma em que a FAQ se encaixa.
  'categoria': "categoria_example", // {String} Categoria de assunto do qual a FAQ se trata.
  'status': "status_example" // {String} Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET11(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idFaq** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da FAQ (id). | [optional] 
 **pergunta** | **String**| Conte\u00C3\u00BAdo da pergunta. | [optional] 
 **resposta** | **String**| Conte\u00C3\u00BAdo da resposta. | [optional] 
 **relevancia** | **Integer**| N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta. | [optional] 
 **plataforma** | **String**| Plataforma em que a FAQ se encaixa. | [optional] 
 **categoria** | **String**| Categoria de assunto do qual a FAQ se trata. | [optional] 
 **status** | **String**| Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ. | [optional] 

### Return type

[**PageFaqResponse**](PageFaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

