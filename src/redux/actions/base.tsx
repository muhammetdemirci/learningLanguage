import { RESET_REDUCER, CHANGE_REDUCER } from "../types";
// api imports
// import {SERVER_URL} from '../../constants/config';
// import {store} from '../../redux/store';
// import { getLocale } from "../../localization";
// import {showFlashMessage} from '../../components/flashMessage/message';

class ActionBase {
  constructor(stateKey: string, path?: string) {
    this.stateKey = stateKey;
    if (path) this.path = path;
  }
  // redux
  stateKey = "";
  path = "";
  resetReducer = (props?: object | null) => (dispatch: Function) => {
    dispatch({
      type: RESET_REDUCER(this.stateKey),
      ...props,
    });
  };

  changeReducer = (props?: object | null) => (dispatch: Function) => {
    dispatch({
      type: CHANGE_REDUCER(this.stateKey),
      ...props,
    });
  };

  // // API call
  // getUrl(endpoint: string) {
  //   return SERVER_URL + this.path + endpoint;
  // }

  // async getHeaders(isLoginRequired: boolean) {
  //   var tokenHeader = {};
  //   if (isLoginRequired) {
  //     tokenHeader = {authorization: 'Bearer ' + store.getState().auth.token};
  //   }
  //   return {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     "accept-language": await getLocale(),
  //     ...tokenHeader,
  //   };
  // }

  // async postBase(
  //   endpoint: string,
  //   data: object,
  //   isLoginRequired = true,
  //   method = 'POST',
  // ) {
  //   const url = this.getUrl(endpoint);
  //   // console.log(method, url);
  //   try {
  //     const res = await fetch(url, {
  //       method,
  //       headers: await this.getHeaders(isLoginRequired),
  //       body: JSON.stringify(data),
  //     });
  //     const json = await res.json();
  //     // console.log('json', json);
  //     this.showAlert(json);

  //     return json;
  //   } catch (error) {
  //     console.error(`ERROR :: ${method} REQUEST :: URL :: `, url);
  //     console.error(`ERROR :: ${method} REQUEST :: `, error);
  //   }

  //   return {};
  // }

  // async post(endpoint: string, data: object, isLoginRequired: boolean = true) {
  //   return await this.postBase(endpoint, data, isLoginRequired, 'POST');
  // }
  // async put(endpoint: string, data: object, isLoginRequired: boolean = true) {
  //   return await this.postBase(endpoint, data, isLoginRequired, 'PUT');
  // }
  // async delete(
  //   endpoint: string,
  //   data: object,
  //   isLoginRequired: boolean = true,
  // ) {
  //   return await this.postBase(endpoint, data, isLoginRequired, 'DELETE');
  // }

  // async get(endpoint: string, isLoginRequired: boolean = true) {
  //   const url = this.getUrl(endpoint);
  //   // console.log("GET", url);

  //   try {
  //     const res = await fetch(url, {
  //       method: 'GET',
  //       headers: await this.getHeaders(isLoginRequired),
  //     });
  //     const json = await res.json();
  //     this.showAlert(json);
  //     return json;
  //   } catch (error) {
  //     console.error('ERROR :: POST REQUEST :: URL :: ', url);
  //     console.error('ERROR :: POST REQUEST :: ', error);
  //   }
  //   return null;
  // }

  // showAlert(json: any) {
  //   if (json.message) {
  //     // TODO localization
  //     if (json.success) showFlashMessage('success', json.message);
  //     else showFlashMessage('danger', json.message);
  //   }
  // }
}

export { ActionBase };
