# Instrucciones para ejecutar el proyecto HogarView

## 1. Instalar dependencias

Primero, necesitas instalar todas las dependencias del proyecto. En la terminal, ejecuta:

```bash
npm install
```

O si prefieres usar yarn:

```bash
yarn install
```

## 2. Ejecutar el proyecto en modo desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

## 3. Abrir en el navegador

El proyecto estará disponible en: http://localhost:3000

## 4. Solucionar errores en VSCode

Si sigues viendo errores de TypeScript en VSCode después de instalar las dependencias:

1. Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
2. Busca "TypeScript: Restart TS Server"
3. Selecciona esa opción

Esto reiniciará el servidor de TypeScript y debería resolver los errores.

## Características implementadas

✅ **Página centrada**: Todo el contenido está centrado con un ancho máximo de 7xl
✅ **Secciones de industria**: Los botones "Conocer más" redirigen a secciones detalladas con:
  - Beneficios específicos de cada industria
  - Cómo funciona el sistema paso a paso
  - Imágenes ilustrativas

### Industrias incluidas:
- Retail
- Industria
- Consorcios
- Rural
- Casas de Campo
- Barrios Cerrados
- Shopping Centers

## Reemplazar imágenes

Para usar tus propias imágenes de Microsoft Drive:

1. Las imágenes están en la carpeta `public/`
2. Reemplaza cada archivo con tus imágenes manteniendo los mismos nombres
3. O actualiza las rutas en los componentes correspondientes

Las imágenes actuales son:
- modern-security-surveillance-dashboard-with-ai-ana.jpg
- modern-retail-store-with-security-cameras.jpg
- industrial-factory-floor-with-safety-monitoring.jpg
- modern-apartment-building-lobby-with-security.jpg
- farm-rural-property-with-surveillance.jpg
- country-house-with-security-system.jpg
- gated-community-entrance-with-security.jpg
- shopping-mall-interior-with-crowd-analytics.jpg
```
