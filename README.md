# InvestigadoresWebApp

This project is a web application that uses Django as the backend, React as the frontend, and TailwindCSS for styling. The application includes a menu of options that redirects to different modules, each with its own view.

## Project Structure

```
InvestigadoresWebApp/
├── .gitignore
├── manage.py
├── requirements.txt
├── venv/
├── backend/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── webapp/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations/
│   ├── models.py
│   ├── templates/
│   ├── tests.py
│   └── views.py
├── frontend/
│   ├── README.md
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
```

## Requirements

- Python 3.8+
- Node.js 14+
- npm 6+

## Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/amirmx2905/investigadoresWebApp.git
cd InvestigadoresWebApp
```

### 2. Set Up the Backend (Django)

#### Create and activate a virtual environment

##### macOS and Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

##### Windows

```bash
python -m venv venv
.\venv\Scripts\activate
```

#### Install dependencies

```bash
pip install -r requirements.txt
```

#### Apply migrations and run the server

Make sure you are in the root directory of the project (where `manage.py` is located) before running these commands:

```bash
python manage.py migrate
python manage.py runserver
```

### 3. Set Up the Frontend (React)

#### Navigate to the `frontend` directory and install dependencies

```bash
cd frontend
npm install
```

#### Start the development server

```bash
npm start
```

## Add New Pages

### Backend (Django)

1. **Create a new view** in `webapp/views.py`:
    ```python
    from django.shortcuts import render

    def new_page(request):
        return render(request, 'new_page.html')
    ```

2. **Add a URL** in `webapp/urls.py`:
    ```python
    from django.urls import path
    from . import views

    urlpatterns = [
        path('new_page/', views.new_page, name='new_page'),
    ]
    ```

3. **Create a template** in `webapp/templates/new_page.html`:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>New Page</title>
    </head>
    <body>
        <h1>Welcome to the New Page</h1>
        <a href="{% url 'menu' %}">Back to Menu</a>
    </body>
    </html>
    ```

### Frontend (React)

1. **Create a new component** in `src/components/NewPage.js`:
    ```javascript
    import React from 'react';
    import { Link } from 'react-router-dom';

    const NewPage = () => {
      return (
        <div className="new-page">
          <h1 className="text-2xl font-bold">Welcome to the New Page</h1>
          <Link to="/">Back to Menu</Link>
        </div>
      );
    };

    export default NewPage;
    ```

2. **Add a route** in `src/App.js`:
    ```javascript
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Menu from './components/Menu';
    import Module from './components/Module';
    import NewPage from './components/NewPage';

    const App = () => {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/:name" element={<Module />} />
            <Route path="/new_page" element={<NewPage />} />
          </Routes>
        </Router>
      );
    };

    export default App;
    ```

## Style Pages with TailwindCSS

1. **Add TailwindCSS classes** to React components:
    ```javascript
    const NewPage = () => {
      return (
        <div className="new-page p-4">
          <h1 className="text-2xl font-bold text-blue-500">Welcome to the New Page</h1>
          <Link to="/" className="text-blue-700 underline">Back to Menu</Link>
        </div>
      );
    };
    ```

2. **Modify the Tailwind configuration file (`tailwind.config.js`)** if necessary:
    ```javascript
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

## Contributing

1. **Clone the repository** and create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
2. **Make the changes** and commit them (`git commit -m 'Add some AmazingFeature'`).
3. **Push to the branch** (`git push origin feature/AmazingFeature`).
4. Create a **Pull Request**.

Thank you for contributing!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
