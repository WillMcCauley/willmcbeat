const PAYMENT_LINKS = {
  paypal: {
    // Add public PayPal checkout/payment links here. Never add secret keys to this static site.
    custom: "",
    lease: "",
    exclusive: ""
  },
  fiverr: ""
};

const instagramBase = "https://www.instagram.com/willmcbeat/";
const contactEmail = "willmcbeat@gmail.com";
const orderDialog = document.querySelector("#orderDialog");
const orderSummary = document.querySelector("#orderSummary");
const instagramOrder = document.querySelector("#instagramOrder");
const paypalOrder = document.querySelector("#paypalOrder");
const fiverrOrder = document.querySelector("#fiverrOrder");
const requestMessage = document.querySelector("#requestMessage");
const copyRequest = document.querySelector("#copyRequest");
const artistName = document.querySelector("#artistName");
const beatInfo = document.querySelector("#beatInfo");

const packageKeys = {
  "Custom Beat Lease": "custom",
  "YouTube Beat Lease": "lease",
  "Exclusive Ownership": "exclusive"
};

let selectedPackage = "";
let selectedPrice = "";

function buildMessage() {
  const artist = artistName.value.trim() || "Artist name:";
  const details = beatInfo.value.trim() || "Beat/request:";
  return `I want to order the ${selectedPackage} for ${selectedPrice}. ${artist}. ${details}`;
}

function setDisabledLink(link, label) {
  link.href = "#";
  link.textContent = label;
  link.classList.add("is-disabled");
  link.setAttribute("aria-disabled", "true");
}

function setActiveLink(link, href, label) {
  link.href = href;
  link.textContent = label;
  link.classList.remove("is-disabled");
  link.removeAttribute("aria-disabled");
}

function setOrderLinks() {
  const paymentKey = packageKeys[selectedPackage];
  const paypalLink = PAYMENT_LINKS.paypal[paymentKey];
  requestMessage.textContent = buildMessage();

  instagramOrder.href = instagramBase;
  instagramOrder.textContent = "Message on Instagram";

  if (paypalLink) {
    setActiveLink(paypalOrder, paypalLink, "Pay with PayPal");
  } else {
    const emailSubject = encodeURIComponent(`${selectedPackage} order`);
    const emailBody = encodeURIComponent(buildMessage());
    setActiveLink(paypalOrder, `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`, "Email to order");
  }

  if (PAYMENT_LINKS.fiverr) {
    setActiveLink(fiverrOrder, PAYMENT_LINKS.fiverr, "Order on Fiverr");
  } else {
    setDisabledLink(fiverrOrder, "Fiverr not connected");
  }
}

document.querySelectorAll(".buy-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPackage = button.dataset.package;
    selectedPrice = button.dataset.price;
    orderSummary.textContent = `${selectedPackage} - ${selectedPrice}. Add your artist name and beat details, then message WillMcBeat or use a connected payment link.`;
    artistName.value = "";
    beatInfo.value = "";
    setOrderLinks();
    orderDialog.showModal();
  });
});

[artistName, beatInfo].forEach((field) => {
  field.addEventListener("input", setOrderLinks);
});

copyRequest.addEventListener("click", async () => {
  await navigator.clipboard.writeText(buildMessage());
  copyRequest.textContent = "Request copied";
  window.setTimeout(() => {
    copyRequest.textContent = "Copy request message";
  }, 1600);
});

[paypalOrder, fiverrOrder].forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
    }
  });
});
