/* eslint-disable indent */
import { INICIAR_BLOCO } from '../../../redux/elemento-actions';
import {
  hasIndicativoFimAlteracao,
  hasIndicativoInicioAlteracao,
  isDispositivoAlteracao,
  normalizaSeForOmissis,
  TEXTO_DEFAULT_DISPOSITIVO_ALTERACAO,
} from '../../../redux/elemento-reducer-util';
import { Counter } from '../../../util/counter';
import { Alteracoes } from '../../dispositivo/alteracao';
import { Articulacao, Artigo, Dispositivo } from '../../dispositivo/dispositivo';
import { TEXTO_OMISSIS } from '../../dispositivo/omissis';
import { isAgrupador, isArtigo, isIncisoCaput, isParagrafo, TipoDispositivo } from '../../dispositivo/tipo';
import { hasIndicativoDesdobramento, hasIndicativoFinalSequencia } from '../conteudo/conteudo-util';
import {
  AlineaLexml,
  ArticulacaoLexml,
  ArtigoLexml,
  CapituloLexml,
  CaputLexml,
  DispositivoAgrupadorGenericoLexml,
  DispositivoGenericoLexml,
  IncisoLexml,
  ItemLexml,
  LivroLexml,
  OmissisLexml,
  ParagrafoLexml,
  ParteLexml,
  SecaoLexml,
  SubsecaoLexml,
  TituloLexml,
} from '../dispositivo/dispositivo-lexml';
import { getArticulacao, isUltimaAlteracao } from '../hierarquia/hierarquia-util';
import { TipoMensagem } from '../util/mensagem';

export class DispositivoLexmlFactory {
  static createArticulacao(): Articulacao {
    return new ArticulacaoLexml();
  }

  static createByInferencia(referencia: Dispositivo, action: any): Dispositivo {
    let novo;

    if (isDispositivoAlteracao(referencia)) {
      if (hasIndicativoFimAlteracao(action.atual?.conteudo?.texto) && isUltimaAlteracao(referencia)) {
        const ref = getArticulacao(referencia);
        novo =
          action.subType === INICIAR_BLOCO
            ? DispositivoLexmlFactory.createDispositivoCabecaAlteracao(TipoDispositivo.artigo.tipo, ref!)
            : DispositivoLexmlFactory.createFromReferencia(ref.pai!);
        novo!.texto = action.subType === INICIAR_BLOCO ? TEXTO_DEFAULT_DISPOSITIVO_ALTERACAO : normalizaSeForOmissis(novo, action.novo?.conteudo?.texto ?? '');
      } else {
        novo = DispositivoLexmlFactory.createFromReferencia(referencia);
        novo.createRotulo();
        novo!.texto = action.novo?.conteudo?.texto?.length > 0 ? normalizaSeForOmissis(novo, action.novo?.conteudo?.texto ?? '') : TEXTO_OMISSIS;
      }
    } else {
      if (hasIndicativoInicioAlteracao(action.atual?.conteudo?.texto) || action.novo?.isDispositivoAlteracao) {
        if (!referencia.hasAlteracao()) {
          DispositivoLexmlFactory.createAlteracao(referencia);
        }
        novo = DispositivoLexmlFactory.createDispositivoCabecaAlteracao(referencia.tipo, referencia.alteracoes!);
        novo.texto = action.novo?.conteudo?.texto?.length > 0 ? action.novo?.conteudo?.texto : TEXTO_DEFAULT_DISPOSITIVO_ALTERACAO;
      } else {
        novo = DispositivoLexmlFactory.createFromReferencia(referencia);
        novo!.texto = action.novo?.conteudo?.texto ?? '';
      }
    }
    return novo;
  }

  static create(parent: Dispositivo, tipo: string, referencia?: Dispositivo, posicao?: number): Dispositivo {
    const dispositivo = DispositivoLexmlFactory.createDispositivo(tipo, parent);
    posicao !== undefined && posicao >= 0
      ? parent!.addFilhoOnPosition(dispositivo, posicao)
      : referencia
      ? parent!.addFilho(dispositivo, referencia)
      : parent!.addFilho(dispositivo);

    return dispositivo;
  }

  static createAlteracao(atual: Artigo): void {
    atual.alteracoes = this.createArticulacao();
    atual.alteracoes.pai = atual;
  }

  private static createDispositivoCabecaAlteracao(tipo: string, alteracoes: Alteracoes): Dispositivo {
    const dispositivo = DispositivoLexmlFactory.create(alteracoes!, tipo);
    dispositivo.createRotulo(dispositivo);

    return dispositivo;
  }

  private static desativaRotuloAutomaticoSeDispositivoAlteracao(dispositivo: Dispositivo): void {
    dispositivo.isDispositivoAlteracao = isDispositivoAlteracao(dispositivo);

    if (isDispositivoAlteracao(dispositivo)) {
      dispositivo.renumeraFilhos = (): void => {
        dispositivo.filhos?.forEach(f => f.createRotulo(f));
      };
      if (isArtigo(dispositivo)) {
        (dispositivo as Artigo).caput!.renumeraFilhos = (): void => {
          dispositivo.filhos?.forEach(f => f.createRotulo(f));
        };
      }
      getArticulacao(dispositivo).renumeraFilhos = (): void => {
        getArticulacao(dispositivo)?.filhos?.forEach(f => f.createRotulo(f));
      };
      getArticulacao(dispositivo).renumeraArtigos = (): void => {
        getArticulacao(dispositivo)?.filhos?.forEach(f => f.createRotulo(f));
      };
    }
  }

  private static createDispositivo(name: string, parent: Dispositivo): Dispositivo {
    let dispositivo: Dispositivo;

    switch (name.toLowerCase()) {
      case 'alinea':
        dispositivo = new AlineaLexml(name.toLowerCase());
        break;
      case 'artigo':
        dispositivo = new ArtigoLexml();
        (dispositivo as Artigo).caput = DispositivoLexmlFactory.createDispositivo(TipoDispositivo.caput.tipo, dispositivo);
        break;
      case 'capitulo':
        dispositivo = new CapituloLexml(name.toLowerCase());
        break;
      case 'caput':
        dispositivo = new CaputLexml(name.toLowerCase());
        break;
      case 'inciso':
        dispositivo = new IncisoLexml(name.toLowerCase());
        break;
      case 'item':
        dispositivo = new ItemLexml(name.toLowerCase());
        break;
      case 'livro':
        dispositivo = new LivroLexml(name.toLowerCase());
        break;
      case 'omissis':
        dispositivo = new OmissisLexml(name.toLowerCase());
        break;
      case 'paragrafo':
        dispositivo = new ParagrafoLexml(name.toLowerCase());
        break;
      case 'parte':
        dispositivo = new ParteLexml(name.toLowerCase());
        break;
      case 'secao':
        dispositivo = new SecaoLexml(name.toLowerCase());
        break;
      case 'subsecao':
        dispositivo = new SubsecaoLexml(name.toLowerCase());
        break;
      case 'titulo':
        dispositivo = new TituloLexml(name.toLowerCase());
        break;
      default: {
        dispositivo = parent && isAgrupador(parent) ? new DispositivoAgrupadorGenericoLexml('agrupadorGenerico') : new DispositivoGenericoLexml('generico');
        dispositivo.mensagens = [];
        dispositivo.mensagens.push({ tipo: TipoMensagem.WARNING, descricao: 'Não foi possível validar a natureza deste dispositivo com base na legislação vigente' });
      }
    }

    dispositivo.uuid = Counter.next();
    dispositivo.name = name;
    dispositivo.pai = parent;

    DispositivoLexmlFactory.desativaRotuloAutomaticoSeDispositivoAlteracao(dispositivo);

    return dispositivo;
  }

  private static createFromReferencia(referencia: Dispositivo): Dispositivo {
    if (referencia.hasAlteracao()) {
      return DispositivoLexmlFactory.createWhenReferenciaBlocoAlteracao(referencia);
    }
    if (isArtigo(referencia)) {
      if (!isDispositivoAlteracao(referencia)) {
        return DispositivoLexmlFactory.createWhenReferenciaIsArtigo(referencia);
      }
      return DispositivoLexmlFactory.create((referencia as Artigo).caput!, TipoDispositivo.inciso.tipo, undefined, 0);
    }
    if (isAgrupador(referencia)) {
      return DispositivoLexmlFactory.createWhenReferenciaIsAgrupador(referencia);
    }
    return isDispositivoAlteracao(referencia)
      ? DispositivoLexmlFactory.create(referencia.pai!, referencia.tipo === TipoDispositivo.omissis.tipo ? referencia.pai!.tipoProvavelFilho! : referencia.tipo, referencia)
      : DispositivoLexmlFactory.createFromReferenciaDefault(referencia);
  }

  private static createWhenReferenciaBlocoAlteracao(referencia: Dispositivo): Dispositivo {
    if (referencia.pai!.isLastFilho(referencia) && referencia?.pai?.pai) {
      return DispositivoLexmlFactory.create(referencia.pai.pai, referencia.pai.tipo, referencia.pai);
    }
    return DispositivoLexmlFactory.create(referencia.pai!, referencia.tipo, referencia);
  }

  private static createFromReferenciaDefault(referencia: Dispositivo): Dispositivo {
    if (hasIndicativoDesdobramento(referencia)) {
      const type = referencia.tipoProvavelFilho!;
      return referencia.pai!.filhos!.length > 0 ? DispositivoLexmlFactory.create(referencia, type, undefined, 0) : DispositivoLexmlFactory.create(referencia, type);
    }
    if (hasIndicativoFinalSequencia(referencia) && referencia.pai!.isLastFilho(referencia)) {
      if (isIncisoCaput(referencia)) {
        const artigo: Artigo = referencia.pai!.pai! as Artigo;
        return artigo!.filhos!.filter(filho => isParagrafo(filho)).length > 0
          ? DispositivoLexmlFactory.create(artigo, TipoDispositivo.paragrafo.tipo, undefined, 0)
          : DispositivoLexmlFactory.create(artigo, TipoDispositivo.paragrafo.tipo);
      } else {
        return DispositivoLexmlFactory.create(referencia!.pai!.pai!, referencia.pai!.tipo, referencia!.pai!);
      }
    }
    return DispositivoLexmlFactory.create(referencia.pai!, referencia.tipo, referencia);
  }

  private static createWhenReferenciaIsArtigo(referencia: Dispositivo): Dispositivo {
    if (hasIndicativoDesdobramento(referencia)) {
      const type = referencia.tipoProvavelFilho!;

      if (type === TipoDispositivo.inciso.tipo) {
        const parent = (referencia as Artigo).caput;
        return parent!.filhos!.length > 0 ? DispositivoLexmlFactory.create(parent!, type, undefined, 0) : DispositivoLexmlFactory.create(parent!, type);
      }
      return referencia.pai!.filhos!.length > 0 ? DispositivoLexmlFactory.create(referencia, type, undefined, 0) : DispositivoLexmlFactory.create(referencia, type);
    }

    if (hasIndicativoFinalSequencia(referencia) && referencia.pai!.isLastFilho(referencia)) {
      return DispositivoLexmlFactory.create(referencia!.pai!.pai!, referencia.pai!.tipo, referencia!.pai!);
    }
    return DispositivoLexmlFactory.create(referencia.pai!, referencia.tipo, referencia);
  }

  private static createWhenReferenciaIsAgrupador(referencia: Dispositivo): Dispositivo {
    return referencia.filhos!.length > 0
      ? DispositivoLexmlFactory.create(referencia, TipoDispositivo.ARTIGO.tipo, undefined, 0)
      : DispositivoLexmlFactory.create(referencia, TipoDispositivo.ARTIGO.tipo);
  }
}
