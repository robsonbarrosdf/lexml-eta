import { Tipo, TipoDispositivo } from '../model/dispositivo/tipo';
import { Elemento, Referencia } from '../model/elemento';

export const ADD_ELEMENTO = 'ADD_ELEMENTO';
export const CHANGE_ELEMENTO = 'CHANGE_ELEMENTO';
export const MOVER_ELEMENTO_ABAIXO = 'MOVER_ELEMENTO_ABAIXO';
export const MOVER_ELEMENTO_ACIMA = 'MOVER_ELEMENTO_ACIMA';
export const NOVA_ARTICULACAO = 'NOVA_ARTICULACAO';
export const OPEN_ARTICULACAO = 'OPEN_ARTICULACAO';
export const REMOVE_ELEMENTO = 'REMOVE_ELEMENTO';
export const UPDATE_ELEMENTO = 'UPDATE_ELEMENTO';
export const VALIDA_ARTICULACAO = 'VALIDA_ARTICULACAO';
export const VALIDA_ELEMENTO = 'VALIDA_ELEMENTO';
export const ELEMENTO_SELECIONADO = 'ELEMENTO_SELECIONADO';

export const TAB = 'TAB';
export const SHIFT_TAB = 'SHIFT_TAB';

export const UNDO = 'UNDO';
export const REDO = 'REDO';

export interface ElementoAction {
  descricao?: string;
  tipo?: string;
  execute(atual: Referencia, conteudo?: string, novo?: Referencia): any;
}

abstract class ElementoAbstractAction implements ElementoAction {
  descricao?: string;
  tipo?: string;
  abstract execute(atual: Referencia, conteudo?: string, novo?: Referencia): any;
}

class AddElemento extends ElementoAbstractAction {
  descricao: string;
  tipo?: string;
  isDispositivoAlteracao = false;
  constructor(tipo?: Tipo) {
    super();
    this.descricao = `Adicionar ${tipo?.descricao ?? ''}`;
    this.tipo = tipo?.tipo;
  }

  execute(atual: Referencia, conteudo?: string, tipo?: Referencia, hasDesmembramento = false): any {
    return {
      type: ADD_ELEMENTO,
      atual,
      novo: {
        tipo,
        isDispositivoAlteracao: this.isDispositivoAlteracao,
        conteudo: {
          texto: conteudo,
        },
      },
      hasDesmembramento,
    };
  }
}

class TransformaDispositivoEmAlteradorNorma extends AddElemento {
  isDispositivoAlteracao = true;
  constructor() {
    super();
    this.descricao = `Transforma em dispositivo de alteração`;
  }
}

export class ChangeElemento extends ElementoAbstractAction {
  descricao: string;
  tipo: string;
  nomeAcao?: string;

  constructor(tipo: Tipo, descricao: string, nomeAcao: string) {
    super();
    this.descricao = descricao;
    this.tipo = tipo.tipo;
    this.nomeAcao = nomeAcao;
  }

  execute(atual: Referencia): any {
    return {
      type: CHANGE_ELEMENTO,
      subType: this.nomeAcao,
      atual,
      novo: {
        tipo: this.tipo,
      },
    };
  }
}

export const transforma = (elemento: Elemento, novoTipo: string): any => {
  const action = new ChangeElemento(
    TipoDispositivo[novoTipo.toLowerCase()],
    'Transformar ' + elemento.tipo + 'em ' + TipoDispositivo[novoTipo.toLowerCase()].name,
    'transforma' + elemento.tipo + 'Em' + TipoDispositivo[novoTipo.toLowerCase()].name
  );

  return action.execute(elemento);
};

class RemoveElemento extends ElementoAbstractAction {
  constructor() {
    super();
    this.descricao = 'Remover dispositivo';
  }

  execute(atual: Referencia): any {
    return {
      type: REMOVE_ELEMENTO,
      atual,
    };
  }
}

class ElementoSelecionado extends ElementoAbstractAction {
  constructor() {
    super();
    this.descricao = 'Elemento selecionado';
  }

  execute(atual: Referencia): any {
    return {
      type: ELEMENTO_SELECIONADO,
      atual,
    };
  }
}

class ValidaArticulacao extends ElementoAbstractAction {
  constructor() {
    super();
    this.descricao = 'Articulação validada';
  }

  execute(): any {
    return {
      type: VALIDA_ARTICULACAO,
    };
  }
}
class ValidaElemento extends ElementoAbstractAction {
  constructor() {
    super();
    this.descricao = 'Elemento validado';
  }

  execute(atual: Referencia): any {
    return {
      type: VALIDA_ELEMENTO,
      atual,
    };
  }
}

class AtualizaElemento extends ElementoAbstractAction {
  constructor() {
    super();
    this.descricao = 'Atualizar dispositivo';
  }

  execute(atual: Referencia): any {
    this.tipo = atual.tipo;
    return {
      type: UPDATE_ELEMENTO,
      atual,
    };
  }
}

class MoverElementoAbaixo extends ElementoAbstractAction {
  constructor() {
    super();
    this.descricao = 'Mover para baixo';
  }

  execute(atual: Referencia): any {
    return {
      type: MOVER_ELEMENTO_ABAIXO,
      atual,
    };
  }
}

class MoverElementoAcima extends ElementoAbstractAction {
  constructor() {
    super();
    this.descricao = 'Mover para cima';
  }

  execute(atual: Referencia): any {
    return {
      type: MOVER_ELEMENTO_ACIMA,
      atual,
    };
  }
}

export const shiftTabAction = (atual: Referencia): any => {
  return {
    type: SHIFT_TAB,
    atual,
  };
};

export const tabAction = (atual: Referencia): any => {
  return {
    type: TAB,
    atual,
  };
};

export const UndoAction = (): any => {
  return {
    type: UNDO,
  };
};

export const RedoAction = (): any => {
  return {
    type: REDO,
  };
};

export const openArticulacaoAction = (articulacao: any): any => {
  return {
    type: OPEN_ARTICULACAO,
    articulacao,
  };
};

export const novaArticulacaoAction = (): any => {
  return {
    type: NOVA_ARTICULACAO,
  };
};

export const addArtigo = new AddElemento(TipoDispositivo.artigo);
export const addAlinea = new AddElemento(TipoDispositivo.alinea);
export const addInciso = new AddElemento(TipoDispositivo.inciso);
export const addItem = new AddElemento(TipoDispositivo.item);
export const omissis = new AddElemento(TipoDispositivo.omissis);
export const addParagrafo = new AddElemento(TipoDispositivo.paragrafo);

export const moverElementoAbaixo = new MoverElementoAbaixo();
export const moverElementoAcima = new MoverElementoAcima();

export const transformaEmDispositivoAlteracaoNorma = new TransformaDispositivoEmAlteradorNorma();
// export const transformaEmOmissis = new ChangeElemento(TipoDispositivo.omissis, 'Transforma em Omissis', 'transformaEmOmissis');
export const transformaEmOmissisAlinea = new ChangeElemento(TipoDispositivo.omissis, 'Transforma em Omissis de Alínea', 'transformaEmOmissisAlinea');
export const transformaEmOmissisIncisoCaput = new ChangeElemento(TipoDispositivo.omissis, 'Transforma em Omissis de Inciso de Caput', 'transformaEmOmissisIncisoCaput');
export const transformaEmOmissisItem = new ChangeElemento(TipoDispositivo.omissis, 'Transforma em Omissis de Item', 'transformaEmOmissisItem');
export const transformaEmOmissisParagrafo = new ChangeElemento(TipoDispositivo.omissis, 'Transforma em Omissis de Parágrafo', 'transformaEmOmissisParagrafo');
export const transformaEmOmissisIncisoParagrafo = new ChangeElemento(TipoDispositivo.omissis, 'Transforma em Omissis de Inciso de Parágrafo', 'transformaEmOmissisIncisoParagrafo');

export const transformaAlineaEmInciso = new ChangeElemento(TipoDispositivo.inciso, 'Transformar Alínea em Inciso', 'transformaAlineaEmInciso');
export const transformaAlineaEmItem = new ChangeElemento(TipoDispositivo.item, 'Transformar Alínea em Item', 'transformaAlineaEmItem');
export const transformaArtigoEmParagrafo = new ChangeElemento(TipoDispositivo.paragrafo, 'Transformar Artigo em Parágrafo', 'transformaArtigoEmParagrafo');
export const transformaGenericoEmInciso = new ChangeElemento(TipoDispositivo.inciso, 'Transformar em Inciso', 'transformaDispositivoGenericoEmInciso');
export const transformaGenericoEmAlinea = new ChangeElemento(TipoDispositivo.alinea, 'Transformar em Alínea', 'transformaDispositivoGenericoEmAlinea');
export const transformaGenericoEmItem = new ChangeElemento(TipoDispositivo.item, 'Transformar em Item', 'transformaDispositivoGenericoEmItem');
export const transformaIncisoEmParagrafo = new ChangeElemento(TipoDispositivo.paragrafo, 'Transformar Inciso em Parágrafo', 'transformaIncisoEmParagrafo');
export const transformaIncisoCaputEmParagrafo = new ChangeElemento(TipoDispositivo.paragrafo, 'Transformar Inciso em Parágrafo', 'transformaIncisoCaputEmParagrafo');
export const transformaIncisoEmAlinea = new ChangeElemento(TipoDispositivo.alinea, 'Transformar Inciso em Alínea', 'transformaIncisoEmAlinea');

export const transformaOmissisEmAlinea = new ChangeElemento(TipoDispositivo.alinea, 'Transformar Omissis em Alínea', 'transformaOmissisEmAlinea');
export const transformaOmissisEmArtigo = new ChangeElemento(TipoDispositivo.artigo, 'Transformar Omissis em Artigo', 'transformaOmissisEmArtigo');
export const transformaOmissisEmIncisoCaput = new ChangeElemento(TipoDispositivo.inciso, 'Transformar Omissis em Inciso de Caput', 'transformaOmissisEmIncisoCaput');
export const transformaOmissisEmIncisoParagrafo = new ChangeElemento(TipoDispositivo.inciso, 'Transformar Omissis em Inciso de Parágrafo', 'transformaOmissisEmIncisoParagrafo');
export const transformaOmissisEmItem = new ChangeElemento(TipoDispositivo.item, 'Transformar Omissis em Item', 'transformaOmissisEmItem');
export const transformaOmissisEmParagrafo = new ChangeElemento(TipoDispositivo.paragrafo, 'Transformar Omissis em Parágrafo', 'transformaOmissisEmParagrafo');

export const transformaItemEmAlinea = new ChangeElemento(TipoDispositivo.alinea, 'Transformar Item em Alínea', 'transformaItemEmAlinea');
export const transformaParagrafoEmArtigo = new ChangeElemento(TipoDispositivo.artigo, 'Transformar Parágrafo em Artigo', 'transformaParagrafoEmArtigo');
export const transformaParagrafoEmIncisoParagrafo = new ChangeElemento(
  TipoDispositivo.inciso,
  'Transformar Parágrafo em Inciso de Parágrafo',
  'transformaParagrafoEmIncisoParagrafo'
);
export const transformaParagrafoEmIncisoCaput = new ChangeElemento(TipoDispositivo.inciso, 'Transformar Parágrafo em Inciso de Caput', 'transformaParagrafoEmIncisoCaput');

export const elementoSelecionadoAction = new ElementoSelecionado();

export const addElementoAction = new AddElemento();
export const removeElementoAction = new RemoveElemento();
export const updateElementoAction = new AtualizaElemento();
export const validateElementoAction = new ValidaElemento();
export const validaArticulacaAction = new ValidaArticulacao();

export const acoesPossiveisDispositivo = [addElementoAction, removeElementoAction, updateElementoAction];

const acoesMenu: ElementoAction[] = [];

acoesMenu.push(addArtigo);
acoesMenu.push(addAlinea);
acoesMenu.push(addInciso);
acoesMenu.push(addItem);
acoesMenu.push(addParagrafo);

acoesMenu.push(moverElementoAbaixo);
acoesMenu.push(moverElementoAcima);

acoesMenu.push(transformaEmDispositivoAlteracaoNorma);
acoesMenu.push(transformaEmOmissisAlinea);
acoesMenu.push(transformaEmOmissisIncisoCaput);
acoesMenu.push(transformaEmOmissisItem);
acoesMenu.push(transformaEmOmissisParagrafo);
acoesMenu.push(transformaEmOmissisIncisoParagrafo);

acoesMenu.push(transformaAlineaEmInciso);
acoesMenu.push(transformaAlineaEmItem);
acoesMenu.push(transformaArtigoEmParagrafo);
acoesMenu.push(transformaGenericoEmInciso);
acoesMenu.push(transformaGenericoEmAlinea);
acoesMenu.push(transformaGenericoEmItem);
acoesMenu.push(transformaIncisoEmAlinea);
acoesMenu.push(transformaIncisoEmParagrafo);
acoesMenu.push(transformaItemEmAlinea);
acoesMenu.push(transformaIncisoCaputEmParagrafo);
acoesMenu.push(transformaOmissisEmAlinea);
acoesMenu.push(transformaOmissisEmArtigo);
acoesMenu.push(transformaOmissisEmIncisoCaput);
acoesMenu.push(transformaOmissisEmIncisoParagrafo);
acoesMenu.push(transformaOmissisEmItem);
acoesMenu.push(transformaOmissisEmParagrafo);
acoesMenu.push(transformaParagrafoEmArtigo);
acoesMenu.push(transformaParagrafoEmIncisoParagrafo);
acoesMenu.push(transformaParagrafoEmIncisoCaput);
acoesMenu.push(removeElementoAction);
acoesMenu.push(validateElementoAction);

const acoesExclusivasEdicao: ElementoAction[] = [];
acoesExclusivasEdicao.push(addElementoAction);
acoesExclusivasEdicao.push(updateElementoAction);

export const acoesDisponiveis = [...acoesMenu, ...acoesExclusivasEdicao, validaArticulacaAction];

export const getAcao = (descricao: string): ElementoAction => {
  return acoesDisponiveis.filter(acao => acao.descricao === descricao.trim())[0];
};

export const isAcaoMenu = (acao: ElementoAction): boolean => {
  return acoesMenu.includes(acao);
};
