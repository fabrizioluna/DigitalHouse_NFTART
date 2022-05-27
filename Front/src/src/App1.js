export const httpRequest = () => {
    const customFetch = (endpoint) => {         
        return fetch(endpoint)
                .then((res)=> res.ok
                    ? res.json()
                    : Promise.reject({
                        err: true,
                        status: res.status || "00",
                        statusText: res.statusText || "Ocurrió un error"
                    })  
                )
                .catch((err) => err)
    }
    const get = ( url ) => customFetch(url);

    return { get }
}