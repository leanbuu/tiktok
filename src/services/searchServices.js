
import * as request from '../utils/httprequest';

export const search = async (q, type= 'less') => {
    try {
        const res = await request.get('users/search',  {
            params: {
                q,
                type: 'less'
            }
        });
        return res.data;
    } catch (error) {  
        console.log(error)
    }
};