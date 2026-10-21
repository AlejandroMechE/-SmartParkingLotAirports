# Estacionamiento Inteligente de Aeropuerto
> **Ecosistema 100% Digital / Cashless con Control de Acceso LPR, Cobro en Línea y Estética Minimalista Apple (apple.com & HIG).**  
> **Repositorio Oficial:** [GitHub - AlejandroMechE/-SmartParkingLotAirports](https://github.com/AlejandroMechE/-SmartParkingLotAirports.git)

---

## ⚡ Contexto Rápido para Desarrolladores y Agentes de IA

Toda la documentación técnica y arquitectónica se encuentra centralizada en la carpeta **[`/docs`](file:///c:/Users/icrye/OneDrive/Desktop/Integrador/docs)**:

- 📖 **[`docs/AGENT_CONTEXT.md`](file:///c:/Users/icrye/OneDrive/Desktop/Integrador/docs/AGENT_CONTEXT.md):** **Lectura obligatoria para IA.** Resumen ejecutivo de alta densidad con el stack, seguridad, diseño y reglas del sistema.
- 📐 **[`docs/PLAN_DE_DESARROLLO.md`](file:///c:/Users/icrye/OneDrive/Desktop/Integrador/docs/PLAN_DE_DESARROLLO.md):** Arquitectura integral, registro de decisiones de arquitectura (ADRs), épicas, historias de usuario, hardware edge y métricas SLO.
- 📱 **[`docs/DETALLE_PAGINAS_Y_FLUJOS.md`](file:///c:/Users/icrye/OneDrive/Desktop/Integrador/docs/DETALLE_PAGINAS_Y_FLUJOS.md):** Catálogo exhaustivo de las 74 pantallas (34 App Cliente y 40 Panel Admin), diagramas de secuencia de punta a punta y matriz de microinteracciones.
- 🚀 **[`docs/PLAN_DE_IMPLEMENTACION.md`](file:///c:/Users/icrye/OneDrive/Desktop/Integrador/docs/PLAN_DE_IMPLEMENTACION.md):** Plan detallado de scaffolding, fases de ejecución y criterios de aceptación.

---

## 🛠️ Stack Tecnológico

- **Backend:** **.NET 10 (LTS)** · Minimal APIs, Clean Architecture, CQRS (MediatR), Pomelo Entity Framework Core.
- **Base de Datos:** **Azure Database for MySQL (Flexible Server)** · Transaccional ACID, réplicas de lectura y connection pooling.
- **Frontend Móvil:** **React Native** (iOS & Android) · Integración nativa de hardware (cámara MLKit, Face ID/Touch ID, Apple Pay, Google Pay, SecureStore).
- **Frontend Web:** **React Native for Web / React** · Consola administrativa de escritorio con retículas Bento Grid estilo macOS.
- **Edge Carril:** **Python 3.11+** · Detección YOLO ONNX en Raspberry Pi, OCR local, cola SQLite offline y mTLS.

---

## 🔒 Reglas Inmutables de Seguridad

1. **Contraseñas Imposibles de Descifrar:** Hashing unidireccional con **Argon2id** ($64\text{ MB}$, $3$ iteraciones, $4$ hilos) + Salt criptográfico único de 128 bits por usuario. Imposibilidad matemática de descifrado o reversión.
2. **Cifrado de Información Sensible:**
   - **En Tránsito:** TLS 1.3 forzado y mTLS para dispositivos edge.
   - **En Reposo:** Transparent Data Encryption (TDE) en Azure Database for MySQL y cifrado por columna **AES-256-GCM** para PII.
   - **En Dispositivo:** Respaldo criptográfico en hardware con iOS Keychain (Secure Enclave) y Android Keystore (TEE).

---

## 📂 Estructura del Proyecto

```
Integrador/
├── docs/                               # 📁 Documentación unificada y contexto de IA
├── backend/                            # 📁 Solución .NET 10 LTS (Clean Architecture)
├── frontend/                           # 📁 Aplicación React Native móvil y web
│   ├── customer-mobile/                # App Cliente iOS & Android
│   └── admin-web/                      # Consola de administración
├── edge/                               # 📁 Agente de carril Python 3.11 con .venv
├── database/                           # 📁 Scripts DDL y semillas para MySQL
└── docker-compose.yml                  # Entorno local MySQL 8.0 + Redis + Adminer
```
