# Jest

Just Unit Test

## 1.Install Jest

```js
npm install --save-dev jest

```

## 2.Configure Jest

```js
{
  "scripts": {
    "test": "jest"
  }
}
```

### 3.Test File add

```js
{
  "scripts": {
    "test": "jest"
  }
}
```

### 3. Run Test

```js
npm test

```

### 3. Report Test

```js
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```

### 3.Test Directory

```js
  "scripts": {
    "test": "jest tests/ --coverage"
  },
```

Or Create jest.config.js file and add

```js
module.exports = {
  roots: ["<rootDir>/tests"], // Set the root directory for tests
  testMatch: [
    "**/?(*.)+(spec|test).[jt]s?(x)", // Match test files with .test.js/.spec.js extensions
  ],
};
```

## Tips for Writing Real-World Tests

### Mock Dependencies: Use jest.mock to simulate external services like APIs or databases.

### Focus on Behavior: Test the input-output behavior rather than implementation details.

### Handle Edge Cases: Test for null, undefined, empty arrays, and invalid inputs.

### Use Setup/Teardown: Utilize beforeEach, afterEach, or beforeAll to prepare and clean up test environments.
