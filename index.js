import express from "express";
import {dirname,join} from 'path'
import { fileURLToPath } from 'url' 
import indexRoutes from "./routes/index.js"

const app = express() 
const _dirname = dirname(fileURLToPath(import.meta.url))

app.set('views',join(_dirname,'views'))
app.set('view engine', 'ejs')
app.listen(3000)

app.use(indexRoutes)
app.use(express.static(join(_dirname,'estilos')))