export default {
  global: {
    componenteFormativo:
      'La validación de la información y diseño de indicadores de gestión',
    descripcionCurso:
      'Validar la información en la recopilación de datos, direcciona a establecer que los componentes temáticos sean coherentes, efectivos, y veraces para el diseño de estrategias y de actividades en los procesos de manufactura. Verificarla, conduce a la construcción de indicadores y planteamiento de objetivos claros, y así lograr un excelente esquema de administración de la calidad apoyado en herramientas de trazabilidad logística.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Validación de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elaboración de encuestas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Lista de chequeo',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño de indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clases y construcción de indicadores',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cuadros de control y trazabilidad',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Validación de la información.',
      referencia:
        'Portugal, V. (2017). <i>Diagnóstico Empresarial</i>. Fundación Universitaria del Área Andina. ',
      tipo: 'Libro',
      descarga: '/downloads/diagnostico_empresarial.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actividad económica',
      significado:
        'para satisfacer necesidades y expectativas, se requiere hacer ciertos procedimientos que permiten la producción y el intercambio de bienes y servicios. A esa misión se le denomina actividad económica. ',
    },
    {
      termino: 'Área de trabajo',
      significado:
        'espacio o sitio destinado para que se realicen funciones de transformación de materiales en productos, o para prestar un servicio.',
    },
    {
      termino: 'Andon',
      significado:
        'sistema de gestión visual en planta de producción que indica el estado de esta, avisa cuando se necesita ayuda y permite a los colaboradores parar el proceso de producción.',
    },
    {
      termino: 'Cuadros de control',
      significado:
        'planilla, matriz o formato disponible para el registro de la información.',
    },
    {
      termino: 'Documento',
      significado: 'información y el medio en el que está contenida.',
    },
    {
      termino: 'Flujo continuo',
      significado:
        'proceso equilibrado donde el flujo de las prendas sigue una secuencia operacional con cambios rápidos de referencia, contando siempre con los mínimos recursos para obtener la producción deseada.',
    },
    {
      termino: 'Información documentada',
      significado:
        'información que una organización tiene que documentar y mantener.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'un indicador es un término o expresión cuantitativa o cualitativa del comportamiento de las variables o atributos de un producto o de un proceso.',
    },
    {
      termino: 'Manual de calidad',
      significado:
        'documento que específica el sistema de gestión de la calidad en la organización.',
    },
    {
      termino: 'Listas de chequeo',
      significado:
        'las listas de chequeo son plantillas de inspección que con corresponsabilidad se diseñan para reconocer la veracidad de actividades estandarizadas.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'el conjunto de habilidades gerenciales o de las directivas que un individuo tiene para influir en la forma de ser y actuar de las personas o en un grupo de trabajo determinado.',
    },
    {
      termino: 'Perfil',
      significado:
        'el perfil define características específicas para ser seleccionado con un fin.',
    },
    {
      termino: 'Plan de mejora',
      significado:
        'esta actividad está centrada en realizar una propuesta para mejorar el método actual de producción. ',
    },
    {
      termino: 'Sistema de gestión de calidad',
      significado:
        'es la gestión de servicios que se ofrecen, y que incluye planear, controlar y mejorar aquellos elementos de una organización.',
    },
    {
      termino: 'Talento humano',
      significado:
        'son las personas que participan en la ejecución y coordinación de las actividades empresariales en una organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Española de Normalización [AENOR]. (2018a). <i>Gestión de la calidad. Satisfacción del cliente, Directrices para el tratamiento de las quejas en las organizaciones</i> (UNE-ISO 10002:2018).',
    },
    {
      referencia:
        'Asociación Española de Normalización [AENOR]. (2018b). <i>Gestión de la calidad. Directrices para la gestión de la calidad en los proyectos</i> (UNE-ISO 10006:2018).',
    },
    {
      referencia:
        'Asociación Española de Normalización [AENOR]. (2019). <i>Gestión de la calidad. Directrices para los planes de calidad</i> (UNE-ISO 10005:2018). ',
    },
    {
      referencia:
        'Lopez, P. (2016). Novedades ISO 9001:2015. Fundación Confemetal.',
    },
    {
      referencia:
        'Sangüesa, M., Dueñas, R. y Ilzarbe, L. (2019). <i>Teoría y práctica de la calidad. 2ª edición revisada y actualizada</i>. Paraninfo.',
    },
    {
      referencia:
        'Sevilla, J. (2019). <i>Auditoría de los sistemas integrados de gestión: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018</i>. Fundación Confemetal.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Manuel   Isaza Córdoba',
        cargo: 'Experto técnico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional ',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Álix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de diseño y metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yerson Fabian Zarate Saavedra',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Jhon Fredy Rodriguez Castiblanco ',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
