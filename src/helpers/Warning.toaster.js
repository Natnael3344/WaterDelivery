// @flow
import { AlertHelper } from './AlertHelper';

export const WarningToaster = (message, description) => {
    let msg     =   '';

    if(typeof message != 'undefined' && typeof description === 'undefined')
    {
        msg =   message;
    }
    else if(typeof message === 'undefined' && typeof description != 'undefined')
    {
        msg =   description;
    }
    else if(typeof message != 'undefined' && typeof description != 'undefined')
    {
        msg =   description;
    }

    AlertHelper.show('success', '', msg)
}
