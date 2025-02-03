import { Xendit } from "xendit-node";
import { XENDIT_SECRET_KEY } from "../config";

const xendit = new Xendit({
  secretKey: XENDIT_SECRET_KEY,
});

export default xendit;
