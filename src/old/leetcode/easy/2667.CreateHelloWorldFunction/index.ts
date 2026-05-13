export function createHelloWorld() {
  return (): string => {
    return "Hello World";
  };
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
