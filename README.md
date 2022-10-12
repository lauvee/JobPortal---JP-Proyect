
Este portal de empleados es una aplicación web basada en MERN Stack que ayuda a agilizar el flujo del proceso de solicitud de empleo. Permite a los usuarios seleccionar sus roles (Candidato/reclutador) y crear una cuenta. En esta aplicación web, la sesión de inicio de sesión es persistente y las API de REST están protegidas de forma segura mediante la verificación de tokens JsonWebToken(JWT). Después de iniciar la sesión, un reclutador puede crear/borrar/actualizar empleos, preseleccionar/aceptar/rechazar solicitudes, ver el currículum y editar el perfil. Por su parte, los candidatos pueden ver los puestos de trabajo, realizar búsquedas con de varios filtros, solicitar puestos de trabajo, ver las solicitudes, subir la foto del perfil, subir el currículum y editar el perfil. Por lo tanto, es una solución todo en uno para un sistema de solicitud de empleo.

## Tecnologias utilizadas 

### Mongo | Express | React | NodeJs

### `Frontend`
- React 
  - @material-ui/core
  - @material-ui/icons
  - @material-ui/lab
  - axios
  - material-ui-chip-input
  - react-phone-input-2

### `Backend` Tipo API Rest
- bcrypt
- body-parser
- cors
- crypto
- express
- jsonwebtoken
- mongoose
- multer
- passport
- passport-jwt
- uuid
