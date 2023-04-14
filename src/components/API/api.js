const GET = async () => {
    try {
        let url = 'http://localhost:3000/tarefas';
        const response = await fetch(url, {
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
        let url = 'http://localhost:3000/tarefas';
        const response = await fetch(url, {
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(tarefa),
            method: "POST"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("API ERRO: ", error);
    }
}

const PUT = async (tarefa) => {
    try {
        let url = 'http://localhost:3000/tarefas';
        const response = await fetch(url, {
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(tarefa),
            method: "PUT"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("API ERRO: ", error);
    }
}

const DELETE = async (tarefa) => {
    try {
        let url = 'http://localhost:3000/tarefas';
        const response = await fetch(url, {
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(tarefa),
            method: "DELETE"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("API ERRO: ", error);
    }
}

export {GET, POST, PUT, DELETE};