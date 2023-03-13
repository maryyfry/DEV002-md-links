# Markdown Links


Markdown links es una biblioteca para examinar archivos tipo markdown, a través de rutas ingresadas en la de la línea de comando (CLI) en la terminak, las cuales pueden ser archivos unitarios o directorios que contengan archivos con extensión .md. Esta nos permite obtener estadísticas de los links únicos, totales y rotos de los enlaces encontrados, información sobre el estado de los links a través de peticiones HTTP, así como datos generales.



## 1. Diagrama de flujo





### 2. Resumen

La aplicación se ejecuta de la siguiente manera a través de la terminal:

md-links <path-to-file> [options]

Argumentos
path: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es relativa, debe resolverse como relativa al directorio desde donde se invoca node - current working directory).
options: Un objeto con únicamente la siguiente propiedad:
validate: Booleano que determina si se desea validar los links encontrados.
Valor de retorno
Con validate:false :

href: URL encontrada.
text: Texto que aparecía dentro del link (<a>).
file: Ruta del archivo donde se encontró el link.
Con validate:true :

href: URL encontrada.
text: Texto que aparecía dentro del link (<a>).
file: Ruta del archivo donde se encontró el link.
status: Código de respuesta HTTP.
ok: Mensaje fail en caso de fallo u ok en caso de éxito.




