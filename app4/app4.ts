import { ConcessionariaDao } from './ConcessionariaDao';
import Concessionaria from '../Concessionaria';
import Pessoa from '../Pessoa';
import { PessoaDao } from './PessoaDao';

let daoC: ConcessionariaDao = new ConcessionariaDao()
let daoP: PessoaDao = new PessoaDao()
let concessionaria = new Concessionaria('',[])
let pessoa = new Pessoa('','')

daoC.inserir(concessionaria);
daoP.atualizar(pessoa);