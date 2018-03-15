# Pier.PessoaFisicaAprovadaResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o da pessoa fisica (id) | [optional] 
**nome** | **String** | Apresenta o nome completo da pessoa fisica. | 
**nomeMae** | **String** | Apresenta o nome da m\u00E3e da pessoa fisica | [optional] 
**dataNascimento** | **String** | Data de Nascimento da Pessoa. Essa data deve ser informada no formato aaaa-MM-dd. | [optional] 
**sexo** | **String** | C\u00F3digo de identifica\u00E7\u00E3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino). | [optional] 
**cpf** | **String** | N\u00FAmero do Cadastro de Pessoa Fisica (CPF) | 
**numeroIdentidade** | **String** | N\u00FAmero da identidade. | [optional] 
**orgaoExpedidorIdentidade** | **String** | Org\u00E3o expedidor da Identidade. | [optional] 
**unidadeFederativaIdentidade** | **String** | Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 
**dataEmissaoIdentidade** | **String** | Data emiss\u00E3o da Identidade no formato aaaa-MM-dd | [optional] 
**idEstadoCivil** | **Integer** | Id Estado civil da pessoa fisica | [optional] 
**idProfissao** | **String** | Profiss\u00E3o da pessoa fisica | [optional] 
**idNaturezaOcupacao** | **Integer** | Id Natureza Ocupa\u00E7\u00E3o da pessoa fisica | [optional] 
**idNacionalidade** | **Integer** | Id Nacionalidade da pessoa fisica | [optional] 
**idOrigemComercial** | **Integer** | Id da origem comercial | 
**idProduto** | **Integer** | Id do produto | 
**numeroAgencia** | **Integer** | N\u00FAmero da ag\u00EAncia. | [optional] 
**numeroContaCorrente** | **String** | N\u00FAmero da conta corrente. | [optional] 
**email** | **String** | Email da pessoa fisica | [optional] 
**diaVencimento** | **Integer** | Dia vencimento | 
**nomeImpresso** | **String** | Nome que deve ser impresso no cart\u00E3o | [optional] 
**nomeEmpresa** | **String** | Nome da empresa | [optional] 
**idConta** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o da conta cadastrada | [optional] 
**idProposta** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o da proposta | [optional] 
**canalEntrada** | **String** | Indica o canal pelo qual o cadastro do cliente foi realizado | [optional] 
**valorPontuacao** | **Integer** | Indica o valor da pontua\u00E7\u00E3o atribuido ao cliente (caso n\u00E3o informado ser\u00E1 atribuido o valor = 0) | [optional] 
**telefones** | [**[TelefonePessoaAprovadaResponse]**](TelefonePessoaAprovadaResponse.md) | Apresenta os telefones da empresa | [optional] 
**enderecos** | [**[EnderecoAprovadoResponse]**](EnderecoAprovadoResponse.md) | Pode ser informado os seguintes tipos de endere\u00E7o: Residencial, Comercial, e Outros | 
**limiteGlobal** | **Number** | Valor do Limite Global | 
**limiteMaximo** | **Number** | Valor m\u00E1ximo do limite de cr\u00E9dito para realizar transa\u00E7\u00F5es | 
**limiteParcelas** | **Number** | Valor do limite de cr\u00E9dito acumulado da soma das parcelas das compras | 
**limiteConsignado** | **Number** | Valor do limite de margem consignado | 


