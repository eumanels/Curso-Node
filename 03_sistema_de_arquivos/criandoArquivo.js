import {promises as fs} from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const arquivo = path.join(__dirname, 'boas-vindas.txt');

try {
    await fs.writeFile(arquivo, 'How sweet it tastes');
} catch (error) {
    console.log('Erro ao criar arquivo', error)
}