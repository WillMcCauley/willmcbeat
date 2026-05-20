# WillMcBeat Producer Website

Static GitHub Pages site for WillMcBeat.

## Files

- `index.html` - page content
- `styles.css` - layout and visual design
- `script.js` - purchase button behavior and payment link config
- `assets/ProdIcon.png` - producer logo

## Payment recommendation

For GitHub Pages, use payment links instead of a custom checkout backend.

Best options:

1. PayPal payment links or PayPal.me links for each package.
2. Fiverr gig/package link if you want Fiverr to handle payment, delivery, and buyer messaging.
3. Bank wire only for special direct clients, because it is slower and less customer-friendly for beat sales.

To connect payments, open `script.js` and replace the empty strings:

```js
const PAYMENT_LINKS = {
  paypal: {
    custom: "https://paypal.me/YOURNAME/10",
    lease: "https://paypal.me/YOURNAME/5",
    exclusive: "https://paypal.me/YOURNAME/25"
  },
  fiverr: "https://www.fiverr.com/YOURUSERNAME/YOUR-GIG"
};
```

## GitHub Pages setup

1. Create a GitHub repository.
2. Upload the contents of this folder.
3. In GitHub, go to Settings > Pages.
4. Set the source to your main branch and root folder.
5. Save, then wait for GitHub to publish the site.
