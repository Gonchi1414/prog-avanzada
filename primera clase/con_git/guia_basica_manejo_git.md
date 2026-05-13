# Guía Básica de Manejo de Git (De Cero a Pull Request)

Git es un sistema de control de versiones que te permite registrar los cambios en tus archivos a lo largo del tiempo. Esta guía cubre los comandos más esenciales en el flujo de trabajo diario, culminando en la creación de un Pull Request (PR).

---

## 1. Configuración Inicial (Solo la primera vez)

Antes de empezar, necesitas decirle a Git quién eres. Esta información quedará registrada en cada commit que hagas.

```bash
git config --global user.name "Tu Nombre o Usuario"
git config --global user.email "tu@email.com"
```

---

## 2. Iniciar o Descargar un Proyecto

Tienes dos formas de empezar a trabajar con Git:

**Opción A: Clonar un repositorio que ya existe en la nube (GitHub, GitLab, etc.)**
```bash
git clone https://github.com/usuario/repositorio.git
```

**Opción B: Iniciar un repositorio desde cero en una carpeta de tu computadora**
```bash
cd ruta/a/tu/proyecto
git init
```
*(Si usas la Opción B y luego quieres subirlo a GitHub, tendrás que enlazarlo usando `git remote add origin <url-del-repo>`)*

---

## 3. El Flujo de Trabajo (Guardar Cambios)

Cuando modificas archivos, Git necesita saber cuáles quieres agrupar y guardar en el historial.

*   **Ver el estado de tus archivos (qué se modificó, qué falta añadir):**
    ```bash
    git status
    ```

*   **Añadir archivos al "área de preparación" (Staging):**
    ```bash
    git add nombre-del-archivo.html  # Añade un archivo en específico
    git add .                        # Añade TODOS los archivos modificados
    ```

*   **Guardar los cambios (Commit):**
    *(Se recomienda usar la nomenclatura de Conventional Commits vista anteriormente)*
    ```bash
    git commit -m "feat: agregar sección de contacto"
    ```

---

## 4. Ramas (Branches)

Las ramas te permiten crear un entorno aislado para trabajar en nuevas funcionalidades sin romper el código principal (que suele llamarse `main` o `master`).

*   **Ver todas las ramas locales:**
    ```bash
    git branch
    ```

*   **Crear una nueva rama y moverte a ella automáticamente:**
    ```bash
    git checkout -b feature/nueva-funcionalidad
    # (En versiones nuevas de Git también sirve: git switch -c feature/nueva-funcionalidad)
    ```

*   **Moverte a una rama que ya existe:**
    ```bash
    git checkout main
    ```

---

## 5. Sincronizar con la Nube (GitHub / GitLab)

Para no perder tu trabajo y para que tu equipo pueda ver tu código, debes subirlo al servidor remoto.

*   **Descargar actualizaciones que otros hayan hecho en la rama actual:**
    ```bash
    git pull origin main
    ```

*   **Subir tu nueva rama a la nube por primera vez:**
    ```bash
    git push -u origin feature/nueva-funcionalidad
    ```
    *(La bandera `-u` vincula tu rama local con la remota. Las siguientes veces solo necesitarás escribir `git push`)*

---

## 6. Cómo hacer un Pull Request (PR)

Un **Pull Request** (llamado *Merge Request* en GitLab) **no es un comando de la terminal**, es una funcionalidad de plataformas web como GitHub. Es una "solicitud" oficial para que alguien revise tu código antes de mezclarlo con la rama principal (`main`).

**Pasos para hacer un PR:**

1.  Asegúrate de haber guardado (commit) y subido (push) tu rama nueva al servidor.
2.  Ve a la página de tu repositorio en GitHub desde tu navegador web.
3.  GitHub detectará automáticamente que subiste una rama nueva y te mostrará un botón verde grande que dice **"Compare & pull request"**. Haz clic ahí.
4.  Se abrirá un formulario. Escribe un **título descriptivo** (puedes usar un título estilo *Conventional Commit* aquí también).
5.  En la **descripción**, explica:
    *   ¿Qué cambios hiciste?
    *   ¿Por qué los hiciste?
    *   Si es necesario, ¿cómo se puede probar tu código?
6.  En el menú lateral, asigna **Reviewers** (compañeros de equipo que deben revisar tu código) si corresponde.
7.  Haz clic en el botón verde **"Create pull request"**.

¡Felicidades! Has creado un PR. Ahora tu equipo puede revisar tu código línea por línea, dejarte comentarios, pedirte cambios y, finalmente, aprobarlo y fusionarlo (Merge) con la rama principal.
