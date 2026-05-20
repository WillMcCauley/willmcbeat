# Will McBeat Producer Website

Static GitHub Pages site for Will McBeat.

## Files

- `index.html` - page content
- `styles.css` - layout and visual design
- `script.js` - purchase button behavior and payment link config
- `ProdIcon.png` - producer logo
- `arctic-willmcbeat.png` - arctic hero image
- `CustomPackage.png` - custom beat lease package image
- `LeasePackage.png` - YouTube beat lease package image
- `OwnershipPackage.png` - exclusive ownership package image

## Payment recommendation

For GitHub Pages, use PayPal payment links or PayPal hosted buttons instead of private checkout credentials.

Best options:

1. PayPal payment links, PayPal.me links, or hosted PayPal buttons for each package.
2. Fiverr gig/package link if you want Fiverr to handle payment, delivery, and buyer messaging.
3. Bank wire only for special direct clients, because it is slower and less customer-friendly for beat sales.

To connect payments, open `script.js` and replace the empty strings with public PayPal links:

```js
const PAYMENT_LINKS = {
  paypal: {
    custom: "https://www.paypal.com/ncp/payment/JU8R489JH2MDG",
    lease: "https://www.paypal.com/ncp/payment/7NS4W3SBCCJ34",
    exclusive: "https://www.paypal.com/ncp/payment/7TRKQAGHNQ2T6"
  },
  fiverr: "https://www.fiverr.com/YOURUSERNAME/YOUR-GIG"
};
```

Do not put PayPal secret keys, passwords, bank logins, or API secrets in this site. GitHub Pages is public.

If using PayPal developer checkout buttons instead of links, the only safe value to put in the browser is your public PayPal Client ID. A server would be required to safely use a PayPal Secret.

## GitHub Pages setup

1. Create a GitHub repository.
2. Upload the contents of this folder.
3. In GitHub, go to Settings > Pages.
4. Set the source to your main branch and root folder.
5. Save, then wait for GitHub to publish the site.
