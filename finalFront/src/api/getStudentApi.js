export const getStudentApi = async() => {
    try {
        const response = await fetch("http://localhost:8080/getStudent")
        if (response.ok) {
            const data = response.json()
            return data
        }else{
            throw new Error("Aucun etudiant trouver lors de la requetes !!!!")
        }
    } catch (error) {
        console.log(error);
    }
}