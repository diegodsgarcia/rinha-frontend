export default function* splitComplexData(data, chunkSize) {
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i += chunkSize) {
      yield data.slice(i, i + chunkSize);
    }
  } else if (typeof data === 'object') {
    const result = Array.isArray(data) ? [] : {};

    for (const key in data) {
      const value = data[key];
      if (Array.isArray(value) || typeof value === 'object') {
        result[key] = yield* splitComplexData(value, chunkSize);
      } else {
        result[key] = value;
      }
    }

    yield result;
  } else {
    yield data;
  }
}
