import { port, customMessage } from './config.js';

export const getExampleMessage = (): string => {
  return customMessage;
};

export const consoleMessage = `Server is running at http://127.0.0.1:${port}/...`;
