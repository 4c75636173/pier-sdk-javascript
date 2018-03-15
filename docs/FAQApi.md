# Pier.FAQApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adicionarUsingPOST**](FAQApi.md#adicionarUsingPOST) | **POST** /api/faqs | Adiciona uma nova FAQ
[**alterarUsingPUT7**](FAQApi.md#alterarUsingPUT7) | **PUT** /api/faqs/{id} | Alterar FAQ
[**consultarUsingGET18**](FAQApi.md#consultarUsingGET18) | **GET** /api/faqs/{id} | Consultar FAQ por id
[**listarUsingGET23**](FAQApi.md#listarUsingGET23) | **GET** /api/faqs | Lista FAQs


<a name="adicionarUsingPOST"></a>
# **adicionarUsingPOST**
> FaqResponse adicionarUsingPOST(pergunta, resposta, opts)

Adiciona uma nova FAQ

Adiciona uma nova FAQ

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FAQApi()

var pergunta = "pergunta_example"; // {String} Conte\u00FAdo da pergunta.

var resposta = "resposta_example"; // {String} Conte\u00FAdo da resposta.

var opts = { 
  'relevancia': 56, // {Integer} N\u00EDvel de relev\u00E2ncia da pergunta.
  'plataforma': "plataforma_example", // {String} Plataforma em que a FAQ se encaixa.
  'categoria': "categoria_example", // {String} Categoria de assunto do qual a FAQ se trata.
  'status': "status_example" // {String} Status descrevendo a situa\u00E7\u00E3o atual da FAQ.
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
 **pergunta** | **String**| Conte\u00FAdo da pergunta. | 
 **resposta** | **String**| Conte\u00FAdo da resposta. | 
 **relevancia** | **Integer**| N\u00EDvel de relev\u00E2ncia da pergunta. | [optional] 
 **plataforma** | **String**| Plataforma em que a FAQ se encaixa. | [optional] 
 **categoria** | **String**| Categoria de assunto do qual a FAQ se trata. | [optional] 
 **status** | **String**| Status descrevendo a situa\u00E7\u00E3o atual da FAQ. | [optional] 

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

Alterar FAQ

Alterar FAQ

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FAQApi()

var id = 789; // {Integer} Id

var pergunta = "pergunta_example"; // {String} Conte\u00FAdo da pergunta.

var resposta = "resposta_example"; // {String} Conte\u00FAdo da resposta.

var opts = { 
  'relevancia': 56, // {Integer} N\u00EDvel de relev\u00E2ncia da pergunta.
  'plataforma': "plataforma_example", // {String} Plataforma em que a FAQ se encaixa.
  'categoria': "categoria_example", // {String} Categoria de assunto do qual a FAQ se trata.
  'status': "status_example" // {String} Status descrevendo a situa\u00E7\u00E3o atual da FAQ.
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
 **id** | **Integer**| Id | 
 **pergunta** | **String**| Conte\u00FAdo da pergunta. | 
 **resposta** | **String**| Conte\u00FAdo da resposta. | 
 **relevancia** | **Integer**| N\u00EDvel de relev\u00E2ncia da pergunta. | [optional] 
 **plataforma** | **String**| Plataforma em que a FAQ se encaixa. | [optional] 
 **categoria** | **String**| Categoria de assunto do qual a FAQ se trata. | [optional] 
 **status** | **String**| Status descrevendo a situa\u00E7\u00E3o atual da FAQ. | [optional] 

### Return type

[**FaqResponse**](FaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET18"></a>
# **consultarUsingGET18**
> FaqResponse consultarUsingGET18(id)

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
api.consultarUsingGET18(id, callback);
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

<a name="listarUsingGET23"></a>
# **listarUsingGET23**
> PageFaqResponse listarUsingGET23(opts)

Lista FAQs

Lista todas as FAQs

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FAQApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idFaq': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da FAQ (id).
  'pergunta': "pergunta_example", // {String} Conte\u00FAdo da pergunta.
  'resposta': "resposta_example", // {String} Conte\u00FAdo da resposta.
  'relevancia': 56, // {Integer} N\u00EDvel de relev\u00E2ncia da pergunta.
  'plataforma': "plataforma_example", // {String} Plataforma em que a FAQ se encaixa.
  'categoria': "categoria_example", // {String} Categoria de assunto do qual a FAQ se trata.
  'status': "status_example" // {String} Status descrevendo a situa\u00E7\u00E3o atual da FAQ.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET23(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idFaq** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da FAQ (id). | [optional] 
 **pergunta** | **String**| Conte\u00FAdo da pergunta. | [optional] 
 **resposta** | **String**| Conte\u00FAdo da resposta. | [optional] 
 **relevancia** | **Integer**| N\u00EDvel de relev\u00E2ncia da pergunta. | [optional] 
 **plataforma** | **String**| Plataforma em que a FAQ se encaixa. | [optional] 
 **categoria** | **String**| Categoria de assunto do qual a FAQ se trata. | [optional] 
 **status** | **String**| Status descrevendo a situa\u00E7\u00E3o atual da FAQ. | [optional] 

### Return type

[**PageFaqResponse**](PageFaqResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

