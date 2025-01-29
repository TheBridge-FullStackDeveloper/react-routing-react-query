const getBanderaDetails = async (name) =>{
    
        const url = `https://restcountries.com/v3.1/name/${name}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json()
            return data[0]
        } catch (error) {
            console.error(error.message);
        }

}

export default getBanderaDetails