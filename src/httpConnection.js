const httpConnection =  {
    httpJsonConnection : async (url, body) => {
        let sendData = JSON.stringify(body);
        let json = await fetch(url, {
            method: 'POST',
            body: sendData,
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .catch(err => console.log(`${err}`));
        return json;
    }
}

export default httpConnection;