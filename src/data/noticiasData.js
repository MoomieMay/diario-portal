const loremTexto = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu diam dictum, pretium augue venenatis, consectetur elit. Etiam consequat magna sit amet facilisis facilisis. Curabitur sit amet orci et leo lobortis blandit. Donec tempus dui sit amet sodales fringilla. Etiam ultrices ligula sit amet blandit tempus. Suspendisse purus dui, commodo ut consectetur vel, placerat ut urna. Suspendisse potenti. Sed tristique id urna vitae porttitor. Nullam molestie urna justo, a faucibus arcu dictum nec. Vivamus venenatis massa sed eros ultrices, eu pretium neque sollicitudin. Suspendisse ac pretium massa, ac dapibus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vitae tristique mauris. Fusce vitae mi elementum, aliquam leo ac, porta ipsum. Ut risus nisl, pellentesque nec lectus a, eleifend mattis risus. Donec maximus magna nec tempus placerat. Pellentesque bibendum, nibh non finibus tempus, dolor sapien gravida nisi, eget aliquet risus dui eget odio. Duis interdum in neque id mattis. Vivamus id diam nunc. Pellentesque erat nisi, sodales in ullamcorper in, dignissim et neque. Curabitur vehicula ligula id justo pulvinar aliquet. Sed venenatis eget ex et consequat. Duis vel tempor massa. Nunc porttitor vel justo aliquet egestas. Aenean mattis a massa sed dapibus. In sagittis diam et velit tincidunt, eget elementum mi fermentum. Curabitur lectus ex, condimentum eget venenatis in, mollis eu lectus. Ut rhoncus tristique ex, ac aliquet magna vehicula vel. In posuere orci mi, a varius metus egestas vitae. Pellentesque eget erat sed nisl faucibus rhoncus in a ipsum. Quisque libero orci, semper eget pharetra euismod, tincidunt eu magna. Pellentesque nulla lectus, aliquam eu varius at, eleifend sed nulla. Nam non efficitur turpis, sit amet lobortis nunc. Sed facilisis et enim non consequat. Sed iaculis id odio quis varius. Quisque feugiat, felis sed tempus porttitor, mi est blandit massa, at dictum dui risus eget dui. Maecenas sed fermentum massa. Nunc volutpat magna ac egestas tincidunt. Suspendisse porta ullamcorper imperdiet. Proin orci est, tempus sit amet mattis et, commodo ac libero. ';

export const noticias = [
  // POLÍTICA
  {
    id: 'politica-1',
    titulo: 'Política Nacional en Tiempos de Cambio',
    fecha: '2024-07-01T10:30:00',
    categoria: 'POLÍTICA',
    imagen: 'https://images.unsplash.com/photo-1656172439223-b940faa4d34f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['política'],
    relacionadas: ['politica-2', 'politica-3']
  },
  {
    id: 'politica-2',
    titulo: 'Debates Clave en el Congreso',
    fecha: '2024-07-02T11:00:00',
    categoria: 'POLÍTICA',
    imagen: 'https://images.unsplash.com/photo-1722392493604-7382c3d0f646?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['política'],
    relacionadas: ['politica-1']
  },
  {
    id: 'politica-3',
    titulo: 'Elecciones Presidenciales: Lo que Debés Saber',
    fecha: '2024-07-03T09:45:00',
    categoria: 'POLÍTICA',
    imagen: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['política'],
    relacionadas: ['politica-1']
  },

  // POLICIALES
  {
    id: 'policiales-1',
    titulo: 'Operativo Especial en la Ciudad',
    fecha: '2024-06-20T15:00:00',
    categoria: 'POLICIALES',
    imagen: 'https://images.unsplash.com/photo-1538115081112-32c7d8401807?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['policiales'],
    relacionadas: ['policiales-2']
  },
  {
    id: 'policiales-2',
    titulo: 'Nuevo Equipo Antinarcóticos',
    fecha: '2024-06-21T13:30:00',
    categoria: 'POLICIALES',
    imagen: 'https://images.unsplash.com/photo-1653070084513-1d9e97813891?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['policiales'],
    relacionadas: ['policiales-3']
  },
  {
    id: 'policiales-3',
    titulo: 'Investigan Robo en Zona Comercial',
    fecha: '2024-06-22T16:20:00',
    categoria: 'POLICIALES',
    imagen: 'https://images.unsplash.com/photo-1679131473050-380c70d6e85c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhZHJvbnxlbnwwfDB8MHx8fDI%3D',
    texto: loremTexto,
    palabrasClave: ['policiales'],
    relacionadas: ['policiales-2','policiales-1']
  },

  // ECONOMÍA
  {
    id: 'economia-1',
    titulo: 'Análisis del Mercado Cambiario',
    fecha: '2024-07-10T12:00:00',
    categoria: 'ECONOMÍA',
    imagen: 'https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['economía'],
    relacionadas: ['economia-3']
  },
  {
    id: 'economia-2',
    titulo: 'Impacto de la Inflación en el Día a Día',
    fecha: '2024-05-11T14:15:00',
    categoria: 'ECONOMÍA',
    imagen: 'https://images.unsplash.com/photo-1646869461281-23b0dfe25897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZmxhY2lvbnxlbnwwfDB8MHx8fDI%3D',
    texto: loremTexto,
    palabrasClave: ['economía'],
    relacionadas: ['economia-1', 'economia-2']
  },
  {
    id: 'economia-3',
    titulo: 'Nuevas Medidas para el Crecimiento Económico',
    fecha: '2024-05-12T09:00:00',
    categoria: 'ECONOMÍA',
    imagen: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlY2ltaWVudG8lMjBlY29ub21pY298ZW58MHwwfDB8fHwy',
    texto: loremTexto,
    palabrasClave: ['economía'],
    relacionadas: ['economia-2']
  },

  // DEPORTES
  {
    id: 'deportes-1',
    titulo: 'Resultados de la Fecha del Campeonato',
    fecha: '2024-04-05T18:30:00',
    categoria: 'DEPORTES',
    imagen: 'https://images.unsplash.com/photo-1560003991-545650ee5f07?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['deportes'],
    relacionadas: ['deportes-2']
  },
  {
    id: 'deportes-2',
    titulo: 'Entrevista al Nuevo Entrenador',
    fecha: '2024-04-06T17:45:00',
    categoria: 'DEPORTES',
    imagen: 'https://images.unsplash.com/photo-1633340787667-1040cb4cd1b4?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['deportes'],
    relacionadas: ['deportes-3']
  },
  {
    id: 'deportes-3',
    titulo: 'Preparativos para los Juegos Regionales',
    fecha: '2024-04-07T19:00:00',
    categoria: 'DEPORTES',
    imagen: 'https://images.unsplash.com/photo-1720716429002-cf8206d582b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['deportes'],
    relacionadas: ['deportes-2', 'deportes-1']
  },

  // MAGAZINE
  {
    id: 'magazine-1',
    titulo: 'Tendencias en Moda para esta Temporada',
    fecha: '2024-03-10T10:00:00',
    categoria: 'MAGAZINE',
    imagen: 'https://images.unsplash.com/photo-1564772469721-47574604f9c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['magazine'],
    relacionadas: ['magazine-3']
  },
  {
    id: 'magazine-2',
    titulo: 'Los Mejores Restaurantes para Visitar',
    fecha: '2024-03-11T12:30:00',
    categoria: 'MAGAZINE',
    imagen: 'https://images.unsplash.com/photo-1725225945405-d83b3df91bc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['magazine'],
    relacionadas: ['magazine-1']
  },
  {
    id: 'magazine-3',
    titulo: 'Entrevista Exclusiva a Celebridad Local',
    fecha: '2024-03-12T11:15:00',
    categoria: 'MAGAZINE',
    imagen: 'https://images.unsplash.com/photo-1602743297108-4c9061884285?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['magazine'],
    relacionadas: ['magazine-2']
  },

  // SAPIENS
  {
    id: 'sapiens-1',
    titulo: 'Avances en Ciencia y Tecnología',
    fecha: '2024-02-20T09:00:00',
    categoria: 'SAPIENS',
    imagen: 'https://images.unsplash.com/photo-1723987135977-ae935608939e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['sapiens'],
    relacionadas: ['sapiens-2','sapiens-3']
  },
  {
    id: 'sapiens-2',
    titulo: 'Entrevista con Científico Destacado',
    fecha: '2024-02-21T10:30:00',
    categoria: 'SAPIENS',
    imagen: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['sapiens'],
    relacionadas: ['sapiens-1']
  },
  {
    id: 'sapiens-3',
    titulo: 'Nuevos Descubrimientos en Biología',
    fecha: '2024-02-22T14:00:00',
    categoria: 'SAPIENS',
    imagen: 'https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['sapiens'],
    relacionadas: ['sapiens-2']
  },

  // INTERNACIONAL
  {
    id: 'internacional-1',
    titulo: 'Cumbre Internacional de Líderes',
    fecha: '2024-01-15T16:00:00',
    categoria: 'INTERNACIONAL',
    imagen: 'https://images.unsplash.com/photo-1561491432-82f2b22a263e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['internacional'],
    relacionadas: ['internacional-3']
  },
  {
    id: 'internacional-2',
    titulo: 'Acuerdos Comerciales Recientes',
    fecha: '2024-01-16T12:00:00',
    categoria: 'INTERNACIONAL',
    imagen: 'https://images.unsplash.com/photo-1752159684779-0639174cdfac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWN1ZXJkbyUyMGNvbWVyY2lhbHxlbnwwfDB8MHx8fDI%3D',
    texto: loremTexto,
    palabrasClave: ['internacional'],
    relacionadas: ['internacional-1', 'internacional-3']
  },
  {
    id: 'internacional-3',
    titulo: 'Conflictos Globales y Soluciones',
    fecha: '2024-01-17T14:30:00',
    categoria: 'INTERNACIONAL',
    imagen: 'https://images.unsplash.com/photo-1605092262243-28c74cfc74c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['internacional'],
    relacionadas: ['internacional-1']
  },

  // ESPECTÁCULOS
  {
    id: 'espectaculos-1',
    titulo: 'Estreno de Película Esperada',
    fecha: '2024-08-05T20:00:00',
    categoria: 'ESPECTÁCULOS',
    imagen: 'https://images.unsplash.com/photo-1717915604557-94283edbcc1b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['espectáculos'],
    relacionadas: ['espectaculos-3']
  },
  {
    id: 'espectaculos-2',
    titulo: 'Conciertos en la Ciudad',
    fecha: '2024-03-06T21:30:00',
    categoria: 'ESPECTÁCULOS',
    imagen: 'https://images.unsplash.com/photo-1619229665486-19f7ee2987a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['espectáculos'],
    relacionadas: ['espectaculos-1', 'espectaculos-3']
  },
  {
    id: 'espectaculos-3',
    titulo: 'Entrevista a Artista Reconocido',
    fecha: '2024-03-07T19:15:00',
    categoria: 'ESPECTÁCULOS',
    imagen: 'https://images.unsplash.com/photo-1649709253652-5aa6623ca4cc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['espectáculos'],
    relacionadas: ['espectaculos-2']
  },

  // GÉNEROS
  {
    id: 'generos-1',
    titulo: 'Análisis de Nuevos Géneros Musicales',
    fecha: '2024-04-10T18:00:00',
    categoria: 'GÉNEROS',
    imagen: 'https://images.unsplash.com/photo-1623018035231-ebe361a64c76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['géneros'],
    relacionadas: ['generos-3']
  },
  {
    id: 'generos-2',
    titulo: 'Tendencias en Literatura Actual',
    fecha: '2024-04-11T17:45:00',
    categoria: 'GÉNEROS',
    imagen: 'https://images.unsplash.com/photo-1660092506466-6e433fb9cdbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpdGVyYXR1cmF8ZW58MHwwfDB8fHwy',
    texto: loremTexto,
    palabrasClave: ['géneros'],
    relacionadas: ['generos-3']
  },
  {
    id: 'generos-3',
    titulo: 'Exposición de Arte Moderno',
    fecha: '2024-04-12T19:30:00',
    categoria: 'GÉNEROS',
    imagen: 'https://images.unsplash.com/photo-1503293050619-6048ffad0dc5?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['géneros'],
    relacionadas: ['generos-1']
  },

  // ESPECIALES
  {
    id: 'especiales-1',
    titulo: 'Edición Especial Anual',
    fecha: '2024-05-01T08:00:00',
    categoria: 'ESPECIALES',
    imagen: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['especiales'],
    relacionadas: ['especiales-2']
  },
  {
    id: 'especiales-2',
    titulo: 'Reportaje a Personalidades Destacadas',
    fecha: '2024-05-02T09:30:00',
    categoria: 'ESPECIALES',
    imagen: 'https://images.unsplash.com/photo-1497015455546-1da71faf8d06?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['especiales'],
    relacionadas: ['especiales-3']
  },
  {
    id: 'especiales-3',
    titulo: 'Eventos y Actividades Relevantes',
    fecha: '2024-05-03T11:00:00',
    categoria: 'ESPECIALES',
    imagen: 'https://images.unsplash.com/photo-1568832359852-a738a9df630e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    texto: loremTexto,
    palabrasClave: ['especiales'],
    relacionadas: ['especiales-1']
  },
];
