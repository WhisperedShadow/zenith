export const eventCollector= async (type) =>{
    const res = await fetch("https://zenith-backend-azure.vercel.app/data");
    const data = await res.json();
    const filteredData = data.filter((event) => event.type === type);
    return filteredData;
}

export const eventCollect= async (id) =>{
    const res = await fetch("https://zenith-backend-azure.vercel.app/data");
    const data = await res.json();
    const filteredData = data.filter((event) => event.name === decodeURI(id));
    return filteredData[0];
}