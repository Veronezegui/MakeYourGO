import nodemailer from "nodemailer";
import path from "path";
import hbs = require("nodemailer-express-handlebars");

import { host, port, user, pass } from "../config/mail.json";

var transport = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass,
  },
});

export default transport;
