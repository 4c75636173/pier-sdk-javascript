# Pier.RiscoFraudeDetalhadoResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude | [optional] 
**idTipoResolucao** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o do tipo de resolu\u00E7\u00E3o atribu\u00EDdo ao registro | [optional] 
**descricaoTipoResolucao** | **String** | Descri\u00E7\u00E3o do tipo de resolu\u00E7\u00E3o atribu\u00EDdo ao registro | [optional] 
**flagAltoRisco** | **Boolean** | Indica que a transa\u00E7\u00E3o possui um alto risco de fraude e que todas as transa\u00E7\u00F5es seguintes a ela ser\u00E3o negadas at\u00E9 que todas as transa\u00E7\u00F5es classificadas com risco de fraude sejam analisadas | [optional] 
**idConta** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o da conta | [optional] 
**idCartao** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o do cart\u00E3o | [optional] 
**idProduto** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o do produto | [optional] 
**idTransacao** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o da transa\u00E7\u00E3o | [optional] 
**dataTransacao** | **String** | Data que a transa\u00E7\u00E3o classificada com risco de fraude foi realizada | [optional] 
**valorTransacao** | **Number** | Valor da transa\u00E7\u00E3o classificada com risco de fraude | [optional] 
**codigoMoedaOrigem** | **String** | C\u00F3digo da moeda de origem utilizada para a transa\u00E7\u00E3o | [optional] 
**valorOrigem** | **Number** | Valor da transa\u00E7\u00E3o na moeda de origem | [optional] 
**codigoMoedaDestino** | **String** | C\u00F3digo da moeda de destino utilizada para a transa\u00E7\u00E3o | [optional] 
**valorDestino** | **Number** | Valor da transa\u00E7\u00E3o na moeda de destino | [optional] 
**nomeEstabelecimento** | **String** | Nome do estabelecimento onde a transa\u00E7\u00E3o  com risco de fraude foi realizada | [optional] 
**idPais** | **String** | C\u00F3digo de Identifica\u00E7\u00E3o do Pa\u00EDs | [optional] 
**codigoRespostaAutorizador** | **String** | C\u00F3digo de resposta do autorizador para a transa\u00E7\u00E3o | [optional] 
**descricaoRespostaAutorizador** | **String** | Descri\u00E7\u00E3o da resposta do autorizador para a transa\u00E7\u00E3o | [optional] 
**codigoRespostaFraude** | **String** | C\u00F3digo de resposta da ferramenta de Preven\u00E7\u00E3o a Fraude para a transa\u00E7\u00E3o | [optional] 
**descricaoRespostaFraude** | **String** | Descri\u00E7\u00E3o da resposta da ferramenta de Preven\u00E7\u00E3o a Fraude para a transa\u00E7\u00E3o | [optional] 
**origemTransacao** | **String** | Tipo de Terminal que originou a Transa\u00E7\u00E3o (POS, ATM, TEF, etc) | [optional] 
**codigoModoEntradaTerminal** | **String** | C\u00F3digo de Identifica\u00E7\u00E3o do modo de origem da captura da Transa\u00E7\u00E3o | [optional] 
**descricaoModoEntradaTerminal** | **String** | Descri\u00E7\u00E3o do modo de origem da captura da Transa\u00E7\u00E3o | [optional] 
**cpf** | **String** | N\u00FAmero do CPF da Pessoa portadora do Cart\u00E3o, quando for do tipo Pessoa F\u00EDsica | [optional] 
**cnpj** | **String** | N\u00FAmero do CNPJ da Pessoa portadora do Cart\u00E3o, quanto for do tipo Pessoa Jur\u00EDdica | [optional] 
**email** | **String** | Endere\u00E7o de email da Pessoa portadora do Cart\u00E3o | [optional] 
**telefones** | [**[TelefoneResponse]**](TelefoneResponse.md) | Lista de telefones associados ao portador do Cart\u00E3o | [optional] 


