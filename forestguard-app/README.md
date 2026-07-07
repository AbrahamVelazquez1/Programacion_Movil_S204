# ForestGuard — App Móvil (React Native / Expo SDK 54)

Implementación funcional y navegable de los 11 mockups: **Login, Registro, Inicio, Mapa en vivo, Nuevo Reporte, Alertas, Historial, Notificaciones, Perfil, Dashboard Admin y Validar Reporte (Admin)**.

**Tema visual:** oscuro (navy) con acento naranja "fuego" como color de marca — botones, tabs activos y links — y verde reservado para estados de éxito (validado, resuelto, acciones positivas), calcado de las imágenes de referencia entregadas.

Es solo interfaz (UI) con datos de ejemplo (mock) en `src/data/mockData.js` — no hay backend ni persistencia real. Todo el estado (sesión, formularios, filtros) vive en memoria con `useState`.

Probado end-to-end: `npm install` limpio (sin conflictos de peer-deps) y `npx expo export` para web y Android compilan sin errores sobre **Expo SDK 54 / React Native 0.81.5 / React 19.1.0**.

## Cómo correrla desde VS Code

Abre la carpeta del proyecto en VS Code, abre una terminal integrada (`` Ctrl+` ``) y corre:

```bash
npm install
npx expo start
```

Esto levanta Metro y te muestra un **código QR** en la terminal:
- **Android**: abre la app **Expo Go** (Play Store) y escanea el QR directo desde la app.
- **iPhone**: abre la app de **Cámara** del iPhone y apunta al QR (te manda a abrir Expo Go automáticamente). Debes instalar Expo Go desde el App Store primero.
- Tu celular y tu computadora deben estar en la **misma red WiFi**.

Si el QR no conecta (redes universitarias/corporativas que aíslan dispositivos), corre en su lugar:

```bash
npx expo start --tunnel
```

(la primera vez instalará el paquete `@expo/ngrok`, requiere internet).

### Modo web (opcional)

```bash
npx expo start --web
```

Abre la app directo en el navegador — útil para revisar rápido sin celular, aunque el mapa y las proporciones están pensadas para móvil.

## Cómo navegar la demo

- **Login**: botón "Iniciar Sesión" o "Continuar con Google" te mete como ciudadano (no valida credenciales, es solo demo). Hasta abajo hay un link **"Acceder como Protección Civil (Admin)"** para entrar al panel administrativo.
- **Ciudadano**: tabs inferiores Inicio / Mapa / Reportar / Alertas / Perfil.
  - Desde Inicio, la campanita 🔔 lleva a Notificaciones.
  - Desde Perfil → "Mis reportes" lleva a Historial. "Cerrar sesión" regresa al Login.
- **Admin**: Dashboard con estadísticas y municipios. La sección "Reportes pendientes de validar" navega a la pantalla de Validar Reporte, donde puedes Validar / Rechazar / Enviar alerta (con alertas nativas de confirmación).

## Estructura del proyecto

```
index.js        # entry point (registerRootComponent)
App.js
app.json        # config de Expo (SDK 54, newArchEnabled)
src/
  theme/          # colores y tipografía (paleta calcada del mockup)
  data/           # mockData.js — todos los datos de ejemplo
  components/     # Button, Input, Chip, Card, TabIcon, GradientBackground
  navigation/      # RootNavigator, AuthNavigator, MainTabNavigator, AdminNavigator
  screens/
    auth/          # Login, Register
    main/          # Home, Map, Report, Alerts, Profile (tabs)
    admin/         # AdminDashboard, AdminValidate
    HistoryScreen.js
    NotificationsScreen.js
```

## Siguientes pasos sugeridos

- Conectar Login/Registro a un backend real (auth con JWT o Firebase).
- Sustituir el mapa simulado por `react-native-maps` con pines reales por coordenadas.
- Conectar "Nuevo Reporte" a un endpoint que suba foto + GPS real (expo-location / expo-image-picker).
- Persistir notificaciones/alertas con websockets o polling para tiempo real.

