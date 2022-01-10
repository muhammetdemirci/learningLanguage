import { REDUCERS } from "../types";
import { ActionBase } from "./base";

class FirebaseModel extends ActionBase {}

const firebase = new FirebaseModel(REDUCERS.firebase);

export { firebase };
