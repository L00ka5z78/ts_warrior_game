import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_arena',
    port: 3306,
    // port: 3305,      //bez wpisanie portu nie dziala errconrefused
    namedPlaceholders: true,
    decimalNumbers: true,
})