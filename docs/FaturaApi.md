# Pier.FaturaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarFaturaUsingGET1**](FaturaApi.md#consultarFaturaUsingGET1) | **GET** /api/faturas/{dataVencimento} | Consulta fatura de um cliente
[**consultarLancamentosFuturosFaturaUsingGET1**](FaturaApi.md#consultarLancamentosFuturosFaturaUsingGET1) | **GET** /api/contas/{id}/faturas/planos-parcelamento | Listar planos de parcelamento
[**enviarFaturaEmailUsingPOST**](FaturaApi.md#enviarFaturaEmailUsingPOST) | **POST** /api/contas/{id}/faturas/{dataVencimento}/enviar-email | Envia 2\u00C2\u00AA via de fatura por E-mail
[**listarFaturasUsingGET1**](FaturaApi.md#listarFaturasUsingGET1) | **GET** /api/faturas | Listar faturas de um cliente.
[**visualizarDocumentoUsingGET**](FaturaApi.md#visualizarDocumentoUsingGET) | **GET** /api/contas/{id}/faturas/{dataVencimento}/arquivo.pdf | Permite visualizar o extrato da fatura em formato PDF


<a name="consultarFaturaUsingGET1"></a>
# **consultarFaturaUsingGET1**
> FaturaDetalheResponse consultarFaturaUsingGET1(dataVencimento, idConta)

Consulta fatura de um cliente

Consulta fatura de um cliente pela data de vencimento.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturaApi()

var dataVencimento = "dataVencimento_example"; // {String} Data Vencimento

var idConta = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarFaturaUsingGET1(dataVencimento, idConta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataVencimento** | **String**| Data Vencimento | 
 **idConta** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 

### Return type

[**FaturaDetalheResponse**](FaturaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarLancamentosFuturosFaturaUsingGET1"></a>
# **consultarLancamentosFuturosFaturaUsingGET1**
> PagePlanoParcelamentoResponse consultarLancamentosFuturosFaturaUsingGET1(id, dataVencimentoPadrao, opts)

Listar planos de parcelamento

Lista os planos de parcelamento da fatura de uma conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var dataVencimentoPadrao = "dataVencimentoPadrao_example"; // {String} Indica a data de vencimento padr\u00C3\u00A3o das faturas

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
api.consultarLancamentosFuturosFaturaUsingGET1(id, dataVencimentoPadrao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **dataVencimentoPadrao** | **String**| Indica a data de vencimento padr\u00C3\u00A3o das faturas | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PagePlanoParcelamentoResponse**](PagePlanoParcelamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="enviarFaturaEmailUsingPOST"></a>
# **enviarFaturaEmailUsingPOST**
> Object enviarFaturaEmailUsingPOST(id, dataVencimento, opts)

Envia 2\u00C2\u00AA via de fatura por E-mail

Envia a segunda via da fatura para o e-mail informado/cadastrado.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var dataVencimento = "dataVencimento_example"; // {String} Data de Vencimento da fatura (yyyy-MM-dd).

var opts = { 
  'email': "email_example" // {String} E-mail para envio da 2\u00C2\u00AA via da fatura, caso n\u00C3\u00A3o seja informado ser\u00C3\u00A1 usado o e-mail cadastrado.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.enviarFaturaEmailUsingPOST(id, dataVencimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **dataVencimento** | **String**| Data de Vencimento da fatura (yyyy-MM-dd). | 
 **email** | **String**| E-mail para envio da 2\u00C2\u00AA via da fatura, caso n\u00C3\u00A3o seja informado ser\u00C3\u00A1 usado o e-mail cadastrado. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarFaturasUsingGET1"></a>
# **listarFaturasUsingGET1**
> PageFaturaResponse listarFaturasUsingGET1(idConta, opts)

Listar faturas de um cliente.

Lista faturas de um cliente.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturaApi()

var idConta = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var opts = { 
  'situacaoProcessamento': "TODAS", // {String} Status do processamento das faturas. Valores possiveis [ABERTA, FECHADA, TODAS].
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
api.listarFaturasUsingGET1(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **situacaoProcessamento** | **String**| Status do processamento das faturas. Valores possiveis [ABERTA, FECHADA, TODAS]. | [optional] [default to TODAS]
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageFaturaResponse**](PageFaturaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="visualizarDocumentoUsingGET"></a>
# **visualizarDocumentoUsingGET**
> Object visualizarDocumentoUsingGET(id, dataVencimento)

Permite visualizar o extrato da fatura em formato PDF

Esta opera\u00C3\u00A7\u00C3\u00A3o permite visualizar o extrato da fatura de uma determinada conta, em formato PDF. Quando ela for a fatura ativa, ou seja, a do m\u00C3\u00AAs corrente, o pdf ser\u00C3\u00A1 composto pelo extrato de lan\u00C3\u00A7amentos e pela ficha de compensa\u00C3\u00A7\u00C3\u00A3o banc\u00C3\u00A1ria. Quando for de uma fatura do hist\u00C3\u00B3rico do cliente, o PDF ser\u00C3\u00A1 composto apenas pelo extrato de transa\u00C3\u00A7\u00C3\u00B5es.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var dataVencimento = "dataVencimento_example"; // {String} Data de Vencimento da fatura.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.visualizarDocumentoUsingGET(id, dataVencimento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **dataVencimento** | **String**| Data de Vencimento da fatura. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf

