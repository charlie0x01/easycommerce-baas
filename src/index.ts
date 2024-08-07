import { app, PORT } from "./app";
import { connect } from "./config/database.config";

// connect database
export const database = connect();
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
