# Pier.AplicacaoMobileApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT**](AplicacaoMobileApi.md#atualizarUsingPUT) | **PUT** /api/aplicacoes-mobile/{id} | Atualiza Aplicacao Mobile
[**listarUsingGET1**](AplicacaoMobileApi.md#listarUsingGET1) | **GET** /api/aplicacoes-mobile | Lista os aplicacoes mobile cadastradas
[**salvarUsingPOST**](AplicacaoMobileApi.md#salvarUsingPOST) | **POST** /api/aplicacoes-mobile | Cadastra Aplicacao Mobile


<a name="atualizarUsingPUT"></a>
# **atualizarUsingPUT**
> AplicacaoMobileResponse atualizarUsingPUT(id, update)

Atualiza Aplicacao Mobile

Esse recurso permite atualizar aplicacao mobile.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AplicacaoMobileApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Aplicacao (id).

var update = new Pier.AplicacaoMobileUpdate(); // {AplicacaoMobileUpdate} update


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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Aplicacao (id). | 
 **update** | [**AplicacaoMobileUpdate**](AplicacaoMobileUpdate.md)| update | 

### Return type

[**AplicacaoMobileResponse**](AplicacaoMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET1"></a>
# **listarUsingGET1**
> PageAplicacaoMobileResponse listarUsingGET1(opts)

Lista os aplicacoes mobile cadastradas

Este m\u00C3\u00A9todo permite que sejam listadas as aplicacoes mobile existentes na base do PIER.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AplicacaoMobileApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': "id_example", // {String} Identificador da Aplicacao Mobile
  'idPlataformaMobile': 789 // {Integer} Identificador da Plataforma Mobile
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **String**| Identificador da Aplicacao Mobile | [optional] 
 **idPlataformaMobile** | **Integer**| Identificador da Plataforma Mobile | [optional] 

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

Cadastra Aplicacao Mobile

Esse recurso permite cadastrar aplicacoes mobile.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AplicacaoMobileApi()

var persist = new Pier.AplicacaoMobilePersist(); // {AplicacaoMobilePersist} persist


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
 **persist** | [**AplicacaoMobilePersist**](AplicacaoMobilePersist.md)| persist | 

### Return type

[**AplicacaoMobileResponse**](AplicacaoMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

