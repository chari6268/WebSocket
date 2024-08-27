import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let GetFunc = (req, res, next) => {
    res.sendFile(path.join(__dirname + `/../public/Cover/index.html`));
};

export { GetFunc };
