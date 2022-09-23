<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Validación de la información
      
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-down")
        p.mb-0 En infraestructuras logísticas de gestión de la calidad, validar los datos recopilados  con herramientas funcionales y metodológicas, con base en la aplicación permanente de listas de chequeo y control permanente de la información, es  fundamental para lograr que un servicio o producto se ajuste cada vez más a los requerimientos del cliente, es decir, se deben diseñar mejoras que se agrupen con base en técnicas para lograr óptimos  sostenibles y ritmos de chequeo que potencien la competitividad y reduzcan costos globales (especialmente indirectos), manteniendo estándares de calidad y disminuyendo los tiempos del ciclo de fabricación.

    p(data-aos="fade-down").mb-5 Para reconocer la importancia de la validación de la información, se hace necesario observar algunos elementos que son claves, como los que se presentan a continuación:

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/img2.svg', alt='Texto que describa la imagen')

      div(x="13.5%" y="66.3%" tooltip="Ver mas" numero="+")
        .row.justify-content-center.align-items-center.pt-5           
          .col-lg-6
            h4 1. Herramientas habituales
            p En consultas investigativas que cualifican la información convirtiendo los datos en vertientes. 
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img4.png', alt='')    
      div(x="25%" y="21.3%" tooltip="Ver mas" numero="+")
        .row.justify-content-center.align-items-center.pt-5           
          .col-lg-6
            h4 2. Arrojan soluciones
            p Presentan soluciones a las problemáticas de los procesos productivos, cuantitativos o cualitativos. Sobre los valores que se obtienen de éstos. 
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img5.png', alt='')      
      div(x="72.3%" y="76.5%" tooltip="Ver mas" numero="+")
        .row.justify-content-center.align-items-center.pt-5           
          .col-lg-6
            h4 3.  Recolección de la información 
            p Se representa en una muestra definida de los diferentes puntos de lectura en los procesos, donde se pueden utilizar matrices  y cuestionarios para la recolección sistemática de la información. 
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/img6.png', alt='')                                  

    .row.justify-content-center.align-items-stretch       
      .col-lg-8
        .row.justify-content-center.align-items-stretch.mb-4       
          .col-lg-8.cajon.color-primario.p-4
            p(data-aos="fade-down").mb-0 La verificación de la información permite en la actualidad a las empresas la vinculación de estrategias que aportan a la calidad de los productos que son ofrecidos al cliente, para que, de esta manera, se logre  la satisfacción de sus necesidades.
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img7.png', alt='')
        p(data-aos="fade-down") En ese sentido, desde su aplicación en los diferentes casos, 
          span.tblue #[b la norma ISO permite ejemplos y herramientas de soporte para ser probadas en el sector industrial y de servicios, ] 
          span acompañando la norma de gestión y entregando técnicamente productos y servicios de alto nivel, según las necesidades, exigencias y proyecciones del cliente; lo que vincula las diferentes áreas en las que se puede aplicar la mejora, recopilando y validando información, tabulando y elaborando la trazabilidad diagnóstica de las operaciones sobre la gestión en los inventarios, procesos, desplazamientos, retrasos, entre otras  actividades.  
        p(data-aos="fade-down") De acuerdo con lo anterior, 
          span.tblue #[b es importante y necesario que los pasos se realicen constantemente y de manera uniforme, eliminando así lo que no agrega valor al producto o a los procesos, contribuyendo con la optimización de los recursos y procesos de mejora permanentes, ] 
          span así como la validación de resultados desde las diferentes estrategias que permitan determinar los indicadores actuales del proceso y el tipo de datos necesarios, no extralimitar el registro de información, para establecer la estrategia de muestreo, eligiendo los procesos más relevantes para ser intervenidos y así validar los datos obtenidos empleando herramientas estratégicas funcionales.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img8.png', alt='')           

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Elaboración de encuestas
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img9.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-down")
        p.mb-0 La elaboración de encuestas se constituye en una herramienta habitual para recopilar información sobre los procesos que tienen relación con los clientes  internos y externos; de esta manera, se logra información veraz, que garantiza operar con exactitud, mejorar oportunamente los procesos y generar un compromiso con la estrategia definida por la empresa. Estas encuestas permiten la recolección de forma sistemática de la información en una muestra definida de los diferentes puntos de lectura en los procesos, empleando cuestionarios o matrices fáciles de tabular. 

    p(data-aos="fade-down").mb-5 En el siguiente esquema gráfico, se muestran las ventajas de usar este tipo de herramientas:

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img10.svg', alt='')

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Listas de chequeo 
    p(data-aos="fade-down").mb-5 Las listas de chequeo, conocidas como plantillas de inspección, 
      span.tblue #[b son diseñadas para reconocer la veracidad de actividades estandarizadas y novedosas que se implementan en procesos, procedimientos, políticas o estrategias. ] 
      span Las empresas buscan mantener niveles altos de confianza y así controlar el cumplimiento de una serie de requisitos importantes, por lo que llegan a recolectar datos de forma ordenada y sistemática para verificar la viabilidad de los procesos; su uso principal se direcciona en pro de la calidad del servicio para la empresa y los clientes.  

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-5(data-aos="fade-down")
        p.mb-0 La lista de chequeo está centrada en realizar una validación previa de los datos documentados, para precisar que los cambios que se realicen sean precisos, pero sin  margen de dificultad, para reducir la variación de los mismos en estos procesos.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        p(data-aos="fade-down") Es así que, en casos empresariales, se aplican listas convencionales de chequeo del proceso logístico y, sin lugar a dudas, se pueden obtener  resultados, al interior de los procedimientos, en condiciones suficientes y necesarias  para tomar  acciones que deberían  tener como efecto recentrar el comportamiento alineado del proceso logístico.
        .row.justify-content-evenly.align-items-center      
          .col-auto.d-none.d-lg-block.p-0.m-0
            img(data-aos="zoom-in")(src='@/assets/curso/temas/img13.svg', alt='')
          .col-9.p-0.m-0
            p(data-aos="fade-down").mb-0 Asegurar que los instrumentos de chequeo de datos fueron diseñados cien por ciento seguros y tienen la resolución correcta para blindar los procesos puede ser una falacia, pero sí alivian las cargas en la toma de decisiones, para crear más seguridad en la obtención de productos y servicios conformes.
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img12.png', alt='')

    p(data-aos="fade-down").mb-5 En atención a la resolución de las medidas que surjan de la elaboración de listas de chequeo, todas las personas utilizan el mismo procedimiento, el cual está direccionado a asegurar que los cambios a presentarse cubran correcta y positivamente tareas, actividades, procedimientos y procesos.
                    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
