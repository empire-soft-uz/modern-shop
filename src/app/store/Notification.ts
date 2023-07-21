
import { toast } from 'react-toastify';

export class Notifocation {

    static error = (message: string) => {
        toast.error(message);
    }

    static success = (message: string) => {
        toast.success(message);
    }
}