import { contentLogger } from "@chrome/src/utils"
import { SharedObserverMethods } from "./shared";

export class NpmJsObserver extends SharedObserverMethods { 
    constructor () {
        super(
          'npmjs.com',
          document.querySelectorAll('article'),
          { subtree: true, characterData: true, characterDataOldValue: true, attributes: true, childList: true }
          );
        this.connect();
    }

    private isNpmjs () {
        contentLogger('info', window.location.href);
        contentLogger('info', 'hit the npmjs checker')
        return window.location.href.includes('npmjs.com');
    }

    private connect () {
        if (this.isNpmjs()) {
            // on initial render.
            this.triggerUpdate();
            this.observer = new MutationObserver(() => {
                const npmjsCmd = document.querySelector('code > span') // this exists on yarnpkg also!
                const npmjsCmdText = npmjsCmd?.textContent
            
                console.log('npmjscmd', npmjsCmdText);
                if (npmjsCmdText !== null) {
                  this.triggerUpdate();
                }   
            })
        }
    }
}