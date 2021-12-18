// import { MPV_ALTERACAO } from '../../../../demo/doc/mpv_alteracao';
import { TipoDocumento } from '../../../model/documento/tipoDocumento';
import { getDocumento } from '../../../parser/parserLexmlJsonix';
import { State } from '../../state';
import { load } from './loadArticulacao';

export const abreArticulacao = (state: any, action: any): State => {
  console.log(action);
  return load(getDocumento(action.articulacao, action.tipoDocumento === TipoDocumento.EMENDA)!.articulacao!);
  //return load(getDocumento(MPV_ALTERACAO, action.tipoDocumento === TipoDocumento.EMENDA)!.articulacao!);
  //return load(ArticulacaoParser.load(action.articulacao, action.tipoDocumento === TipoDocumento.EMENDA));
};
