# Pier.CartaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarAlterarSenhaUsingPUT**](CartaoApi.md#alterarAlterarSenhaUsingPUT) | **PUT** /api/cartoes/{id}/alterar-senha | Realiza a altera\u00C3\u00A7\u00C3\u00A3o da senha de um Cart\u00C3\u00A3o
[**alterarStatusImpressaoUsingPUT**](CartaoApi.md#alterarStatusImpressaoUsingPUT) | **PUT** /api/cartoes/{id}/alterar-status-impressao | Realiza a altera\u00C3\u00A7\u00C3\u00A3o do Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o
[**atribuirPessoaUsingPUT**](CartaoApi.md#atribuirPessoaUsingPUT) | **PUT** /api/cartoes/{id}/atribuir-titular | Realiza a atribui\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o pr\u00C3\u00A9-pago a uma pessoa
[**bloquearUsingPOST**](CartaoApi.md#bloquearUsingPOST) | **POST** /api/cartoes/{id}/bloquear | Realiza o bloqueio de um determinado Cart\u00C3\u00A3o
[**cadastrarAlterarSenhaUsingPOST**](CartaoApi.md#cadastrarAlterarSenhaUsingPOST) | **POST** /api/cartoes/{id}/cadastrar-senha | Realiza o cadastro da senha de um Cart\u00C3\u00A3o
[**cancelarUsingPOST**](CartaoApi.md#cancelarUsingPOST) | **POST** /api/cartoes/{id}/cancelar | Realiza o cancelamento de um determinado Cart\u00C3\u00A3o
[**consultarCartaoImpressaoUsingGET**](CartaoApi.md#consultarCartaoImpressaoUsingGET) | **GET** /api/cartoes/{id}/consultar-dados-impressao | Consultar os dados de impress\u00C3\u00A3o de um Cart\u00C3\u00A3o
[**consultarDadosReaisCartaoUsingGET**](CartaoApi.md#consultarDadosReaisCartaoUsingGET) | **GET** /api/cartoes/{id}/consultar-dados-reais | Consultar Detalhes do Cart\u00C3\u00A3o
[**consultarLimiteDisponibilidadeUsingGET**](CartaoApi.md#consultarLimiteDisponibilidadeUsingGET) | **GET** /api/cartoes/{id}/limites-disponibilidades | Apresenta os limites do Portador do Cart\u00C3\u00A3o
[**consultarLotesCartoesPrePagosUsingGET**](CartaoApi.md#consultarLotesCartoesPrePagosUsingGET) | **GET** /api/cartoes/lotes-cartoes-pre-pagos/{id} | Permite consultar um determinado Lote de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago
[**consultarPortadorUsingGET**](CartaoApi.md#consultarPortadorUsingGET) | **GET** /api/cartoes/{id}/portadores | Apresenta os dados do Portador do Cart\u00C3\u00A3o
[**consultarUsingGET8**](CartaoApi.md#consultarUsingGET8) | **GET** /api/cartoes/{id} | Apresenta os dados de um determinado Cart\u00C3\u00A3o
[**desbloquearSenhaIncorretaUsingPOST**](CartaoApi.md#desbloquearSenhaIncorretaUsingPOST) | **POST** /api/cartoes/{id}/desbloquear-senha-incorreta | Realiza o desbloqueio de um cart\u00C3\u00A3o bloqueado por tentativas de senha incorretas
[**desbloquearUsingPOST**](CartaoApi.md#desbloquearUsingPOST) | **POST** /api/cartoes/{id}/desbloquear | Realiza o desbloqueio de um determinado Cart\u00C3\u00A3o
[**gerarLotesCartoesPrePagosUsingPOST**](CartaoApi.md#gerarLotesCartoesPrePagosUsingPOST) | **POST** /api/cartoes/lotes-cartoes-pre-pagos | Permite gerar um novo Lote de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago
[**gerarNovaViaUsingPOST**](CartaoApi.md#gerarNovaViaUsingPOST) | **POST** /api/cartoes/{id}/gerar-nova-via | Gerar uma nova via de Cart\u00C3\u00A3o
[**lancarTarifaSegundaViaUsingPOST**](CartaoApi.md#lancarTarifaSegundaViaUsingPOST) | **POST** /api/cartoes/{id}/lancar-tarifa-reemissao | Adiciona tarifa de ajuste da segunda via do cart\u00C3\u00A3o
[**listarLotesCartoesPrePagosUsingGET**](CartaoApi.md#listarLotesCartoesPrePagosUsingGET) | **GET** /api/cartoes/lotes-cartoes-pre-pagos | Permite listar os Lotes de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago
[**listarUsingGET10**](CartaoApi.md#listarUsingGET10) | **GET** /api/cartoes | Lista os Cart\u00C3\u00B5es gerados pelo Emissor
[**reativarUsingPOST**](CartaoApi.md#reativarUsingPOST) | **POST** /api/cartoes/{id}/reativar | Realiza a reativa\u00C3\u00A7\u00C3\u00A3o de um determinado Cart\u00C3\u00A3o
[**validarCVVUsingPOST**](CartaoApi.md#validarCVVUsingPOST) | **POST** /api/cartoes/{id}/validar-cvv | Validar CVV do cart\u00C3\u00A3o
[**validarDadosImpressosBandeiradoUsingGET**](CartaoApi.md#validarDadosImpressosBandeiradoUsingGET) | **GET** /api/cartoes/validar-dados-impressos-bandeirados | Permite validar os dados impressos em um cart\u00C3\u00A3o bandeirado
[**validarDadosImpressosNaoBandeiradoUsingGET**](CartaoApi.md#validarDadosImpressosNaoBandeiradoUsingGET) | **GET** /api/cartoes/validar-dados-impressos-nao-bandeirados | Permite validar os dados impressos de um cartao n\u00C3\u00A3o bandeirado
[**validarDe55CartaoMastercardUsingGET**](CartaoApi.md#validarDe55CartaoMastercardUsingGET) | **GET** /api/cartoes/validar-de55-mastercard | Permite validar um Cart\u00C3\u00A3o com bandeira Mastercard a partir do de55
[**validarSenhaUsingGET**](CartaoApi.md#validarSenhaUsingGET) | **GET** /api/cartoes/{id}/validar-senha | Permite validar a senha de um Cart\u00C3\u00A3o
[**validarTarjaUsingGET**](CartaoApi.md#validarTarjaUsingGET) | **GET** /api/cartoes/validar-tarja | Permite validar um Cart\u00C3\u00A3o Bandeirado a partir da Tarja


<a name="alterarAlterarSenhaUsingPUT"></a>
# **alterarAlterarSenhaUsingPUT**
> &#39;String&#39; alterarAlterarSenhaUsingPUT(id, senha)

Realiza a altera\u00C3\u00A7\u00C3\u00A3o da senha de um Cart\u00C3\u00A3o

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que o portador de um determinado cart\u00C3\u00A3o possa definir uma senha a sua escolha.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).

var senha = "senha_example"; // {String} Senha para ser cadastrada ou alterada.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarAlterarSenhaUsingPUT(id, senha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 
 **senha** | **String**| Senha para ser cadastrada ou alterada. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarStatusImpressaoUsingPUT"></a>
# **alterarStatusImpressaoUsingPUT**
> HistoricoImpressaoCartaoResponse alterarStatusImpressaoUsingPUT(id, idStatusImpressao)

Realiza a altera\u00C3\u00A7\u00C3\u00A3o do Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite que uma Aplica\u00C3\u00A7\u00C3\u00A3o que realize a impress\u00C3\u00A3o de cart\u00C3\u00B5es possa indicar que um determinado idCartao fora impresso ou est\u00C3\u00A1 em processo de impress\u00C3\u00A3o. Para isso, basta informar o respectivo c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id) que deseja ter seu um determinado id_status_impressao atribu\u00C3\u00ADdo a ele. Por padr\u00C3\u00A3o, cart\u00C3\u00B5es provis\u00C3\u00B3rios ou que j\u00C3\u00A1 tenham sido inclu\u00C3\u00ADdos em um arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica ter\u00C3\u00A3o esta requisi\u00C3\u00A7\u00C3\u00A3o negada, se utilizada.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).

var idStatusImpressao = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status Impress\u00C3\u00A3o (Id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarStatusImpressaoUsingPUT(id, idStatusImpressao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 
 **idStatusImpressao** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status Impress\u00C3\u00A3o (Id). | 

### Return type

[**HistoricoImpressaoCartaoResponse**](HistoricoImpressaoCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atribuirPessoaUsingPUT"></a>
# **atribuirPessoaUsingPUT**
> CartaoResponse atribuirPessoaUsingPUT(id, idPessoa)

Realiza a atribui\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o pr\u00C3\u00A9-pago a uma pessoa

Esta m\u00C3\u00A9todo permite que um cart\u00C3\u00A3o pr\u00C3\u00A9-pago impresso de forma avulsa e an\u00C3\u00B4nimo seja atribu\u00C3\u00ADdo a uma pessoa para que esta passe a ser a portadora titular dele.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id)

var idPessoa = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de uma Pessoa (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atribuirPessoaUsingPUT(id, idPessoa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id) | 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de uma Pessoa (id). | 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bloquearUsingPOST"></a>
# **bloquearUsingPOST**
> CartaoResponse bloquearUsingPOST(id, idStatus, observacao)

Realiza o bloqueio de um determinado Cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o do bloqueio (tempor\u00C3\u00A1rio) ou do cancelamento (definitivo) de um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id). Para isso, \u00C3\u00A9 preciso informar qual o motivo deste bloqueio que nada mais \u00C3\u00A9 do que atribuir um novo StatusCartao para ele dentre as op\u00C3\u00A7\u00C3\u00B5es praticadas pelo emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).

var idStatus = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Cart\u00C3\u00A3o.

var observacao = "observacao_example"; // {String} Texto informando uma observa\u00C3\u00A7\u00C3\u00A3o sobre o bloqueio.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.bloquearUsingPOST(id, idStatus, observacao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 
 **idStatus** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Cart\u00C3\u00A3o. | 
 **observacao** | **String**| Texto informando uma observa\u00C3\u00A7\u00C3\u00A3o sobre o bloqueio. | 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarAlterarSenhaUsingPOST"></a>
# **cadastrarAlterarSenhaUsingPOST**
> &#39;String&#39; cadastrarAlterarSenhaUsingPOST(id, senha)

Realiza o cadastro da senha de um Cart\u00C3\u00A3o

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que o portador de um determinado cart\u00C3\u00A3o possa definir uma senha a sua escolha.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).

var senha = "senha_example"; // {String} Senha para ser cadastrada ou alterada.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarAlterarSenhaUsingPOST(id, senha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 
 **senha** | **String**| Senha para ser cadastrada ou alterada. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelarUsingPOST"></a>
# **cancelarUsingPOST**
> CartaoResponse cancelarUsingPOST(id, idStatus, observacao)

Realiza o cancelamento de um determinado Cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o cancelamento de um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id). Para isso, \u00C3\u00A9 preciso informar qual o motivo deste bloqueio que nada mais \u00C3\u00A9 do que atribuir um novo StatusCartao para ele dentre as op\u00C3\u00A7\u00C3\u00B5es praticadas pelo emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).

var idStatus = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Cart\u00C3\u00A3o.

var observacao = "observacao_example"; // {String} Texto informando uma observa\u00C3\u00A7\u00C3\u00A3o sobre o cancelamento.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarUsingPOST(id, idStatus, observacao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 
 **idStatus** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Cart\u00C3\u00A3o. | 
 **observacao** | **String**| Texto informando uma observa\u00C3\u00A7\u00C3\u00A3o sobre o cancelamento. | 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarCartaoImpressaoUsingGET"></a>
# **consultarCartaoImpressaoUsingGET**
> DadosCartaoImpressaoResponse consultarCartaoImpressaoUsingGET(id)

Consultar os dados de impress\u00C3\u00A3o de um Cart\u00C3\u00A3o

Esse recurso permite consultar os dados de impress\u00C3\u00A3o de um cart\u00C3\u00A3o

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarCartaoImpressaoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id). | 

### Return type

[**DadosCartaoImpressaoResponse**](DadosCartaoImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarDadosReaisCartaoUsingGET"></a>
# **consultarDadosReaisCartaoUsingGET**
> DadosCartaoResponse consultarDadosReaisCartaoUsingGET(id)

Consultar Detalhes do Cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite que seja consultado os dados necessarios de um cart\u00C3\u00A3o para executar servi\u00C3\u00A7os de autoriza\u00C3\u00A7\u00C3\u00A3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarDadosReaisCartaoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 

### Return type

[**DadosCartaoResponse**](DadosCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarLimiteDisponibilidadeUsingGET"></a>
# **consultarLimiteDisponibilidadeUsingGET**
> LimiteDisponibilidadeResponse consultarLimiteDisponibilidadeUsingGET(id)

Apresenta os limites do Portador do Cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite consultar os Limites configurados para o Portador de um determinado Cart\u00C3\u00A3o, seja ele o titular da conta ou um adicional, a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarLimiteDisponibilidadeUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 

### Return type

[**LimiteDisponibilidadeResponse**](LimiteDisponibilidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarLotesCartoesPrePagosUsingGET"></a>
# **consultarLotesCartoesPrePagosUsingGET**
> LoteCartoesPrePagosResponse consultarLotesCartoesPrePagosUsingGET(id)

Permite consultar um determinado Lote de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago

Este m\u00C3\u00A9todo permite consultar os cart\u00C3\u00B5es pr\u00C3\u00A9-pagos existentes na base do emissor atrav\u00C3\u00A9s do id do lote.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do lote de cart\u00C3\u00B5es (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarLotesCartoesPrePagosUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do lote de cart\u00C3\u00B5es (id) | 

### Return type

[**LoteCartoesPrePagosResponse**](LoteCartoesPrePagosResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarPortadorUsingGET"></a>
# **consultarPortadorUsingGET**
> PortadorResponse consultarPortadorUsingGET(id)

Apresenta os dados do Portador do Cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es do Portador de um determinado Cart\u00C3\u00A3o a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarPortadorUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 

### Return type

[**PortadorResponse**](PortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET8"></a>
# **consultarUsingGET8**
> CartaoDetalheResponse consultarUsingGET8(id)

Apresenta os dados de um determinado Cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es b\u00C3\u00A1sicas de um determinado Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).


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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 

### Return type

[**CartaoDetalheResponse**](CartaoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desbloquearSenhaIncorretaUsingPOST"></a>
# **desbloquearSenhaIncorretaUsingPOST**
> CartaoResponse desbloquearSenhaIncorretaUsingPOST(id)

Realiza o desbloqueio de um cart\u00C3\u00A3o bloqueado por tentativas de senha incorretas

Este m\u00C3\u00A9todo permite que seja desbloqueado um determinado cart\u00C3\u00A3o que foi bloqueado por tentativas de senha incorretas, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desbloquearSenhaIncorretaUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desbloquearUsingPOST"></a>
# **desbloquearUsingPOST**
> CartaoResponse desbloquearUsingPOST(id)

Realiza o desbloqueio de um determinado Cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite que seja desbloqueado um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desbloquearUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarLotesCartoesPrePagosUsingPOST"></a>
# **gerarLotesCartoesPrePagosUsingPOST**
> LoteCartoesPrePagosResponse gerarLotesCartoesPrePagosUsingPOST(opts)

Permite gerar um novo Lote de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores gerem uma determinada quantidade de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pagos, de forma n\u00C3\u00A3o nominal, os quais poder\u00C3\u00A3o ser comercializados e posteriormente vinculados a um cliente que o adquirir. Para isso, al\u00C3\u00A9m de definir quantos cart\u00C3\u00B5es dever\u00C3\u00A3o ser gerados, ser\u00C3\u00A1 poss\u00C3\u00ADvel definir qual a Origem Comercial, o Produto, o Tipo do Cart\u00C3\u00A3o, a Imagem e o Endere\u00C3\u00A7o para entrega dos Cart\u00C3\u00B5es presentes no lote gerado. Por padr\u00C3\u00A3o, todos os cart\u00C3\u00B5es ser\u00C3\u00A3o associados a um idPessoa fict\u00C3\u00ADcio e receber\u00C3\u00A1 um idConta \u00C3\u00BAnico para cada um deles. Feito isso, os Cart\u00C3\u00B5es gerados por esta opera\u00C3\u00A7\u00C3\u00A3o seguir\u00C3\u00A3o os mesmos processos de impress\u00C3\u00A3o via gr\u00C3\u00A1fica previamente definidos entre o Emissor e a Conductor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var opts = { 
  'idOrigemComercial': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id).
  'idProduto': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
  'idTipoCartao': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id).
  'idImagem': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Imagem (id).
  'idEndereco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
  'quantidadeCartoes': 56, // {Integer} N\u00C3\u00BAmero de cart\u00C3\u00B5es existentes no Lote.
  'identificadorExterno': "identificadorExterno_example" // {String} N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o externo (utilizado pelo emissor).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarLotesCartoesPrePagosUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idOrigemComercial** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id). | [optional] 
 **idProduto** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id). | [optional] 
 **idTipoCartao** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id). | [optional] 
 **idImagem** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Imagem (id). | [optional] 
 **idEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id). | [optional] 
 **quantidadeCartoes** | **Integer**| N\u00C3\u00BAmero de cart\u00C3\u00B5es existentes no Lote. | [optional] 
 **identificadorExterno** | **String**| N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o externo (utilizado pelo emissor). | [optional] 

### Return type

[**LoteCartoesPrePagosResponse**](LoteCartoesPrePagosResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarNovaViaUsingPOST"></a>
# **gerarNovaViaUsingPOST**
> CartaoResponse gerarNovaViaUsingPOST(id)

Gerar uma nova via de Cart\u00C3\u00A3o

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores ou seus clientes possam solicitar a gera\u00C3\u00A7\u00C3\u00A3o de uma nova via de Cart\u00C3\u00A3o que ser\u00C3\u00A1 encaminhando para impress\u00C3\u00A3o e postagem de acordo com os fluxos padr\u00C3\u00B5es j\u00C3\u00A1 definidos pelo emissor. Para isso, \u00C3\u00A9 preciso que o cliente j\u00C3\u00A1 possua um cart\u00C3\u00A3o gerado e informar o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o deste (idCartao) para que ele possa utilizar esta opera\u00C3\u00A7\u00C3\u00A3o. Assim, esta funcionalidade se aplica apenas para a gera\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00B5es f\u00C3\u00ADsicos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarNovaViaUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id) | 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lancarTarifaSegundaViaUsingPOST"></a>
# **lancarTarifaSegundaViaUsingPOST**
> Object lancarTarifaSegundaViaUsingPOST(id)

Adiciona tarifa de ajuste da segunda via do cart\u00C3\u00A3o

Esse recurso permite adicionar tar\u00C3\u00ADfa de ajuste pela emiss\u00C3\u00A3o da segunda via do cart\u00C3\u00A3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.lancarTarifaSegundaViaUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id). | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarLotesCartoesPrePagosUsingGET"></a>
# **listarLotesCartoesPrePagosUsingGET**
> PageLoteCartoesPrePagosResponse listarLotesCartoesPrePagosUsingGET(opts)

Permite listar os Lotes de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago

Este m\u00C3\u00A9todo permite que sejam listados os cart\u00C3\u00B5es pr\u00C3\u00A9-pagos existentes na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idOrigemComercial': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id).
  'idProduto': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
  'idTipoCartao': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id).
  'idImagem': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Imagem (id).
  'idEndereco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
  'quantidadeCartoes': 56, // {Integer} N\u00C3\u00BAmero de cart\u00C3\u00B5es existentes no Lote.
  'dataCadastro': "dataCadastro_example", // {String} Data de Cadastro do Lote de Cart\u00C3\u00B5es N\u00C3\u00A3o Nominais.
  'usuarioCadastro': "usuarioCadastro_example", // {String} Nome do Usu\u00C3\u00A1rio que criou o Lote.
  'statusProcessamento': 56, // {Integer} Indica o Status de Processamento do Lote.
  'identificadorExterno': "identificadorExterno_example" // {String} N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o externo (utilizado pelo emissor).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarLotesCartoesPrePagosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idOrigemComercial** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id). | [optional] 
 **idProduto** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id). | [optional] 
 **idTipoCartao** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id). | [optional] 
 **idImagem** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Imagem (id). | [optional] 
 **idEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id). | [optional] 
 **quantidadeCartoes** | **Integer**| N\u00C3\u00BAmero de cart\u00C3\u00B5es existentes no Lote. | [optional] 
 **dataCadastro** | **String**| Data de Cadastro do Lote de Cart\u00C3\u00B5es N\u00C3\u00A3o Nominais. | [optional] 
 **usuarioCadastro** | **String**| Nome do Usu\u00C3\u00A1rio que criou o Lote. | [optional] 
 **statusProcessamento** | **Integer**| Indica o Status de Processamento do Lote. | [optional] 
 **identificadorExterno** | **String**| N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o externo (utilizado pelo emissor). | [optional] 

### Return type

[**PageLoteCartoesPrePagosResponse**](PageLoteCartoesPrePagosResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET10"></a>
# **listarUsingGET10**
> PageCartaoResponse listarUsingGET10(opts)

Lista os Cart\u00C3\u00B5es gerados pelo Emissor

Este m\u00C3\u00A9todo permite que sejam listados os cart\u00C3\u00B5es existentes na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idStatusCartao': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id).
  'idEstagioCartao': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
  'idConta': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o cart\u00C3\u00A3o pertence (id).
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o cart\u00C3\u00A3o pertence (id)
  'idProduto': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id).
  'tipoPortador': "tipoPortador_example", // {String} Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: ('T': Titular, 'A': Adicional).
  'numeroCartao': "numeroCartao_example", // {String} Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o.
  'nomeImpresso': "nomeImpresso_example", // {String} Apresenta o nome impresso no cart\u00C3\u00A3o.
  'dataGeracao': "dataGeracao_example", // {String} Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
  'dataStatusCartao': "dataStatusCartao_example", // {String} Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
  'dataEstagioCartao': "dataEstagioCartao_example", // {String} Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
  'dataValidade': "dataValidade_example", // {String} Apresenta a data de validade do cart\u00C3\u00A3o em formato yyyy-MM, quando houver.
  'dataImpressao': "dataImpressao_example", // {String} Apresenta a data em que o cart\u00C3\u00A3o fora impresso, caso impress\u00C3\u00A3o em loja, ou a data em que ele fora inclu\u00C3\u00ADdo no arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica.
  'arquivoImpressao': "arquivoImpressao_example", // {String} Apresenta o nome do arquivo onde o cart\u00C3\u00A3o fora inclu\u00C3\u00ADdo para impress\u00C3\u00A3o por uma gr\u00C3\u00A1fica, quando houver.
  'flagImpressaoOrigemComercial': 56, // {Integer} Quando ativa, indica que o cart\u00C3\u00A3o fora impresso na Origem Comercial.
  'flagProvisorio': 56, // {Integer} Quando ativa, indica que o cart\u00C3\u00A3o \u00C3\u00A9 provis\u00C3\u00B3rio. Ou seja, \u00C3\u00A9 um cart\u00C3\u00A3o para uso tempor\u00C3\u00A1rio quando se deseja permitir que o cliente transacione sem que ele tenha recebido um cart\u00C3\u00A3o definitivo.
  'codigoDesbloqueio': "codigoDesbloqueio_example", // {String} Apresenta um c\u00C3\u00B3digo espec\u00C3\u00ADfico para ser utilizado como vari\u00C3\u00A1vel no processo de desbloqueio do cart\u00C3\u00A3o para emissores que querem usar esta funcionalidade.
  'sequencialCartao': 56 // {Integer} N\u00C3\u00BAmero sequencial do cart\u00C3\u00A3o
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
 **idStatusCartao** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id). | [optional] 
 **idEstagioCartao** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | [optional] 
 **idConta** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o cart\u00C3\u00A3o pertence (id). | [optional] 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o cart\u00C3\u00A3o pertence (id) | [optional] 
 **idProduto** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id). | [optional] 
 **tipoPortador** | **String**| Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional). | [optional] 
 **numeroCartao** | **String**| Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o. | [optional] 
 **nomeImpresso** | **String**| Apresenta o nome impresso no cart\u00C3\u00A3o. | [optional] 
 **dataGeracao** | **String**| Apresenta a data em que o cart\u00C3\u00A3o foi gerado. | [optional] 
 **dataStatusCartao** | **String**| Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver. | [optional] 
 **dataEstagioCartao** | **String**| Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver. | [optional] 
 **dataValidade** | **String**| Apresenta a data de validade do cart\u00C3\u00A3o em formato yyyy-MM, quando houver. | [optional] 
 **dataImpressao** | **String**| Apresenta a data em que o cart\u00C3\u00A3o fora impresso, caso impress\u00C3\u00A3o em loja, ou a data em que ele fora inclu\u00C3\u00ADdo no arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica. | [optional] 
 **arquivoImpressao** | **String**| Apresenta o nome do arquivo onde o cart\u00C3\u00A3o fora inclu\u00C3\u00ADdo para impress\u00C3\u00A3o por uma gr\u00C3\u00A1fica, quando houver. | [optional] 
 **flagImpressaoOrigemComercial** | **Integer**| Quando ativa, indica que o cart\u00C3\u00A3o fora impresso na Origem Comercial. | [optional] 
 **flagProvisorio** | **Integer**| Quando ativa, indica que o cart\u00C3\u00A3o \u00C3\u00A9 provis\u00C3\u00B3rio. Ou seja, \u00C3\u00A9 um cart\u00C3\u00A3o para uso tempor\u00C3\u00A1rio quando se deseja permitir que o cliente transacione sem que ele tenha recebido um cart\u00C3\u00A3o definitivo. | [optional] 
 **codigoDesbloqueio** | **String**| Apresenta um c\u00C3\u00B3digo espec\u00C3\u00ADfico para ser utilizado como vari\u00C3\u00A1vel no processo de desbloqueio do cart\u00C3\u00A3o para emissores que querem usar esta funcionalidade. | [optional] 
 **sequencialCartao** | **Integer**| N\u00C3\u00BAmero sequencial do cart\u00C3\u00A3o | [optional] 

### Return type

[**PageCartaoResponse**](PageCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reativarUsingPOST"></a>
# **reativarUsingPOST**
> CartaoResponse reativarUsingPOST(id)

Realiza a reativa\u00C3\u00A7\u00C3\u00A3o de um determinado Cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o da reativa\u00C3\u00A7\u00C3\u00A3o de um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.reativarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarCVVUsingPOST"></a>
# **validarCVVUsingPOST**
> Object validarCVVUsingPOST(id, validaCVV)

Validar CVV do cart\u00C3\u00A3o

Esse recurso permite a valida\u00C3\u00A7\u00C3\u00A3o do cvv de um cart\u00C3\u00A3o

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).

var validaCVV = new Pier.ValidaCVVRequest(); // {ValidaCVVRequest} validaCVV


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarCVVUsingPOST(id, validaCVV, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id). | 
 **validaCVV** | [**ValidaCVVRequest**](ValidaCVVRequest.md)| validaCVV | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarDadosImpressosBandeiradoUsingGET"></a>
# **validarDadosImpressosBandeiradoUsingGET**
> ValidaCartaoResponse validarDadosImpressosBandeiradoUsingGET(numeroCartao, nomePortador, dataValidade, codigoSeguranca)

Permite validar os dados impressos em um cart\u00C3\u00A3o bandeirado

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem a autenticidade de um determinado Cart\u00C3\u00A3o a partir do envio dos dados sens\u00C3\u00ADveis impressos nele. A utiliza\u00C3\u00A7\u00C3\u00A3o desde m\u00C3\u00A9todo tem diversas aplica\u00C3\u00A7\u00C3\u00B5es, sendo a principal delas a de Identifica\u00C3\u00A7\u00C3\u00A3o Positiva do Cart\u00C3\u00A3o para a realiza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00B5es e-commerce ou por meio de Centrais de Atendimento Eletr\u00C3\u00B4nico (URA), dentre outras.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var numeroCartao = "numeroCartao_example"; // {String} N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.

var nomePortador = "nomePortador_example"; // {String} Nome do portador do cart\u00C3\u00A3o

var dataValidade = "dataValidade_example"; // {String} Data de validade do cart\u00C3\u00A3o no formato yyyy-MM

var codigoSeguranca = "codigoSeguranca_example"; // {String} C\u00C3\u00B3digo de seguran\u00C3\u00A7a do cart\u00C3\u00A3o com tr\u00C3\u00AAs n\u00C3\u00BAmeros


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarDadosImpressosBandeiradoUsingGET(numeroCartao, nomePortador, dataValidade, codigoSeguranca, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroCartao** | **String**| N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado. | 
 **nomePortador** | **String**| Nome do portador do cart\u00C3\u00A3o | 
 **dataValidade** | **String**| Data de validade do cart\u00C3\u00A3o no formato yyyy-MM | 
 **codigoSeguranca** | **String**| C\u00C3\u00B3digo de seguran\u00C3\u00A7a do cart\u00C3\u00A3o com tr\u00C3\u00AAs n\u00C3\u00BAmeros | 

### Return type

[**ValidaCartaoResponse**](ValidaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarDadosImpressosNaoBandeiradoUsingGET"></a>
# **validarDadosImpressosNaoBandeiradoUsingGET**
> ValidaCartaoResponse validarDadosImpressosNaoBandeiradoUsingGET(numeroCartao, nomePortador, dataValidade, codigoSeguranca)

Permite validar os dados impressos de um cartao n\u00C3\u00A3o bandeirado

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem a autenticidade de um determinado Cart\u00C3\u00A3o a partir do envio dos dados sens\u00C3\u00ADveis impressos nele. A utiliza\u00C3\u00A7\u00C3\u00A3o desde m\u00C3\u00A9todo tem diversas aplica\u00C3\u00A7\u00C3\u00B5es, sendo a principal delas a de Identifica\u00C3\u00A7\u00C3\u00A3o Positiva do Cart\u00C3\u00A3o para a realiza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00B5es e-commerce ou por meio de Centrais de Atendimento Eletr\u00C3\u00B4nico (URA), dentre outras.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var numeroCartao = "numeroCartao_example"; // {String} N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.

var nomePortador = "nomePortador_example"; // {String} Nome do portador do cart\u00C3\u00A3o

var dataValidade = "dataValidade_example"; // {String} Data de validade do cart\u00C3\u00A3o no formato yyyy-MM

var codigoSeguranca = "codigoSeguranca_example"; // {String} C\u00C3\u00B3digo de seguran\u00C3\u00A7a do cart\u00C3\u00A3o com tr\u00C3\u00AAs n\u00C3\u00BAmeros


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarDadosImpressosNaoBandeiradoUsingGET(numeroCartao, nomePortador, dataValidade, codigoSeguranca, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroCartao** | **String**| N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado. | 
 **nomePortador** | **String**| Nome do portador do cart\u00C3\u00A3o | 
 **dataValidade** | **String**| Data de validade do cart\u00C3\u00A3o no formato yyyy-MM | 
 **codigoSeguranca** | **String**| C\u00C3\u00B3digo de seguran\u00C3\u00A7a do cart\u00C3\u00A3o com tr\u00C3\u00AAs n\u00C3\u00BAmeros | 

### Return type

[**ValidaCartaoResponse**](ValidaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarDe55CartaoMastercardUsingGET"></a>
# **validarDe55CartaoMastercardUsingGET**
> ValidaCartaoResponse validarDe55CartaoMastercardUsingGET(numeroCartao, criptograma)

Permite validar um Cart\u00C3\u00A3o com bandeira Mastercard a partir do de55

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem o DE55 gerado a partir da leitura de um chip EMV de um Cart\u00C3\u00A3o com bandeira Mastercard a fim de verificar a sua autenticidade. A utiliza\u00C3\u00A7\u00C3\u00A3o desde m\u00C3\u00A9todo tem diversas aplica\u00C3\u00A7\u00C3\u00B5es, sendo a principal delas a de Identifica\u00C3\u00A7\u00C3\u00A3o Positiva do Cart\u00C3\u00A3o antes de permitir que o portador realize transa\u00C3\u00A7\u00C3\u00B5es diversas, como as de compra e saque na modalidade d\u00C3\u00A9bito em conta corrente, dentre outras.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var numeroCartao = "numeroCartao_example"; // {String} N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.

var criptograma = "criptograma_example"; // {String} Criptograma do cart\u00C3\u00A3o no formato de55


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarDe55CartaoMastercardUsingGET(numeroCartao, criptograma, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroCartao** | **String**| N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado. | 
 **criptograma** | **String**| Criptograma do cart\u00C3\u00A3o no formato de55 | 

### Return type

[**ValidaCartaoResponse**](ValidaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarSenhaUsingGET"></a>
# **validarSenhaUsingGET**
> ValidaSenhaCartaoResponse validarSenhaUsingGET(id, senha)

Permite validar a senha de um Cart\u00C3\u00A3o

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir validar que a senha informada pelo portador de um determinado cart\u00C3\u00A3o est\u00C3\u00A1 correta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).

var senha = "senha_example"; // {String} Senha para ser validada.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarSenhaUsingGET(id, senha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id). | 
 **senha** | **String**| Senha para ser validada. | 

### Return type

[**ValidaSenhaCartaoResponse**](ValidaSenhaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarTarjaUsingGET"></a>
# **validarTarjaUsingGET**
> ValidaCartaoResponse validarTarjaUsingGET(numeroCartao, trilha1, trilha2)

Permite validar um Cart\u00C3\u00A3o Bandeirado a partir da Tarja

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem a autenticidade de um determinado Cart\u00C3\u00A3o a partir da leitura da tarja magn\u00C3\u00A9tica do mesmo. A utiliza\u00C3\u00A7\u00C3\u00A3o desde m\u00C3\u00A9todo tem diversas aplica\u00C3\u00A7\u00C3\u00B5es, sendo a principal delas a de Identifica\u00C3\u00A7\u00C3\u00A3o Positiva do Cart\u00C3\u00A3o antes de permitir que o portador realize transa\u00C3\u00A7\u00C3\u00B5es diversas, como as de compra e saque na modalidade d\u00C3\u00A9bito em conta corrente, dentre outras.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CartaoApi()

var numeroCartao = "numeroCartao_example"; // {String} N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.

var trilha1 = "trilha1_example"; // {String} Trilha 1 do cart\u00C3\u00A3o a ser validado

var trilha2 = "trilha2_example"; // {String} Trilha 2 do cart\u00C3\u00A3o a ser validado


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarTarjaUsingGET(numeroCartao, trilha1, trilha2, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroCartao** | **String**| N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado. | 
 **trilha1** | **String**| Trilha 1 do cart\u00C3\u00A3o a ser validado | 
 **trilha2** | **String**| Trilha 2 do cart\u00C3\u00A3o a ser validado | 

### Return type

[**ValidaCartaoResponse**](ValidaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

