import { useEffect, useMemo, useState } from 'react'
import oscilloscope from './assets/oscilloscope.jpg'
import chromatographFeature from './assets/chromatograph-feature.jpg'
import chromatograph from './assets/chromatograph.png'
import vibro from './assets/vibro.jpg'
import defectoscope from './assets/defectoscope.png'
import lisa from './assets/lisa.jpg'
import maes from './assets/maes.png'
import spectro from './assets/spectro.jpg'

import oscCalibrator from './assets/cases/osc-calibrator.png'
import oscLab from './assets/cases/osc-lab.jpg'
import chrom3d from './assets/cases/chrom-3d.jpg'
import chromTheory from './assets/cases/chrom-theory.jpg'
import chromChromatogram from './assets/cases/chrom-chromatogram.jpg'
import chromGases from './assets/cases/chrom-gases.jpg'
import chromDetectors from './assets/cases/chrom-detectors.jpg'
import vibroLab from './assets/cases/vibro-lab.jpg'
import vibroComponents from './assets/cases/vibro-components.png'
import defLab from './assets/cases/def-lab.jpg'
import defDevice from './assets/cases/def-device.png'
import lisaDetail from './assets/cases/lisa-detail.png'
import lisaLab from './assets/cases/lisa-lab.jpg'
import spekLab from './assets/cases/spek-lab.jpg'
import spekUnit from './assets/cases/spek-unit.png'
import spekDevice from './assets/cases/spek-device.png'
import maesLab from './assets/cases/maes-lab.png'

type GalleryItem = {
  src: string
  title: string
  caption: string
}

type Project = {
  id: string
  title: string
  short: string
  image: string
  tags: string[]
  role: string
  goal: string
  features: string[]
  flow: string[]
  technologies: string[]
  format: string
  authoring: string
  lms: string
  result: string
  gallery: GalleryItem[]
}

const projects: Project[] = [
  {
    id: 'oscilloscope',
    title: 'Поверка осциллографа АКИП 4115/4А',
    short: 'Интерактивный курс для изучения и практической отработки процедуры поверки цифрового осциллографа.',
    image: oscilloscope,
    tags: ['3D', 'Протокол', 'JavaScript'],
    role: 'Создавала технические 3D-модели оборудования, программировала логику тренажера в Verge3D, собирала курс и практические задания в CourseLab, готовила SCORM-пакет и размещала готовый курс в Moodle.',
    goal: 'Перенести последовательность поверки в безопасную виртуальную среду, чтобы слушатель мог изучить оборудование, пройти подготовительные операции и отработать процедуру до работы с реальными приборами.',
    features: [
      'Интерактивное изучение элементов калибратора',
      'Практическое задание по внешнему осмотру',
      'Виртуальная поверка осциллографа в 3D',
      'Электронный протокол с расчетами на JavaScript',
      'Итоговое тестирование из 10 вопросов',
    ],
    flow: ['Теория', 'Органы управления', 'Внешний осмотр', '3D-поверка', 'Протокол', 'Тестирование'],
    technologies: ['Blender', 'Verge3D', 'CourseLab', 'SCORM 1.2', 'HTML', 'CSS', 'JavaScript', 'Moodle'],
    format: 'SCORM 1.2',
    authoring: 'CourseLab + Verge3D',
    lms: 'Moodle',
    result: 'Готовый интерактивный курс объединяет теорию, практические задания, 3D-тренажер, обработку результатов и контроль знаний в одном учебном сценарии.',
    gallery: [
      { src: oscilloscope, title: 'Виртуальная поверка', caption: 'Работа с моделями осциллографа и калибратора в интерактивной среде.' },
      { src: oscCalibrator, title: 'Изучение оборудования', caption: 'Модель калибратора используется в подготовительном практическом задании.' },
      { src: oscLab, title: 'Рабочая сцена', caption: 'Виртуальное рабочее место для практической части курса.' },
    ],
  },
  {
    id: 'chromatograph',
    title: 'Газовый хроматограф',
    short: 'Устройство, принцип работы и поверка. Практические задания по хроматограммам, газам-носителям и детекторам.',
    image: chromatographFeature,
    tags: ['Теория', '3D', '7 заданий'],
    role: 'Создавала технические 3D-модели и интерактивные сцены, программировала логику в Verge3D, реализовывала практические задания и навигацию в CourseLab, экспортировала курс в SCORM и размещала его в Moodle.',
    goal: 'Сделать сложную тему газовой хроматографии наглядной: показать устройство прибора, объяснить этапы разделения веществ и закрепить материал через разные типы интерактивных заданий.',
    features: [
      'Интерактивное изучение узлов хроматографа',
      'Визуализация принципа работы прибора',
      'Задания по чтению и анализу хроматограмм',
      'Работа с газами-носителями и типами детекторов',
      'Отдельный интерактивный модуль поверки',
    ],
    flow: ['Теория', 'Устройство', 'Принцип работы', '7 практических заданий', 'Поверка'],
    technologies: ['Blender', 'Verge3D', 'CourseLab', 'SCORM 1.2', 'HTML', 'CSS', 'JavaScript', 'Moodle'],
    format: 'SCORM 1.2',
    authoring: 'CourseLab + Verge3D',
    lms: 'Moodle',
    result: 'Курс сочетает техническую теорию, визуализацию процессов и семь практических заданий, поэтому показывает не только процедуру работы, но и понимание физико-химических основ анализа.',
    gallery: [
      { src: chromatographFeature, title: '3D-модель хроматографа', caption: 'Виртуальный прибор используется как центральный объект учебного сценария.' },
      { src: chromatograph, title: 'Интерактивная сцена', caption: 'Визуальное знакомство с оборудованием перед выполнением заданий.' },
      { src: chromChromatogram, title: 'Работа с хроматограммой', caption: 'Интерактивное распознавание параметров и участков хроматограммы.' },
      { src: chromGases, title: 'Газы-носители', caption: 'Задание на сопоставление газов, характеристик и областей применения.' },
      { src: chromDetectors, title: 'Типы детекторов', caption: 'Практическое задание на распознавание детекторов и их назначения.' },
      { src: chromTheory, title: 'Изменение параметров', caption: 'Наглядная работа с изменениями формы хроматографических пиков.' },
      { src: chrom3d, title: 'Модель оборудования', caption: 'Один из экранов трехмерной части курса.' },
    ],
  },
  {
    id: 'vibro',
    title: 'Поверка вибропреобразователя АР2037-10',
    short: 'Условия эксплуатации, состав установки, внешний осмотр, виртуальная поверка и работа с протоколом.',
    image: vibro,
    tags: ['3D', 'Практика', 'Тестирование'],
    role: 'Создавала 3D-модели датчика и поверочной установки, программировала интерактивную логику, собирала практические задания в CourseLab, экспортировала SCORM и размещала курс в Moodle.',
    goal: 'Выстроить последовательную подготовку к поверке: от понимания условий применения и состава установки до внешнего осмотра, выполнения операций и работы с результатами.',
    features: [
      'Задание по условиям применения прибора',
      'Изучение состава виброустановки DVC-500',
      'Практика внешнего осмотра',
      'Интерактивная 3D-поверка',
      'Работа с данными протокола и итоговый тест',
    ],
    flow: ['Условия', 'Состав установки', 'Осмотр', '3D-поверка', 'Протокол', 'Тест'],
    technologies: ['Blender', 'Verge3D', 'CourseLab', 'SCORM 1.2', 'Moodle'],
    format: 'SCORM 1.2',
    authoring: 'CourseLab + Verge3D',
    lms: 'Moodle',
    result: 'Курс проводит пользователя через четыре последовательных практических этапа и заканчивается проверкой результатов поверки и итоговым контролем знаний.',
    gallery: [
      { src: vibro, title: 'Виртуальная поверка', caption: 'Интерактивная работа с моделью вибропреобразователя и поверочной установки.' },
      { src: vibroLab, title: 'Поверочная установка', caption: 'Виртуальная рабочая сцена с оборудованием, задействованным в процедуре.' },
      { src: vibroComponents, title: 'Состав установки', caption: 'Набор элементов для задания на распознавание и правильное расположение компонентов.' },
    ],
  },
  {
    id: 'defectoscope',
    title: 'Поверка дефектоскопа УД2-70',
    short: 'Изучение органов управления, условий эксплуатации, внешний осмотр, 3D-тренажер и ввод результатов поверки.',
    image: defectoscope,
    tags: ['3D', 'Практика', 'Протокол'],
    role: 'Создавала 3D-модели, программировала интерактивную логику в Verge3D, разрабатывала курс и практические задания в CourseLab, готовила SCORM и размещала курс в Moodle.',
    goal: 'Дать слушателю возможность поэтапно изучить дефектоскоп, требования к его эксплуатации и последовательность поверки до работы с реальным средством измерений.',
    features: [
      'Изучение клавиш и органов управления',
      'Задание по эксплуатационным параметрам',
      'Внешний осмотр прибора',
      '3D-тренажер процедуры поверки',
      'Ввод результатов поверки и тестирование',
    ],
    flow: ['Клавиши', 'Условия', 'Осмотр', '3D-поверка', 'Результаты', 'Тест'],
    technologies: ['Blender', 'Verge3D', 'CourseLab', 'SCORM 1.2', 'Moodle'],
    format: 'SCORM 1.2',
    authoring: 'CourseLab + Verge3D',
    lms: 'Moodle',
    result: 'Учебный сценарий объединяет знакомство с прибором, несколько видов практики и виртуальное выполнение поверки с фиксацией результатов.',
    gallery: [
      { src: defectoscope, title: 'Дефектоскоп УД2-70', caption: 'Основная модель прибора для интерактивных заданий курса.' },
      { src: defDevice, title: 'Органы управления', caption: 'Модель передней панели используется для изучения клавиш и элементов интерфейса.' },
      { src: defLab, title: 'Виртуальная лаборатория', caption: 'Рабочая сцена для практической части и поверки оборудования.' },
    ],
  },
  {
    id: 'lisa',
    title: 'ЭлМетро-ЛИЗА — поверка рулетки Р5Н2К',
    short: 'Изучение состава установки, условий эксплуатации, внешний осмотр и виртуальная поверка средства измерений длины.',
    image: lisa,
    tags: ['3D', 'Измерения', 'SCORM'],
    role: 'Моделировала элементы установки, программировала интерактивы в Verge3D, собирала CourseLab-модуль, экспортировала SCORM и размещала готовый курс в Moodle.',
    goal: 'Перенести работу с установкой для поверки рулеток в виртуальную среду и дать слушателю возможность изучить состав оборудования и последовательность действий.',
    features: [
      'Изучение состава установки',
      'Контроль условий эксплуатации',
      'Практика внешнего осмотра',
      'Виртуальная поверка рулетки Р5Н2К',
      'Формат SCORM для LMS',
    ],
    flow: ['Установка', 'Условия', 'Осмотр', 'Виртуальная поверка', 'Контроль'],
    technologies: ['Blender', 'Verge3D', 'CourseLab', 'SCORM 1.2', 'Moodle'],
    format: 'SCORM 1.2',
    authoring: 'CourseLab + Verge3D',
    lms: 'Moodle',
    result: 'Проект показывает работу с другим классом измерительного оборудования и расширяет портфолио за пределы электрических и аналитических приборов.',
    gallery: [
      { src: lisa, title: 'Установка ЭлМетро-ЛИЗА', caption: 'Интерактивная модель установки для поверки средств измерений длины.' },
      { src: lisaLab, title: 'Рабочая сцена', caption: 'Виртуальное рабочее место с элементами установки и измерительной системой.' },
      { src: lisaDetail, title: 'Деталь механизма', caption: 'Один из технических узлов установки, подготовленный для интерактивной работы.' },
    ],
  },
]

const extraProjects: Project[] = [
  {
    id: 'maes',
    title: 'Комплекс атомно-эмиссионного спектрального анализа МАЭС',
    short: 'Спектроаналитическая таблица, подготовка пробы, работа с оборудованием и итоговое тестирование.',
    image: maes,
    tags: ['Теория', 'Практика', '3D'],
    role: 'Создавала 3D-модели, интерактивные Verge3D-модули, собирала курс и тестирование в CourseLab, экспортировала SCORM и размещала его в Moodle.',
    goal: 'Объединить справочные материалы по атомно-эмиссионному анализу с практикой подготовки пробы и работы с оборудованием.',
    features: [
      'Теоретические материалы и техническая документация',
      'Интерактивная спектроаналитическая таблица',
      'Практика подготовки пробы',
      'Интерактивная работа с оборудованием',
      'Итоговый тест',
    ],
    flow: ['Теория', 'Таблица', 'Подготовка пробы', 'Работа прибора', 'Тест'],
    technologies: ['Blender', 'Verge3D', 'CourseLab', 'SCORM 1.2', 'Moodle'],
    format: 'SCORM 1.2',
    authoring: 'CourseLab + Verge3D',
    lms: 'Moodle',
    result: 'Комплексный учебный модуль сочетает справочную часть, интерактивные материалы и практические действия с виртуальным оборудованием.',
    gallery: [
      { src: maes, title: 'Комплекс МАЭС', caption: 'Виртуальная модель комплекса атомно-эмиссионного спектрального анализа.' },
      { src: maesLab, title: 'Практическая сцена', caption: 'Интерактивная сцена для изучения работы оборудования и выполнения практики.' },
    ],
  },
  {
    id: 'spectro',
    title: 'Поверка спектрофотометра СФФ-2 «Флуоран»',
    short: 'Внешний осмотр, виртуальная поверка, работа с данными протокола и тестирование.',
    image: spectro,
    tags: ['3D', 'Протокол', 'Тестирование'],
    role: 'Создавала 3D-модели и логику тренажера в Verge3D, разрабатывала CourseLab-модуль, готовила SCORM и загружала готовый курс в Moodle.',
    goal: 'Сформировать последовательный практический сценарий поверки спектрофотометра: от изучения документации и внешнего осмотра до виртуальной процедуры и анализа результатов.',
    features: [
      'Техническая документация внутри курса',
      'Практическое задание по внешнему осмотру',
      'Интерактивный 3D-тренажер поверки',
      'Работа с данными протокола',
      'Итоговое тестирование из 10 вопросов',
    ],
    flow: ['Теория', 'Осмотр', '3D-поверка', 'Протокол', 'Тест'],
    technologies: ['Blender', 'Verge3D', 'CourseLab', 'SCORM 1.2', 'Moodle'],
    format: 'SCORM 1.2',
    authoring: 'CourseLab + Verge3D',
    lms: 'Moodle',
    result: 'Курс объединяет изучение требований к прибору, практику внешнего осмотра, виртуальную поверку и контроль результатов.',
    gallery: [
      { src: spectro, title: 'СФФ-2 «Флуоран»', caption: 'Основная модель прибора в электронном курсе.' },
      { src: spekLab, title: 'Виртуальная лаборатория', caption: 'Рабочая сцена для выполнения практических операций.' },
      { src: spekDevice, title: 'Модель спектрофотометра', caption: 'Техническая 3D-модель прибора для интерактивного тренажера.' },
      { src: spekUnit, title: 'Элемент оборудования', caption: 'Отдельный технический объект из учебного сценария.' },
    ],
  },
]

const allProjects = [...projects, ...extraProjects]

const Icon = ({ name }: { name: 'cube' | 'code' | 'course' | 'cloud' | 'mail' | 'arrow' | 'download' | 'book' | 'check' | 'back' }) => {
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (name === 'cube') return <svg {...common}><path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Z"/><path d="m4.4 6.7 7.6 4.2 7.6-4.2M12 11v9"/></svg>
  if (name === 'code') return <svg {...common}><path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M14 4l-4 16"/></svg>
  if (name === 'course') return <svg {...common}><rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/></svg>
  if (name === 'book') return <svg {...common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></svg>
  if (name === 'cloud') return <svg {...common}><path d="M7 18a4 4 0 0 1-.8-7.9A6 6 0 0 1 17.4 8a5 5 0 0 1-.4 10H7Z"/><path d="m9 13 3-3 3 3M12 10v7"/></svg>
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  if (name === 'download') return <svg {...common}><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 19h16"/></svg>
  if (name === 'check') return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>
  if (name === 'back') return <svg {...common}><path d="M19 12H5M10 7l-5 5 5 5"/></svg>
  return <svg {...common}><path d="M5 12h14M14 7l5 5-5 5"/></svg>
}

const navItems = [
  { id: 'top', label: 'Главная' },
  { id: 'about', label: 'Обо мне' },
  { id: 'skills', label: 'Навыки' },
  { id: 'projects', label: 'Проекты' },
  { id: 'contact', label: 'Контакты' },
]

function App() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(null)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  useEffect(() => {
    const updateActiveSection = () => {
      let current = 'top'
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element && element.getBoundingClientRect().top <= 150) current = item.id
      }
      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const selectedNumber = useMemo(() => {
    if (!selected) return ''
    const index = allProjects.findIndex(project => project.id === selected.id)
    return String(index + 1).padStart(2, '0')
  }, [selected])

  const closeCase = () => setSelected(null)

  return (
    <div className="site-shell">
      <header className={`topbar ${menuOpen ? 'menu-open' : ''}`}>
        <a className="brand" href="#top" aria-label="На главную" onClick={() => setMenuOpen(false)}>
          <strong>Марина</strong>
          <span>e-learning developer</span>
        </a>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} id="site-nav" aria-label="Основная навигация">
          {navItems.map(item => (
            <a
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <a
            className="top-download"
            href="/portfolio.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="download" /> <span>PDF-портфолио</span>
          </a>
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-controls="site-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(value => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="hero-meta"><span>FULL CYCLE</span><span>3D · E-LEARNING · LMS</span></div>
            <p className="eyebrow">ТЕХНИЧЕСКОЕ ОБУЧЕНИЕ — РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ</p>
            <h1>Интерактивные<br/>электронные курсы<br/><em>и 3D-тренажеры</em></h1>
            <p className="hero-lead">Разрабатываю технические e-learning продукты полного цикла: 3D-моделирование → интерактивная логика → электронный курс → SCORM → Moodle.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">Смотреть проекты <Icon name="arrow" /></a>
              <a
                className="btn ghost"
                href="/portfolio.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="download" /> Скачать PDF-портфолио
              </a>            </div>
            <div className="tech-row" aria-label="Технологии">
              {['Blender','Verge3D','CourseLab','SCORM','Moodle','HTML','CSS','JavaScript'].map((item, i) => (
                <span className="tech-chip" key={item}><b>{['◈','◇','CL','▱','M','5','3','JS'][i]}</b>{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Коллаж технического оборудования">
            <div className="blueprint-grid" />
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-label"><span>ЗНАНИЯ</span><span>ТЕХНОЛОГИИ</span><span>ПРАКТИКА</span></div>
            <figure className="visual-card visual-main">
              <img src={oscilloscope} alt="Виртуальная лаборатория с осциллографом и калибратором" />
              <figcaption><b>01</b><span>Осциллограф АКИП 4115/4А</span></figcaption>
            </figure>
            <figure className="visual-card visual-small visual-a">
              <img src={maes} alt="Виртуальная модель комплекса МАЭС" />
              <figcaption><b>02</b><span>Комплекс МАЭС</span></figcaption>
            </figure>
            <figure className="visual-card visual-small visual-b">
              <img src={chromatographFeature} alt="Виртуальная модель газового хроматографа" />
              <figcaption><b>03</b><span>Газовый хроматограф</span></figcaption>
            </figure>
            <div className="hero-pipeline" aria-label="Этапы разработки">
              <span>Blender</span><b>→</b><span>Verge3D</span><b>→</b><span>CourseLab</span><b>→</b><span>Moodle</span>
            </div>
            <p className="hand-note">Технологии<br/>для профессионального роста</p>
          </div>
        </section>

        <section className="stats" aria-label="Ключевые показатели">
          <div><span className="stat-icon"><Icon name="book" /></span><strong>7+</strong><p>электронных курсов</p></div>
          <div><span className="stat-icon"><Icon name="cube" /></span><strong>3D</strong><p>интерактивные тренажеры</p></div>
          <div><span className="stat-icon">▱</span><strong>SCORM</strong><p>интеграция с LMS</p></div>
          <div><span className="stat-icon">↗</span><strong>Full cycle</strong><p>от модели до Moodle</p></div>
        </section>

        <section className="process section-pad" id="about">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">МОЙ ПОДХОД</p>
              <h2>Полный цикл разработки e-learning</h2>
            </div>

            <p>
              Объединяю инженерные знания, 3D-моделирование, программирование
              и разработку электронных курсов в единый учебный продукт.
            </p>
          </div>

          <div className="education-block">
            <div className="education-title">
              <span>ОБРАЗОВАНИЕ</span>
              <h3>Техническая база + педагогическая подготовка</h3>
            </div>

            <div className="education-content">
              <p>
                <strong>Магистр технической физики, ВГТУ.</strong><br />
                Дополнительная квалификация — «Преподаватель высшей школы».
              </p>

              <p>
                Техническая база помогает мне работать со сложным предметным контентом,
                точно воспроизводить оборудование, процессы и методики
                в интерактивных курсах.
              </p>
            </div>
          </div>

          <div className="process-grid" id="skills">
            <article className="process-card">
              <div className="step-head">
                <span>01</span>
                <Icon name="cube" />
              </div>
              <h3>3D-моделирование</h3>
              <p>
                Создание технических моделей приборов и оборудования по документации,
                фотографиям и реальным образцам.
              </p>
            </article>

            <article className="process-card">
              <div className="step-head">
                <span>02</span>
                <Icon name="code" />
              </div>
              <h3>Интерактивная логика</h3>
              <p>
                Программирование сценариев работы оборудования и взаимодействия
                пользователя в Verge3D.
              </p>
            </article>

            <article className="process-card">
              <div className="step-head">
                <span>03</span>
                <Icon name="course" />
              </div>
              <h3>Разработка курса</h3>
              <p>
                Структура, навигация, задания, тестирование и интеграция
                3D-модулей в CourseLab.
              </p>
            </article>

            <article className="process-card">
              <div className="step-head">
                <span>04</span>
                <Icon name="cloud" />
              </div>
              <h3>LMS</h3>
              <p>
                Экспорт SCORM-пакетов, размещение и проверка готовых курсов в Moodle.
              </p>
            </article>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-heading projects-heading">
            <div><p className="eyebrow">ПОРТФОЛИО</p><h2>Избранные проекты</h2><p>Интерактивные учебные продукты для подготовки специалистов к работе с измерительным оборудованием.</p></div>
            <span className="project-count">05 основных кейсов</span>
          </div>

          <div className="featured-projects">
            {projects.slice(0, 2).map((project, index) => (
              <article className={`featured-project-card ${index === 0 ? 'featured-primary' : 'featured-secondary'}`} key={project.id}>
                <div className="featured-project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-type">{index === 0 ? 'ПОЛНЫЙ ЦИКЛ' : 'ИНТЕРАКТИВНЫЙ КУРС'}</span>
                </div>
                <div className="featured-project-body">
                  <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <h3>{project.title}</h3>
                  <p>{project.short}</p>
                  <div className="project-role-line"><span>Моя роль</span><b>3D · Verge3D · CourseLab · SCORM · Moodle</b></div>
                  <button type="button" className="case-button" onClick={() => setSelected(project)}>Посмотреть кейс <Icon name="arrow" /></button>
                </div>
              </article>
            ))}
          </div>

          <div className="project-grid project-grid-secondary">
            {projects.slice(2).map((project, index) => (
              <article className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="project-number small">0{index + 3}</span>
                </div>
                <div className="project-body">
                  <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <h3>{project.title}</h3>
                  <p>{project.short}</p>
                  <button type="button" className="text-link" onClick={() => setSelected(project)}>Подробнее <Icon name="arrow" /></button>
                </div>
              </article>
            ))}
          </div>

          <div className="other-wrap">
            <div className="section-heading other-heading"><div><p className="eyebrow">ДОПОЛНИТЕЛЬНО</p><h2>Другие разработки</h2></div><p>Еще два проекта, которые показывают разные сценарии технического обучения и работу с аналитическим оборудованием.</p></div>
            <div className="extra-grid">
              {extraProjects.map((project, index) => (
                <article className="extra-card" key={project.id}>
                  <div className="extra-image"><img src={project.image} alt={project.title} /><span>0{index + 6}</span></div>
                  <div><h3>{project.title}</h3><p>{project.short}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                  <button type="button" aria-label={`Подробнее: ${project.title}`} onClick={() => setSelected(project)}><Icon name="arrow" /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-intro">
            <p className="eyebrow light">СОТРУДНИЧЕСТВО</p>
            <h2>Ищете специалиста по разработке технического e-learning?</h2>
            <p>Готова обсудить проекты в области электронного обучения, интерактивных 3D-тренажеров и технического контента.</p>
            <div className="contact-stack" aria-label="Основной стек">
              <span>Blender</span><span>Verge3D</span><span>CourseLab</span><span>SCORM</span><span>Moodle</span>
            </div>
          </div>

          <div className="contact-panel">
            <p className="contact-label">EMAIL</p>
            <a className="contact-email" href="mailto:marina_barinova26@mail.ru"><Icon name="mail" /> marina_barinova26@mail.ru</a>
            <p className="contact-panel-text">Для предложений о работе, проектной занятости и сотрудничестве.</p>
            <div className="contact-actions">
              <a className="btn contact-btn" href="mailto:marina_barinova26@mail.ru?subject=Предложение%20о%20сотрудничестве"><Icon name="mail" /> Написать на почту</a>
              <a className="btn contact-secondary" href="#projects">Проекты <Icon name="arrow" /></a>
            </div>
          </div>

          <blockquote>«Интерактивное обучение — это мост между знаниями и реальной практикой»</blockquote>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><strong>Марина</strong><span>e-learning developer · 2026</span></div>
        <nav aria-label="Навигация в подвале">
          <a href="#projects">Проекты</a>
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
        </nav>
        <a className="footer-mail" href="mailto:marina_barinova26@mail.ru">marina_barinova26@mail.ru</a>
      </footer>

      {selected && (
        <div className="case-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) closeCase() }}>
          <article className="case-view" role="dialog" aria-modal="true" aria-labelledby="case-title">
            <div className="case-toolbar">
              <button className="case-back" type="button" onClick={closeCase}><Icon name="back" /> Все проекты</button>
              <span>Кейс {selectedNumber} / 07</span>
              <button className="case-close" type="button" onClick={closeCase} aria-label="Закрыть кейс">×</button>
            </div>

            <header className="case-hero">
              <div className="case-hero-copy">
                <p className="eyebrow">ПРОЕКТ {selectedNumber}</p>
                <h2 id="case-title">{selected.title}</h2>
                <p className="case-hero-lead">{selected.short}</p>
                <div className="tag-row case-tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="case-meta-grid">
                  <div><span>Формат</span><b>{selected.format}</b></div>
                  <div><span>Разработка</span><b>{selected.authoring}</b></div>
                  <div><span>LMS</span><b>{selected.lms}</b></div>
                </div>
              </div>
              <div className="case-cover">
                <img src={selected.image} alt={selected.title} />
                <span className="case-cover-number">{selectedNumber}</span>
              </div>
            </header>

            <section className="case-section case-intro-grid">
              <div>
                <p className="case-kicker">ЗАДАЧА</p>
                <h3>Учебная задача</h3>
                <p className="case-text">{selected.goal}</p>
              </div>
              <div className="case-role-panel">
                <p className="case-kicker">МОЯ РОЛЬ</p>
                <h3>Полный цикл разработки</h3>
                <p>{selected.role}</p>
                <div className="case-role-chain"><span>3D</span><b>→</b><span>Verge3D</span><b>→</b><span>CourseLab</span><b>→</b><span>Moodle</span></div>
              </div>
            </section>

            <section className="case-section">
              <div className="case-section-heading">
                <div><p className="case-kicker">СЦЕНАРИЙ</p><h3>Как построено обучение</h3></div>
                <p>Каждый этап подготавливает пользователя к следующему и постепенно переводит от теории к виртуальной практике.</p>
              </div>
              <div className="case-flow">
                {selected.flow.map((step, index) => (
                  <div className="case-flow-step" key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <b>{step}</b>
                    {index < selected.flow.length - 1 && <i>→</i>}
                  </div>
                ))}
              </div>
            </section>

            <section className="case-section case-features-grid">
              <div>
                <p className="case-kicker">РЕАЛИЗАЦИЯ</p>
                <h3>Что реализовано</h3>
              </div>
              <div className="case-feature-list">
                {selected.features.map(feature => (
                  <div className="case-feature" key={feature}><span><Icon name="check" /></span><p>{feature}</p></div>
                ))}
              </div>
            </section>

            <section className="case-section case-gallery-section">
              <div className="case-section-heading">
                <div><p className="case-kicker">ВИЗУАЛЬНО</p><h3>Экраны и элементы курса</h3></div>
                <p>Фрагменты 3D-сцен, оборудования и интерактивных заданий, использованных в проекте.</p>
              </div>
              <div className={`case-gallery case-gallery-${Math.min(selected.gallery.length, 7)}`}>
                {selected.gallery.map((item, index) => (
                  <figure className={`case-gallery-item ${index === 0 ? 'is-featured' : ''}`} key={`${item.title}-${index}`}>
                    <img src={item.src} alt={item.title} />
                    <figcaption><b>{item.title}</b><span>{item.caption}</span></figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="case-section case-tech-section">
              <div>
                <p className="case-kicker">СТЕК</p>
                <h3>Технологии проекта</h3>
                <p className="case-text">Инструменты используются как единая цепочка: от подготовки моделей и интерактивной логики до сборки курса и публикации в LMS.</p>
              </div>
              <div className="case-tech-cloud">{selected.technologies.map((tech, index) => <span key={tech}><b>{String(index + 1).padStart(2, '0')}</b>{tech}</span>)}</div>
            </section>

            <section className="case-result">
              <div><p className="case-kicker">РЕЗУЛЬТАТ</p><h3>Готовый учебный продукт</h3><p>{selected.result}</p></div>
              <a href="mailto:marina_barinova26@mail.ru?subject=Обсуждение%20e-learning%20проекта" className="btn primary"><Icon name="mail" /> Обсудить проект</a>
            </section>
          </article>
        </div>
      )}
    </div>
  )
}

export default App
