// @ts-nocheck
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Cpu,
  Database,
  FileQuestion,
  Network,
  RadioTower,
  Scale,
  ShieldAlert,
  Vote,
  BookOpen,
  Gavel,
  Landmark,
  Stethoscope,
  BriefcaseBusiness,
  MessageSquareWarning
} from "lucide-react";
import {
  Bar,
  BarChart,
  Cell,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const BLUE = "#011EF4";
const DEEP_BLUE = "#0118BF";
const YELLOW = "#FBBB02";
const PALE_YELLOW = "#FFE981";
const GRAY = "#6F7072";

const blocks = [
  {
    id: "presentacion",
    title: "Presentación y motivación",
    icon: Vote,
    fpName: "Keiko Fujimori",
    jppName: "Roberto Sánchez",
    objective: "Identificar los marcos narrativos iniciales: orden y gestión frente a democracia, justicia y recuperación institucional.",
    fp: {
      main: "Ordenar el país con un equipo experimentado, orientado a empleo, seguridad y estabilidad.",
      problem: "Desesperanza ciudadana, inseguridad, aumento del costo de vida, falta de servicios básicos y desconfianza pública.",
      instruments: ["Equipo de gobierno", "Orden", "Empleo", "Seguridad", "Estabilidad"],
      concretion: "Media-baja",
      viability: "Media",
      risks: "La narrativa orden/caos es comunicacionalmente fuerte, pero en el inicio no define mecanismos concretos de implementación.",
      quote: "Tenemos todo para progresar, solo nos falta ordenarnos."
    },
    jpp: {
      main: "Recuperar democracia y justicia desde una candidatura de origen popular y experiencia en gestión pública.",
      problem: "Exclusión social, pobreza, desconfianza en políticos y denuncia de captura institucional.",
      instruments: ["Democracia", "Justicia", "Experiencia pública", "Servicio", "Consenso social"],
      concretion: "Media-baja",
      viability: "Media",
      risks: "La presentación es identitaria y confrontacional; todavía no traduce el diagnóstico en una ruta programática verificable.",
      quote: "Juntos con esperanza vamos a recuperar la democracia para todos los peruanos."
    },
    tech: ["Sin menciones tecnológicas relevantes", "Marco narrativo", "Voto informado"]
  },
  {
    id: "seguridad",
    title: "Seguridad ciudadana",
    icon: ShieldAlert,
    fpName: "Keiko Fujimori",
    jppName: "Roberto Sánchez",
    objective: "Comparar propuestas frente a homicidios, extorsión, crimen organizado, impunidad, policía, justicia y uso excepcional de fuerzas armadas.",
    fp: {
      main: "Plan de pacificación nacional con policías y militares en buses, rastreo de pagos de extorsión, expulsión de migrantes ilegales que delinquen, flagrancia e inteligencia.",
      problem: "Extorsión, homicidios, impunidad, inseguridad en transporte y negocios, debilidad policial y judicial.",
      instruments: ["Plan de pacificación", "Flagrancia", "Inteligencia", "Plataformas de pago", "Rastrillajes", "Control de fronteras"],
      concretion: "Media-alta",
      viability: "Media",
      risks: "Requiere garantías de debido proceso, protección de datos, límites al uso de FF.AA., control judicial y prevención de perfilamiento discriminatorio.",
      quote: "Trabajaremos con las entidades financieras y las plataformas de pago para identificar, rastrear y bloquear el dinero de las extorsiones."
    },
    jpp: {
      main: "Derogar leyes procrimen, limpiar y profesionalizar la PNP, crear una policía de investigaciones, muerte civil para corruptos y apoyo excepcional de FF.AA.",
      problem: "Criminalidad, corrupción estatal, debilitamiento de persecución penal, captura política del sistema de justicia y desprotección de transportistas.",
      instruments: ["Derogatoria legal", "Policía de investigaciones", "Muerte civil", "Profesionalización PNP", "Ronderos", "FF.AA. excepcionales"],
      concretion: "Media",
      viability: "Media-baja",
      risks: "No identifica leyes específicas ni diseño orgánico de la nueva policía; muerte civil y participación de rondas requieren precisión constitucional y legal.",
      quote: "Necesitamos recuperar de verdad el sistema de justicia."
    },
    tech: ["Plataformas de pago", "Inteligencia", "Datos financieros", "Cibercrimen ausente"]
  },
  {
    id: "democracia",
    title: "Estado democrático y DD.HH.",
    icon: Landmark,
    fpName: "Keiko Fujimori",
    jppName: "Roberto Sánchez",
    objective: "Evaluar el enfoque sobre democracia, derechos humanos, no discriminación, presencia estatal, participación y equilibrio de poderes.",
    fp: {
      main: "Defender derechos humanos mediante presencia estatal: agua, servicios básicos, titulación, Foncodes, interconexión vial y prevención de desastres.",
      problem: "Ausencia del Estado, falta de agua, infraestructura, títulos de propiedad, conectividad vial y prevención climática.",
      instruments: ["Cofopri", "Foncodes", "Apps de inversión", "Plantas desalinizadoras", "Interconexión vial", "Prevención El Niño"],
      concretion: "Media-alta",
      viability: "Media",
      risks: "Reduce el enfoque de derechos humanos a servicios e infraestructura; falta desarrollo sobre justicia, no discriminación, uso de la fuerza y libertades públicas.",
      quote: "Una democracia se fortalece con un Estado presente."
    },
    jpp: {
      main: "Recuperar referéndum, equilibrio de poderes, democracia participativa, Estado descentralizado e intercultural, y sistema interamericano de DD.HH.",
      problem: "Debilitamiento democrático, concentración de poder, exclusión territorial, discriminación y crisis de representación.",
      instruments: ["Referéndum", "Equilibrio de poderes", "Descentralización", "Interculturalidad", "Escazú", "Sistema interamericano"],
      concretion: "Media",
      viability: "Media-baja",
      risks: "Exige reformas constitucionales o legales complejas; no precisa artículos, procedimiento ni correlación congresal necesaria.",
      quote: "El pueblo necesita recuperar el derecho al referéndum."
    },
    tech: ["Apps para inversión", "Estado presente", "Interoperabilidad ausente", "Datos públicos ausentes"]
  },
  {
    id: "educacion-salud",
    title: "Educación y salud",
    icon: Stethoscope,
    fpName: "Keiko Fujimori",
    jppName: "Roberto Sánchez",
    objective: "Contrastar propuestas sobre cáncer, anemia, telemedicina, infraestructura escolar, becas, universidad, salud mental y financiamiento social.",
    fp: {
      main: "Telemedicina nacional, fondo de enfermedades de alto costo, plan de primeros 1000 días, 5000 colegios con internet, kits escolares, PRONAA y becas técnicas.",
      problem: "Tiempos de espera en salud, cáncer, anemia infantil, colegios sin servicios, brecha digital y alimentación escolar deficiente.",
      instruments: ["Telemedicina", "Fondo alto costo", "Plan 1000 días", "5000 colegios", "Kits escolares", "Beca 18"],
      concretion: "Media-alta",
      viability: "Media",
      risks: "No costea el paquete; telemedicina e internet escolar exigen conectividad, datos personales, ciberseguridad, formación y mantenimiento.",
      quote: "Construiremos y repotenciaremos 5000 colegios con todos los servicios básicos y acceso a internet."
    },
    jpp: {
      main: "Ingreso universitario progresivo como derecho, deuda social docente, alimentación escolar local, 500 policlínicos, psicólogo por colegio y salud mental prioritaria.",
      problem: "Exclusión universitaria, precariedad docente, primer nivel débil, salud mental desatendida y fragmentación sanitaria.",
      instruments: ["Derecho universitario", "Reforma tributaria", "500 policlínicos", "Brigadas", "Psicólogo por colegio", "DNI sanitario"],
      concretion: "Media",
      viability: "Media-baja",
      risks: "Alta ambición fiscal; ingreso universitario universal tensiona calidad, capacidad instalada, licenciamiento y financiamiento.",
      quote: "La salud mental será una prioridad."
    },
    tech: ["Telemedicina", "Internet escolar", "DNI sanitario", "Datos de salud"]
  },
  {
    id: "economia",
    title: "Economía, empleo y pobreza",
    icon: BriefcaseBusiness,
    fpName: "Keiko Fujimori",
    jppName: "Roberto Sánchez",
    objective: "Comparar modelos de crecimiento, inversión, formalización, MYPEs, crédito, pobreza, reforma tributaria e industrialización.",
    fp: {
      main: "Seguridad jurídica, BCR autónomo, reforma SUNAT/SUNAFIL, PROMYPE, crédito barato, digitalización MYPE, grandes proyectos y tributación cero.",
      problem: "Pobreza, informalidad, caída de inversión, trabas regulatorias, falta de crédito y altos precios de combustibles.",
      instruments: ["PROMYPE", "Crédito barato", "Tributación cero", "Licencia cero", "Destrabe de proyectos", "Fondo combustibles"],
      concretion: "Media-alta",
      viability: "Media",
      risks: "Tributación cero y licencia cero requieren reglas antiabuso y fiscalización ex post; falta matriz fiscal del paquete completo.",
      quote: "La pobreza no se reduce con discursos, se reduce con empleo."
    },
    jpp: {
      main: "Aumento progresivo de RMV, fondo de S/ 15,000 millones para crédito barato, asistencia técnica, innovación, Juntos urbano, industrialización y reforma tributaria.",
      problem: "Bajos ingresos, informalidad, pobreza urbana, falta de crédito, débil industrialización y desigualdad tributaria.",
      instruments: ["RMV progresiva", "Fondo S/ 15 mil millones", "Asistencia técnica", "Innovación", "Juntos urbano", "Reforma tributaria"],
      concretion: "Media-alta",
      viability: "Media-baja",
      risks: "El crédito subsidiado y la expansión social requieren fuente fiscal, gobernanza, control de mora y compatibilidad con productividad.",
      quote: "Vamos a formar un fondo de 15,000 millones de soles para crédito accesible de verdad."
    },
    tech: ["Digitalización MYPE", "Innovación", "Tecnología productiva", "Economía digital incipiente"]
  },
  {
    id: "carta",
    title: "Carta Blanca y cierre",
    icon: MessageSquareWarning,
    fpName: "Keiko Fujimori",
    jppName: "Roberto Sánchez",
    objective: "Evaluar si el cierre aportó reconocimiento del adversario, consensos democráticos y síntesis programática.",
    fp: {
      main: "Mensaje de reconciliación, reconocimiento de errores, equipo más allá de Fuerza Popular y gobierno con fuerza y amor.",
      problem: "Polarización política, desconfianza ciudadana y necesidad de estabilidad para los próximos cinco años.",
      instruments: ["Unidad", "Equipo ampliado", "Reconciliación", "Gobierno con resultados"],
      concretion: "Baja",
      viability: "Media",
      risks: "El bloque pedía destacar aspectos positivos del contendor, pero el mensaje fue principalmente cierre de campaña.",
      quote: "No les pido dejar nuestras diferencias, sino apostar juntos para construir un mejor país."
    },
    jpp: {
      main: "Recuperación democrática, consenso nacional, transformación del país y defensa de los sectores populares.",
      problem: "Polarización, crisis democrática, desconfianza institucional y necesidad de consensos tras una primera vuelta fragmentada.",
      instruments: ["Consenso nacional", "Fuerzas patrióticas", "Recuperación democrática", "Transformación"],
      concretion: "Baja",
      viability: "Media",
      risks: "No cumple plenamente el objetivo deliberativo de reconocer algo positivo del adversario; predomina el cierre confrontacional.",
      quote: "Nos estamos jugando el futuro del Perú y de la democracia."
    },
    tech: ["Sin tecnología", "Consenso político", "Cierre discursivo"]
  }
];

const techItems = [
  { name: "IA", candidate: "Omisión de ambas candidaturas", clarity: 0, risk: "No fue mencionada como política pública, herramienta estatal ni objeto regulatorio.", impact: "Omisión crítica para un debate presidencial 2026.", icon: Cpu },
  { name: "Pagos y extorsión", candidate: "Keiko Fujimori / Fuerza Popular", clarity: 3, risk: "Rastreo y bloqueo de pagos exige base legal, debido proceso, UIF, fiscalía y protección de datos.", impact: "Alto para inteligencia financiera contra extorsión.", icon: Database },
  { name: "Telemedicina", candidate: "Keiko Fujimori / Fuerza Popular", clarity: 4, risk: "Requiere historia clínica, consentimiento, ciberseguridad, interoperabilidad y conectividad rural.", impact: "Alto para acceso a salud en zonas alejadas.", icon: Stethoscope },
  { name: "Internet escolar", candidate: "Keiko Fujimori / Fuerza Popular", clarity: 3, risk: "Sin formación docente, dispositivos, seguridad infantil y mantenimiento, la conectividad no transforma aprendizajes.", impact: "Alto para cerrar brechas educativas.", icon: RadioTower },
  { name: "DNI sanitario", candidate: "Roberto Sánchez / Juntos por el Perú", clarity: 2, risk: "Usar DNI para intercambio prestacional implica datos sensibles, autenticación, interoperabilidad y reglas de acceso.", impact: "Alto si habilita continuidad de atención.", icon: Network },
  { name: "Apps de inversión", candidate: "Keiko Fujimori / Fuerza Popular", clarity: 1, risk: "Una app no destraba inversiones si no rediseña procedimientos, permisos, trazabilidad y responsabilidad administrativa.", impact: "Medio si se convierte en plataforma de gestión pública.", icon: Activity },
  { name: "Digitalización MYPE", candidate: "Keiko Fujimori / Fuerza Popular", clarity: 3, risk: "Falta comercio electrónico, pagos seguros, facturación digital, ciberseguridad y protección al consumidor.", impact: "Medio-alto para formalización y productividad.", icon: BriefcaseBusiness },
  { name: "Ciberseguridad", candidate: "Omisión de ambas candidaturas", clarity: 0, risk: "No fue mencionada pese a salud digital, pagos, educación conectada y apps estatales.", impact: "Riesgo sistémico para servicios públicos digitales.", icon: ShieldAlert }
];

const evaluation = [
  { criterio: "Claridad", FP: 3.7, JPP: 3.1 },
  { criterio: "Coherencia", FP: 3.2, JPP: 3.0 },
  { criterio: "Viabilidad", FP: 3.0, JPP: 2.7 },
  { criterio: "Sustento", FP: 3.0, JPP: 3.1 },
  { criterio: "Innovación", FP: 2.6, JPP: 2.8 },
  { criterio: "Tecnología", FP: 2.7, JPP: 2.2 },
  { criterio: "Implementación", FP: 3.2, JPP: 2.8 }
];

const evaluationSummary = {
  fp: 3.1,
  jpp: 2.8,
  winner: "Fuerza Popular",
  margin: 0.3,
  note:
    "El resultado no equivale a una recomendación electoral: resume calidad técnica observable en la transcripción, especialmente claridad, concreción, viabilidad, sustento e implementación."
};

const wordData = [
  { term: "Estado", count: 62 },
  { term: "Derechos", count: 59 },
  { term: "Trabajo / empleo", count: 54 },
  { term: "Educación", count: 51 },
  { term: "Seguridad", count: 41 },
  { term: "Justicia", count: 31 },
  { term: "Salud", count: 28 },
  { term: "Democracia", count: 27 },
  { term: "Gobierno", count: 27 },
  { term: "Economía", count: 23 }
];

const gaps = [
  "Inteligencia artificial",
  "Protección de datos personales",
  "Ciberseguridad",
  "Gobierno digital",
  "Interoperabilidad estatal",
  "Identidad digital",
  "Cibercrimen y evidencia digital",
  "Delitos financieros digitales",
  "Regulación de plataformas",
  "Costeo presupuestal integral"
];

const scoring = [
  {
    score: 1,
    label: "Genérico",
    detail: "Declaración aspiracional o slogan. No identifica instrumento, autoridad responsable, fuente de financiamiento ni forma de verificación."
  },
  {
    score: 2,
    label: "Básico",
    detail: "Reconoce un problema público y formula una intención, pero el mecanismo es incompleto, ambiguo o depende de supuestos no explicados."
  },
  {
    score: 3,
    label: "Reconocible",
    detail: "Presenta una propuesta identificable y algún instrumento —ley, programa, presupuesto, entidad o alianza—, pero carece de costeo, cronograma, indicadores o ruta normativa suficiente."
  },
  {
    score: 4,
    label: "Sólido",
    detail: "La propuesta tiene diagnóstico, instrumento, entidad o actor responsable, compatibilidad institucional preliminar y riesgos parcialmente mitigados."
  },
  {
    score: 5,
    label: "Completo",
    detail: "Incluye diagnóstico, instrumento, autoridad responsable, fuente de financiamiento, secuencia normativa, cronograma, indicadores verificables y salvaguardas jurídicas o institucionales."
  }
];

const methodologyCriteria = [
  {
    name: "Claridad",
    question: "¿La ciudadanía puede entender qué se propone y qué problema se busca resolver?",
    high: "Propuesta directa, comprensible y vinculada a un problema concreto.",
    low: "Mensaje retórico, abstracto o centrado en ataques sin medida identificable."
  },
  {
    name: "Coherencia",
    question: "¿El diagnóstico, la propuesta y la narrativa general se sostienen entre sí?",
    high: "Existe continuidad entre problema, solución, instrumentos y discurso político.",
    low: "Hay saltos entre diagnóstico y propuesta, contradicciones o promesas incompatibles."
  },
  {
    name: "Viabilidad",
    question: "¿La propuesta parece ejecutable dentro del marco institucional, presupuestal y temporal del gobierno?",
    high: "Compatible con competencias estatales, capacidades públicas, plazos y restricciones fiscales.",
    low: "Requiere reformas complejas, gasto no explicado o competencias que no dependen solo del Ejecutivo."
  },
  {
    name: "Sustento técnico",
    question: "¿Se apoya en datos, evidencia, instrumentos conocidos o diseño de política pública?",
    high: "Usa cifras, programas, entidades, mecanismos y problemas verificables.",
    low: "Formula afirmaciones sin evidencia, sin diseño o con causalidades débiles."
  },
  {
    name: "Innovación",
    question: "¿Introduce soluciones nuevas, mejoras institucionales o enfoques de modernización?",
    high: "Propone rediseños, herramientas o estrategias que agregan valor público.",
    low: "Repite programas previos sin adaptación o solo promete continuidad."
  },
  {
    name: "Calidad tecnológica",
    question: "¿La propuesta tecnológica considera datos, interoperabilidad, ciberseguridad y derechos?",
    high: "Incluye arquitectura digital, gobernanza de datos, seguridad, privacidad y métricas.",
    low: "Menciona apps, internet o tecnología como accesorio sin diseño ni salvaguardas."
  },
  {
    name: "Capacidad de implementación",
    question: "¿La propuesta tiene ruta operativa, responsables, priorización e indicadores?",
    high: "Define quién ejecuta, cómo, cuándo, con qué recursos y cómo se medirá.",
    low: "No identifica entidad, presupuesto, cronograma ni mecanismo de seguimiento."
  }
];

const methodologySteps = [
  "Separé la transcripción por bloques del debate y por intervención de cada candidatura.",
  "Identifiqué propuestas explícitas, problemas públicos, instrumentos mencionados y omisiones relevantes.",
  "Clasifiqué cada afirmación como hecho observado, inferencia u opinión analítica para evitar atribuir propuestas no dichas.",
  "Evalué concreción y viabilidad de cada propuesta con una escala cualitativa: alta, media o baja.",
  "Asigné puntajes 1 a 5 en siete criterios comparables, usando la misma regla para ambas candidaturas.",
  "Revisé el componente tecnológico de forma separada: IA, gobierno digital, datos personales, ciberseguridad, conectividad, interoperabilidad, economía digital y regulación.",
  "Analicé el lenguaje agrupando términos equivalentes y excluyendo palabras vacías, fórmulas de cortesía y ruido de transmisión."
];

const evidenceRules = [
  {
    label: "Hecho observado",
    text: "Está expresamente dicho en la transcripción: una propuesta, acusación, cifra o instrumento mencionado por la candidatura."
  },
  {
    label: "Inferencia",
    text: "Es una consecuencia razonable de lo dicho, pero no se presenta como cita ni como promesa expresa."
  },
  {
    label: "Opinión analítica",
    text: "Es una valoración técnica sobre claridad, viabilidad, riesgos, vacíos, consistencia o implementación."
  },
  {
    label: "Límite metodológico",
    text: "Si una medida no aparece en la transcripción, no se incorpora como propuesta aunque sea conocida por plan de gobierno, prensa o contexto externo."
  }
];

const tabs = [
  { id: "comparativo", label: "Comparativo" },
  { id: "evaluacion", label: "Evaluación" },
  { id: "tecnologia", label: "Tecnología" },
  { id: "palabras", label: "Lenguaje" },
  { id: "preguntas", label: "Preguntas" },
  { id: "metodologia", label: "Metodología" }
];

function Card({ children, className = "" }) {
  return <div className={`rounded-[2rem] border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Badge({ children, className = "", style }) {
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${className}`} style={style}>{children}</span>;
}

function ScorePill({ label, value }) {
  const tone = value === "Alta" || value === "Media-alta"
    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
    : value === "Media"
      ? "border-yellow-200 bg-yellow-50 text-yellow-700"
      : "border-red-200 bg-red-50 text-red-700";
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tone}`}>{label}: {value}</span>;
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white">
        <div className="text-2xl font-black tracking-tight" style={{ color: BLUE }}>IA</div>
        <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: YELLOW }} />
      </div>
      <div className="leading-none">
        <div className="text-2xl font-black tracking-tight text-white">IALAW</div>
        <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-white/75">Digital Lawyers</div>
      </div>
    </div>
  );
}

function TeamCard({ title, data, color }) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6 text-white" style={{ backgroundColor: color }}>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-black uppercase md:text-2xl">{title}</h3>
          <Scale className="h-7 w-7 text-white/70" />
        </div>
        <blockquote className="mt-5 border-l-4 pl-4 text-base font-semibold leading-7 text-white/90" style={{ borderColor: YELLOW }}>
          “{data.quote}”
        </blockquote>
      </div>
      <div className="space-y-5 p-6">
        <div>
          <div className="text-xs font-black uppercase tracking-widest" style={{ color: GRAY }}>Propuesta principal</div>
          <p className="mt-1 text-base font-bold leading-7 text-slate-950">{data.main}</p>
        </div>
        <div>
          <div className="text-xs font-black uppercase tracking-widest" style={{ color: GRAY }}>Problema público</div>
          <p className="mt-1 text-sm leading-6 text-slate-700">{data.problem}</p>
        </div>
        <div>
          <div className="mb-2 text-xs font-black uppercase tracking-widest" style={{ color: GRAY }}>Instrumentos</div>
          <div className="flex flex-wrap gap-2">
            {data.instruments.map((item) => <Badge key={item} className="border border-slate-200 text-slate-700">{item}</Badge>)}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <ScorePill label="Concreción" value={data.concretion} />
          <ScorePill label="Viabilidad" value={data.viability} />
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <div className="mb-1 flex items-center gap-2 text-sm font-black uppercase" style={{ color: BLUE }}>
            <AlertTriangle className="h-4 w-4" /> Riesgos o vacíos
          </div>
          <p className="text-sm leading-6 text-slate-700">{data.risks}</p>
        </div>
      </div>
    </Card>
  );
}

function QuestionCard({ title, questions }) {
  return (
    <Card>
      <div className="p-6">
        <h3 className="mb-5 text-xl font-black uppercase md:text-2xl" style={{ color: BLUE }}>{title}</h3>
        <ol className="space-y-3">
          {questions.map((question, index) => (
            <li key={question} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
              <span className="font-black" style={{ color: BLUE }}>{String(index + 1).padStart(2, "0")}</span>
              <span className="text-sm text-slate-700">{question}</span>
            </li>
          ))}
        </ol>
      </div>
    </Card>
  );
}

export default function DebatePresidencialInteractivo() {
  const [selected, setSelected] = useState(blocks[1].id);
  const [view, setView] = useState("comparativo");

  const current = blocks.find((block) => block.id === selected) || blocks[0];
  const CurrentIcon = current.icon || Vote;

  return (
    <div className="ialaw-panel min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden" style={{ backgroundColor: BLUE }}>
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/40" />
          <div className="absolute bottom-10 left-12 h-36 w-36 rounded-full border border-white/30" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/20" />
          <div className="absolute left-[58%] top-24 h-px w-80 bg-white/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <LogoMark />
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white px-4 py-2 uppercase tracking-wide" style={{ color: BLUE }}>Debate presidencial</Badge>
              <Badge className="px-4 py-2 uppercase tracking-wide text-slate-950" style={{ backgroundColor: YELLOW }}>Segunda vuelta 2026</Badge>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <div className="mb-5 h-2 w-24 rounded-full" style={{ backgroundColor: YELLOW }} />
              <h1 className="max-w-5xl text-4xl font-black uppercase leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-6xl">
                Mapa interactivo del debate presidencial
              </h1>
              <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-white/85 md:text-lg">
                Lectura comparativa, jurídico-regulatoria y tecnológica de las propuestas para la Segunda Vuelta 2026 de Fuerza Popular y Juntos por el Perú.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-white p-5" style={{ color: BLUE }}>
                  <div className="text-3xl font-black md:text-4xl">6</div>
                  <div className="text-xs font-bold uppercase tracking-wider">bloques</div>
                </div>
                <div className="rounded-3xl p-5 text-slate-950" style={{ backgroundColor: YELLOW }}>
                  <div className="text-3xl font-black md:text-4xl">2</div>
                  <div className="text-xs font-bold uppercase tracking-wider">candidaturas</div>
                </div>
                <div className="col-span-2 rounded-3xl border border-white/20 p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Hallazgo central</div>
                  <div className="mt-2 text-xl font-black uppercase leading-snug md:text-2xl">La tecnología fue instrumental, fragmentaria y sin gobernanza digital.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="sticky top-0 z-20 -mx-6 border-b bg-white/95 px-6 py-4 backdrop-blur lg:-mx-10 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1 sm:grid-cols-3 xl:grid-cols-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setView(tab.id)}
                  className={`rounded-xl px-4 py-2 text-sm font-bold transition ${view === tab.id ? "bg-white shadow-sm" : "text-slate-500 hover:text-slate-900"}`}
                  style={view === tab.id ? { color: BLUE } : undefined}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <select
                value={selected}
                onChange={(event) => setSelected(event.target.value)}
                className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none focus:border-blue-600 sm:w-72"
              >
                {blocks.map((block) => <option key={block.id} value={block.id}>{block.title}</option>)}
              </select>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "comparativo" && (
            <motion.section key="comparativo" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="py-10">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>
                    <CurrentIcon className="h-4 w-4" /> Bloque seleccionado
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-normal md:text-4xl">{current.title}</h2>
                  <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-slate-600 md:text-base">{current.objective}</p>
                </div>
                <div className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-950" style={{ backgroundColor: PALE_YELLOW }}>
                  FP: {current.fpName} · JPP: {current.jppName}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <TeamCard title="Fuerza Popular" data={current.fp} color={BLUE} />
                <TeamCard title="Juntos por el Perú" data={current.jpp} color={DEEP_BLUE} />
              </div>

              <Card className="mt-6 bg-slate-50">
                <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>Lectura tecnológica del bloque</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {current.tech.map((item) => <Badge key={item} className="text-slate-950" style={{ backgroundColor: YELLOW }}>{item}</Badge>)}
                    </div>
                  </div>
                  <p className="max-w-2xl text-sm leading-6 text-slate-600">
                    Las menciones tecnológicas son útiles, pero no desarrollan arquitectura institucional, protección de datos, ciberseguridad, interoperabilidad, financiamiento ni indicadores verificables.
                  </p>
                </div>
              </Card>
            </motion.section>
          )}

          {view === "tecnologia" && (
            <motion.section key="tecnologia" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="py-10">
              <div className="mb-8">
                <div className="mb-3 h-2 w-20 rounded-full" style={{ backgroundColor: YELLOW }} />
                <h2 className="text-3xl font-black uppercase tracking-normal md:text-4xl">Foco especial en tecnología</h2>
                <p className="mt-3 max-w-4xl text-sm font-medium leading-7 text-slate-600 md:text-base">
                  El debate mencionó plataformas de pago, telemedicina, internet escolar, apps de inversión, DNI sanitario y digitalización MYPE. Ninguna candidatura presentó una política integral de IA, datos, ciberseguridad o gobierno digital.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {techItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.name} className="transition hover:-translate-y-1 hover:shadow-lg">
                      <div className="p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: BLUE }}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="rounded-full px-3 py-1 text-xs font-black text-slate-950" style={{ backgroundColor: YELLOW }}>
                            Claridad {item.clarity}/5
                          </div>
                        </div>
                        <h3 className="text-lg font-black uppercase">{item.name}</h3>
                        <div className="mt-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-700">
                          {item.candidate}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600"><strong>Riesgo:</strong> {item.risk}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600"><strong>Impacto:</strong> {item.impact}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-8 overflow-hidden rounded-[2rem] p-8 text-white shadow-sm" style={{ backgroundColor: BLUE }}>
                <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                  <div>
                    <div className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-white/70">Radar de ausencias</div>
                    <h3 className="text-2xl font-black uppercase leading-snug md:text-3xl">Lo no dicho es políticamente relevante</h3>
                    <p className="mt-4 text-white/80">
                      Digitalizar seguridad, salud, educación o MYPEs sin gobernanza de datos puede producir más eficiencia, pero también más vigilancia, filtraciones o decisiones opacas.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {gaps.map((gap) => (
                      <div key={gap} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
                        <ShieldAlert className="h-4 w-4" style={{ color: YELLOW }} />
                        <span className="text-sm font-semibold">{gap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {view === "metodologia" && (
            <motion.section key="metodologia" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="py-10">
              <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>
                    <BookOpen className="h-4 w-4" /> Cómo se puntuó
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-normal md:text-4xl">Metodología de análisis</h2>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  La plataforma usa exclusivamente la transcripción del debate como fuente principal. No incorpora propuestas externas, promesas de campaña no mencionadas ni información de prensa. La puntuación no mide simpatía política: mide calidad técnica observable en el debate.
                </p>
              </div>

              <section className="space-y-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>
                  <Gavel className="h-4 w-4" /> Ruta de trabajo
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {methodologySteps.map((step, index) => (
                    <Card key={step}>
                      <div className="flex gap-4 p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-slate-950" style={{ backgroundColor: YELLOW }}>
                          {index + 1}
                        </div>
                        <p className="text-sm font-semibold leading-6 text-slate-700">{step}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mt-10 space-y-5">
                <h3 className="text-xl font-black uppercase md:text-2xl" style={{ color: BLUE }}>Regla de evidencia</h3>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {evidenceRules.map((rule) => (
                    <Card key={rule.label}>
                      <div className="p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl" style={{ backgroundColor: BLUE }}>
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-base font-black uppercase">{rule.label}</h4>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{rule.text}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mt-10 space-y-5">
                <h3 className="text-xl font-black uppercase md:text-2xl" style={{ color: BLUE }}>Escala 1 a 5</h3>
                <div className="grid gap-4 md:grid-cols-5">
                  {scoring.map((item) => (
                    <Card key={item.score} className="overflow-hidden">
                      <div className="p-5 text-white" style={{ backgroundColor: item.score === 5 ? BLUE : DEEP_BLUE }}>
                        <div className="text-4xl font-black md:text-5xl">{item.score}</div>
                        <div className="mt-1 text-sm font-black uppercase tracking-widest" style={{ color: YELLOW }}>{item.label}</div>
                      </div>
                      <div className="p-5 text-sm leading-6 text-slate-600">{item.detail}</div>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mt-10 space-y-5">
                <h3 className="text-xl font-black uppercase md:text-2xl" style={{ color: BLUE }}>Criterios evaluados</h3>
                <div className="grid gap-5 lg:grid-cols-2">
                  {methodologyCriteria.map((criterion) => (
                    <Card key={criterion.name}>
                      <div className="p-6">
                        <h4 className="text-lg font-black uppercase" style={{ color: BLUE }}>{criterion.name}</h4>
                        <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{criterion.question}</p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                            <div className="text-xs font-black uppercase tracking-widest text-emerald-700">Alto</div>
                            <p className="mt-2 text-sm leading-6 text-emerald-900">{criterion.high}</p>
                          </div>
                          <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                            <div className="text-xs font-black uppercase tracking-widest text-red-700">Bajo</div>
                            <p className="mt-2 text-sm leading-6 text-red-900">{criterion.low}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <div className="mt-10 rounded-[2rem] p-6 text-white shadow-sm" style={{ backgroundColor: BLUE }}>
                <div className="grid gap-5 lg:grid-cols-[0.35fr_1fr] lg:items-center">
                  <div>
                    <div className="mb-3 h-2 w-20 rounded-full" style={{ backgroundColor: YELLOW }} />
                    <h3 className="text-xl font-black uppercase md:text-2xl">Nota final</h3>
                  </div>
                  <p className="text-sm font-semibold leading-7 text-white/85">
                    La calificación final es un promedio simple de siete criterios. Una candidatura puede puntuar mejor por concreción discursiva aunque otra tenga un diagnóstico más amplio. La escala premia propuestas que permiten ser auditadas: responsable, instrumento, presupuesto, plazo, indicadores y salvaguardas jurídicas.
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {view === "evaluacion" && (
            <motion.section key="evaluacion" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="py-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
                <Card>
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>
                      <BarChart3 className="h-4 w-4" /> Escala 1 a 5
                    </div>
                    <h2 className="text-3xl font-black uppercase md:text-4xl">Evaluación comparativa</h2>
                    <div className="mt-6 h-[420px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={evaluation} outerRadius="75%">
                          <PolarGrid />
                          <PolarAngleAxis dataKey="criterio" tick={{ fontSize: 12 }} />
                          <PolarRadiusAxis angle={30} domain={[0, 5]} />
                          <Radar name="FP" dataKey="FP" stroke={BLUE} fill={BLUE} fillOpacity={0.25} />
                          <Radar name="JPP" dataKey="JPP" stroke={YELLOW} fill={YELLOW} fillOpacity={0.35} />
                          <Tooltip />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Card>

                <div className="space-y-4">
                  <div className="rounded-[2rem] p-6 text-white shadow-sm" style={{ backgroundColor: BLUE }}>
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-white/70">Resultado técnico agregado</div>
                    <div className="mt-4 rounded-3xl p-5 text-slate-950" style={{ backgroundColor: YELLOW }}>
                      <div className="text-xs font-black uppercase tracking-[0.18em]">Ganador por puntaje</div>
                      <div className="mt-2 text-2xl font-black uppercase">{evaluationSummary.winner}</div>
                      <p className="mt-2 text-sm font-bold leading-6">
                        Ventaja de {evaluationSummary.margin.toFixed(1)} puntos en el promedio general.
                      </p>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <div className="rounded-3xl bg-white p-5" style={{ color: BLUE }}>
                        <div className="text-4xl font-black md:text-5xl">{evaluationSummary.fp.toFixed(1)}</div>
                        <div className="font-bold uppercase">FP</div>
                      </div>
                      <div className="rounded-3xl p-5 text-slate-950" style={{ backgroundColor: YELLOW }}>
                        <div className="text-4xl font-black md:text-5xl">{evaluationSummary.jpp.toFixed(1)}</div>
                        <div className="font-bold uppercase">JPP</div>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-6 text-white/80">
                      FP obtiene mayor concreción discursiva en esta transcripción. JPP muestra mayor densidad político-institucional y social, pero varias propuestas requieren puente más claro entre aspiración, norma, presupuesto e implementación.
                    </p>
                    <p className="mt-3 text-xs font-semibold leading-5 text-white/65">{evaluationSummary.note}</p>
                  </div>

                  {evaluation.map((row) => (
                    <div key={row.criterio} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="mb-3 text-center text-sm font-black uppercase">
                        <span>{row.criterio}</span>
                        <span className="ml-3 text-slate-600">FP {row.FP} · JPP {row.JPP}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-2 rounded-full bg-slate-100">
                          <div className="h-2 rounded-full" style={{ width: `${row.FP * 20}%`, backgroundColor: BLUE }} />
                        </div>
                        <div className="h-2 rounded-full bg-slate-100">
                          <div className="h-2 rounded-full" style={{ width: `${row.JPP * 20}%`, backgroundColor: YELLOW }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {view === "palabras" && (
            <motion.section key="palabras" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="py-10">
              <div className="mb-8">
                <h2 className="text-3xl font-black uppercase tracking-normal md:text-4xl">Lenguaje y énfasis discursivo</h2>
                <p className="mt-3 max-w-4xl text-sm font-medium leading-7 text-slate-600 md:text-base">
                  Se agruparon términos equivalentes y se excluyeron palabras vacías. Los resultados son aproximados por ruido de transcripción y bloques informativos del debate.
                </p>
              </div>

              <Card>
                <div className="p-6">
                  <div className="h-[420px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={wordData} layout="vertical" margin={{ left: 20, right: 20 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="term" type="category" width={150} tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="count" radius={[0, 10, 10, 0]}>
                          {wordData.map((entry, index) => <Cell key={entry.term} fill={index % 2 === 0 ? BLUE : YELLOW} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-black uppercase" style={{ color: BLUE }}>Fuerza Popular</h3>
                    <p className="mt-3 text-slate-600">Predomina el marco “orden versus caos”, con énfasis en empleo, seguridad, educación, salud, inversión y gestión.</p>
                  </div>
                </Card>
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-black uppercase" style={{ color: BLUE }}>Juntos por el Perú</h3>
                    <p className="mt-3 text-slate-600">Predomina la lectura de democracia, derechos, justicia, Estado, corrupción, descentralización y recuperación institucional.</p>
                  </div>
                </Card>
              </div>
            </motion.section>
          )}

          {view === "preguntas" && (
            <motion.section key="preguntas" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="py-10">
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em]" style={{ color: BLUE }}>
                  <FileQuestion className="h-4 w-4" /> Segunda ronda
                </div>
                <h2 className="text-3xl font-black uppercase tracking-normal md:text-4xl">Preguntas que faltan</h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <QuestionCard
                  title="A Keiko Fujimori"
                  questions={[
                    "¿Cuál será la base legal para rastrear y bloquear pagos vinculados a extorsión sin vulnerar secreto bancario ni datos personales?",
                    "¿Cuántos policías y militares requeriría la presencia 24/7 en buses y cuál sería el costo operativo?",
                    "¿Qué límites tendría la participación de Fuerzas Armadas en seguridad ciudadana?",
                    "¿Qué arquitectura tendría la telemedicina nacional: historia clínica, interoperabilidad, consentimiento y ciberseguridad?",
                    "¿Cómo funcionaría la app para acelerar inversiones y qué entidad la administraría?",
                    "¿Cómo evitaría que tributación cero y licencia cero generen elusión o empresas de papel?"
                  ]}
                />
                <QuestionCard
                  title="A Roberto Sánchez"
                  questions={[
                    "¿Qué leyes específicas considera procrimen y cuál sería el texto normativo de reemplazo?",
                    "¿Cómo se crearía la policía de investigaciones y cómo se coordinaría con PNP y Ministerio Público?",
                    "¿Qué alcance tendría la muerte civil para corruptos y cómo se garantizaría el debido proceso?",
                    "¿Cuál sería la ruta fiscal para elevar educación al 6% del PBI y salud hasta 9%?",
                    "¿Cómo se gobernaría el fondo de S/ 15,000 millones para evitar captura política o mora?",
                    "¿Qué significa que el DNI permita intercambio prestacional en salud y cómo se protegerían los datos sensibles?"
                  ]}
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
