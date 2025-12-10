document.addEventListener('DOMContentLoaded', () => {
    getResult();
});

const getResult = async () => {
    try {
        const response = await getMethodFetch('/api/readFile');
        const result = response.result;
        const resultH1 = document.getElementById('resultH1');
        resultH1.textContent = "Eredmény: " + result;
    } catch (error) {
        throw new Error(`Hiba történt: ${error}`);
    }
}

const getMethodFetch = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`POST hiba: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Hiba történt: ${error.message}`);
    }
};

