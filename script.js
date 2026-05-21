const PAYMENT_LINKS = {
  paypal: {
    lease: "https://www.paypal.com/ncp/payment/7NS4W3SBCCJ34",
    exclusive: "https://www.paypal.com/ncp/payment/7TRKQAGHNQ2T6"
  }
};

const contactEmail = "willmcbeat@gmail.com";
const orderDialog = document.querySelector("#orderDialog");
const orderSummary = document.querySelector("#orderSummary");
const emailOrder = document.querySelector("#emailOrder");
const paypalOrder = document.querySelector("#paypalOrder");
const requestMessage = document.querySelector("#requestMessage");
const copyRequest = document.querySelector("#copyRequest");
const artistName = document.querySelector("#artistName");
const beatInfo = document.querySelector("#beatInfo");

const packageKeys = {
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
  const emailSubject = encodeURIComponent(`${selectedPackage} beat details`);
  const emailBody = encodeURIComponent(buildMessage());
  requestMessage.textContent = buildMessage();
  emailOrder.href = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;

  if (paypalLink) {
    setActiveLink(paypalOrder, paypalLink, "Pay with PayPal");
  } else {
    setDisabledLink(paypalOrder, "PayPal not connected");
  }
}

document.querySelectorAll(".buy-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPackage = button.dataset.package;
    selectedPrice = button.dataset.price;
    orderSummary.textContent = `${selectedPackage} - ${selectedPrice}. Send the beat title or YouTube link by email, then complete checkout with PayPal.`;
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

paypalOrder.addEventListener("click", (event) => {
  if (paypalOrder.getAttribute("aria-disabled") === "true") {
    event.preventDefault();
  }
});
