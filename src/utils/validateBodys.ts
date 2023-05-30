import { ICreateScheduleBody } from "../types/Schedule";
import { ICreateUserData } from "../types/User";
import { ICreateClientData } from "../types/Client";

export function validateCreateUserBody(user: ICreateUserData) {
    if(!user.email) {
        const res = {
            message: 'E-mail é obrigatorio!',
            error: true
        }

        return res;
    }
    if(!user.name) {
        const res = {
            message: 'Nome é obrigatorio!',
            error: true
        }

        return res;
    }
    if(!user.password) {
        const res = {
            message: 'Senha é obrigatorio!',
            error: true
        }

        return res;
    }

    if(!user.document) {
        const res = {
            message: 'CPF é obrigatorio!',
            error: true
        }

        return res;
    }
    
    return {
        error: false,
        message: ''
    };
}

export const validateCreateClientBody = async (client: ICreateClientData) => {
    let requiredFields = [
        "name",
        "email",
        "address",
        "document"
    ];

    for(let field of requiredFields) {
        if(!client[field as keyof ICreateClientData]) return {
            error: true,
            message: `Campo "${field}" é obrigatorio`
        }
    }
    
    return {
        error: false,
        message: ''
    };
}


export function validateCreateScheduleBody(schedule: ICreateScheduleBody) {
    if(!schedule.name) {
        const res = {
            message: 'Nome é obrigatorio!',
            error: true
        }

        return res;
    }

    if(!schedule.data || schedule.data == 'Invalid Date') {
        const res = {
            message: 'Data é obrigatoria!',
            error: true
        }

        return res;
    }

    return {
        error: false,
        message: ''
    }
}