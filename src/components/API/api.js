// const URL = 'https://todolist-backend-8k4i.onrender.com/tarefas';
const URL = 'http://localhost:3000/tarefas';

const GET = async () => {
    try {
        const response = await fetch(URL, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("API ERRO: ", error);
    }
}

const POST = async (tarefa) => {
    try {
        const response = await fetch(URL, {
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(tarefa),
            method: "POST"
        });
        return response;
    } catch (error) {
        console.log("API ERRO: ", error);
    }
}

const PUT = async (tarefa) => {
    try {
        const response = await fetch(URL, {
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(tarefa),
            method: "PUT"
        });
        return response;
    } catch (error) {
        console.log("API ERRO: ", error);
    }
}

const DELETE = async (tarefa) => {
    try {
        const response = await fetch(URL, {
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(tarefa),
            method: "DELETE"
        });
        return response;
    } catch (error) {
        console.log("API ERRO: ", error);
    }
}

export {GET, POST, PUT, DELETE};