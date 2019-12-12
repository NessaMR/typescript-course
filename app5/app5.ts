
import Concessionaria from '../Concessionaria';
import Pessoa from '../Pessoa';
import { Dao } from './Dao';

let concessionaria = new Concessionaria('',[])
let pessoa = new Pessoa('','')

let daoC: Dao<Concessionaria> = new Dao<Concessionaria>();
let daoP: Dao<Pessoa> = new Dao<Pessoa>();

daoC.inserir(concessionaria);
daoP.atualizar(pessoa);