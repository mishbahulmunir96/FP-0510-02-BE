import xendit from "../../lib/xendit";

export const testCreateXenditService = async () => {
  try {
    const invoice = await xendit.Invoice.createInvoice({
      data: {
        externalId: "test-external-id",
        amount: 10000,
      },
    });

    return invoice;
  } catch (error) {
    throw error;
  }
};
