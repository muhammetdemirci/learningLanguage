import { REDUCERS } from "../types";
import { ActionBase } from "./base";

class AppModel extends ActionBase {}

const app = new AppModel(REDUCERS.app);

export { app };
