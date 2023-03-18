export async function sendGetRequest(url, params) {
    try {
        let urlWithParams;
        if (params) {
            let queryParams = new URLSearchParams(params);
            urlWithParams = `${url}?${queryParams.toString()}`;
         } else {
            urlWithParams = `${url}`;
         }

         let response = await fetch(urlWithParams, {
             method: 'GET',
        })
        if (response.ok) {
            let data = await response.json();
            console.log('Success:', data)
            return data
        } else {
            console.error(`Error, response status: ${response.status}`);
            return null;
        }
    } catch (err) {
        console.error('Error:', err)
        return null;
    }
}

export async function sendPostRequest(url, body) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            let data = await response.json();
            console.log('Success:', data)
            return data
        } else {
            console.error(`Error, response status: ${response.status}`);
            return null;
        }
    } catch (err) {
        console.error('Error:', err)
        return null;
    }
}

