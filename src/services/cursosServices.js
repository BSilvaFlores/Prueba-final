const getCursos = async (curso) => {
    try {
        let response = await fetch(`/cursos/${curso}.json`);
        let data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}

export default getCursos