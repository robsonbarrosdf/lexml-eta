import { customElement, LitElement } from 'lit-element';
import { html, TemplateResult } from 'lit-html';
import { connect } from 'pwa-helpers';
import { Elemento } from '../../model/elemento';
import { ElementoAction, getAcao, isAcaoMenu } from '../../model/lexml/acao';
import { adicionarElementoAction } from '../../model/lexml/acao/adicionarElementoAction';
import { atualizarElementoAction } from '../../model/lexml/acao/atualizarElementoAction';
import { atualizarReferenciaElementoAction } from '../../model/lexml/acao/atualizarReferenciaElementoAction';
import { atualizarTextoElementoAction } from '../../model/lexml/acao/atualizarTextoElementoAction';
import { elementoSelecionadoAction } from '../../model/lexml/acao/elementoSelecionadoAction';
import { moverElementoAbaixoAction } from '../../model/lexml/acao/moverElementoAbaixoAction';
import { moverElementoAcimaAction } from '../../model/lexml/acao/moverElementoAcimaAction';
import { redoAction } from '../../model/lexml/acao/redoAction';
import { removerElementoAction } from '../../model/lexml/acao/removerElementoAction';
import { renumerarElementoAction } from '../../model/lexml/acao/renumerarElementoAction';
import { shiftTabAction } from '../../model/lexml/acao/shiftTabAction';
import { tabAction } from '../../model/lexml/acao/tabAction';
import { transformarAction } from '../../model/lexml/acao/transformarAction';
import { UndoAction } from '../../model/lexml/acao/undoAction';
import { validarArticulacaAction } from '../../model/lexml/acao/validarArticulacaoAction';
import { validarElementoAction } from '../../model/lexml/acao/validarElementoAction';
import { podeRenumerar, rotuloParaEdicao } from '../../model/lexml/numeracao/numeracaoUtil';
import { TipoDispositivo } from '../../model/lexml/tipo/tipoDispositivo';
import { StateEvent, StateType } from '../../redux/state';
import { rootStore } from '../../redux/store';
import { EtaBlotConteudo } from '../../util/eta-quill/eta-blot-conteudo';
import { EtaBlotMenu } from '../../util/eta-quill/eta-blot-menu';
import { EtaBlotMenuBotao } from '../../util/eta-quill/eta-blot-menu-botao';
import { EtaBlotMenuConteudo } from '../../util/eta-quill/eta-blot-menu-conteudo';
import { EtaBlotMenuItem } from '../../util/eta-quill/eta-blot-menu-item';
import { EtaBlotRotulo } from '../../util/eta-quill/eta-blot-rotulo';
import { EtaContainerTable } from '../../util/eta-quill/eta-container-table';
import { Keyboard } from '../../util/eta-quill/eta-keyboard';
import { EtaQuill } from '../../util/eta-quill/eta-quill';
import { EtaQuillUtil } from '../../util/eta-quill/eta-quill-util';
import { Subscription } from '../../util/observable';
import { informarNormaDialog } from './informarNormaDialog';

@customElement('lexml-eta-editor')
export class EditorComponent extends connect(rootStore)(LitElement) {
  private _quill?: EtaQuill;
  private get quill(): EtaQuill {
    return this._quill as EtaQuill;
  }

  private inscricoes: Subscription[] = [];
  private timerOnChange?: any;

  constructor() {
    super();
    this.tabIndex = -1;
  }

  createRenderRoot(): LitElement {
    return this;
  }

  async firstUpdated(): Promise<void> {
    this.inicializar(this.configEditor());
  }

  stateChanged(state: any): void {
    if (!this.quill) {
      this.quillNaoInicializado(state);
      return;
    }
    this.quill!.undoEstruturaVazio = (state.elementoReducer.past ?? []).length === 0;
    this.quill!.redoEstruturaVazio = (state.elementoReducer.future ?? []).length === 0;

    if (state.elementoReducer.ui) {
      if (state.elementoReducer.ui.message) {
        this.alertar(state.elementoReducer.ui.message.descricao);
      } else {
        this.processarStateEvents(state.elementoReducer.ui.events);
      }
    }
  }

  disconnectedCallback(): void {
    this.inscricoes.forEach((i: Subscription) => i.cancel());
    this.removeEventListener('ontextchange', (event: any) => console.log(event));
    this.destroiQuill();
    super.disconnectedCallback();
  }

  render(): TemplateResult {
    return html`
      <link rel="stylesheet" href="assets/css/editor.css" />
      <style>
        #lx-eta-box {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 30px calc(100% - 30px);
          height: 100%;
        }

        #lx-eta-box .ql-toolbar.ql-snow {
          border: 1px solid #ccc;
          box-sizing: border-box;
          padding: 3px 10px 3px 10px;
        }

        #lx-eta-box .ql-snow.ql-toolbar button,
        .ql-snow .ql-toolbar button {
          height: 20px !important;
          padding: 0px !important;
          width: 24px !important;
          margin: 0px !important;
        }

        #lx-eta-barra-ferramenta button:focus {
          outline: 0;
          border: 0px solid #f1f1f1;
          -webkit-box-shadow: 0px;
          box-shadow: none;
        }

        #lx-eta-barra-ferramenta .lx-eta-ql-button {
          font-size: 1.1em;
          color: #444444;
        }

        .lx-eta-rebate-180-graus {
          -moz-transform: scaleX(-1);
          -o-transform: scaleX(-1);
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
        }

        #lx-eta-editor {
          overflow-y: auto;
        }

        #lx-eta-editor .ql-editor {
          font-family: Arial, sans-serif, 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Color Emoji';
          font-size: 1rem;
          line-height: 1.42;
          color: #9d9d9d;
          text-transform: none !important;
          padding: 5px;
        }

        #lx-eta-editor .ql-editor *:focus {
          outline: 0;
          border: 0px solid #f1f1f1;
          -webkit-box-shadow: 0px;
          box-shadow: none;
        }

        #lx-eta-editor .ql-editor label:before {
          content: attr(data-rotulo) ' ';
        }

        #toast-msg {
          padding: 1em;
          font-size: 1.1em;
        }

        .lx-eta-dropbtn {
          background-color: #ffffff;
          color: #444444;
          width: 26px;
          font-weight: bold;
          vertical-align: middle;
          border: none;
          cursor: pointer;
          text-align: center;
        }

        .lx-eta-dropdown {
          position: relative;
          display: inline-block;
        }

        .lx-eta-dropdown-content {
          display: none;
          position: absolute;
          right: 0;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
          z-index: 1;
        }

        .lx-eta-dropdown-content div {
          color: black;
          padding: 5px 16px;
          text-decoration: none;
          display: block;
          white-space: nowrap;
          font-weight: normal !important;
          text-align: left;
          cursor: pointer;
        }

        .lx-eta-dropdown-content div:hover {
          background-color: #e5e5e5;
        }

        .lx-eta-dropdown:hover .lx-eta-dropdown-content {
          display: block;
        }

        .lx-eta-dropdown:hover .lx-eta-dropbtn {
          background-color: #e1e1e1;
        }

        .lx-eta-btn-disp-atual {
          margin-left: 10px !important;
          text-decoration: underline;
        }

        .lx-eta-btn-desfazer {
          margin-left: 10px !important;
        }
      </style>
      <div id="lx-eta-box">
        <div id="lx-eta-barra-ferramenta">
          <button class="ql-bold" title="Negrito (Ctrl+b)"></button>
          <button class="ql-italic" title="Itálico (Ctrl+i)"></button>
          <button class="ql-script" value="sub" title="Subscrito"></button>
          <button class="ql-script" value="super" title="Sobrescrito"></button>
          <button @click=${this.onClickUndo} class="lx-eta-ql-button lx-eta-btn-desfazer" title="Desfazer (Ctrl+Z)"><i class="fa fa-undo"></i></button>
          <button @click=${this.onClickRedo} class="lx-eta-ql-button" title="Refazer (Ctrl+y)"><i class="fa fa-undo lx-eta-rebate-180-graus"></i></button>
          <button @click=${this.onClickDispositivoAtual} class="lx-eta-ql-button lx-eta-btn-disp-atual" title="Localizar dispositivo atual">D</button>
          <button @click=${this.onClickValidacao} class="lx-eta-ql-button lx-eta-btn-disp-atual" title="Validar Articulação">V</button>
          <lexml-eta-help style="float:right;"></lexml-eta-help>
        </div>
        <div id="lx-eta-editor"></div>
      </div>
      <elix-toast id="toast-alerta" duration="3000">
        <div id="toast-msg"></div>
      </elix-toast>
      <div id="lx-eta-buffer" style="display: none; height: 0px;"><p></p></div>
    `;
  }

  private formatacaoAlterada(): void {
    const texto = document.getSelection()?.toString();
    if (texto) {
      this.agendarEmissaoEventoOnChange('toolbar');
    }
  }

  private onClickUndo(): void {
    this.quill.undo();
  }

  private onClickRedo(): void {
    this.quill.redo();
  }

  private onClickDispositivoAtual(): void {
    this.quill.setSelection(this.quill.getIndex(this.quill.linhaAtual.blotConteudo), 0, Quill.sources.SILENT);
    this.quill.focus();
  }

  private onClickValidacao(): void {
    rootStore.dispatch(validarArticulacaAction.execute());
  }

  private isRotuloInvalido(tipo: string, rotulo: string): boolean {
    return !rotulo || rotulo.replace(/["“”]?/, '') === tipo;
  }

  private onSelectionChange: SelectionChangeHandler = (): void => {
    /*     if (this.quill.mudouDeLinha) {
      const linhaAnt: EtaContainerTable = this.quill.linhaAnterior;
      if (linhaAnt) {
        const elemento: Elemento = this.criarElemento(linhaAnt.uuid, linhaAnt.tipo, linhaAnt.blotConteudo?.html ?? '', linhaAnt.numero, linhaAnt.hierarquia);
        if (linhaAnt.blotConteudo?.alterado) {
          rootStore.dispatch(atualizarElementoAction.execute(elemento));
        } else if ((linhaAnt.blotConteudo?.html === '' && linhaAnt.blotConteudo?.htmlAnt === '') || this.isRotuloInvalido(linhaAnt.tipo, linhaAnt.blotRotulo?.rotulo)) {
          rootStore.dispatch(validarElementoAction.execute(elemento));
        }
      }
    } */
  };

  private onBold(value: any): void {
    if (this.quill.keyboard.verificarOperacaoTecladoPermitida()) {
      this.quill.format('bold', value);
      this.formatacaoAlterada();
    }
  }

  private onItalic(value: any): void {
    if (this.quill.keyboard.verificarOperacaoTecladoPermitida()) {
      this.quill.format('italic', value);
      this.formatacaoAlterada();
    }
  }

  private onScript(value: any): void {
    if (this.quill.keyboard.verificarOperacaoTecladoPermitida()) {
      this.quill.format('script', value);
      this.formatacaoAlterada();
    }
  }

  private onOperacaoInvalida(): void {
    this.alertar('Operação não permitida.');
  }

  private isDesmembramento(textoAnterior: string, textoLinhaAtual: string, textoNovaLinha: string): boolean {
    return (textoLinhaAtual + textoNovaLinha).localeCompare(textoAnterior) !== 0;
  }

  private adicionarElemento(range: RangeStatic): void {
    const linha: EtaContainerTable = this.quill.linhaAtual;
    const blotConteudo: EtaBlotConteudo = linha.blotConteudo;

    const indexInicio: number = this.quill.inicioConteudoAtual ?? 0;
    const indexFim: number = indexInicio + blotConteudo!.tamanho ?? 0;
    let textoLinha = '';
    let textoNovaLinha = '';

    if (range.index === indexInicio) {
      textoLinha = '';
      textoNovaLinha = blotConteudo.html;
    } else if (range.index === indexFim) {
      textoLinha = blotConteudo.html;
      textoNovaLinha = '';
    } else {
      const tamanhoNovaLinha: number = indexFim - range.index;
      textoLinha = this.quill.getConteudoHtmlParteLinha(blotConteudo, 0, blotConteudo.tamanho - tamanhoNovaLinha);
      textoNovaLinha = this.quill.getConteudoHtmlParteLinha(blotConteudo, range.index - indexInicio, tamanhoNovaLinha);
    }
    const elemento: Elemento = this.criarElemento(linha.uuid, linha.tipo, textoLinha, linha.numero, linha.hierarquia);

    if (this.isDesmembramento(blotConteudo.htmlAnt, textoLinha, textoNovaLinha)) {
      const elemento: Elemento = this.criarElemento(linha.uuid, linha.tipo, textoLinha + textoNovaLinha, linha.numero, linha.hierarquia);
      rootStore.dispatch(atualizarTextoElementoAction.execute(elemento));
    }
    rootStore.dispatch(adicionarElementoAction.execute(elemento, textoNovaLinha));
  }

  private async renumerarElemento(): Promise<any> {
    const linha: EtaContainerTable = this.quill.linhaAtual;
    const atual = linha.blotConteudo.html;
    const elemento: Elemento = this.criarElemento(linha!.uuid ?? 0, linha!.tipo ?? '', '', linha.numero, linha.hierarquia, linha.descricaoSituacao);

    if (!podeRenumerar(elemento)) {
      return;
    }

    const dialogElem = document.createElement('elix-dialog');

    const content = document.createRange().createContextualFragment(`
      <div style="padding: 15px; text-align: center">
        <div>
          Numeração do dispositivo:
          <input type="text" style="width: 60px">
        </div>
        <div class="erro" style="margin-top: 10px; color: red; display: none;"></div>
        <div style="margin-top: 10px;">
          <button>Ok</button>
          <button>Cancelar</button>
        </div>
      </div>
    `);

    const input = <HTMLInputElement>content.querySelector('input');
    input.value = `${rotuloParaEdicao(linha.blotRotulo.rotulo)}`;

    const botoes = content.querySelectorAll('button');
    const ok = botoes[0];
    const cancelar = botoes[1];

    const erro = <HTMLDivElement>content.querySelector('.erro');

    ok.onclick = (): void => {
      this.quill.focus();
      (<any>dialogElem).close();
      if (elemento.conteudo?.texto !== atual) {
        elemento.conteudo!.texto = atual;
        rootStore.dispatch(atualizarElementoAction.execute(elemento));
      }

      rootStore.dispatch(renumerarElementoAction.execute(elemento, input.value.trim()));
    };

    cancelar.onclick = (): void => {
      this.quill.focus();
      (<any>dialogElem).close();
    };

    const validar = (): string => {
      const numeracao = input.value;
      if (/^\s*$/.test(numeracao)) {
        return 'A numeração não pode ser vazia.';
      }
      return '';
    };

    input.onkeyup = (evt: KeyboardEvent): void => {
      const msgErro = validar();
      erro.innerText = msgErro;
      erro.style.display = msgErro ? 'block' : 'none';
      ok.disabled = Boolean(msgErro);
      if (!ok.disabled) {
        if (evt.key === 'Enter') {
          ok.click();
        }
      }
    };

    dialogElem.appendChild(content);

    ok.disabled = Boolean(validar());

    await (<any>dialogElem).open();
  }

  private removerElemento(): void {
    const linha: EtaContainerTable = this.quill.linhaAtual;
    const mensagem = `Você realmente deseja remover o dispositivo ${linha.blotRotulo.rotulo}`;

    this.confirmar(mensagem, ['Sim', 'Não'], (event: CustomEvent) => {
      const closeResult: any = event.detail.closeResult;
      const choice: string = closeResult && closeResult.choice;
      if (choice === 'Sim') {
        const elemento: Elemento = this.criarElemento(linha!.uuid ?? 0, linha!.tipo ?? '', '', linha.numero, linha.hierarquia);
        rootStore.dispatch(removerElementoAction.execute(elemento));
      }
      this.quill.focus();
    });
  }

  private moverElemento(ev: KeyboardEvent): void {
    const linha: EtaContainerTable = this.quill.linhaAtual;
    const blotConteudo: EtaBlotConteudo = linha.blotConteudo;
    const textoLinha = blotConteudo.html;

    const elemento: Elemento = this.criarElemento(linha.uuid, linha.tipo, textoLinha, linha.numero, linha.hierarquia);

    if (ev.key === 'ArrowUp') {
      rootStore.dispatch(moverElementoAcimaAction.execute(elemento));
    } else if (ev.key === 'ArrowDown') {
      rootStore.dispatch(moverElementoAbaixoAction.execute(elemento));
    }
  }

  private transformarElemento(ev: KeyboardEvent): void {
    const linha: EtaContainerTable = this.quill.linhaAtual;
    const blotConteudo: EtaBlotConteudo = linha.blotConteudo;
    const textoLinha = blotConteudo.html;

    const elemento: Elemento = this.criarElemento(linha.uuid, linha.tipo, textoLinha, linha.numero, linha.hierarquia);

    if (ev.key.toLowerCase() === 'a') {
      rootStore.dispatch(transformarAction(elemento, TipoDispositivo.artigo.name!));
    } else if (ev.key.toLowerCase() === 'l') {
      rootStore.dispatch(transformarAction(elemento, TipoDispositivo.alinea.name!));
    } else if (ev.key.toLowerCase() === 'n') {
      rootStore.dispatch(transformarAction(elemento, TipoDispositivo.inciso.name!));
    } else if (ev.key.toLowerCase() === 'o') {
      rootStore.dispatch(transformarAction(elemento, TipoDispositivo.omissis.name!));
    } else if (ev.key.toLowerCase() === 'p') {
      rootStore.dispatch(transformarAction(elemento, TipoDispositivo.paragrafo.name!));
    } else if (ev.key.toLowerCase() === 't') {
      rootStore.dispatch(transformarAction(elemento, TipoDispositivo.item.name!));
    } else if (Keyboard.keys.TAB) {
      rootStore.dispatch(ev.shiftKey ? shiftTabAction(elemento) : tabAction(elemento));
    }
  }

  private elementoSelecionado(uuid: number): void {
    const linha: EtaContainerTable = this.quill.linhaAtual;
    const elemento: Elemento = this.criarElemento(uuid, linha.tipo ?? '', '', linha.numero, linha.hierarquia);
    rootStore.dispatch(elementoSelecionadoAction.execute(elemento));
    this.quill.processandoMudancaLinha = false;
  }

  private undoRedoEstrutura(tipo: string): void {
    //
    // TODO: Chamar action para undo ou redo - estrutura.
    //
    if (tipo === 'undo') {
      rootStore.dispatch(UndoAction());
    } else {
      rootStore.dispatch(redoAction());
    }
  }

  private processarStateEvents(events: StateEvent[]): void {
    events?.forEach((event: StateEvent): void => {
      switch (event.stateType) {
        case StateType.DocumentoCarregado:
          this.destroiQuill();
          this.inicializar(this.configEditor());
          this.carregarArticulacao(event.elementos ?? []);
          break;

        case StateType.InformarNorma:
          informarNormaDialog(event.elementos![0], this.quill, rootStore, atualizarReferenciaElementoAction);
          break;

        case StateType.ElementoIncluido:
          this.inserirNovoElementoNoQuill(event.elementos![0], event.referencia as Elemento, true);
          this.inserirNovosElementosNoQuill(event);
          break;

        case StateType.ElementoModificado:
        case StateType.ElementoRestaurado:
          this.atualizarQuill(event);
          this.montarMenuContexto(event);
          break;

        case StateType.ElementoSuprimido:
          this.atualizarSituacao(event);
          this.montarMenuContexto(event);
          break;

        case StateType.ElementoRemovido:
          this.removerLinhaQuill(event);
          break;

        case StateType.ElementoRenumerado:
          this.renumerarQuill(event);
          break;

        case StateType.ElementoValidado:
          this.atualizarMensagemQuill(event);
          break;

        case StateType.ElementoSelecionado:
          this.montarMenuContexto(event);
          this.atualizarMensagemQuill(event);
          break;

        case StateType.SituacaoElementoModificada:
          this.atualizarSituacao(event);
          this.montarMenuContexto(event);
          break;
      }
      this.quill.limparHistory();
    });

    // Os eventos que estão no array abaixo devem emitir um custom event "ontextchange"
    const eventosQueDevemEmitirTextChange = [
      StateType.ElementoModificado,
      StateType.ElementoSuprimido,
      StateType.ElementoRestaurado,
      StateType.ElementoIncluido,
      StateType.ElementoRemovido,
      StateType.ElementoRenumerado,
    ];

    const eventosFiltrados = events?.filter(ev => eventosQueDevemEmitirTextChange.includes(ev.stateType)).map(ev => ev.stateType);

    if (eventosFiltrados?.length) {
      this.agendarEmissaoEventoOnChange('stateEvents');
    }
  }

  private processarEscolhaMenu(itemMenu: string): void {
    if (itemMenu === 'Remover dispositivo') {
      this.removerElemento();
    } else if (itemMenu === renumerarElementoAction.descricao) {
      this.renumerarElemento();
    } else {
      const linha: EtaContainerTable = this.quill.linhaAtual;
      const elemento: Elemento = this.criarElemento(linha!.uuid ?? 0, linha!.tipo ?? '', '', linha.numero, linha.hierarquia);
      elemento.conteudo!.texto = linha.blotConteudo.html ?? '';
      rootStore.dispatch(getAcao(itemMenu).execute(elemento));
    }
  }

  private inserirNovoElementoNoQuill(elemento: Elemento, referencia: Elemento, selecionarLinha?: boolean): void {
    const linhaRef: EtaContainerTable | undefined = this.quill.getLinha(referencia.uuid!);

    if (linhaRef) {
      const novaLinha: EtaContainerTable = EtaQuillUtil.criarContainerLinha(elemento);

      if (linhaRef.next) {
        novaLinha.insertInto(this.quill.scroll, linhaRef.next);
      } else {
        novaLinha.insertInto(this.quill.scroll);
      }

      if (this.quill.linhaAtual.blotConteudo.html !== '' || novaLinha.blotConteudo.html === '') {
        if (selecionarLinha) {
          this.quill.desmarcarLinhaAtual(this.quill.linhaAtual);
          this.quill.marcarLinhaAtual(novaLinha);
        }

        try {
          selecionarLinha ? this.quill.setIndex(this.quill.getIndex(novaLinha.blotConteudo), Quill.sources.SILENT) : undefined;
        } catch (e) {
          console.log(e);
        }
      } else {
        this.quill.linhaAtual.blotConteudo.htmlAnt = this.quill.linhaAtual.blotConteudo.html;
      }
      this.quill.linhaAtual.descricaoSituacao = elemento.descricaoSituacao;
      this.quill.linhaAtual.setEstilo(elemento.descricaoSituacao!);
    }
  }

  private inserirNovosElementosNoQuill(event: StateEvent, selecionarLinha?: boolean): void {
    const elementos: Elemento[] = event.elementos ?? [];

    for (let i = 1; i < elementos.length; i++) {
      this.inserirNovoElementoNoQuill(elementos[i], elementos[i - 1], selecionarLinha);
    }
  }

  private atualizarSituacao(event: StateEvent): void {
    const elementos: Elemento[] = event.elementos ?? [];
    let linha: EtaContainerTable | undefined;

    elementos.map((elemento: Elemento) => {
      linha = this.quill.getLinha(elemento.uuid ?? 0, linha);
      if (linha) {
        if (elemento.descricaoSituacao !== linha.descricaoSituacao) {
          linha.descricaoSituacao = elemento.descricaoSituacao;
          linha.setEstilo(elemento.descricaoSituacao!);
        }
      }
    });
  }

  private atualizarQuill(event: StateEvent): void {
    const elementos: Elemento[] = event.elementos ?? [];
    let linha: EtaContainerTable | undefined;

    elementos.map((elemento: Elemento) => {
      linha = this.quill.getLinha(elemento.uuid ?? 0, linha);
      if (linha) {
        let nivelAlerado = false;

        if (elemento.editavel !== linha.editavel) {
          linha.editavel = elemento.editavel;
        }

        if (elemento.rotulo !== linha.blotRotulo.html) {
          linha.numero = elemento.numero ?? '';
          linha.blotRotulo.format(EtaBlotRotulo.blotName, elemento.rotulo);
        }

        if (elemento.nivel !== linha.nivel) {
          linha.nivel = elemento.nivel;
          linha.format(EtaContainerTable.blotName, elemento);
          nivelAlerado = true;
        }

        if (elemento.agrupador !== linha.agrupador) {
          linha.agrupador = elemento.agrupador;
          linha.blotRotulo.format(EtaBlotRotulo.formatoStyle, elemento);
          if (!nivelAlerado) {
            linha.format(EtaContainerTable.blotName, elemento);
          }
        }

        if (elemento.conteudo?.texto !== linha.blotConteudo.html) {
          linha.blotConteudo.html = elemento.conteudo?.texto ?? '';
        }

        if (elemento.descricaoSituacao !== linha.descricaoSituacao) {
          linha.descricaoSituacao = elemento.descricaoSituacao;
          linha.setEstilo(elemento.descricaoSituacao!);
        }

        if (linha.children.length === 2) {
          linha.children.tail.remove();
        }

        if (elemento.mensagens && elemento.mensagens.length > 0) {
          EtaQuillUtil.criarContainerMensagens(elemento).insertInto(linha);
        }
      }
    });
  }

  private removerLinhaQuill(event: StateEvent): void {
    const elementos: Elemento[] = event.elementos ?? [];
    let linha: EtaContainerTable | undefined;

    elementos.forEach((elemento: Elemento) => {
      linha = this.quill.getLinha(elemento.uuid ?? 0, linha);
      if (linha) {
        linha.remove();
      }
    });
    const linhaCursor: EtaContainerTable = this.quill.getLine(this.quill.getSelection(true).index)[0].linha;
    const index: number = this.quill.getIndex(linhaCursor.blotConteudo);

    this.quill.setSelection(index, 0, Quill.sources.SILENT);
    this.quill.marcarLinhaAtual(linhaCursor);
  }

  private renumerarQuill(event: StateEvent): void {
    const elementos: Elemento[] = event.elementos ?? [];
    let linha: EtaContainerTable | undefined;

    elementos.map((elemento: Elemento) => {
      linha = this.quill.getLinha(elemento.uuid ?? 0, linha);
      if (linha) {
        linha.blotRotulo.format(EtaBlotRotulo.blotName, elemento.rotulo);
      }
    });
  }

  private atualizarMensagemQuill(event: StateEvent): void {
    const elementos: Elemento[] = event.elementos ?? [];
    let linha: EtaContainerTable | undefined;

    elementos.map((elemento: Elemento) => {
      linha = this.quill.getLinha(elemento.uuid ?? 0, linha);

      if (linha) {
        if (linha?.children.length === 2) {
          linha.children.tail.remove();
        }

        if (elemento.mensagens && elemento.mensagens.length > 0) {
          EtaQuillUtil.criarContainerMensagens(elemento).insertInto(linha);
        }
      }
    });
  }

  private montarMenuContexto(event: StateEvent): void {
    const elemento: Elemento = event.elementos ? event.elementos[0] : new Elemento();
    const acoesMenu: ElementoAction[] = (elemento?.acoesPossiveis ?? []).filter((acao: ElementoAction) => isAcaoMenu(acao));

    if (acoesMenu.length > 0) {
      const blotMenu: EtaBlotMenu = new EtaBlotMenu();
      const blotMenuConteudo: EtaBlotMenuConteudo = new EtaBlotMenuConteudo();
      const callback: any = (itemMenu: string) => {
        this.processarEscolhaMenu(itemMenu);
        this.quill.focus();
      };

      new EtaBlotMenuBotao().insertInto(blotMenu);

      acoesMenu.forEach((acao: ElementoAction) => {
        new EtaBlotMenuItem(acao, callback).insertInto(blotMenuConteudo);
      });
      blotMenuConteudo.insertInto(blotMenu);

      this.quill.linhaAtual.blotContainerDireito.remove();
      blotMenu.insertInto(this.quill.linhaAtual.containerDireito);
    }
  }

  private criarElemento(uuid: number, tipo: string, html: string, numero: string, hierarquia: any, descricaoSituacao?: string): Elemento {
    const elemento: Elemento = new Elemento();
    elemento.uuid = uuid;
    elemento.tipo = tipo;
    elemento.numero = numero;
    elemento.conteudo = { texto: html };
    elemento.hierarquia = hierarquia;
    elemento.descricaoSituacao = descricaoSituacao;
    return elemento;
  }

  private inicializar(op: QuillOptionsStatic): void {
    const editorHtml: HTMLElement = this.getHtmlElement('lx-eta-editor');
    const bufferHtml: HTMLElement = this.getHtmlElement('lx-eta-buffer');

    EtaQuill.configurar();
    this._quill = new EtaQuill(editorHtml, bufferHtml, op);
    this.quill.on('selection-change', this.onSelectionChange);
    this.inscricoes.push(this.quill.keyboard.operacaoTecladoInvalida.subscribe(this.onOperacaoInvalida.bind(this)));
    this.inscricoes.push(this.quill.keyboard.adicionaElementoTeclaEnter.subscribe(this.adicionarElemento.bind(this)));
    this.inscricoes.push(this.quill.keyboard.moveElemento.subscribe(this.moverElemento.bind(this)));
    this.inscricoes.push(this.quill.keyboard.removeElemento.subscribe(this.removerElemento.bind(this)));
    this.inscricoes.push(this.quill.keyboard.renumeraElemento.subscribe(this.renumerarElemento.bind(this)));
    this.inscricoes.push(this.quill.keyboard.transformaElemento.subscribe(this.transformarElemento.bind(this)));
    this.inscricoes.push(this.quill.undoRedoEstrutura.subscribe(this.undoRedoEstrutura.bind(this)));
    this.inscricoes.push(this.quill.elementoSelecionado.subscribe(this.elementoSelecionado.bind(this)));

    this.inscricoes.push(this.quill.observableSelectionChange.subscribe(this.atualizarTextoElemento.bind(this)));
    this.inscricoes.push(this.quill.keyboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this)));
    this.inscricoes.push(this.quill.clipboard.onChange.subscribe(this.agendarEmissaoEventoOnChange.bind(this)));
  }

  private agendarEmissaoEventoOnChange(origemEvento: string): void {
    clearTimeout(this.timerOnChange);
    this.timerOnChange = setTimeout(() => this.emitirEventoOnChange(origemEvento), 1000);
  }

  private atualizarTextoElemento(linhaAtual: EtaContainerTable): void {
    if (linhaAtual?.blotConteudo?.alterado) {
      const elemento: Elemento = this.criarElemento(linhaAtual.uuid, linhaAtual.tipo, linhaAtual.blotConteudo?.html ?? '', linhaAtual.numero, linhaAtual.hierarquia);
      rootStore.dispatch(atualizarTextoElementoAction.execute(elemento));
    }
  }

  private emitirEventoOnChange(origemEvento: string): void {
    this.atualizarTextoElemento(this.quill.linhaAtual);

    this.dispatchEvent(
      new CustomEvent('onchange', {
        bubbles: true,
        composed: true,
        detail: {
          origemEvento,
        },
      })
    );
  }

  private carregarArticulacao(elementos: Elemento[]): void {
    setTimeout(() => {
      this.quill.getLine(0)[0].remove();
      elementos.map((elemento: Elemento) => {
        EtaQuillUtil.criarContainerLinha(elemento).insertInto(this.quill.scroll);
        elemento.tipo === TipoDispositivo.generico.tipo ? rootStore.dispatch(validarElementoAction.execute(elemento)) : undefined;
      });
      this.quill.limparHistory();
      setTimeout(() => {
        const el = this.quill.getLinha(elementos![1].uuid!);
        this.quill.setSelection(this.quill.getIndex(el?.blotConteudo), 0, Quill.sources.USER);
      }, 0);
      rootStore.dispatch(validarArticulacaAction.execute());
    }, 0);
  }

  private configEditor(): QuillOptionsStatic {
    return {
      modules: {
        toolbar: {
          container: '#lx-eta-barra-ferramenta',
          handlers: {
            bold: this.onBold.bind(this),
            italic: this.onItalic.bind(this),
            script: this.onScript.bind(this),
          },
        },
        history: {
          delay: 0,
          maxStack: 500,
          userOnly: true,
        },
      },
      theme: 'snow',
    };
  }

  private async confirmar(mensagem: string, botoes: string[], callback: any): Promise<void> {
    const dialog: any = document.createElement('elix-alert-dialog');

    dialog.textContent = mensagem;
    dialog.choices = botoes;
    dialog.addEventListener('close', callback);
    await dialog.open();
  }

  private alertar(mensagem: string): void {
    const toast: any = this.querySelector('#toast-alerta');
    const elmHtml: HTMLElement = this.querySelector('#toast-msg') as HTMLElement;

    elmHtml.innerHTML = mensagem;
    toast.fromEdge = 'top';
    toast.open();
  }

  private quillNaoInicializado(state: any): void {
    let elementos: Elemento[] = [];
    const verificarQuillInicializado: any = (elementos: Elemento[]): void => {
      setTimeout(() => {
        if (!this.quill) {
          verificarQuillInicializado(elementos);
        } else {
          this.carregarArticulacao(elementos);
        }
      }, 70);
    };

    if (state.elementoReducer.ui) {
      const event: StateEvent | undefined = state.elementoReducer.ui.events.find((event: StateEvent): boolean => event.stateType === StateType.DocumentoCarregado);
      elementos = event!.elementos ?? [];
    }
    verificarQuillInicializado(elementos);
  }

  private getHtmlElement(id: string): HTMLElement {
    return this.querySelector(`#${id}`) as HTMLElement;
  }

  private destroiQuill(): void {
    this.getHtmlElement('lx-eta-editor')!.innerHTML = '';
    this.getHtmlElement('lx-eta-buffer')!.innerHTML = '';
    if (this.quill) {
      this.quill.off('selection-change', this.onSelectionChange);
      this.quill.destroi();
    }
    this._quill = undefined;
  }
}
