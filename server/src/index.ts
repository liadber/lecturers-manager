import express, {NextFunction, Request, Response} from "express";
import {lecturersRouter} from "./routes/lecturers";

const app = express();
const port: number = (process.env.PORT ? parseInt(process.env.PORT) : false) || 8080;

app.use('/lecturers', lecturersRouter);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json(`Lecturers' server is up and running.`);
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    const status = 500;
    const message = error.message;
    res.status(status).json({message: message});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
