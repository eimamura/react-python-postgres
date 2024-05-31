# react-python-postgres

This repository contains a project that combines React, Python, and PostgreSQL.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/eimamura/react-python-postgres.git
    ```

2. Install the required dependencies for the React frontend:

    ```bash
    cd react-python-postgres/frontend
    npm install
    ```

3. Install the required dependencies for the Python backend:

    ```bash
    cd ../backend
    pip install -r requirements.txt
    ```

4. Set up the PostgreSQL database:

    - Create a new database named `react_python_postgres`.
    - Update the database connection details in `backend/config.py`.

5. Start the React frontend:

    ```bash
    cd ../frontend
    npm start
    ```

6. Start the Python backend:

    ```bash
    cd ../backend
    python app.py
    ```

7. Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage

- Use the React frontend to interact with the application.
- The Python backend provides the necessary APIs for data retrieval and manipulation.
- The PostgreSQL database stores the application data.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.