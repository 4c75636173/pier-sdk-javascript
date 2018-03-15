# Pier.FaturamentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarTipoFaturamentoUsingPUT**](FaturamentoApi.md#alterarTipoFaturamentoUsingPUT) | **PUT** /api/tipos-faturamento/{id} | Alterar Faturamento
[**cadastrarFaturamentoPorContaUsingPOST**](FaturamentoApi.md#cadastrarFaturamentoPorContaUsingPOST) | **POST** /api/tipos-faturamento-conta | Adiciona uma nova configura\u00E7\u00E3o de faturamento para uma conta
[**cadastrarTipoFaturamentoUsingPOST**](FaturamentoApi.md#cadastrarTipoFaturamentoUsingPOST) | **POST** /api/tipos-faturamento | Adiciona um novo faturamento
[**consultarTipoFaturamentoUsingGET**](FaturamentoApi.md#consultarTipoFaturamentoUsingGET) | **GET** /api/tipos-faturamento/{id} | Consultar Faturamento por id
[**desativarFaturamentoPorContaUsingPOST**](FaturamentoApi.md#desativarFaturamentoPorContaUsingPOST) | **POST** /api/tipos-faturamento-conta/{id}/desativar | Desativar uma configura\u00E7\u00E3o de tipo de faturamento por conta atrav\u00E9s do id
[**desativarTipoFaturamentoUsingPOST**](FaturamentoApi.md#desativarTipoFaturamentoUsingPOST) | **POST** /api/tipos-faturamento/{id}/desativar | Desativar uma configura\u00E7\u00E3o de tipo de faturamento atrav\u00E9s do id
[**listarFaturamentoPorContaUsingGET**](FaturamentoApi.md#listarFaturamentoPorContaUsingGET) | **GET** /api/tipos-faturamento-conta | Lista as configura\u00E7\u00F5es de tipos de faturamento por conta
[**listarTipoFaturamentoUsingGET**](FaturamentoApi.md#listarTipoFaturamentoUsingGET) | **GET** /api/tipos-faturamento | Lista Tipos de Faturamento


<a name="alterarTipoFaturamentoUsingPUT"></a>
# **alterarTipoFaturamentoUsingPUT**
> TipoFaturamentoResponse alterarTipoFaturamentoUsingPUT(id, tipoFaturamentoPersist)

Alterar Faturamento

Alterar as configura\u00E7\u00F5es de um determinado tipo de faturamento

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturamentoApi()

var id = 789; // {Integer} Id

var tipoFaturamentoPersist = new Pier.TipoFaturamentoPersist(); // {TipoFaturamentoPersist} tipoFaturamentoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarTipoFaturamentoUsingPUT(id, tipoFaturamentoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 
 **tipoFaturamentoPersist** | [**TipoFaturamentoPersist**](TipoFaturamentoPersist.md)| tipoFaturamentoPersist | 

### Return type

[**TipoFaturamentoResponse**](TipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarFaturamentoPorContaUsingPOST"></a>
# **cadastrarFaturamentoPorContaUsingPOST**
> TipoFaturamentoPorContaResponse cadastrarFaturamentoPorContaUsingPOST(tipoFaturamentoPorContaPersist)

Adiciona uma nova configura\u00E7\u00E3o de faturamento para uma conta

Este m\u00E9todo permite adicionar uma nova configura\u00E7\u00E3o de tipo de faturamento para um conta espec\u00EDfica.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturamentoApi()

var tipoFaturamentoPorContaPersist = new Pier.TipoFaturamentoPorContaPersist(); // {TipoFaturamentoPorContaPersist} tipoFaturamentoPorContaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarFaturamentoPorContaUsingPOST(tipoFaturamentoPorContaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tipoFaturamentoPorContaPersist** | [**TipoFaturamentoPorContaPersist**](TipoFaturamentoPorContaPersist.md)| tipoFaturamentoPorContaPersist | 

### Return type

[**TipoFaturamentoPorContaResponse**](TipoFaturamentoPorContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarTipoFaturamentoUsingPOST"></a>
# **cadastrarTipoFaturamentoUsingPOST**
> TipoFaturamentoResponse cadastrarTipoFaturamentoUsingPOST(tipoFaturamentoPersist)

Adiciona um novo faturamento

Adiciona uma nova configura\u00E7\u00E3o de tipo de faturamento

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturamentoApi()

var tipoFaturamentoPersist = new Pier.TipoFaturamentoPersist(); // {TipoFaturamentoPersist} tipoFaturamentoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarTipoFaturamentoUsingPOST(tipoFaturamentoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tipoFaturamentoPersist** | [**TipoFaturamentoPersist**](TipoFaturamentoPersist.md)| tipoFaturamentoPersist | 

### Return type

[**TipoFaturamentoResponse**](TipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTipoFaturamentoUsingGET"></a>
# **consultarTipoFaturamentoUsingGET**
> TipoFaturamentoResponse consultarTipoFaturamentoUsingGET(id)

Consultar Faturamento por id

Consulta os detalhes de uma determinada Faturamento

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturamentoApi()

var id = 789; // {Integer} Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTipoFaturamentoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 

### Return type

[**TipoFaturamentoResponse**](TipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarFaturamentoPorContaUsingPOST"></a>
# **desativarFaturamentoPorContaUsingPOST**
> TipoFaturamentoPorContaResponse desativarFaturamentoPorContaUsingPOST(id, modificadoPor)

Desativar uma configura\u00E7\u00E3o de tipo de faturamento por conta atrav\u00E9s do id

Desativa uma configura\u00E7\u00E3o de tipo de faturamento de uma determinada conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturamentoApi()

var id = 789; // {Integer} Id

var modificadoPor = "modificadoPor_example"; // {String} modificadoPor


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarFaturamentoPorContaUsingPOST(id, modificadoPor, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 
 **modificadoPor** | **String**| modificadoPor | 

### Return type

[**TipoFaturamentoPorContaResponse**](TipoFaturamentoPorContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarTipoFaturamentoUsingPOST"></a>
# **desativarTipoFaturamentoUsingPOST**
> TipoFaturamentoResponse desativarTipoFaturamentoUsingPOST(id)

Desativar uma configura\u00E7\u00E3o de tipo de faturamento atrav\u00E9s do id

Desativa uma configura\u00E7\u00E3o de tipo de faturamento.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturamentoApi()

var id = 789; // {Integer} Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarTipoFaturamentoUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 

### Return type

[**TipoFaturamentoResponse**](TipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarFaturamentoPorContaUsingGET"></a>
# **listarFaturamentoPorContaUsingGET**
> PageTipoFaturamentoPorContaResponse listarFaturamentoPorContaUsingGET(opts)

Lista as configura\u00E7\u00F5es de tipos de faturamento por conta

Este m\u00E9todo permite listar as configura\u00E7\u00F5es de tipos de faturamento registrados a uma conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idTipoFaturamentoPorConta': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do tipo de faturamento por conta (id).
  'status': true, // {Boolean} Representa se a configura\u00E7\u00E3o est\u00E1 ativada ou desativada para a conta.
  'idConta': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do tipo de faturamento por conta (id).
  'idTipoFaturamento': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do tipo de faturamento relacionada (id).
  'dataHoraInclusao': "dataHoraInclusao_example", // {String} Data da inclus\u00E3o da configura\u00E7\u00E3o, deve ser informada no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'dataHoraCancelamento': "dataHoraCancelamento_example", // {String} Data do cancelamento da configura\u00E7\u00E3o, deve ser informada no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'modificadoPor': "modificadoPor_example" // {String} Identificador do respons\u00E1vel pela modifica\u00E7\u00E3o do registro.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarFaturamentoPorContaUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idTipoFaturamentoPorConta** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do tipo de faturamento por conta (id). | [optional] 
 **status** | **Boolean**| Representa se a configura\u00E7\u00E3o est\u00E1 ativada ou desativada para a conta. | [optional] 
 **idConta** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do tipo de faturamento por conta (id). | [optional] 
 **idTipoFaturamento** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do tipo de faturamento relacionada (id). | [optional] 
 **dataHoraInclusao** | **String**| Data da inclus\u00E3o da configura\u00E7\u00E3o, deve ser informada no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **dataHoraCancelamento** | **String**| Data do cancelamento da configura\u00E7\u00E3o, deve ser informada no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **modificadoPor** | **String**| Identificador do respons\u00E1vel pela modifica\u00E7\u00E3o do registro. | [optional] 

### Return type

[**PageTipoFaturamentoPorContaResponse**](PageTipoFaturamentoPorContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTipoFaturamentoUsingGET"></a>
# **listarTipoFaturamentoUsingGET**
> PageTipoFaturamentoResponse listarTipoFaturamentoUsingGET(opts)

Lista Tipos de Faturamento

Lista todas as configura\u00E7\u00F5es dos tipos de faturamento

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idTipoFaturamento': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do tipo de faturamento (id).
  'descricao': "descricao_example", // {String} Descri\u00E7\u00E3o do tipo de faturamento.
  'flagApenasDemonstrativo': true, // {Boolean} Flag que representa que o faturamento ser\u00E1 apenas demonstrativo.
  'idConvenio': 789 // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do conv\u00EAnio relacionado ao tipo de faturamento.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTipoFaturamentoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idTipoFaturamento** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do tipo de faturamento (id). | [optional] 
 **descricao** | **String**| Descri\u00E7\u00E3o do tipo de faturamento. | [optional] 
 **flagApenasDemonstrativo** | **Boolean**| Flag que representa que o faturamento ser\u00E1 apenas demonstrativo. | [optional] 
 **idConvenio** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do conv\u00EAnio relacionado ao tipo de faturamento. | [optional] 

### Return type

[**PageTipoFaturamentoResponse**](PageTipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

