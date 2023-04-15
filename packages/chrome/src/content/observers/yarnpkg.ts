import { SharedObserverMethods } from "./shared";

export class YarnPkgObserver extends SharedObserverMethods { 
    constructor () {
      super(
        'yarnpkg.com',
        document.querySelectorAll('main'),
        { characterData: true, subtree: true }
      );
      this.connect();
    }
    
    private isYarnPkg () {
        return window.location.href.includes('yarnpkg.com');
    }

    private connect () {
        if (this.isYarnPkg()) {
            this.observer = new MutationObserver(() => {
                const yarnPkgCmd = document.querySelectorAll('section > code > span')[0]
                const yarnPkgCmdText = yarnPkgCmd?.textContent
            
                if (yarnPkgCmdText !== null) {            
                  this.triggerUpdate();
                }   
            })
        }
    }
}