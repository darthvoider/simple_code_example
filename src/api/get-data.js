export const getData = async () => {
    const response = await fetch('./assets/data.json');
    const res = await response.json();
    return new Promise(resolve => setTimeout(() => resolve(res), 2000))
};
