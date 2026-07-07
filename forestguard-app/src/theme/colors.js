export const colors = {
  // Fondo y superficies — paleta oscura (navy) inspirada en las referencias
  greenDark: '#0A0E17',   // navy más oscuro: headers, tope del degradado de login
  greenMid: '#121A2B',    // panel navy: headers secundarios, mapa, miniaturas
  bg: '#0D111C',          // fondo general de pantalla
  surface: '#161D2E',     // tarjetas, inputs
  surface2: '#1C2438',    // superficie alterna (placeholders, botones flotantes)
  border: '#28304A',      // bordes sutiles sobre superficies oscuras
  white: '#161D2E',       // alias de compatibilidad: mismas tarjetas oscuras

  // Estados/semántica — se mantienen como verde real (éxito, validado, etc.)
  green: '#22C55E',
  greenLight: '#4ADE80',
  greenPale: '#F5F7FC',   // texto tipo heading claro sobre fondos oscuros
  greenSoft: '#9AA5BD',   // texto secundario/subtítulos sobre fondos oscuros

  // Acento principal de marca ("fuego"): botones, tabs activos, links
  orange: '#ff3535',
  orangeLight: '#ff6666',
  red: '#EF4444',
  amber: '#f50b0b',

  text: '#F1F4F9',
  muted: '#8B93A8',
  mutedLight: '#5B6479',
  onAccent: '#FFFFFF',

  // Degradado de pantallas de auth (login/registro)
  authGradientTop: '#04060B',
  authGradientMid: '#0A0E18',
  authGradientBottom: '#151C30',

  // Chips/badges con tinte translúcido — funcionan sobre cualquier superficie oscura
  badgeRedBg: 'rgba(239,68,68,0.16)',
  badgeRedText: '#FCA5A5',
  badgeGreenBg: 'rgba(34,197,94,0.16)',
  badgeGreenText: '#86EFAC',
  badgeAmberBg: 'rgba(245,158,11,0.16)',
  badgeAmberText: '#FCD34D',
  badgeOrangeBg: 'rgba(255,107,53,0.18)',
  badgeOrangeText: '#FFB088',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

export const radius = {
  sm: 6,
  md: 8,
  lg: 10,
  xl: 16,
  pill: 999,
};
