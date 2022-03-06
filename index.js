import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Laís", 78945681846, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEestaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(gerenteEstaLogado, diretorEestaLogado, clienteEstaLogado);

