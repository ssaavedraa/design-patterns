const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com'
}

const proxyHandler = {
  get: (target, property) => {
    return `${new Date} | The value of ${prop} is ${Reflect.get(target, property)}`
  },
  set: (target, property, value) => {
    if (prop === 'email') {
      if (!isValidEmail(value)) {
        console.log('Please provide a valid email.');
        return false;
      }
    }

    if (prop === 'username') {
      if (value.length < 3) {
        throw new Error('Please use a longer username.');
      } else if (!isAllLetters(value)) {
        throw new Error('You can only use letters');
      }
    }

    if (prop === 'age') {
      if (typeof value !== 'number') {
        throw new Error('Please provide a valid age.');
      }

      if (value < 18) {
        throw 'User cannot be younger than 18.';
      }
    }

    return Reflect.set(target, property, value);
  }
}

const userProxy = new Proxy(user, proxyHandler)
