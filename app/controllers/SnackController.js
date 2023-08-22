import { AppState } from "../AppState.js"
import { snacksService } from "../services/SnackServices.js"
import { setHTML } from "../utils/Writer.js"



export class SnackController {

  constructor() {
    console.log('hello')
    this.addFunds()

  }

  addFunds() {
    console.log('getting funds')
    snacksService.getFunds()
  }

  drawFunds() {
    const funds = AppState.funds
    setHTML('my funds', funds)
  }

  drawSnackList() {
    const snacks = AppState.snacks
    let listContent = ''
    snacks.forEach(s => listContent += s.listTemplate)
    // console.log(listContent)
    setHTML('snack-list', listContent)
  }

}

