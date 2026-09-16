import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en', 'ar'],
    interpolation: { escapeValue: false },
    resources: {
      fr: {
        translation: {
          github: 'GitHub',
          nav: {
            accueil: 'Accueil',
            about: 'À propos',
            projets: 'Projets',
            contact: 'Contact',
            modeClair: 'Mode clair',
            modeSombre: 'Mode sombre'
          },
          hero: {
            badge: 'Ingénieure en Géoinformation',
            bonjour: 'Bonjour, je suis',
            titre: 'Étudiante Ingénieure en Géoinformation à la FSTT',
            description: "Élève ingénieure en Géoinformation à la FSTT, à la recherche d'un stage PFE, spécialisée en SIG, analyse spatiale, télédétection et développement d'applications géospatiales.",
            bouton: 'Voir mes projets',
            contactBtn: 'Me contacter',
            linkedinBtn: 'LinkedIn',
            scroll: 'DÉFILER',
            statProjets: 'Projets',
            statCertificats: 'Certificats',
            statLangues: 'Langues'
          },
          about: {
            label: 'À propos',
            heading: 'Profil professionnel',
            texte1: "Élève ingénieure en Géoinformation à la Faculté des Sciences et Techniques de Tanger (FSTT), à la recherche d'un stage PFE, spécialisée en géomatique et développement de solutions informatiques pour l'acquisition, l'analyse et la modélisation des données géospatiales.",
            texte2: "Actuellement ingénieure SIG au Conseil Régional Tanger-Tétouan-Al Hoceïma (TTA) dans le cadre d'un stage PFA, je conçois et mets en place l'ORVSIT, un observatoire géospatial pour le suivi, l'analyse et l'aide à la prise de décision des projets PDR de développement régional, en intégrant SIG, technologies web et bases de données spatiales.",
            texte3: "Intéressée par le domaine de la géomatique et le développement d'applications modernes, je cherche à combiner les technologies web et mobile avec les outils SIG.",
            competencesLabel: 'Compétences transversales',
            skills: ['Leadership', "Travail d'équipe", 'Communication', 'Gestion de projet', 'Club Géoinformation'],
            experienceLabel: 'Expérience',
            job1Title: 'Ingénieure SIG — Stage PFA',
            job1Place: 'Conseil Régional Tanger-Tétouan-Al Hoceïma (TTA) — depuis juillet 2026',
            job1Desc: "Conception et mise en place de l'ORVSIT (Observatoire Régional de la Veille Stratégique et de l'Intelligence Territoriale), un observatoire géospatial pour le suivi, l'analyse et l'aide à la prise de décision des projets PDR de développement régional.",
            job2Title: 'Ingénieure Géomètre Topographe',
            job2Place: "Agence Urbaine de Tétouan — Stage d'été 2025",
            labelUniversite: 'Université',
            valueUniversite: 'FSTT — Tanger, Maroc',
            labelFormation: 'Formation',
            valueFormation: 'Ingénierie Géoinformation',
            labelLocalisation: 'Localisation',
            valueLocalisation: 'Maroc',
            labelLangues: 'Langues',
            valueLangues: 'Arabe · Français · Anglais'
          },
          skills: {
            cat1: 'SIG & Télédétection',
            cat2: 'Programmation',
            cat3: 'Web Mapping',
            cat4: 'Bases de données',
            cat5: 'Outils & Desktop',
            cat6: 'Big Data'
          },
          certifications: {
            label: 'Certifications',
            heading: 'Formations & certificats',
            date1: 'Novembre 2025',
            date2: 'Décembre 2025',
            date3: 'Octobre 2025',
            date4: 'Mai 2025',
            date5: 'Mai 2025',
            date6: 'Septembre 2026'
          },
          technologies: {
            label: 'Technologies',
            heading: 'Outils & Technologies'
          },
          projects: {
            label: 'Projets',
            heading: 'Réalisations professionnelles',
            filterAll: 'Tous',
            catWebsig: 'WebSIG',
            catTeledetection: 'Télédétection',
            catAnalyse: 'Analyse spatiale',
            catGeodesie: 'Géodésie',
            catDev: 'Développement',
            imageSoon: 'Image à venir',
            imageCaption: "Capture d'écran du projet",
            githubLink: 'Voir sur GitHub',
            p1Desc: "Développement d'un plugin QGIS pour le téléchargement automatique d'images Optique/Radar et le calcul d'indices de télédétection.",
            p2Desc: "Développement d'un WebSIG pour la visualisation et l'exploration des cartes thématiques de la région.",
            p3Desc: "Application d'analyse de données sur le cancer du pancréas au Maroc : recherche de patients par ID, comparaison de facteurs de risque et carte de localisation pour les villes de Rabat, Marrakech et Meknès.",
            p4Desc: "Interface graphique dédiée aux calculs géodésiques : distances, coordonnées et transformations.",
            p5Desc: "Plateforme web cartographique de réservation pour la Coupe d'Afrique des Nations 2025 avec localisation des stades.",
            p6Desc: "Suivi de l'expansion urbaine du Grand Tanger entre 2017 et 2026 par classification Random Forest sur imagerie satellite Sentinel-2, dans le cadre d'un mini-projet Géo-IA et Big Data.",
            p8Desc: "Réseau social avec découverte géospatiale : publications à proximité, carte interactive, messagerie privée et notifications, propulsé par Django et PostGIS.",
            p9Desc: "Plateforme web de gestion de projet : suivi des tâches, organisation d'équipe et tableaux de bord collaboratifs.",
            p10Desc: "Marketplace e-commerce full-stack multi-catégories avec panier, paiement PayPal et gestion des commandes."
          },
          contact: {
            label: 'Contact',
            heading: 'Prendre contact',
            intro: "Ouverte aux collaborations académiques et aux projets liés à la géoinformation et au développement d'applications géospatiales.",
            labelLocalisation: 'Localisation',
            valueLocalisation: 'Maroc',
            labelLinkedin: 'LinkedIn',
            labelGithub: 'GitHub',
            nom: 'Nom',
            email: 'Email',
            message: 'Message',
            placeholderNom: 'Votre nom complet',
            placeholderEmail: 'votre@email.com',
            placeholderMessage: "Décrivez votre projet ou votre demande...",
            bouton: 'Envoyer le message',
            sending: 'Envoi en cours...',
            success: 'Message envoyé avec succès ✓',
            error: 'Erreur — Réessayez'
          },
          footer: {
            role: 'Ingénieure en Géoinformation — FSTT Tanger',
            rights: '© 2025 EL QASEMY Niamat · Tous droits réservés'
          }
        }
      },
      en: {
        translation: {
          github: 'GitHub',
          nav: {
            accueil: 'Home',
            about: 'About',
            projets: 'Projects',
            contact: 'Contact',
            modeClair: 'Light mode',
            modeSombre: 'Dark mode'
          },
          hero: {
            badge: 'Geoinformation Engineer',
            bonjour: 'Hello, I am',
            titre: 'Geoinformation Engineering Student at FSTT',
            description: 'Geoinformation Engineering trainee at FSTT, currently looking for a final-year internship (PFE), specialized in GIS, spatial analysis, remote sensing and geospatial application development.',
            bouton: 'See my projects',
            contactBtn: 'Contact me',
            linkedinBtn: 'LinkedIn',
            scroll: 'SCROLL',
            statProjets: 'Projects',
            statCertificats: 'Certificates',
            statLangues: 'Languages'
          },
          about: {
            label: 'About',
            heading: 'Professional profile',
            texte1: 'Geoinformation Engineering trainee at the Faculty of Sciences and Techniques of Tangier (FSTT), currently looking for a final-year internship (PFE), specialized in geomatics and the development of software solutions for the acquisition, analysis and modeling of geospatial data.',
            texte2: 'Currently a GIS Engineer at the Tangier-Tetouan-Al Hoceima Regional Council (TTA) as part of a PFA internship, I design and implement the ORVSIT, a geospatial observatory for monitoring, analyzing and supporting decision-making on PDR regional development projects, integrating GIS, web technologies and spatial databases.',
            texte3: 'Interested in the field of geomatics and modern application development, I aim to combine web and mobile technologies with GIS tools.',
            competencesLabel: 'Transversal skills',
            skills: ['Leadership', 'Teamwork', 'Communication', 'Project management', 'Geoinformation Club'],
            experienceLabel: 'Experience',
            job1Title: 'GIS Engineer — PFA Internship',
            job1Place: 'Tangier-Tetouan-Al Hoceima Regional Council (TTA) — since July 2026',
            job1Desc: 'Design and implementation of the ORVSIT (Regional Observatory for Strategic Watch and Territorial Intelligence), a geospatial observatory for monitoring, analyzing and supporting decision-making on PDR regional development projects.',
            job2Title: 'Surveying Engineer',
            job2Place: 'Urban Agency of Tetouan — Summer internship 2025',
            labelUniversite: 'University',
            valueUniversite: 'FSTT — Tangier, Morocco',
            labelFormation: 'Program',
            valueFormation: 'Geoinformation Engineering',
            labelLocalisation: 'Location',
            valueLocalisation: 'Morocco',
            labelLangues: 'Languages',
            valueLangues: 'Arabic · French · English'
          },
          skills: {
            cat1: 'GIS & Remote Sensing',
            cat2: 'Programming',
            cat3: 'Web Mapping',
            cat4: 'Databases',
            cat5: 'Tools & Desktop',
            cat6: 'Big Data'
          },
          certifications: {
            label: 'Certifications',
            heading: 'Training & Certificates',
            date1: 'November 2025',
            date2: 'December 2025',
            date3: 'October 2025',
            date4: 'May 2025',
            date5: 'May 2025',
            date6: 'September 2026'
          },
          technologies: {
            label: 'Technologies',
            heading: 'Tools & Technologies'
          },
          projects: {
            label: 'Projects',
            heading: 'Professional work',
            filterAll: 'All',
            catWebsig: 'WebGIS',
            catTeledetection: 'Remote Sensing',
            catAnalyse: 'Spatial Analysis',
            catGeodesie: 'Geodesy',
            catDev: 'Development',
            imageSoon: 'Image coming soon',
            imageCaption: 'Project screenshot',
            githubLink: 'View on GitHub',
            p1Desc: 'Development of a QGIS plugin for automatic download of Optical/Radar imagery and computation of remote sensing indices.',
            p2Desc: 'Development of a WebGIS for visualizing and exploring thematic maps of the region.',
            p3Desc: 'Data analysis application for pancreatic cancer in Morocco: patient lookup by ID, comparison of risk factors and a location map for the cities of Rabat, Marrakech and Meknes.',
            p4Desc: 'Graphical interface dedicated to geodetic calculations: distances, coordinates and transformations.',
            p5Desc: 'Web mapping reservation platform for the 2025 Africa Cup of Nations with stadium locations.',
            p6Desc: 'Monitoring urban expansion of Greater Tangier between 2017 and 2026 using Random Forest classification on Sentinel-2 satellite imagery, as part of a Geo-AI and Big Data mini-project.',
            p8Desc: 'Social media platform with geospatial discovery: nearby posts, an interactive map, private messaging and notifications, powered by Django and PostGIS.',
            p9Desc: 'Web-based project management platform: task tracking, team organization and collaborative dashboards.',
            p10Desc: 'Full-stack multi-category e-commerce marketplace with shopping cart, PayPal checkout and order management.'
          },
          contact: {
            label: 'Contact',
            heading: 'Get in touch',
            intro: 'Open to academic collaborations and projects related to geoinformation and geospatial application development.',
            labelLocalisation: 'Location',
            valueLocalisation: 'Morocco',
            labelLinkedin: 'LinkedIn',
            labelGithub: 'GitHub',
            nom: 'Name',
            email: 'Email',
            message: 'Message',
            placeholderNom: 'Your full name',
            placeholderEmail: 'your@email.com',
            placeholderMessage: 'Describe your project or request...',
            bouton: 'Send message',
            sending: 'Sending...',
            success: 'Message sent successfully ✓',
            error: 'Error — Try again'
          },
          footer: {
            role: 'Geoinformation Engineer — FSTT Tangier',
            rights: '© 2025 EL QASEMY Niamat · All rights reserved'
          }
        }
      },
      ar: {
        translation: {
          github: 'GitHub',
          nav: {
            accueil: 'الرئيسية',
            about: 'من أنا',
            projets: 'المشاريع',
            contact: 'اتصل بي',
            modeClair: 'الوضع الفاتح',
            modeSombre: 'الوضع الداكن'
          },
          hero: {
            badge: 'مهندسة معلومات جغرافية',
            bonjour: 'مرحباً، أنا',
            titre: 'طالبة هندسة المعلومات الجغرافية في FSTT',
            description: 'طالبة مهندسة متدربة في المعلومات الجغرافية بكلية العلوم والتقنيات بطنجة (FSTT)، تبحث حالياً عن تدريب نهاية الدراسات (PFE)، متخصصة في نظم المعلومات الجغرافية والتحليل المكاني والاستشعار عن بعد وتطوير التطبيقات الجغرافية المكانية.',
            bouton: 'اكتشف مشاريعي',
            contactBtn: 'تواصل معي',
            linkedinBtn: 'لينكدإن',
            scroll: 'مرر للأسفل',
            statProjets: 'مشاريع',
            statCertificats: 'شهادات',
            statLangues: 'لغات'
          },
          about: {
            label: 'من أنا',
            heading: 'الملف المهني',
            texte1: 'طالبة مهندسة متدربة في المعلومات الجغرافية بكلية العلوم والتقنيات بطنجة (FSTT)، تبحث حالياً عن تدريب نهاية الدراسات (PFE)، متخصصة في الجيوماتيك وتطوير حلول برمجية لجمع البيانات الجغرافية المكانية وتحليلها ونمذجتها.',
            texte2: 'أعمل حالياً كمهندسة نظم معلومات جغرافية بالمجلس الجهوي لطنجة تطوان الحسيمة (TTA) في إطار تدريب PFA، حيث أقوم بتصميم وإرساء ORVSIT، وهو مرصد جغرافي مكاني لمتابعة وتحليل مشاريع البرنامج التنموي الجهوي (PDR) ودعم اتخاذ القرار بشأنها، من خلال دمج نظم المعلومات الجغرافية وتقنيات الويب وقواعد البيانات المكانية.',
            texte3: 'مهتمة بمجال الجيوماتيك وتطوير التطبيقات الحديثة، أسعى إلى الجمع بين تقنيات الويب والموبايل وأدوات نظم المعلومات الجغرافية.',
            competencesLabel: 'مهارات شخصية',
            skills: ['القيادة', 'العمل الجماعي', 'التواصل', 'إدارة المشاريع', 'نادي المعلومات الجغرافية'],
            experienceLabel: 'الخبرة المهنية',
            job1Title: 'مهندسة نظم معلومات جغرافية — تدريب PFA',
            job1Place: 'المجلس الجهوي لطنجة تطوان الحسيمة (TTA) — منذ يوليوز 2026',
            job1Desc: 'تصميم وإرساء ORVSIT (المرصد الجهوي لليقظة الاستراتيجية والذكاء الترابي)، وهو مرصد جغرافي مكاني لمتابعة وتحليل مشاريع البرنامج التنموي الجهوي (PDR) ودعم اتخاذ القرار بشأنها.',
            job2Title: 'مهندسة طوبوغرافية',
            job2Place: 'الوكالة الحضرية لتطوان — تدريب صيفي 2025',
            labelUniversite: 'الجامعة',
            valueUniversite: 'FSTT — طنجة، المغرب',
            labelFormation: 'التكوين',
            valueFormation: 'هندسة المعلومات الجغرافية',
            labelLocalisation: 'الموقع',
            valueLocalisation: 'المغرب',
            labelLangues: 'اللغات',
            valueLangues: 'العربية · الفرنسية · الإنجليزية'
          },
          skills: {
            cat1: 'نظم المعلومات الجغرافية والاستشعار عن بعد',
            cat2: 'البرمجة',
            cat3: 'خرائط الويب',
            cat4: 'قواعد البيانات',
            cat5: 'الأدوات وتطبيقات سطح المكتب',
            cat6: 'البيانات الضخمة'
          },
          certifications: {
            label: 'الشهادات',
            heading: 'التكوينات والشهادات',
            date1: 'نونبر 2025',
            date2: 'دجنبر 2025',
            date3: 'أكتوبر 2025',
            date4: 'ماي 2025',
            date5: 'ماي 2025',
            date6: 'شتنبر 2026'
          },
          technologies: {
            label: 'التقنيات',
            heading: 'الأدوات والتقنيات'
          },
          projects: {
            label: 'المشاريع',
            heading: 'إنجازات مهنية',
            filterAll: 'الكل',
            catWebsig: 'ويب جغرافي',
            catTeledetection: 'الاستشعار عن بعد',
            catAnalyse: 'تحليل مكاني',
            catGeodesie: 'الجيوديزيا',
            catDev: 'التطوير',
            imageSoon: 'الصورة قريباً',
            imageCaption: 'لقطة شاشة للمشروع',
            githubLink: 'عرض على GitHub',
            p1Desc: 'تطوير إضافة QGIS للتحميل التلقائي لصور بصرية/رادارية وحساب مؤشرات الاستشعار عن بعد.',
            p2Desc: 'تطوير منصة ويب جغرافية لعرض واستكشاف الخرائط الموضوعاتية للجهة.',
            p3Desc: 'تطبيق لتحليل بيانات سرطان البنكرياس بالمغرب: البحث عن المرضى بواسطة المعرف، مقارنة عوامل الخطر وخريطة لمواقع مدن الرباط ومراكش ومكناس.',
            p4Desc: 'واجهة رسومية مخصصة للحسابات الجيوديزية: المسافات والإحداثيات والتحويلات.',
            p5Desc: 'منصة ويب جغرافية للحجز الخاصة بكأس أمم أفريقيا 2025 مع تحديد مواقع الملاعب.',
            p6Desc: 'رصد التوسع العمراني لجهة طنجة الكبرى بين 2017 و2026 باستخدام تصنيف الغابة العشوائية (Random Forest) على صور الأقمار الصناعية Sentinel-2، في إطار مشروع مصغر في الذكاء الاصطناعي الجغرافي والبيانات الضخمة.',
            p8Desc: 'منصة تواصل اجتماعي مع اكتشاف جغرافي: منشورات قريبة، خريطة تفاعلية، رسائل خاصة وإشعارات، مبنية بـ Django وPostGIS.',
            p9Desc: 'منصة ويب لإدارة المشاريع: تتبع المهام، تنظيم الفريق ولوحات تحكم تعاونية.',
            p10Desc: 'متجر إلكتروني متعدد الفئات متكامل مع سلة تسوق، دفع عبر PayPal وإدارة الطلبات.'
          },
          contact: {
            label: 'اتصل بي',
            heading: 'تواصل معي',
            intro: 'منفتحة على التعاون الأكاديمي والمشاريع المرتبطة بالمعلومات الجغرافية وتطوير التطبيقات الجغرافية المكانية.',
            labelLocalisation: 'الموقع',
            valueLocalisation: 'المغرب',
            labelLinkedin: 'لينكدإن',
            labelGithub: 'GitHub',
            nom: 'الاسم',
            email: 'البريد الإلكتروني',
            message: 'الرسالة',
            placeholderNom: 'اسمك الكامل',
            placeholderEmail: 'بريدك@الإلكتروني.com',
            placeholderMessage: 'صف مشروعك أو طلبك...',
            bouton: 'إرسال الرسالة',
            sending: 'جاري الإرسال...',
            success: 'تم إرسال الرسالة بنجاح ✓',
            error: 'خطأ — حاول مرة أخرى'
          },
          footer: {
            role: 'مهندسة معلومات جغرافية — FSTT طنجة',
            rights: '© 2025 نعمت القاسمي · جميع الحقوق محفوظة'
          }
        }
      }
    }
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
})

export default i18n
