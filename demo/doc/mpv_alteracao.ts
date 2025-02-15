export const MPV_ALTERACAO = {
  name: {
    namespaceURI: 'http://www.lexml.gov.br/1.0',
    localPart: 'LexML',
    prefix: '',
    key: '{http://www.lexml.gov.br/1.0}LexML',
    string: '{http://www.lexml.gov.br/1.0}LexML',
  },
  value: {
    TYPE_NAME: 'br_gov_lexml__1.LexML',
    metadado: {
      TYPE_NAME: 'br_gov_lexml__1.Metadado',
      identificacao: {
        TYPE_NAME: 'br_gov_lexml__1.Identificacao',
        urn: 'urn:lex:br:federal:medida.provisoria:2019-06-17;885',
      },
    },
    projetoNorma: {
      TYPE_NAME: 'br_gov_lexml__1.ProjetoNorma',
      norma: {
        TYPE_NAME: 'br_gov_lexml__1.HierarchicalStructure',
        parteInicial: {
          TYPE_NAME: 'br_gov_lexml__1.ParteInicial',
          epigrafe: {
            TYPE_NAME: 'br_gov_lexml__1.GenInline',
            id: 'epigrafe',
            content: ['MEDIDA PROVISÓRIA Nº 885, DE 17 DE JUNHO DE 2019'],
          },
          ementa: {
            TYPE_NAME: 'br_gov_lexml__1.GenInline',
            id: 'ementa',
            content: [
              'Altera a ',
              {
                name: {
                  namespaceURI: 'http://www.lexml.gov.br/1.0',
                  localPart: 'span',
                  prefix: '',
                  key: '{http://www.lexml.gov.br/1.0}span',
                  string: '{http://www.lexml.gov.br/1.0}span',
                },
                value: {
                  TYPE_NAME: 'br_gov_lexml__1.GenInline',
                  href: 'urn:lex:br:federal:lei:1986-12-19;7560',
                  content: ['Lei nº 7.560, de 19 de dezembro de 1986'],
                },
              },
              ', para alterar disposições acerca do Fundo Nacional Antidrogas, a ',
              {
                name: {
                  namespaceURI: 'http://www.lexml.gov.br/1.0',
                  localPart: 'span',
                  prefix: '',
                  key: '{http://www.lexml.gov.br/1.0}span',
                  string: '{http://www.lexml.gov.br/1.0}span',
                },
                value: {
                  TYPE_NAME: 'br_gov_lexml__1.GenInline',
                  href: 'urn:lex:br:federal:lei:2006-08-23;11343',
                  content: ['Lei nº 11.343, de 23 de agosto de 2006'],
                },
              },
              ', que estabelece normas para repressão à produção não autorizada e ao tráfico ilícito de drogas, e a ',
              {
                name: {
                  namespaceURI: 'http://www.lexml.gov.br/1.0',
                  localPart: 'span',
                  prefix: '',
                  key: '{http://www.lexml.gov.br/1.0}span',
                  string: '{http://www.lexml.gov.br/1.0}span',
                },
                value: {
                  TYPE_NAME: 'br_gov_lexml__1.GenInline',
                  href: 'urn:lex:br:federal:lei:1993-12-09;8745',
                  content: ['Lei nº 8.745, de 9 de dezembro de 1993'],
                },
              },
              ', que dispõe sobre a contratação por tempo determinado para atender a necessidade temporária de excepcional interesse público.',
            ],
          },
          preambulo: {
            TYPE_NAME: 'br_gov_lexml__1.TextoType',
            id: 'preambulo',
            p: [
              {
                TYPE_NAME: 'br_gov_lexml__1.GenInline',
                content: ['\n O PRESIDENTE DA REPÚBLICA, no uso da atribuição que lhe confere o art. 62 da Constituição, adota a seguinte Medida Provisória, com força de lei:\n '],
              },
            ],
          },
        },
        articulacao: {
          TYPE_NAME: 'br_gov_lexml__1.Articulacao',
          lXhier: [
            {
              name: {
                namespaceURI: 'http://www.lexml.gov.br/1.0',
                localPart: 'Artigo',
                prefix: '',
                key: '{http://www.lexml.gov.br/1.0}Artigo',
                string: '{http://www.lexml.gov.br/1.0}Artigo',
              },
              value: {
                TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                id: 'art1',
                rotulo: 'Art. 1º',
                lXcontainersOmissis: [
                  {
                    name: {
                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                      localPart: 'Caput',
                      prefix: '',
                      key: '{http://www.lexml.gov.br/1.0}Caput',
                      string: '{http://www.lexml.gov.br/1.0}Caput',
                    },
                    value: {
                      TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                      id: 'art1_cpt',
                      p: [
                        {
                          TYPE_NAME: 'br_gov_lexml__1.GenInline',
                          content: [
                            '\n A ',
                            {
                              name: {
                                namespaceURI: 'http://www.lexml.gov.br/1.0',
                                localPart: 'span',
                                prefix: '',
                                key: '{http://www.lexml.gov.br/1.0}span',
                                string: '{http://www.lexml.gov.br/1.0}span',
                              },
                              value: {
                                TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                href: 'urn:lex:br:federal:lei:1986-12-19;7560',
                                content: ['Lei nº 7.560, de 19 de dezembro de 1986'],
                              },
                            },
                            ', passa a vigorar com as seguintes alterações:\n ',
                          ],
                        },
                      ],
                      alteracao: {
                        TYPE_NAME: 'br_gov_lexml__1.Alteracao',
                        base: 'urn:lex:br:federal:lei:1986-12-19;7560',
                        id: 'art1_cpt_alt1',
                        content: [
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art1',
                              id: 'art1_cpt_alt1_art1',
                              abreAspas: 's',
                              rotulo: 'Art. 1º',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art1_cpt',
                                    id: 'art1_cpt_alt1_art1_cpt',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Fica instituído, no âmbito do Ministério da Justiça e Segurança Pública, o Fundo Nacional Antidrogas - Funad, a ser gerido pela Secretaria Nacional de Políticas sobre Drogas do Ministério da Justiça e Segurança Pública.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art2',
                              id: 'art1_cpt_alt1_art2',
                              abreAspas: 's',
                              rotulo: 'Art. 2º',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art2_cpt',
                                    id: 'art1_cpt_alt1_art2_cpt',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: ['\n Constituirão recursos do Funad:\n '],
                                      },
                                    ],
                                    lXcontainersOmissis: [
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Omissis',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Omissis',
                                          string: '{http://www.lexml.gov.br/1.0}Omissis',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                          id: 'art1_cpt_alt1_art2_cpt_omi1',
                                        },
                                      },
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art2_cpt_inc7',
                                          id: 'art1_cpt_alt1_art2_cpt_inc7',
                                          rotulo: 'VII –',
                                          p: [
                                            {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              content: [
                                                '\n rendimentos de qualquer natureza decorrentes de aplicação do patrimônio do Funad, incluídos os auferidos como remuneração.\n ',
                                              ],
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Omissis',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Omissis',
                                    string: '{http://www.lexml.gov.br/1.0}Omissis',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                    id: 'art1_cpt_alt1_art2_omi1',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                  },
                                },
                              ],
                            },
                          },
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art5',
                              id: 'art1_cpt_alt1_art5',
                              abreAspas: 's',
                              rotulo: 'Art. 5º',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art5_cpt',
                                    id: 'art1_cpt_alt1_art5_cpt',
                                    textoOmitido: 's',
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Omissis',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Omissis',
                                    string: '{http://www.lexml.gov.br/1.0}Omissis',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                    id: 'art1_cpt_alt1_art5_omi1',
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art5_par1',
                                    id: 'art1_cpt_alt1_art5_par1',
                                    rotulo: '§ 1º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Serão disponibilizados para as polícias estaduais e distrital, responsáveis pela apreensão a que se refere o art. 4º, percentual de vinte a quarenta por cento dos recursos provenientes da alienação dos respectivos bens, a título de transferência voluntária, desde que:\n ',
                                        ],
                                      },
                                    ],
                                    lXcontainersOmissis: [
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art5_par1_inc1',
                                          id: 'art1_cpt_alt1_art5_par1_inc1',
                                          rotulo: 'I –',
                                          p: [
                                            {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              content: [
                                                '\n demonstrem a existência de estruturas orgânicas destinadas à gestão de ativos apreendidos nas unidades federativas, capazes de auxiliar no controle e na alienação de bens apreendidos e na efetivação de suas destinações; e\n ',
                                              ],
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art5_par1_inc2',
                                          id: 'art1_cpt_alt1_art5_par1_inc2',
                                          rotulo: 'II –',
                                          p: [
                                            {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              content: [
                                                '\n estejam regulares com o fornecimento dos dados estatísticos previstos no ',
                                                {
                                                  name: {
                                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                                    localPart: 'span',
                                                    prefix: '',
                                                    key: '{http://www.lexml.gov.br/1.0}span',
                                                    string: '{http://www.lexml.gov.br/1.0}span',
                                                  },
                                                  value: {
                                                    TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                                    href: 'urn:lex:br:federal:lei:2006-08-23;11343!art17',
                                                    content: ['art. 17 da Lei nº 11.343, de 23 de agosto de 2006'],
                                                  },
                                                },
                                                '.\n ',
                                              ],
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art5_par2',
                                    id: 'art1_cpt_alt1_art5_par2',
                                    rotulo: '§ 2º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Os critérios e as condições que deverão ser observados na aplicação dos recursos a serem destinados na forma prevista no § 1º e o instrumento específico de adesão para viabilizar a transferência voluntária e os instrumentos de fiscalização serão estabelecidos em regulamento específico do Ministério da Justiça e Segurança Pública.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art5_par3',
                                    id: 'art1_cpt_alt1_art5_par3',
                                    rotulo: '§ 3º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Serão disponibilizados para a Polícia Federal e a Polícia Rodoviária Federal do Ministério da Justiça e Segurança Pública, responsáveis pela apreensão a que se refere o art. 4º, percentual de até quarenta por cento dos recursos provenientes da alienação dos respectivos bens.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art5_par4',
                                    id: 'art1_cpt_alt1_art5_par4',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                    rotulo: '§ 4º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n O percentual a que se refere o § 3º será definido em regulamento específico do Ministério da Justiça e Segurança Pública, que também disporá sobre os critérios e as condições que deverão ser observados na sua aplicação.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
            {
              name: {
                namespaceURI: 'http://www.lexml.gov.br/1.0',
                localPart: 'Artigo',
                prefix: '',
                key: '{http://www.lexml.gov.br/1.0}Artigo',
                string: '{http://www.lexml.gov.br/1.0}Artigo',
              },
              value: {
                TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                id: 'art2',
                rotulo: 'Art. 2º',
                lXcontainersOmissis: [
                  {
                    name: {
                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                      localPart: 'Caput',
                      prefix: '',
                      key: '{http://www.lexml.gov.br/1.0}Caput',
                      string: '{http://www.lexml.gov.br/1.0}Caput',
                    },
                    value: {
                      TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                      id: 'art2_cpt',
                      p: [
                        {
                          TYPE_NAME: 'br_gov_lexml__1.GenInline',
                          content: [
                            '\n A ',
                            {
                              name: {
                                namespaceURI: 'http://www.lexml.gov.br/1.0',
                                localPart: 'span',
                                prefix: '',
                                key: '{http://www.lexml.gov.br/1.0}span',
                                string: '{http://www.lexml.gov.br/1.0}span',
                              },
                              value: {
                                TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                href: 'urn:lex:br:federal:lei:2006-08-23;11343',
                                content: ['Lei nº 11.343, de 23 de agosto de 2006'],
                              },
                            },
                            ', passa a vigorar com as seguintes alterações:\n ',
                          ],
                        },
                      ],
                      alteracao: {
                        TYPE_NAME: 'br_gov_lexml__1.Alteracao',
                        base: 'urn:lex:br:federal:lei:2006-08-23;11343',
                        id: 'art2_cpt_alt1',
                        content: [
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art60-1',
                              id: 'art2_cpt_alt1_art60-1',
                              abreAspas: 's',
                              rotulo: 'Art. 60-A.',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art60-1_cpt',
                                    id: 'art2_cpt_alt1_art60-1_cpt',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Quando as medidas assecuratórias de que trata o art. 60 recaírem sobre moeda estrangeira, títulos, valores mobiliários ou cheques emitidos como ordem de pagamento, será determinada, imediatamente, a conversão em moeda nacional.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art60-1_par1',
                                    id: 'art2_cpt_alt1_art60-1_par1',
                                    rotulo: '§ 1º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n A moeda estrangeira apreendida em espécie será encaminhada a instituição financeira ou equiparada para alienação na forma prevista pelo Conselho Monetário Nacional.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art60-1_par2',
                                    id: 'art2_cpt_alt1_art60-1_par2',
                                    rotulo: '§ 2º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Em caso de impossibilidade da alienação a que se refere o § 1º, a moeda estrangeira será custodiada pela instituição financeira até decisão sobre o seu destino.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art60-1_par3',
                                    id: 'art2_cpt_alt1_art60-1_par3',
                                    rotulo: '§ 3º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Após a decisão sobre o destino da moeda estrangeira, caso seja verificada a inexistência de valor de mercado, a moeda poderá ser doada à representação diplomática do seu país de origem ou destruída.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art60-1_par4',
                                    id: 'art2_cpt_alt1_art60-1_par4',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                    rotulo: '§ 4º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Os valores relativos às apreensões feitas antes da data de entrada em vigor da ',
                                          {
                                            name: {
                                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                                              localPart: 'span',
                                              prefix: '',
                                              key: '{http://www.lexml.gov.br/1.0}span',
                                              string: '{http://www.lexml.gov.br/1.0}span',
                                            },
                                            value: {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              href: 'urn:lex:br:federal:medida.provisoria:2019-06-17;885',
                                              content: ['Medida Provisória nº 885, de 17 de junho de 2019'],
                                            },
                                          },
                                          ', e que estejam custodiados nas dependências do Banco Central do Brasil serão transferidos, no prazo de trezentos e sessenta dias, à Caixa Econômica Federal para que se proceda à alienação ou custódia, de acordo com o previsto nesta Lei.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art62',
                              id: 'art2_cpt_alt1_art62',
                              abreAspas: 's',
                              rotulo: 'Art. 62.',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art62_cpt',
                                    id: 'art2_cpt_alt1_art62_cpt',
                                    textoOmitido: 's',
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Omissis',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Omissis',
                                    string: '{http://www.lexml.gov.br/1.0}Omissis',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                    id: 'art2_cpt_alt1_art62_omi1',
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art62_par12',
                                    id: 'art2_cpt_alt1_art62_par12',
                                    rotulo: '§ 12.',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Na alienação de veículos, embarcações ou aeronaves, a autoridade de trânsito ou o órgão de registro equivalente procederá à regularização dos bens no prazo de trinta dias, de modo que o arrematante ficará livre do pagamento de multas, encargos e tributos anteriores, sem prejuízo de execução fiscal em relação ao antigo proprietário.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art62_par13',
                                    id: 'art2_cpt_alt1_art62_par13',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                    rotulo: '§ 13.',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Na hipótese de que trata o § 12, a autoridade de trânsito ou o órgão de registro equivalente poderá emitir novos identificadores dos bens.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art62-1',
                              id: 'art2_cpt_alt1_art62-1',
                              abreAspas: 's',
                              rotulo: 'Art. 62-A.',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art62-1_cpt',
                                    id: 'art2_cpt_alt1_art62-1_cpt',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n O depósito, em dinheiro, de valores referentes ao produto da alienação ou relacionados a numerários apreendidos ou que tenham sido convertidos, serão efetuados na Caixa Econômica Federal, por meio de documento de arrecadação destinado a essa finalidade.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art62-1_par1',
                                    id: 'art2_cpt_alt1_art62-1_par1',
                                    rotulo: '§ 1º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Os depósitos a que se refere o caput serão repassados pela Caixa Econômica Federal para a Conta Única do Tesouro Nacional, independentemente de qualquer formalidade, no prazo de vinte e quatro horas, contado do momento da realização do depósito.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art62-1_par2',
                                    id: 'art2_cpt_alt1_art62-1_par2',
                                    rotulo: '§ 2º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Na hipótese de absolvição do acusado em decisão judicial, o valor do depósito será devolvido ao acusado pela Caixa Econômica Federal no prazo de até três dias úteis, acrescido de juros, na forma estabelecida pelo ',
                                          {
                                            name: {
                                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                                              localPart: 'span',
                                              prefix: '',
                                              key: '{http://www.lexml.gov.br/1.0}span',
                                              string: '{http://www.lexml.gov.br/1.0}span',
                                            },
                                            value: {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              href: 'urn:lex:br:federal:lei:1995-12-26;9250!art39_par4',
                                              content: ['§ 4º do art. 39 da Lei nº 9.250, de 26 de dezembro de 1995'],
                                            },
                                          },
                                          '.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art62-1_par3',
                                    id: 'art2_cpt_alt1_art62-1_par3',
                                    rotulo: '§ 3º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Na hipótese de decretação do seu perdimento em favor da União, o valor do depósito será transformado em pagamento definitivo, respeitados os direitos de eventuais lesados e de terceiros de boa-fé.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art62-1_par4',
                                    id: 'art2_cpt_alt1_art62-1_par4',
                                    rotulo: '§ 4º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Os valores devolvidos pela Caixa Econômica Federal, por decisão judicial, serão efetuados como anulação de receita do Fundo Nacional Antidrogas no exercício em que ocorrer a devolução.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art62-1_par5',
                                    id: 'art2_cpt_alt1_art62-1_par5',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                    rotulo: '§ 5º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: ['\n A Caixa Econômica Federal manterá o controle dos valores depositados ou devolvidos.\n '],
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art63-3',
                              id: 'art2_cpt_alt1_art63-3',
                              abreAspas: 's',
                              rotulo: 'Art. 63-C.',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art63-3_cpt',
                                    id: 'art2_cpt_alt1_art63-3_cpt',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Compete à Secretaria Nacional de Políticas sobre Drogas do Ministério da Justiça e Segurança Pública proceder à destinação dos bens apreendidos e não leiloados em caráter cautelar, cujo perdimento seja decretado em favor da União, por meio das seguintes modalidades:\n ',
                                        ],
                                      },
                                    ],
                                    lXcontainersOmissis: [
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art63-3_cpt_inc1',
                                          id: 'art2_cpt_alt1_art63-3_cpt_inc1',
                                          rotulo: 'I –',
                                          p: [
                                            {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              content: ['\n alienação, mediante:\n '],
                                            },
                                          ],
                                          lXcontainersOmissis: [
                                            {
                                              name: {
                                                namespaceURI: 'http://www.lexml.gov.br/1.0',
                                                localPart: 'Alinea',
                                                prefix: '',
                                                key: '{http://www.lexml.gov.br/1.0}Alinea',
                                                string: '{http://www.lexml.gov.br/1.0}Alinea',
                                              },
                                              value: {
                                                TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                                href: 'art63-3_cpt_inc1_ali1',
                                                id: 'art2_cpt_alt1_art63-3_cpt_inc1_ali1',
                                                rotulo: 'a)',
                                                p: [
                                                  {
                                                    TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                                    content: ['\n licitação;\n '],
                                                  },
                                                ],
                                              },
                                            },
                                            {
                                              name: {
                                                namespaceURI: 'http://www.lexml.gov.br/1.0',
                                                localPart: 'Alinea',
                                                prefix: '',
                                                key: '{http://www.lexml.gov.br/1.0}Alinea',
                                                string: '{http://www.lexml.gov.br/1.0}Alinea',
                                              },
                                              value: {
                                                TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                                href: 'art63-3_cpt_inc1_ali2',
                                                id: 'art2_cpt_alt1_art63-3_cpt_inc1_ali2',
                                                rotulo: 'b)',
                                                p: [
                                                  {
                                                    TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                                    content: [
                                                      '\n doação com encargo a entidades ou órgãos públicos que contribuam para o alcance das finalidades do Fundo Nacional Antidrogas; ou\n ',
                                                    ],
                                                  },
                                                ],
                                              },
                                            },
                                            {
                                              name: {
                                                namespaceURI: 'http://www.lexml.gov.br/1.0',
                                                localPart: 'Alinea',
                                                prefix: '',
                                                key: '{http://www.lexml.gov.br/1.0}Alinea',
                                                string: '{http://www.lexml.gov.br/1.0}Alinea',
                                              },
                                              value: {
                                                TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                                href: 'art63-3_cpt_inc1_ali3',
                                                id: 'art2_cpt_alt1_art63-3_cpt_inc1_ali3',
                                                rotulo: 'c)',
                                                p: [
                                                  {
                                                    TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                                    content: [
                                                      '\n venda direta, observado o disposto no ',
                                                      {
                                                        name: {
                                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                                          localPart: 'span',
                                                          prefix: '',
                                                          key: '{http://www.lexml.gov.br/1.0}span',
                                                          string: '{http://www.lexml.gov.br/1.0}span',
                                                        },
                                                        value: {
                                                          TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                                          href: 'urn:lex:br:federal:lei:1993-06-21;8666!art24_cpt_inc2',
                                                          content: ['inciso II do caput do art. 24 da Lei nº 8.666, de 21 de junho de 1993'],
                                                        },
                                                      },
                                                      ';\n ',
                                                    ],
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art63-3_cpt_inc2',
                                          id: 'art2_cpt_alt1_art63-3_cpt_inc2',
                                          rotulo: 'II –',
                                          p: [
                                            {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              content: [
                                                '\n incorporação ao patrimônio de órgão da administração pública, observadas as finalidades do Fundo Nacional Antidrogas;\n ',
                                              ],
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art63-3_cpt_inc3',
                                          id: 'art2_cpt_alt1_art63-3_cpt_inc3',
                                          rotulo: 'III –',
                                          p: [
                                            {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              content: ['\n destruição; ou\n '],
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art63-3_cpt_inc4',
                                          id: 'art2_cpt_alt1_art63-3_cpt_inc4',
                                          rotulo: 'IV –',
                                          p: [
                                            {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              content: ['\n inutilização.\n '],
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art63-3_par1',
                                    id: 'art2_cpt_alt1_art63-3_par1',
                                    rotulo: '§ 1º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n A alienação por meio de licitação será na modalidade leilão, para bens móveis e imóveis, independentemente do valor de avaliação, isolado ou global, de bem ou de lotes, assegurada a venda pelo maior lance, por preço que não seja inferior a cinquenta por cento do valor da avaliação.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art63-3_par2',
                                    id: 'art2_cpt_alt1_art63-3_par2',
                                    rotulo: '§ 2º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n O edital do leilão a que se refere o § 1º será amplamente divulgado em jornais de grande circulação e em sítios eletrônicos oficiais, principalmente no Município em que será realizado, dispensada a publicação em diário oficial.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art63-3_par3',
                                    id: 'art2_cpt_alt1_art63-3_par3',
                                    rotulo: '§ 3º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Nas alienações realizadas por meio de sistema eletrônico da administração pública, a publicidade dada pelo sistema substituirá a publicação em diário oficial e em jornais de grande circulação.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art63-3_par4',
                                    id: 'art2_cpt_alt1_art63-3_par4',
                                    rotulo: '§ 4º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Na alienação de veículos, embarcações ou aeronaves, a autoridade de trânsito ou o órgão de registro equivalente procederá à regularização dos bens no prazo de trinta dias, de modo que o arrematante ficará livre do pagamento de multas, encargos e tributos anteriores, sem prejuízo de execução fiscal em relação ao antigo proprietário.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art63-3_par5',
                                    id: 'art2_cpt_alt1_art63-3_par5',
                                    rotulo: '§ 5º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Na hipótese do § 4º, a autoridade de trânsito ou o órgão de registro equivalente poderá emitir novos identificadores dos bens.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art63-3_par6',
                                    id: 'art2_cpt_alt1_art63-3_par6',
                                    rotulo: '§ 6º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n A Secretaria Nacional de Políticas sobre Drogas do Ministério da Justiça e Segurança Pública poderá celebrar convênios ou instrumentos congêneres com órgãos e entidades da União, dos Estados, do Distrito Federal ou dos Municípios, a fim de dar imediato cumprimento ao estabelecido neste artigo.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art63-3_par7',
                                    id: 'art2_cpt_alt1_art63-3_par7',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                    rotulo: '§ 7º',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Observados os procedimentos licitatórios previstos em lei, fica autorizada a contratação da iniciativa privada para a execução das ações de avaliação, administração e alienação dos bens a que se refere esta Lei.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art63-4',
                              id: 'art2_cpt_alt1_art63-4',
                              abreAspas: 's',
                              rotulo: 'Art. 63-D.',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art63-4_cpt',
                                    id: 'art2_cpt_alt1_art63-4_cpt',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                    p: [
                                      {
                                        TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                        content: [
                                          '\n Compete ao Ministério da Justiça e Segurança Pública regulamentar os procedimentos relativos à administração, à preservação e à destinação dos recursos provenientes de delitos e atos ilícitos e estabelecer os valores abaixo dos quais se deve proceder à sua destruição ou inutilização.\n ',
                                        ],
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
            {
              name: {
                namespaceURI: 'http://www.lexml.gov.br/1.0',
                localPart: 'Artigo',
                prefix: '',
                key: '{http://www.lexml.gov.br/1.0}Artigo',
                string: '{http://www.lexml.gov.br/1.0}Artigo',
              },
              value: {
                TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                id: 'art3',
                rotulo: 'Art. 3º',
                lXcontainersOmissis: [
                  {
                    name: {
                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                      localPart: 'Caput',
                      prefix: '',
                      key: '{http://www.lexml.gov.br/1.0}Caput',
                      string: '{http://www.lexml.gov.br/1.0}Caput',
                    },
                    value: {
                      TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                      id: 'art3_cpt',
                      p: [
                        {
                          TYPE_NAME: 'br_gov_lexml__1.GenInline',
                          content: [
                            '\n A ',
                            {
                              name: {
                                namespaceURI: 'http://www.lexml.gov.br/1.0',
                                localPart: 'span',
                                prefix: '',
                                key: '{http://www.lexml.gov.br/1.0}span',
                                string: '{http://www.lexml.gov.br/1.0}span',
                              },
                              value: {
                                TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                href: 'urn:lex:br:federal:lei:1993-12-09;8745',
                                content: ['Lei nº 8.745, de 9 de dezembro de 1993'],
                              },
                            },
                            ', passa a vigorar com as seguintes alterações:\n ',
                          ],
                        },
                      ],
                      alteracao: {
                        TYPE_NAME: 'br_gov_lexml__1.Alteracao',
                        base: 'urn:lex:br:federal:lei:1993-12-09;8745',
                        id: 'art3_cpt_alt1',
                        content: [
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art2',
                              id: 'art3_cpt_alt1_art2',
                              abreAspas: 's',
                              rotulo: 'Art. 2º',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art2_cpt',
                                    id: 'art3_cpt_alt1_art2_cpt',
                                    textoOmitido: 's',
                                    lXcontainersOmissis: [
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Omissis',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Omissis',
                                          string: '{http://www.lexml.gov.br/1.0}Omissis',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                          id: 'art3_cpt_alt1_art2_cpt_omi1',
                                        },
                                      },
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art2_cpt_inc6',
                                          id: 'art3_cpt_alt1_art2_cpt_inc6',
                                          textoOmitido: 's',
                                          rotulo: 'VI –',
                                          lXcontainersOmissis: [
                                            {
                                              name: {
                                                namespaceURI: 'http://www.lexml.gov.br/1.0',
                                                localPart: 'Omissis',
                                                prefix: '',
                                                key: '{http://www.lexml.gov.br/1.0}Omissis',
                                                string: '{http://www.lexml.gov.br/1.0}Omissis',
                                              },
                                              value: {
                                                TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                                id: 'art3_cpt_alt1_art2_cpt_inc6_omi1',
                                              },
                                            },
                                            {
                                              name: {
                                                namespaceURI: 'http://www.lexml.gov.br/1.0',
                                                localPart: 'Alinea',
                                                prefix: '',
                                                key: '{http://www.lexml.gov.br/1.0}Alinea',
                                                string: '{http://www.lexml.gov.br/1.0}Alinea',
                                              },
                                              value: {
                                                TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                                href: 'art2_cpt_inc6_ali14',
                                                id: 'art3_cpt_alt1_art2_cpt_inc6_ali14',
                                                rotulo: 'n)',
                                                p: [
                                                  {
                                                    TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                                    content: [
                                                      '\n que tenham o objetivo de atender a encargos temporários de obras e serviços de engenharia destinados à construção, à reforma, à ampliação e ao aprimoramento de estabelecimentos penais;\n ',
                                                    ],
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Omissis',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Omissis',
                                    string: '{http://www.lexml.gov.br/1.0}Omissis',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                    id: 'art3_cpt_alt1_art2_omi1',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                  },
                                },
                              ],
                            },
                          },
                          {
                            name: {
                              namespaceURI: 'http://www.lexml.gov.br/1.0',
                              localPart: 'Artigo',
                              prefix: '',
                              key: '{http://www.lexml.gov.br/1.0}Artigo',
                              string: '{http://www.lexml.gov.br/1.0}Artigo',
                            },
                            value: {
                              TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                              href: 'art4',
                              id: 'art3_cpt_alt1_art4',
                              abreAspas: 's',
                              rotulo: 'Art. 4º',
                              lXcontainersOmissis: [
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Caput',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Caput',
                                    string: '{http://www.lexml.gov.br/1.0}Caput',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art4_cpt',
                                    id: 'art3_cpt_alt1_art4_cpt',
                                    textoOmitido: 's',
                                    lXcontainersOmissis: [
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Omissis',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Omissis',
                                          string: '{http://www.lexml.gov.br/1.0}Omissis',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                          id: 'art3_cpt_alt1_art4_cpt_omi1',
                                        },
                                      },
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art4_cpt_inc5',
                                          id: 'art3_cpt_alt1_art4_cpt_inc5',
                                          rotulo: 'V –',
                                          p: [
                                            {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              content: ['\n 4 (quatro) anos, nos casos do inciso V e das alíneas "a", "g", "i", "j" e "n" do inciso VI do caput do art. 2º.\n '],
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Paragrafo',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                    string: '{http://www.lexml.gov.br/1.0}Paragrafo',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                    href: 'art4_par1u',
                                    id: 'art3_cpt_alt1_art4_par1u',
                                    textoOmitido: 's',
                                    rotulo: 'Parágrafo único.',
                                    lXcontainersOmissis: [
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Omissis',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Omissis',
                                          string: '{http://www.lexml.gov.br/1.0}Omissis',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                          id: 'art3_cpt_alt1_art4_par1u_omi1',
                                        },
                                      },
                                      {
                                        name: {
                                          namespaceURI: 'http://www.lexml.gov.br/1.0',
                                          localPart: 'Inciso',
                                          prefix: '',
                                          key: '{http://www.lexml.gov.br/1.0}Inciso',
                                          string: '{http://www.lexml.gov.br/1.0}Inciso',
                                        },
                                        value: {
                                          TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                                          href: 'art4_par1u_inc3',
                                          id: 'art3_cpt_alt1_art4_par1u_inc3',
                                          rotulo: 'III –',
                                          p: [
                                            {
                                              TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                              content: [
                                                '\n nos casos do inciso V, das alíneas "a", "h", "l", "m" e "n" do inciso VI e do inciso VIII do caput do art. 2º, desde que o prazo total não exceda a 4 (quatro) anos;\n ',
                                              ],
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  name: {
                                    namespaceURI: 'http://www.lexml.gov.br/1.0',
                                    localPart: 'Omissis',
                                    prefix: '',
                                    key: '{http://www.lexml.gov.br/1.0}Omissis',
                                    string: '{http://www.lexml.gov.br/1.0}Omissis',
                                  },
                                  value: {
                                    TYPE_NAME: 'br_gov_lexml__1.Omissis',
                                    id: 'art3_cpt_alt1_art4_omi1',
                                    fechaAspas: 's',
                                    notaAlteracao: 'NR',
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
            {
              name: {
                namespaceURI: 'http://www.lexml.gov.br/1.0',
                localPart: 'Artigo',
                prefix: '',
                key: '{http://www.lexml.gov.br/1.0}Artigo',
                string: '{http://www.lexml.gov.br/1.0}Artigo',
              },
              value: {
                TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                id: 'art4',
                rotulo: 'Art. 4º',
                lXcontainersOmissis: [
                  {
                    name: {
                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                      localPart: 'Caput',
                      prefix: '',
                      key: '{http://www.lexml.gov.br/1.0}Caput',
                      string: '{http://www.lexml.gov.br/1.0}Caput',
                    },
                    value: {
                      TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                      id: 'art4_cpt',
                      p: [
                        {
                          TYPE_NAME: 'br_gov_lexml__1.GenInline',
                          content: ['\n Ficam revogados:\n '],
                        },
                      ],
                      lXcontainersOmissis: [
                        {
                          name: {
                            namespaceURI: 'http://www.lexml.gov.br/1.0',
                            localPart: 'Inciso',
                            prefix: '',
                            key: '{http://www.lexml.gov.br/1.0}Inciso',
                            string: '{http://www.lexml.gov.br/1.0}Inciso',
                          },
                          value: {
                            TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                            id: 'art4_cpt_inc1',
                            rotulo: 'I –',
                            p: [
                              {
                                TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                content: [
                                  '\n o ',
                                  {
                                    name: {
                                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                                      localPart: 'span',
                                      prefix: '',
                                      key: '{http://www.lexml.gov.br/1.0}span',
                                      string: '{http://www.lexml.gov.br/1.0}span',
                                    },
                                    value: {
                                      TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                      href: 'urn:lex:br:federal:lei:1986;7560!art5_par1',
                                      content: ['parágrafo único do art. 5º da Lei nº 7.560, de 1986'],
                                    },
                                  },
                                  '; e\n ',
                                ],
                              },
                            ],
                          },
                        },
                        {
                          name: {
                            namespaceURI: 'http://www.lexml.gov.br/1.0',
                            localPart: 'Inciso',
                            prefix: '',
                            key: '{http://www.lexml.gov.br/1.0}Inciso',
                            string: '{http://www.lexml.gov.br/1.0}Inciso',
                          },
                          value: {
                            TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                            id: 'art4_cpt_inc2',
                            rotulo: 'II –',
                            p: [
                              {
                                TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                content: [
                                  '\n o ',
                                  {
                                    name: {
                                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                                      localPart: 'span',
                                      prefix: '',
                                      key: '{http://www.lexml.gov.br/1.0}span',
                                      string: '{http://www.lexml.gov.br/1.0}span',
                                    },
                                    value: {
                                      TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                      href: 'urn:lex:br:federal:lei:2006;11343!art61_par6',
                                      content: ['§ 6º'],
                                    },
                                  },
                                  ', o ',
                                  {
                                    name: {
                                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                                      localPart: 'span',
                                      prefix: '',
                                      key: '{http://www.lexml.gov.br/1.0}span',
                                      string: '{http://www.lexml.gov.br/1.0}span',
                                    },
                                    value: {
                                      TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                      href: 'urn:lex:br:federal:lei:2006;11343!art61_par7',
                                      content: ['§ 7º'],
                                    },
                                  },
                                  ' e o ',
                                  {
                                    name: {
                                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                                      localPart: 'span',
                                      prefix: '',
                                      key: '{http://www.lexml.gov.br/1.0}span',
                                      string: '{http://www.lexml.gov.br/1.0}span',
                                    },
                                    value: {
                                      TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                      href: 'urn:lex:br:federal:lei:2006;11343!art61_par8',
                                      content: ['§ 8º do art. 61'],
                                    },
                                  },
                                  ', o ',
                                  {
                                    name: {
                                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                                      localPart: 'span',
                                      prefix: '',
                                      key: '{http://www.lexml.gov.br/1.0}span',
                                      string: '{http://www.lexml.gov.br/1.0}span',
                                    },
                                    value: {
                                      TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                      href: 'urn:lex:br:federal:lei:2006;11343!art62_par1',
                                      content: ['§ 1º do art. 62'],
                                    },
                                  },
                                  ' e o ',
                                  {
                                    name: {
                                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                                      localPart: 'span',
                                      prefix: '',
                                      key: '{http://www.lexml.gov.br/1.0}span',
                                      string: '{http://www.lexml.gov.br/1.0}span',
                                    },
                                    value: {
                                      TYPE_NAME: 'br_gov_lexml__1.GenInline',
                                      href: 'urn:lex:br:federal:lei:2006;11343!art63_par3',
                                      content: ['§ 3º do art. 63 da Lei nº 11.343, de 2006'],
                                    },
                                  },
                                  '.\n ',
                                ],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              name: {
                namespaceURI: 'http://www.lexml.gov.br/1.0',
                localPart: 'Artigo',
                prefix: '',
                key: '{http://www.lexml.gov.br/1.0}Artigo',
                string: '{http://www.lexml.gov.br/1.0}Artigo',
              },
              value: {
                TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                id: 'art5',
                rotulo: 'Art. 5º',
                lXcontainersOmissis: [
                  {
                    name: {
                      namespaceURI: 'http://www.lexml.gov.br/1.0',
                      localPart: 'Caput',
                      prefix: '',
                      key: '{http://www.lexml.gov.br/1.0}Caput',
                      string: '{http://www.lexml.gov.br/1.0}Caput',
                    },
                    value: {
                      TYPE_NAME: 'br_gov_lexml__1.DispositivoType',
                      id: 'art5_cpt',
                      p: [
                        {
                          TYPE_NAME: 'br_gov_lexml__1.GenInline',
                          content: ['\n Esta Medida Provisória entra em vigor na data de sua publicação.\n '],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};
