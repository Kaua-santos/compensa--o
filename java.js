// ==========================================
// 1. TESTE UNITÁRIO (Função isolada)
// ==========================================

// Função isolada que apenas calcula o valor com desconto
function calcularDesconto(valor, percentual) {
  return valor - (valor * (percentual / 100));
}

// Teste Unitário: verifica APENAS se a conta matemática funciona sozinha
function testarCalculoDesconto() {
  const resultado = calcularDesconto(100, 10);
  if (resultado === 90) {
    console.log("Teste Unitário PASSOU: cálculo isolado está correto.");
  } else {
    console.log("Teste Unitário FALHOU.");
  }
}

// ==========================================
// 2. TESTE DE INTEGRAÇÃO (Sistema + Banco)
// ==========================================

// Simulação de um Banco de Dados
const bancoDeDados = {
  pedidos: [],
  salvar(pedido) {
    this.pedidos.push(pedido);
    return true;
  }
};

// Função do sistema que depende do banco de dados para funcionar
function finalizarPedido(cliente, valor) {
  const valorFinal = calcularDesconto(valor, 10);
  const pedido = { cliente, valorFinal };
  const salvou = bancoDeDados.salvar(pedido); // Comunicação entre sistema e banco
  return salvou;
}

// Teste de Integração: verifica se o sistema conversou bem com o banco de dados
function testarIntegracaoPedido() {
  const sucesso = finalizarPedido("Kauã", 200);
  if (sucesso && bancoDeDados.pedidos.length === 1) {
    console.log("Teste de Integração PASSOU: pedido gravado no banco de dados.");
  } else {
    console.log("Teste de Integração FALHOU.");
  }
}

testarCalculoDesconto();
testarIntegracaoPedido();