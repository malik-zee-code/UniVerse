const errorMiddleware = (err, req, res, next) => {
  const message = err.message || "INTERNAL SERVER ERROR";
  const status = err.status || 500;

  console.log(err);
  return res.status(status).json({ error: message });
};
export default errorMiddleware;
