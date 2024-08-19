export const logServerMessage = (message: string): void => {
  const date = new Date().toUTCString()
  console.log(message, date);
}