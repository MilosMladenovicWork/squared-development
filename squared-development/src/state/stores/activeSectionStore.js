import {makeAutoObservable} from 'mobx'

class ActiveSection{
  activeSectionId = undefined
  lastActiveSectionId = undefined

  constructor(){
    makeAutoObservable(this)
  }

  setActiveSectionId(id){
    this.lastActiveSectionId = this.activeSectionId
    this.activeSectionId = id
  }
}

export default new ActiveSection()