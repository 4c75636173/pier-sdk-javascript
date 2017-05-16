# Pier.AplicacoesMobileApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT**](AplicacoesMobileApi.md#atualizarUsingPUT) | **PUT** /api/aplicacoes-mobile/{id} | Atualiza Aplicacao Mobile
[**listarUsingGET**](AplicacoesMobileApi.md#listarUsingGET) | **GET** /api/aplicacoes-mobile | Lista os aplicacoes mobile cadastradas
[**salvarUsingPOST**](AplicacoesMobileApi.md#salvarUsingPOST) | **POST** /api/aplicacoes-mobile | Cadastra Aplicacao Mobile


<a name="atualizarUsingPUT"></a>
# **atualizarUsingPUT**
> AplicacaoMobile atualizarUsingPUT(id, update)

Atualiza Aplicacao Mobile

Esse recurso permite atualizar aplicacao mobile.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AplicacoesMobileApi()

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

[**AplicacaoMobile**](AplicacaoMobile.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET"></a>
# **listarUsingGET**
> PageAplicacoesMobile listarUsingGET(opts)

Lista os aplicacoes mobile cadastradas

Este m\u00C3\u00A9todo permite que sejam listadas as aplicacoes mobile existentes na base do PIER.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AplicacoesMobileApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'id': "id_example", // {String} Identificador da Aplicacao Mobile
  'idPlataformaMobile': 789, // {Integer} Identificador da Plataforma Mobile
  'idEmissor': 789 // {Integer} Identificador do Emissor
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **id** | **String**| Identificador da Aplicacao Mobile | [optional] 
 **idPlataformaMobile** | **Integer**| Identificador da Plataforma Mobile | [optional] 
 **idEmissor** | **Integer**| Identificador do Emissor | [optional] 

### Return type

[**PageAplicacoesMobile**](PageAplicacoesMobile.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST"></a>
# **salvarUsingPOST**
> AplicacaoMobile salvarUsingPOST(persist)

Cadastra Aplicacao Mobile

Esse recurso permite cadastrar aplicacoes mobile.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AplicacoesMobileApi()

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

[**AplicacaoMobile**](AplicacaoMobile.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

