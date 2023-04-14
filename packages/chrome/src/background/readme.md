# Why I added the service worker

I added the service worker because when you change tabs you can't **know** this on the tab that you've changed to, you need a persistent layer that can emit events when the new tabs open, acting as some form of *event bus*.

You will find if you try to add listeners on content scripts such as:

```ts
chrome.tabs.onActivated.addListener(() => {
    console.log('onactived')
})
```

you will get that the tab is undefined, and if you add a window DOM loaded listener then you won't get any event as it's too late and that has already been dispatched and lost.

This garners the need for the service worker for persistent event dispatching.

So now, as we can trigger and consume events from a persistence layer, we can send this event to our content script and react to it, in our case it's sending the message that the tab has been created (manual navigation) or activated (switched to, or CSR navigated).
