# Pier.MockApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarProdutoUsingPOST**](MockApi.md#alterarProdutoUsingPOST) | **POST** /api/contas/{id}/alterar-produto | Altera o produto associado \u00C3\u00A0 conta.
[**enviarFaturaEmailUsingPOST**](MockApi.md#enviarFaturaEmailUsingPOST) | **POST** /api/contas/{id}/faturas/{dataVencimento}/enviar-email | Envia 2\u00C2\u00AA via de fatura por E-mail
[**simularEmprestimoFinanciamentoUsingPOST**](MockApi.md#simularEmprestimoFinanciamentoUsingPOST) | **POST** /api/simular-emprestimos-financiamentos | Simula valores de presta\u00C3\u00A7\u00C3\u00B5es de empr\u00C3\u00A9stimos/financiamentos
[**visualizarDocumentoUsingPOST**](MockApi.md#visualizarDocumentoUsingPOST) | **POST** /api/contas/{id}/faturas/{dataVencimento}/arquivo.pdf | Permite visualizar o extrato da fatura em formato PDF


<a name="alterarProdutoUsingPOST"></a>
# **alterarProdutoUsingPOST**
> Object alterarProdutoUsingPOST(id, request)

Altera o produto associado \u00C3\u00A0 conta.

O recurso permite fazer modifica\u00C3\u00A7\u00C3\u00A3o do produto associado \u00C3\u00A0 conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.MockApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var request = new Pier.AlterarProdutoRequest(); // {AlterarProdutoRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarProdutoUsingPOST(id, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **request** | [**AlterarProdutoRequest**](AlterarProdutoRequest.md)| request | 

### Return type

**Object**

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

var apiInstance = new Pier.MockApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var dataVencimento = "dataVencimento_example"; // {String} Data de Vencimento da fatura.

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
 **dataVencimento** | **String**| Data de Vencimento da fatura. | 
 **email** | **String**| E-mail para envio da 2\u00C2\u00AA via da fatura, caso n\u00C3\u00A3o seja informado ser\u00C3\u00A1 usado o e-mail cadastrado. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="simularEmprestimoFinanciamentoUsingPOST"></a>
# **simularEmprestimoFinanciamentoUsingPOST**
> EmprestimoPessoalResponse simularEmprestimoFinanciamentoUsingPOST(request)

Simula valores de presta\u00C3\u00A7\u00C3\u00B5es de empr\u00C3\u00A9stimos/financiamentos

Esta opera\u00C3\u00A7\u00C3\u00A3o pode ser utilizada para simular opera\u00C3\u00A7\u00C3\u00B5es financeiras a partir de informa\u00C3\u00A7\u00C3\u00B5es fornecidas pelo usu\u00C3\u00A1rio. Os c\u00C3\u00A1lculos gerados devem ser considerados apenas como refer\u00C3\u00AAncia para as situa\u00C3\u00A7\u00C3\u00B5es reais e n\u00C3\u00A3o como valores oficiais.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.MockApi()

var request = new Pier.EmprestimoPessoalRequest(); // {EmprestimoPessoalRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.simularEmprestimoFinanciamentoUsingPOST(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**EmprestimoPessoalRequest**](EmprestimoPessoalRequest.md)| request | 

### Return type

[**EmprestimoPessoalResponse**](EmprestimoPessoalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="visualizarDocumentoUsingPOST"></a>
# **visualizarDocumentoUsingPOST**
> [&#39;String&#39;] visualizarDocumentoUsingPOST(id, dataVencimento)

Permite visualizar o extrato da fatura em formato PDF

Esta opera\u00C3\u00A7\u00C3\u00A3o permite visualizar o extrato da fatura de uma determinada conta, em formato PDF. Quando ela for a fatura ativa, ou seja, a do m\u00C3\u00AAs corrente, o pdf ser\u00C3\u00A1 composto pelo extrato de lan\u00C3\u00A7amentos e pela ficha de compensa\u00C3\u00A7\u00C3\u00A3o banc\u00C3\u00A1ria. Quando for de uma fatura do hist\u00C3\u00B3rico do cliente, o PDF ser\u00C3\u00A1 composto apenas pelo extrato de transa\u00C3\u00A7\u00C3\u00B5es.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.MockApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var dataVencimento = "dataVencimento_example"; // {String} Data de Vencimento da fatura.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.visualizarDocumentoUsingPOST(id, dataVencimento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **dataVencimento** | **String**| Data de Vencimento da fatura. | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf, */*

