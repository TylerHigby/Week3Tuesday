import { AppState } from "../AppState.js";



class SnackService {
  getFunds() {
    let funds = AppState.money
    AppState.money += .25
    console.log(funds)
  }
}

export const snacksService = new SnackService()