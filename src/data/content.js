// src/data/content.js
// This file contains all the editable content for the website
// Non-technical users can edit this file to update the website content

export const siteContent = {
    // Header content
    header: {
      logo: "https://g4rb4sh.github.io/observatorio/logo.jpg", // Path to logo image
      title: "Observatorio MIEM",
      navigation: [
        { id: "home", label: "Inicio", url: "/" },
        { id: "about", label: "Sobre Nosotros", url: "/sobre-nosotros" },
        { id: "news", label: "Noticias", url: "/noticias" },
        { id: "indicators", label: "Indicadores", url: "/indicadores" },
        { id: "publications", label: "Publicaciones", url: "/publicaciones" },
        { id: "data", label: "Datos", url: "/datos" },
      ]
    },
    
    // Hero section content
    hero: {
      title: "Observatorio del Ministerio de Industria, Energía y Minería",
      subtitle: "Acceda a información relevante del sector industrial, energético y minero de Uruguay",
      ctaButton: "Explorar Datos",
      ctaUrl: "/datos",
      backgroundImage: "https://g4rb4sh.github.io/observatorio/hero-background.jpg", // Path to background image
    },
    
    // Key indicators section
    keyIndicators: {
      title: "Secciones Principales",
    //   description: "Aquí encontrará los principales indicadores del sector industrial, energético y minero de Uruguay",
      indicators: [
        {
          id: "ind1",
          title: "Principales Indicadores",
        //   value: "4.2%",
        //   trend: "up", // can be "up", "down", or "neutral"
          description: "Principales variables económicas, industriales, energéticas y tecnológicas de Uruguay",
          // icon: "trending_up", // Material icon name
          icon: "https://g4rb4sh.github.io/observatorio/icons/principales indicadores.jpg",
          color: "#4CAF50", // Color for this indicator
        },
        {
          id: "ind2",
          title: "Industria",
        //   value: "1,650 ktep",
        //   trend: "neutral",
          description: "Principales indicadores de industria",
          icon: "https://g4rb4sh.github.io/observatorio/icons/industria.jpeg",
          color: "#FFC107",
        },
        {
          id: "ind3",
          title: "Energia",
        //   value: "US$ 9.3 B",
        //   trend: "up",
          description: "Principales indicadores de energía",
          icon: "https://g4rb4sh.github.io/observatorio/icons/energia.png",
          color: "#2196F3",
        },
        {
          id: "ind4",
          title: "Tecnología",
        //   value: "154,000",
        //   trend: "down",
          description: "Principales indicadores de tecnología",
          icon: "https://g4rb4sh.github.io/observatorio/icons/tech.png",
          // color: "#FF5722",
        },
        {
            id: "ind5",
            title: "Mipymes",
          //   value: "154,000",
          //   trend: "down",
            description: "Principales indicadores de mipymes",
            icon: "https://g4rb4sh.github.io/observatorio/icons/Mipymes.png",
            color: "#FF5722",
          },
          {
            id: "ind6",
            title: "Mineria",
          //   value: "154,000",
          //   trend: "down",
            description: "Reporte de ODS",
            icon: "https://g4rb4sh.github.io/observatorio/icons/mineria.jpg",
            color: "#FF5722",
          },
          {
            id: "ind6",
            title: "ODS",
          //   value: "154,000",
          //   trend: "down",
            description: "Reporte de ODS",
            icon: "https://g4rb4sh.github.io/observatorio/icons/ods.jpeg",
            color: "#FF5722",
          },
      ]
    },
    
    // Featured reports section
    featuredReports: {
      title: "Informes Destacados",
      // description: "Consulte los últimos informes publicados por el Observatorio MIEM",
      viewAllLink: "/informes",
      reports: [
        {
          id: "rep1",
          title: "Informe Anual del Sector Industrial 2024",
          description: "Análisis completo del desempeño industrial en el último año",
          date: "2024-03-15",
          image: "https://g4rb4sh.github.io/observatorio/informes/eco-industria-web.jpg",
          url: "/informes/informe-anual-2024",
        },
        {
          id: "rep2",
          title: "Perspectivas Energéticas 2025-2030",
          description: "Proyecciones y tendencias del sector energético para los próximos 5 años",
          date: "2024-02-20",
          image: "https://g4rb4sh.github.io/observatorio/informes/_SL_20161031_029.jpg",
          url: "/informes/perspectivas-energeticas",
        },
        {
          id: "rep3",
          title: "Mi Casa Eficiente: un manual inteligente para ahorrar energía",
          description: "Evolución y comportamiento del sector minero en el primer trimestre",
          date: "2025-03-05",
          image: "https://g4rb4sh.github.io/observatorio/informes/casa-eficiente.png",
          url: "/informes/casa-eficiente",
        },
        // {
        //     id: "rep3",
        //     title: "Ejemplo",
        //     description: "Este es el nuevo",
        //     date: "2024-04-05",
        //     image: "/report-mining.jpg",
        //     url: "/informes/mercado-minero-q1",
        // },
      ]
    },
    
    // Data visualization section
    dataVisualization: {
      title: "Visualización de Datos",
      // description: "Explore nuestras visualizaciones interactivas de datos del sector",
      ctaButton: "Ver Todas las Visualizaciones",
      ctaUrl: "/visualizaciones",
      featured: [
        {
          id: "viz1",
          title: "Matriz Energética",
          description: "Composición y evolución de la matriz energética uruguaya",
          image: "https://g4rb4sh.github.io/observatorio/viz-energy-matrix.jpg",
          url: "/visualizaciones/matriz-energetica",
        },
        {
          id: "viz2",
          title: "Exportaciones por Sector",
          description: "Distribución de exportaciones industriales por sector económico",
          image: "https://g4rb4sh.github.io/observatorio/viz-exports.jpg",
          url: "/visualizaciones/exportaciones-sector",
        },
      ]
    },
    
    // Latest news section
    latestNews: {
      title: "Últimas Noticias",
      // description: "Manténgase al día con las novedades del sector",
      viewAllLink: "/noticias",
      news: [
        {
          id: "news1",
          title: "Red Uruguaya de Propiedad Intelectual invita a webinar por el Día Mundial de la Propiedad Intelectual",
          description: "En el marco de los festejos por el Día Mundial de la Propiedad Intelectual, que se celebra el 26 de abril, la Red Uruguaya de Propiedad Intelectual invita a participar del webinar La Propiedad Intelectual y la Industria de la Música.",
          date: "2025-04-11",
          image: "https://g4rb4sh.github.io/observatorio/noticias/Sin título_3.jpg",
          url: "/noticias/programa-pymes",
        },
        {
          id: "news2",
          title: "Ministra Cardona propuso generar una red de parques científico-tecnológicos para dar “un salto cualitativo”",
          description: "En el acto por la designación del Parque Tecnológico Industrial del Cerro (PTI) como parque científico-tecnológico, la ministra Fernanda Cardona dijo que estas instituciones —y la innovación en general— deben formar parte de una política pública “mancomunada” entre actores como el Estado —cuyo rol es protagónico—, el sector privado y la academia. Al respecto, dijo que una red de parques científico-tecnológicos es necesaria para articular la ciencia básica y la aplicada. “Tenemos el desarrollo institucional. Tenemos las capacidades. Tenemos que trabajar distinto”, afirmó la secretaria de Estado.",
          date: "2025-04-11",
          image: "https://g4rb4sh.github.io/observatorio/noticias/Ministra Cardona.png",
          url: "/noticias/record-renovables",
        },
        {
          id: "news3",
          title: "MIEM promueve construcción de estrategia comercial para grupo de apicultores fraccionadores de miel de Cerro Largo",
          description: "El área de Desarrollo Territorial de la Dirección Nacional de Artesanías (Dinapyme) del Ministerio de Industria, Energía y Minería (MIEM) promueve una consultoría destinada a apoyar a un grupo de apicultores fraccionadores de miel de Cerro Largo en temas de comercialización y marketing.",
          date: "2025-04-07",
          image: "https://g4rb4sh.github.io/observatorio/noticias/Construccion de estrategia comercial.png",
          url: "/noticias/exploracion-rivera",
        },
      ]
    },
    
    // Footer content
    footer: {
      logo: "/logo-white.png",
      description: "El Observatorio MIEM ofrece información actualizada y análisis sobre el sector industrial, energético y minero de Uruguay.",
      contactInfo: {
        address: "Rambla 25 de Agosto de 1825 s/n, Montevideo, Uruguay",
        phone: "+598 2000 1234",
        email: "observatorio@miem.gub.uy",
      },
      socialMedia: [
        { platform: "twitter", url: "https://twitter.com/MIEM_Uruguay" },
        { platform: "facebook", url: "https://facebook.com/MIEMUruguay" },
        { platform: "linkedin", url: "https://linkedin.com/company/miem-uruguay" },
        { platform: "youtube", url: "https://youtube.com/MIEMUruguay" },
      ],
      links: [
        {
          title: "Recursos",
          items: [
            { label: "Datos Abiertos", url: "/datos" },
            { label: "Publicaciones", url: "/publicaciones" },
            { label: "Metodología", url: "/metodologia" },
            { label: "Glosario", url: "/glosario" },
          ]
        },
        {
          title: "Institucional",
          items: [
            { label: "Sobre Nosotros", url: "/sobre-nosotros" },
            { label: "Equipo", url: "/equipo" },
            { label: "Contacto", url: "/contacto" },
            { label: "Preguntas Frecuentes", url: "/faq" },
          ]
        }
      ],
    //   copyright: `© ${new Date().getFullYear()} Ministerio de Industria, Energía y Minería - Gobierno de Uruguay. Todos los derechos reservados.`
        copyright: 'Web prototipo, no oficial',
    }
  };
  
  export default siteContent;