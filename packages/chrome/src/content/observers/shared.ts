import { preferredPackageManager } from "@chrome/src/storage";
import { contentLogger } from "@chrome/src/utils";
import { updateCopyToClipboardButton } from "../command/updateCopyToClipboardButton";
import { updateCommandFromStore } from "../command/updateCommandFromStore";


export class SharedObserverMethods {
    protected observer: MutationObserver | null = null;
    protected siteName: string;
    private nodeToObserve: NodeListOf<HTMLElement>;
    /**
     * @link https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe
     */
    private observerOptions?: MutationObserverInit;

    constructor (siteName: string, nodeToObserve: NodeListOf<HTMLElement>, observerOptions?: MutationObserverInit) {
      this.siteName = siteName;
      this.nodeToObserve = nodeToObserve;
      this.observerOptions = observerOptions;
    }

    public disconnect () {
        if (this.observer != null) {
            contentLogger('info', 'removing observer')
            this.observer.disconnect()
        }
    } 

    public observe () {
      console.log("observer", this.observer);
      if (this.observer !== null) {
        const availableDOM = this.nodeToObserve;

        console.log("dom", availableDOM);

        if (availableDOM.length !== 0) {
          contentLogger('info', 'observer attached')
      
          availableDOM.forEach((node) => {
              (this.observer as MutationObserver).observe(node, this.observerOptions)
          })
        }
      }
    }

    protected triggerUpdate (timeout: number = 1500) {
      contentLogger('info', `found ${this.siteName} cmd text, triggering update handler`)

      updateCommandFromStore(timeout, updateCopyToClipboardButton.fromButton);
    }
}