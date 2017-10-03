# Pier.DocumentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT9**](DocumentoApi.md#alterarUsingPUT9) | **PUT** /api/tipos-templates/{id} | Altera o tipo de template
[**atualizarUsingPUT**](DocumentoApi.md#atualizarUsingPUT) | **PUT** /api/templates-documentos/{id} | Atualizar templates dos documentos
[**consultarUsingGET27**](DocumentoApi.md#consultarUsingGET27) | **GET** /api/tipos-templates/{id} | Consultar tipo de template
[**consultarUsingGET7**](DocumentoApi.md#consultarUsingGET7) | **GET** /api/documentos/{id} | Consulta documentos
[**consultarUsingGET8**](DocumentoApi.md#consultarUsingGET8) | **GET** /api/templates-documentos/{id} | Consultar templates dos documentos
[**integrarUsingPOST**](DocumentoApi.md#integrarUsingPOST) | **POST** /api/documentos/integrar | Integra um arquivo a reposit\u00C3\u00B3rios remotos.
[**listarUsingGET10**](DocumentoApi.md#listarUsingGET10) | **GET** /api/documentos | Lista documentos
[**listarUsingGET11**](DocumentoApi.md#listarUsingGET11) | **GET** /api/templates-documentos | Lista os templates dos documentos
[**listarUsingGET31**](DocumentoApi.md#listarUsingGET31) | **GET** /api/tipos-templates | Lista os tipos de templates
[**salvarUsingPOST17**](DocumentoApi.md#salvarUsingPOST17) | **POST** /api/tipos-templates | Cadastra os tipos de templates
[**salvarUsingPOST5**](DocumentoApi.md#salvarUsingPOST5) | **POST** /api/documentos | Cadastra documentos
[**salvarUsingPOST6**](DocumentoApi.md#salvarUsingPOST6) | **POST** /api/templates-documentos | Cadastra os templates dos documentos


<a name="alterarUsingPUT9"></a>
# **alterarUsingPUT9**
> TipoTemplateResponse alterarUsingPUT9(id, persist)

Altera o tipo de template

Esse recurso permite alterar os dados do tipo de template.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo de template (id).

var persist = new Pier.TipoTemplateRequest(); // {TipoTemplateRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT9(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo de template (id). | 
 **persist** | [**TipoTemplateRequest**](TipoTemplateRequest.md)| persist | 

### Return type

[**TipoTemplateResponse**](TipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

<a name="consultarUsingGET27"></a>
# **consultarUsingGET27**
> TipoTemplateResponse consultarUsingGET27(id)

Consultar tipo de template

Esse recurso permite consultar um determinado tipo de template a partir do id recebido e do id do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo de template (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET27(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo de template (id). | 

### Return type

[**TipoTemplateResponse**](TipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET7"></a>
# **consultarUsingGET7**
> DocumentoDetalhadoResponse consultarUsingGET7(id)

Consulta documentos

Esse recurso permite consultar um documento espec\u00C3\u00ADfico a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento (id).


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
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento (id). | 

### Return type

[**DocumentoDetalhadoResponse**](DocumentoDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET8"></a>
# **consultarUsingGET8**
> DocumentoTemplateResponse consultarUsingGET8(id)

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
api.consultarUsingGET8(id, callback);
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

<a name="integrarUsingPOST"></a>
# **integrarUsingPOST**
> &#39;String&#39; integrarUsingPOST(integrarDocumentoRequest)

Integra um arquivo a reposit\u00C3\u00B3rios remotos.

Este recurso permite integrar um documento ao reposit\u00C3\u00B3rio pre-configurado.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var integrarDocumentoRequest = new Pier.IntegrarDocumentoRequest(); // {IntegrarDocumentoRequest} integrarDocumentoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.integrarUsingPOST(integrarDocumentoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrarDocumentoRequest** | [**IntegrarDocumentoRequest**](IntegrarDocumentoRequest.md)| integrarDocumentoRequest | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET10"></a>
# **listarUsingGET10**
> PageDocumentoResponse listarUsingGET10(opts)

Lista documentos

Esse recurso permite listar documentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idTemplateDocumento': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do template do documento.
  'nome': "nome_example", // {String} Nome do documento.
  'extensao': "extensao_example" // {String} Extensao do documento.
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
 **idTemplateDocumento** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do template do documento. | [optional] 
 **nome** | **String**| Nome do documento. | [optional] 
 **extensao** | **String**| Extensao do documento. | [optional] 

### Return type

[**PageDocumentoResponse**](PageDocumentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET11"></a>
# **listarUsingGET11**
> PageDocumentoTemplateResponse listarUsingGET11(opts)

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
  'idTipoTemplate': 789 // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do template.
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idTipoTemplate** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do template. | [optional] 

### Return type

[**PageDocumentoTemplateResponse**](PageDocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET31"></a>
# **listarUsingGET31**
> PageTipoTemplateResponse listarUsingGET31(opts)

Lista os tipos de templates

Esse recurso permite listar os tipos de templates associados ao emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET31(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTipoTemplateResponse**](PageTipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST17"></a>
# **salvarUsingPOST17**
> TipoTemplateResponse salvarUsingPOST17(persist)

Cadastra os tipos de templates

Esse recurso permite cadastrar tipos de templates.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DocumentoApi()

var persist = new Pier.TipoTemplateRequest(); // {TipoTemplateRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST17(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**TipoTemplateRequest**](TipoTemplateRequest.md)| persist | 

### Return type

[**TipoTemplateResponse**](TipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST5"></a>
# **salvarUsingPOST5**
> DocumentoDetalhadoResponse salvarUsingPOST5(persist)

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

[**DocumentoDetalhadoResponse**](DocumentoDetalhadoResponse.md)

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

