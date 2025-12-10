document.addEventListener('DOMContentLoaded', () => {
    szorzatCucc();
});

const szorzatCucc = async () => {
    try{
        const response = await getMethodFetch('/api/szorzat');
        const szorzat = response.result;
        const szorzatPlace = document.getElementById("szorzatPlace");
        szorzatPlace.innerHTML = szorzat;
    } catch (error) {
        throw new Error(`Hiba történt: ${error.message}`);
    }
};


const getMethodFetch = async (url) => {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`POST hiba: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Hiba történt: ${error.message}`);
    }
}
