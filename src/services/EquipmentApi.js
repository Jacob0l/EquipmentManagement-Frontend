
const BASEURL = '/api';

export async function readEquipment(id) {
    const response = await fetch(`${BASEURL}/equipment/${id}`);

    if (!response.ok) throw new Error(`Error with id ${id}, ${response.statusText}`);

    return await response.json();
}

export async function getFilterPagedEquipment({category, searchString, sortBy, sortOrder, page}) {

    const response = await fetch(`${BASEURL}/equipment/?category=${encodeURIComponent(category)}&searchString=${encodeURIComponent(searchString)}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&pageSize=20`);

    if (!response.ok){
        const error = await response.json();
        throw new Error(error.errorMessage);
    }

    return response.json();
}