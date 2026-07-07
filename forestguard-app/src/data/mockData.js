export const currentUser = {
  name: 'Diego Ramírez',
  firstName: 'Diego',
  role: 'Ciudadano',
  municipio: 'Querétaro',
  stats: { reportes: 12, validados: 9, zonas: 3 },
};

export const recentAlerts = [
  {
    id: 'a1',
    level: 'critico',
    dot: 'red',
    title: 'Incendio activo',
    subtitle: 'Zona norte',
    time: '12 min',
  },
  {
    id: 'a2',
    level: 'moderado',
    dot: 'amber',
    title: 'Humo visible — Cadereyta',
    time: '1 h',
  },
];

export const activeAlerts = [
  {
    id: 'al1',
    level: 'critico',
    badge: 'CRÍTICO',
    icon: '🔥',
    title: 'Incendio activo — Querétaro',
    body: 'Incendio forestal activo detectado en Cerro de la Silla. Evitar la zona norte.',
    meta: '📍 4.2 km · hace 12 min · Protección Civil',
  },
  {
    id: 'al2',
    level: 'moderado',
    badge: 'MODERADO',
    icon: '💨',
    title: 'Humo visible — Cadereyta',
    body: 'Columna de humo identificada al sur de Cadereyta. En revisión.',
    meta: '📍 18 km · hace 1 h · Ciudadano',
  },
  {
    id: 'al3',
    level: 'bajo',
    badge: 'BAJO',
    icon: '🌾',
    title: 'Quema de pastizal — Tequisquiapan',
    body: 'Quema controlada notificada por autoridades municipales.',
    meta: '📍 32 km · hace 3 h · Validado',
  },
];

export const reportTypes = [
  { id: 'incendio', label: '🔥 Incendio' },
  { id: 'humo', label: '💨 Humo' },
  { id: 'pastizal', label: '🌾 Pastizal' },
  { id: 'otro', label: '❓ Otro' },
];

export const myReports = [
  {
    id: 'r1',
    icon: '🔥',
    name: 'Incendio forestal',
    loc: 'Cerro de la Silla · hace 12 min',
    badges: [{ label: 'Activo', kind: 'activo' }, { label: 'Crítico', kind: 'critico' }],
  },
  {
    id: 'r2',
    icon: '💨',
    name: 'Columna de humo',
    loc: 'Cadereyta · ayer 14:32',
    badges: [{ label: 'Validado', kind: 'validado' }],
  },
  {
    id: 'r3',
    icon: '🌾',
    name: 'Quema pastizal',
    loc: 'Tequisquiapan · 28 may',
    badges: [{ label: 'Validado', kind: 'validado' }, { label: 'Resuelto', kind: 'resuelto' }],
  },
  {
    id: 'r4',
    icon: '🔥',
    name: 'Incendio menor',
    loc: 'El Marqués · 20 may',
    badges: [{ label: 'En revisión', kind: 'revision' }],
  },
];

export const notifications = [
  {
    id: 'n1',
    unread: true,
    icon: '🔥',
    text: 'Alerta crítica: Incendio activo en tu zona a 4.2 km. Mantente alejado del área norte.',
    time: 'hace 12 min',
    strongPrefix: 'Alerta crítica:',
  },
  {
    id: 'n2',
    unread: true,
    icon: '✅',
    text: 'Tu reporte fue validado por Protección Civil. Gracias por tu contribución.',
    time: 'hace 2 h',
    strongPrefix: 'Tu reporte fue validado',
  },
  {
    id: 'n3',
    unread: false,
    icon: '💨',
    text: 'Alerta moderada: Humo visible reportado en Cadereyta. En revisión por autoridades.',
    time: 'hace 1 h',
  },
  {
    id: 'n4',
    unread: false,
    icon: '📊',
    text: 'Resumen semanal: 5 incendios registrados en Querétaro. Nivel de riesgo: Moderado.',
    time: 'ayer',
  },
  {
    id: 'n5',
    unread: false,
    icon: '🎖️',
    text: '¡3 reportes validados este mes! Eres parte del monitoreo ciudadano activo.',
    time: '28 may',
  },
];

export const adminStats = [
  { id: 's1', label: 'Incendios activos', value: '3', kind: 'red' },
  { id: 's2', label: 'Sin validar', value: '5', kind: 'amber' },
  { id: 's3', label: 'Usuarios en zona', value: '884', kind: 'green' },
  { id: 's4', label: 'Alertas enviadas', value: '134', kind: 'default' },
];

export const topMunicipios = [
  { id: 'm1', rank: 1, name: 'Querétaro', count: 12, pct: 100 },
  { id: 'm2', rank: 2, name: 'Cadereyta', count: 8, pct: 66 },
  { id: 'm3', rank: 3, name: 'Tequisquiapan', count: 5, pct: 42 },
  { id: 'm4', rank: 4, name: 'El Marqués', count: 3, pct: 25 },
];

export const pendingReports = [
  {
    id: '1047',
    title: 'Incendio forestal activo',
    loc: 'Cerro de la Silla, Querétaro',
    time: 'hace 12 min · Diego R.',
    description:
      'Se observa columna de humo negro grueso al norte, llamas visibles entre los árboles.',
    status: 'Sin validar',
    type: 'Incendio',
  },
  {
    id: '1048',
    title: 'Columna de humo densa',
    loc: 'Cadereyta, Querétaro',
    time: 'hace 45 min · Ana T.',
    description: 'Humo visible desde la carretera, no se distinguen llamas por ahora.',
    status: 'Sin validar',
    type: 'Humo',
  },
];

export const mapFires = [
  { id: 'f1', top: '42%', left: '66%', icon: '🔥' },
  { id: 'f2', top: '65%', left: '33%', icon: '🟠' },
];

export const mapZones = [
  { id: 'z1', size: 60, top: '25%', left: '50%', color: 'rgba(234,88,12,0.5)', bg: 'rgba(234,88,12,0.08)' },
  { id: 'z2', size: 40, top: '55%', left: '20%', color: 'rgba(217,119,6,0.5)', bg: 'rgba(217,119,6,0.05)' },
];
