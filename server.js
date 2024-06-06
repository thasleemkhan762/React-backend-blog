const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require('cors');

connectDb();
const app = express();
const port = process.env.PORT || 5001;


app.use(cors({
    origin: 'https://react-front-end-blog-etuln24ul-thasleemkhan762s-projects.vercel.app'
}));
app.use(express.json());
app.use("/api/blogs", require("./routes/blogsRoutes"));
app.use(errorHandler);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});