
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import {
  createAuthenticatedClient,
  isFinalizedGrant,
} from "@interledger/open-payments";

const app = express();
const PORT = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/api/productos", (req, res) => {
  res.sendFile(path.join(__dirname, "productos.json"));
});

const clientPromise = createAuthenticatedClient({
  walletAddressUrl: "https://ilp.interledger-test.dev/platzilizmxn",
  privateKey: "private.key",
  keyId: "96cf1572-00ef-4c29-8c37-a3f38e830db7",
});


function toMinorUnits(amount, assetScale) {
  return Math.round(parseFloat(amount) * Math.pow(10, assetScale)).toString();
}

// Manejo centralizado de errores
function handleError(res, step, err) {
  console.error(`❌ Error en ${step}:`);
  console.dir(err, { depth: null });
  return res.status(500).json({
    error: `Error en ${step}`,
    details: err.response?.data || err.message || err,
  });
}


app.post("/api/pagar", async (req, res) => {
  const { amount } = req.body;
  console.log("Body recibido:", req.body);

  const numericAmount = Number(amount);
  if (isNaN(numericAmount)) {
    console.error("❌ Amount no es un número válido:", amount);
    return res.status(400).json({ error: "Amount no es un número válido" });
  }

  try {
    const client = await clientPromise;

    // Obtener wallets
    const sendingWalletAddress = await client.walletAddress.get({
      url: "https://ilp.interledger-test.dev/platzilizmxn",
    });
    const receivingWalletAddress = await client.walletAddress.get({
      url: "https://ilp.interledger-test.dev/platziandres",
    });

    const minorUnitsValue = toMinorUnits(numericAmount, receivingWalletAddress.assetScale);

    // Step 1: Grant incoming payment
    const incomingPaymentGrant = await client.grant.request(
      { url: receivingWalletAddress.authServer },
      {
        access_token: {
          access: [
            { type: "incoming-payment", actions: ["read", "complete", "create"] },
          ],
        },
      }
    );

    // Step 2: Crear incoming payment
    const incomingPayment = await client.incomingPayment.create(
      {
        url: receivingWalletAddress.resourceServer,
        accessToken: incomingPaymentGrant.access_token.value,
      },
      {
        walletAddress: receivingWalletAddress.id,
        incomingAmount: {
          assetCode: receivingWalletAddress.assetCode,
          assetScale: receivingWalletAddress.assetScale,
          value: minorUnitsValue,
        },
      }
    );

    // Step 3: Grant quote
    const quoteGrant = await client.grant.request(
      { url: sendingWalletAddress.authServer },
      {
        access_token: {
          access: [{ type: "quote", actions: ["create", "read"] }],
        },
      }
    );

    // Step 4: Crear quote
    const quote = await client.quote.create(
      {
        url: sendingWalletAddress.resourceServer,
        accessToken: quoteGrant.access_token.value,
      },
      {
        walletAddress: sendingWalletAddress.id,
        receiver: incomingPayment.id,
        method: "ilp",
      }
    );

    // Step 5: Grant outgoing payment
    const outgoingPaymentGrant = await client.grant.request(
      { url: sendingWalletAddress.authServer },
      {
        access_token: {
          access: [
            {
              type: "outgoing-payment",
              actions: ["read", "create"],
              limits: {
                debitAmount: {
                  assetCode: quote.debitAmount.assetCode,
                  assetScale: quote.debitAmount.assetScale,
                  value: quote.debitAmount.value,
                },
              },
              identifier: sendingWalletAddress.id,
            },
          ],
        },
        interact: {
          start: ["redirect"],
          finish: {
            method: "redirect",
            uri: "http://localhost:3000/interledger/finish",
            nonce: "kaizenshop123",
          },
        },
      }
    );

  
    res.json({
      redirectUrl: outgoingPaymentGrant.interact?.redirect,
      quoteId: quote.id,
      outgoingPaymentGrantContinue: outgoingPaymentGrant.continue,
    });

  } catch (err) {
    return handleError(res, "general /api/pagar", err);
  }
});


app.get("/interledger/finish", (req, res) => {
  console.log("✅ Pago autorizado por Interledger, redirigiendo a pago.html...");
  res.redirect("/pago.html");
});


app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

