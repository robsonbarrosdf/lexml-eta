import { Articulacao } from '../model/dispositivo/dispositivo';
import { Elemento } from '../model/elemento';

export enum StateType {
  DocumentoCarregado = 'Documento Carregado',
  ElementoModificado = 'Elemento Modificado',
  ElementoIncluido = 'Elemento Incluído',
  ElementoRemovido = 'Elemento Removido',
  ElementoRenumerado = 'Elemento Renumerado',
  ElementoValidado = 'Elemento Validado',
  ElementoSelecionado = 'Elemento Selecionado',
}
export interface StateEvent {
  stateType: StateType;
  referencia?: Elemento;
  pai?: Elemento;
  posicao?: number;
  elementos?: Elemento[];
}

export interface ElementoState {
  articulacao?: Articulacao;
  past?: StateEvent[];
  future?: StateEvent[];
  ui?: {
    events: StateEvent[];
  };
}

export const createState = (state: any, events: StateEvent[], past: StateEvent[], future: StateEvent[]): ElementoState => {
  return {
    articulacao: state.articulacao,
    past: past,
    future: future,
    ui: {
      events,
    },
  };
};
