# Will McBeat Producer Website

Static GitHub Pages site for Will McBeat.

## Files

- `index.html` - page content
- `styles.css` - layout and visual design
- `script.js` - PayPal/email order behavior
- `ProdIcon.png` - producer logo
- `arctic-willmcbeat.png` - arctic hero image
- `CustomPackage.png` - custom beat lease package image
- `LeasePackage.png` - YouTube beat lease package image
- `OwnershipPackage.png` - exclusive ownership package image

## Checkout

The custom beat package links to Fiverr:

- `http://www.fiverr.com/s/WEaB4p5`

The YouTube beat lease and exclusive ownership packages collect the buyer's beat title/link into a `mailto:` email to `willmcbeat@gmail.com`, then link to PayPal checkout.

PayPal links are configured in `script.js`:

```js
const PAYMENT_LINKS = {
  paypal: {
    lease: "https://www.paypal.com/ncp/payment/7NS4W3SBCCJ34",
    exclusive: "https://www.paypal.com/ncp/payment/7TRKQAGHNQ2T6"
  }
};
```

Do not put PayPal secret keys, passwords, bank logins, or API secrets in this site. GitHub Pages is public.

## GitHub Pages setup

1. Create a GitHub repository.
2. Upload the contents of this folder.
3. In GitHub, go to Settings > Pages.
4. Set the source to your main branch and root folder.
5. Save, then wait for GitHub to publish the site.
