import React from 'react';
import axios from 'axios';

export const ENDPOINTS={
    BASE_URL:"http://jsonplaceholder.typicode.com/",
    TODOS:"todos"

}

export const Endpoint = function Endpoint(){
    return axios.get(ENDPOINTS.BASE_URL+ ENDPOINTS.TODOS,
        {
            params: {
                _start: 0,
                _limit:5
            },
            timeout:3*60*1000,
            
        }
        )   
} 