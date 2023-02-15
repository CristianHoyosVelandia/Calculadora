import {COLUMN_NAME_SHOPS} from "./constants"

const getColumNameByLan = (lan) => COLUMN_NAME_SHOPS[lan.toLowerCase()];

export default getColumNameByLan;