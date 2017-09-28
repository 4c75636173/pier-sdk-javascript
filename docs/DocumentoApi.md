# Pier.DocumentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT**](DocumentoApi.md#atualizarUsingPUT) | **PUT** /api/templates-documentos/{id} | Atualizar templates dos documentos
[**consultarUsingGET7**](DocumentoApi.md#consultarUsingGET7) | **GET** /api/templates-documentos/{id} | Consultar templates dos documentos
[**listarUsingGET10**](DocumentoApi.md#listarUsingGET10) | **GET** /api/templates-documentos | Lista os templates dos documentos
[**salvarUsingPOST5**](DocumentoApi.md#salvarUsingPOST5) | **POST** /api/documentos | Cadastra documentos
[**salvarUsingPOST6**](DocumentoApi.md#salvarUsingPOST6) | **POST** /api/templates-documentos | Cadastra os templates dos documentos
[**salvarUsingPOST7**](DocumentoApi.md#salvarUsingPOST7) | **POST** /api/tipos-documentos | Cadastra os tipos de documentos


<a name="atualizarUsingPUT"></a>
# **atualizarUsingPUT**
> DocumentoTemplateResponse atualizarUsingPUT(id, persist)

Atualizar templates dos documentos

Esse recurso permite atualizar templates dos documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento template (id).

var persist = new Pier.DocumentoTemplatePersist(); // {DocumentoTemplatePersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento template (id). | 
 **persist** | [**DocumentoTemplatePersist**](DocumentoTemplatePersist.md)| persist | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET7"></a>
# **consultarUsingGET7**
> DocumentoTemplateResponse consultarUsingGET7(id)

Consultar templates dos documentos

Esse recurso permite consultar templates dos documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento template (id).


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
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento template (id). | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET10"></a>
# **listarUsingGET10**
> PageDocumentoTemplateResponse listarUsingGET10(opts)

Lista os templates dos documentos

Esse recurso permite listar os templates dos documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idTipoDocumento': 789 // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do documento.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET10(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idTipoDocumento** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do documento. | [optional] 

### Return type

[**PageDocumentoTemplateResponse**](PageDocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST5"></a>
# **salvarUsingPOST5**
> DocumentoResponse salvarUsingPOST5(persist)

Cadastra documentos

Esse recurso permite cadastrar documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var persist = new Pier.DocumentoParametrosRequest(); // {DocumentoParametrosRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST5(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoParametrosRequest**](DocumentoParametrosRequest.md)| persist | 

### Return type

[**DocumentoResponse**](DocumentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST6"></a>
# **salvarUsingPOST6**
> DocumentoTemplateResponse salvarUsingPOST6(persist)

Cadastra os templates dos documentos

Esse recurso permite cadastrar templates dos documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var persist = new Pier.DocumentoTemplatePersist(); // {DocumentoTemplatePersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST6(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoTemplatePersist**](DocumentoTemplatePersist.md)| persist | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST7"></a>
# **salvarUsingPOST7**
> DocumentoTipoResponse salvarUsingPOST7(persist)

Cadastra os tipos de documentos

Esse recurso permite cadastrar tipos de documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var persist = new Pier.DocumentoTipoRequest(); // {DocumentoTipoRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST7(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoTipoRequest**](DocumentoTipoRequest.md)| persist | 

### Return type

[**DocumentoTipoResponse**](DocumentoTipoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

