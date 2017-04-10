# Pier.RiscoFraudeDetalhadoResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude (id) | [optional] 
**idTipoResolucao** | **Integer** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de resolu\u00C3\u00A7\u00C3\u00A3o atribu\u00C3\u00ADdo ao registro (id) | [optional] 
**descricaoTipoResolucao** | **String** | Descri\u00C3\u00A7\u00C3\u00A3o do tipo de resolu\u00C3\u00A7\u00C3\u00A3o atribu\u00C3\u00ADdo ao registro | [optional] 
**flagAltoRisco** | **Boolean** | Quando ativa, indica que a transa\u00C3\u00A7\u00C3\u00A3o possui um alto risco de fraude e que todas as transa\u00C3\u00A7\u00C3\u00B5es seguintes a ela ser\u00C3\u00A3o negadas at\u00C3\u00A9 que todas as transa\u00C3\u00A7\u00C3\u00B5es classificadas com risco de fraude ser\u00C3\u00A3o analisadas | [optional] 
**idConta** | **Integer** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id) | [optional] 
**idCartao** | **Integer** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id) | [optional] 
**idProduto** | **Integer** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto (id) | [optional] 
**idTransacao** | **Integer** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transa\u00C3\u00A7\u00C3\u00A3o (id) | [optional] 
**dataTransacao** | **Date** | Data que a transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude foi realizada | [optional] 
**valorTransacao** | **Number** | Valor da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude | [optional] 
**codigoMoedaOrigem** | **String** | C\u00C3\u00B3digo da moeda de origem utilizada para a transa\u00C3\u00A7\u00C3\u00A3o | [optional] 
**valorOrigem** | **Number** | Valor da transa\u00C3\u00A7\u00C3\u00A3o na moeda de origem | [optional] 
**codigoMoedaDestino** | **String** | C\u00C3\u00B3digo da moeda de destino utilizada para a transa\u00C3\u00A7\u00C3\u00A3o | [optional] 
**valorDestino** | **Number** | Valor da transa\u00C3\u00A7\u00C3\u00A3o na moeda de origem | [optional] 
**nomeEstabelecimento** | **String** | Nome do estabelecimento onde a transa\u00C3\u00A7\u00C3\u00A3o  com risco de fraude foi realizada | [optional] 
**idPais** | **String** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Pa\u00C3\u00ADs | [optional] 
**codigoRespostaAutorizador** | **String** | C\u00C3\u00B3digo de resposta do autorizador para a transa\u00C3\u00A7\u00C3\u00A3o | [optional] 
**descricaoRespostaAutorizador** | **String** | Descri\u00C3\u00A7\u00C3\u00A3o da resposta do autorizador para a transa\u00C3\u00A7\u00C3\u00A3o | [optional] 
**codigoRespostaFraude** | **String** | C\u00C3\u00B3digo de resposta da ferramenta de Preven\u00C3\u00A7\u00C3\u00A3o a Fraude para a transa\u00C3\u00A7\u00C3\u00A3o | [optional] 
**descricaoRespostaFraude** | **String** | Descri\u00C3\u00A7\u00C3\u00A3o da resposta da ferramenta de Preven\u00C3\u00A7\u00C3\u00A3o a Fraude para a transa\u00C3\u00A7\u00C3\u00A3o | [optional] 
**origemTransacao** | **String** | Tipo de Terminal que originou a Transa\u00C3\u00A7\u00C3\u00A3o (POS, ATM, TEF, etc) | [optional] 
**codigoModoEntradaTerminal** | **String** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do modo de origem da captura da Transa\u00C3\u00A7\u00C3\u00A3o | [optional] 
**descricaoModoEntradaTerminal** | **String** | Descri\u00C3\u00A7\u00C3\u00A3o do modo de origem da captura da Transa\u00C3\u00A7\u00C3\u00A3o | [optional] 
**cpf** | **String** | N\u00C3\u00BAmero do CPF da Pessoa portadora do Cart\u00C3\u00A3o, quando for do tipo Pessoa F\u00C3\u00ADsica | [optional] 
**cnpj** | **String** | N\u00C3\u00BAmero do CNPJ da Pessoa portadora do Cart\u00C3\u00A3o, quanto for do tipo Pessoa Jur\u00C3\u00ADdica | [optional] 
**email** | **String** | Endere\u00C3\u00A7o de email da Pessoa portadora do Cart\u00C3\u00A3o | [optional] 
**tefefones** | [**[Telefone]**](Telefone.md) | Lista contendo idTipoTelefone, tipoTelefone (Descricao), DDD, Numero, Ramal associados a Pessoa portadora do Cart\u00C3\u00A3o | [optional] 


