# Proyecto hecho en Angular + Django

- Instalación del proyecto de Angular:

  ```
  cd Frontend
  npm install
  ng serve
  ```
  
- Instalación del proyecto de Django:
  - Entorno virtual:
  ```
  cd Backend
  python -m venv myenv
  .\myenv\Scripts\activate
  pip install -r requirements.txt
  ```
  - Proyecto:
  ```
  python manage.py migrate
  python manage.py runserver
  ``` 
