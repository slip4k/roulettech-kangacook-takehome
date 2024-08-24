# Getting Started

### 1. Initialize dependencies on the frontend:

Open a new terminal and run the following:

```
cd frontend
```

```
npm install
```

### 2. Initialize dependencies on the backend:

Open another terminal, and run the following

```
cd backend
```

Windows:

```
python -m venv myenv
myenv\Scripts\activate
```

Mac:

```
python3 -m venv myenv
source myenv/bin/activate
```

#### Finally:

    pip install -r requirements.txt

### 3. Run Frontend Server (port 3000)

In your frontend terminal run:

```
npm run dev
```

### 4. Run Backend Server (port 8000)

In your backend terminal run:

Windows:

```
python manage.py runserver
```

Mac:

```
python3 manage.py runserver
```

### 5. Access localhost:3000!

http://localhost:3000/