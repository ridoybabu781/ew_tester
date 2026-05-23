import express from 'express';

const app = express();

export  function getRequest(
    url,
    headers
){
    try {
        return fetch(url, {
            method: 'GET',
            headers: headers
        })
    } catch (error) {
        console.error('Error:', error);
    }

}

export  function postRequest(
    url,
    headers,
    body
){
    try {
        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
    } catch (error) {
        console.error('Error:', error);
    }
}


export   function putRequest(
    url,
    headers,
    body
){
    try {
        return fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(body)
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

export  function deleteRequest(
    url,
    headers,
    body
){
    try {
        return fetch(url, {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify(body)
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

export  function patchRequest(
    url,
    headers,
    body
){
    try {
        return fetch(url, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(body)
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

