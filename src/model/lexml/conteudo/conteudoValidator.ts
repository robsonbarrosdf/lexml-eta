import { containsTags, converteIndicadorParaTexto, endsWithPunctuation, getLastCharacter, isValidHTML } from '../../../util/string-util';
import { Artigo, Dispositivo } from '../../dispositivo/dispositivo';
import { TEXTO_OMISSIS } from '../../dispositivo/omissis';
import { isAgrupador, isArticulacao, isArtigo, isDispositivoDeArtigo, isOmissis, isParagrafo } from '../../dispositivo/tipo';
import {
  getDispositivoCabecaAlteracao,
  hasFilhoGenerico,
  hasFilhos,
  isDispositivoAlteracao,
  isPenultimoMesmoTipo,
  isUltimaAlteracao,
  isUltimoMesmoTipo,
  isUnicoMesmoTipo,
} from '../hierarquia/hierarquiaUtil';
import { Mensagem, TipoMensagem } from '../util/mensagem';
import {
  hasIndicativoContinuacaoSequencia,
  hasIndicativoDesdobramento,
  hasIndicativoFimAlteracao,
  hasIndicativoFinalSequencia,
  hasIndicativoInicioAlteracao,
  TEXTO_DEFAULT_DISPOSITIVO_ALTERACAO,
} from './conteudoUtil';

const hasCitacaoAoFinalFrase = (texto: string): boolean => {
  return texto !== undefined && /.*:[\s]{1,2}["”“].*[.]["”“]$/.test(texto);
};

export const validaTextoAgrupador = (dispositivo: Dispositivo): Mensagem[] => {
  const mensagens: Mensagem[] = [];
  if (!isArticulacao(dispositivo) && (!dispositivo.texto || dispositivo.texto.trim().length === 0)) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Não foi informado um texto para ${dispositivo.artigoDefinido} ${dispositivo.descricao}`,
    });
  }
  if (!isArticulacao(dispositivo) && dispositivo.texto && endsWithPunctuation(dispositivo.texto)) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Não pode haver sinal de pontuação ao final do texto d${dispositivo.artigoDefinido} ${dispositivo.descricao}`,
    });
  }
  if (!isArticulacao(dispositivo) && containsTags(dispositivo.texto)) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Texto d${dispositivo.artigoDefinido} ${dispositivo.descricao} não pode possuir formatação`,
    });
  }
  return mensagens;
};

export const validaTextoDispositivo = (dispositivo: Dispositivo): Mensagem[] => {
  const mensagens: Mensagem[] = [];

  //
  // validações comuns a dispositivos de texto
  //
  if ((!isArticulacao(dispositivo) && !dispositivo.texto) || dispositivo.texto.trim().length === 0) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Não foi informado um texto para ${dispositivo.artigoDefinido + ' ' + dispositivo.descricao!}`,
    });
  }
  if (!isArticulacao(dispositivo) && dispositivo.texto && !isValidHTML(dispositivo.texto)) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: 'O conteúdo do dispositivo não é um HTML válido',
    });
  }
  if (!isArticulacao(dispositivo) && dispositivo.texto && dispositivo.texto.trim().length > 300) {
    mensagens.push({
      tipo: TipoMensagem.WARNING,
      descricao: `Pelo princípio da concisão, o texto dos dispositivos não deve ser extenso, devendo ser utilizadas frases curtas e concisas`,
    });
  }
  if (dispositivo.texto && isDispositivoDeArtigo(dispositivo) && !isParagrafo(dispositivo) && /^[A-ZÀ-Ú]/.test(dispositivo.texto)) {
    mensagens.push({
      tipo: TipoMensagem.WARNING,
      descricao: `${dispositivo.descricao} deveria iniciar com letra minúscula, a não ser que se trate de uma situação especial, como nome próprio`,
    });
  }
  if (
    dispositivo.texto &&
    (isArtigo(dispositivo) || isParagrafo(dispositivo)) &&
    dispositivo.texto !== TEXTO_OMISSIS &&
    !/^[...]{3,}/.test(dispositivo.texto) &&
    !/^[A-ZÀ-Ú]/.test(dispositivo.texto)
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `${dispositivo.descricao} deveria iniciar com letra maiúscula`,
    });
  }
  if (
    dispositivo.texto &&
    !isAgrupador(dispositivo) &&
    !isOmissis(dispositivo) &&
    dispositivo.texto !== TEXTO_OMISSIS &&
    ((!isArtigo(dispositivo) && hasFilhos(dispositivo)) || (isArtigo(dispositivo) && hasFilhos((dispositivo as Artigo).caput!))) &&
    !hasIndicativoDesdobramento(dispositivo) &&
    !isUltimaAlteracao(dispositivo)
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `${dispositivo.descricao} deveria terminar com ${converteIndicadorParaTexto(dispositivo.INDICADOR_DESDOBRAMENTO!)}`,
    });
  }
  if (
    dispositivo.texto &&
    isDispositivoDeArtigo(dispositivo) &&
    !isOmissis(dispositivo) &&
    !isParagrafo(dispositivo) &&
    !isUnicoMesmoTipo(dispositivo) &&
    !isUltimoMesmoTipo(dispositivo) &&
    !isPenultimoMesmoTipo(dispositivo) &&
    !hasFilhos(dispositivo) &&
    dispositivo.INDICADOR_SEQUENCIA !== undefined &&
    getLastCharacter(dispositivo.texto) !== dispositivo.INDICADOR_SEQUENCIA[0]
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `${dispositivo.descricao} deveria terminar com ${converteIndicadorParaTexto(dispositivo.INDICADOR_SEQUENCIA!)}. ${
        hasIndicativoContinuacaoSequencia(dispositivo) ? 'A variação informada só é permitida para o penúltimo elemento' : ''
      }`,
    });
  }

  //
  // validações de dispositivos que não sejam de alteração
  //
  if (
    !isDispositivoAlteracao(dispositivo) &&
    dispositivo.texto &&
    isDispositivoDeArtigo(dispositivo) &&
    !isParagrafo(dispositivo) &&
    (isUnicoMesmoTipo(dispositivo) || isUltimoMesmoTipo(dispositivo)) &&
    !hasFilhoGenerico(dispositivo.pai!) &&
    !hasFilhos(dispositivo) &&
    !hasIndicativoFinalSequencia(dispositivo)
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Último dispositivo de uma sequência deveria terminar com ${converteIndicadorParaTexto(dispositivo.INDICADOR_FIM_SEQUENCIA!)}`,
    });
  }
  if (
    dispositivo.texto &&
    isDispositivoDeArtigo(dispositivo) &&
    !isOmissis(dispositivo) &&
    !isParagrafo(dispositivo) &&
    !isUnicoMesmoTipo(dispositivo) &&
    isPenultimoMesmoTipo(dispositivo) &&
    !hasFilhos(dispositivo) &&
    !hasIndicativoContinuacaoSequencia(dispositivo)
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `${dispositivo.descricao} deveria terminar com uma das seguintes possibilidades: ${dispositivo.INDICADOR_SEQUENCIA!.join('     ')}`,
    });
  }

  if (
    dispositivo.texto &&
    (isArtigo(dispositivo) || isParagrafo(dispositivo)) &&
    !hasFilhos(dispositivo) &&
    !dispositivo.hasAlteracao() &&
    !isUnicoMesmoTipo(dispositivo) &&
    !hasIndicativoContinuacaoSequencia(dispositivo) &&
    !isDispositivoAlteracao(dispositivo)
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `${dispositivo.descricao} deveria terminar com ${converteIndicadorParaTexto(dispositivo.INDICADOR_SEQUENCIA!)}`,
    });
  }
  if (dispositivo.texto && isArtigo(dispositivo) && dispositivo.hasAlteracao() && !hasIndicativoDesdobramento(dispositivo) && !hasIndicativoInicioAlteracao(dispositivo.texto)) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `${dispositivo.descricao} deveria terminar com ${converteIndicadorParaTexto(dispositivo.INDICADOR_DESDOBRAMENTO!)}`,
    });
  }
  if (
    dispositivo.texto &&
    isArtigo(dispositivo) &&
    !dispositivo.hasAlteracao() &&
    hasFilhos(dispositivo) &&
    !hasFilhos((dispositivo as Artigo).caput!) &&
    hasIndicativoDesdobramento(dispositivo)
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `${dispositivo.descricao} deveria terminar com ${converteIndicadorParaTexto(dispositivo.INDICADOR_SEQUENCIA!)}`,
    });
  }

  if (isArtigo(dispositivo) && dispositivo.hasAlteracao() && !dispositivo.alteracoes?.base) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `É necessário informar a norma a ser alterada`,
    });
  }

  //
  // validação de dispositivos de alteração
  //
  if (isDispositivoAlteracao(dispositivo) && isUltimaAlteracao(dispositivo) && (!dispositivo.texto || !hasIndicativoFimAlteracao(dispositivo.texto))) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `O último dispositivo do bloco de alteração deve terminar com: <b>.&#8221; (NR)</b>`,
    });
  }
  if (
    isDispositivoAlteracao(dispositivo) &&
    dispositivo.texto &&
    !isUltimaAlteracao(dispositivo) &&
    /.*["”“]$/.test(dispositivo.texto) &&
    !hasCitacaoAoFinalFrase(dispositivo.texto) &&
    !/”.*(NR)/.test(dispositivo.texto)
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Somente o último dispositivo do bloco de alteração poderia ser finalizado com aspas`,
    });
  }
  if (isDispositivoAlteracao(dispositivo) && dispositivo.texto && !isUltimaAlteracao(dispositivo) && /”.*(NR)/.test(dispositivo.texto)) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Somente o último dispositivo do bloco de alteração pode terminar com &#8221; (NR)`,
    });
  }
  if (
    isDispositivoAlteracao(dispositivo) &&
    dispositivo.texto &&
    dispositivo === getDispositivoCabecaAlteracao(dispositivo) &&
    dispositivo.filhos.length === 0 &&
    (dispositivo.texto === TEXTO_DEFAULT_DISPOSITIVO_ALTERACAO || dispositivo.texto === TEXTO_OMISSIS)
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Não foi informada nenhuma alteração`,
    });
  }
  if (
    isDispositivoAlteracao(dispositivo) &&
    dispositivo.texto &&
    isDispositivoDeArtigo(dispositivo) &&
    !isParagrafo(dispositivo) &&
    !isOmissis(dispositivo) &&
    dispositivo.pai!.filhos.filter(d => isOmissis(d)).length === 0 &&
    isUnicoMesmoTipo(dispositivo) &&
    !hasFilhoGenerico(dispositivo.pai!) &&
    !hasFilhos(dispositivo) &&
    !hasIndicativoFinalSequencia(dispositivo) &&
    !isUltimaAlteracao(dispositivo)
  ) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Último dispositivo de uma sequência deveria terminar com ${converteIndicadorParaTexto(dispositivo.INDICADOR_FIM_SEQUENCIA!)}`,
    });
  }

  return mensagens;
};

export const validaTexto = (dispositivo: Dispositivo): Mensagem[] => {
  return isAgrupador(dispositivo) ? validaTextoAgrupador(dispositivo) : validaTextoDispositivo(dispositivo);
};
