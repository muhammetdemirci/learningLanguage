import { REDUCERS } from "../types";
import { ActionBase } from "./base";

class StatusModel extends ActionBase {}

const status = new StatusModel(REDUCERS.status);

export { status };
