import { EventHub } from '../event'

export class Highlight {
  
  constructor(eventHub: EventHub) {
    eventHub.listen('container-changed', this.handle)
  }
  
  handle(): void {
    if (!window.hljs) return
    const blocks: NodeListOf<Element> = document.querySelectorAll('pre')
    Array.from(blocks).forEach(code => {
      window.hljs.highlightBlock(code)
    })
  }
  
}

