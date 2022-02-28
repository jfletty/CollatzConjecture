# Collatz Conjecture
A simple script than confirms the 3n + 1 problem.

## Project Background
The Collatz Conjecture (simply known as 3n + 1) is a simple mathmatic equation that follows the following formula.

- Pick any positive integer
    - If the number is even, divide it by 2.
    - If the number is odd, multiply it by 3 and add 1. 
- Complete this process as many times as possible.

The conjecture is that no matter the number, every variation will end in the same outcome. the last three alterations being 4, 2, 1 which will repeat indefinitely.

For example: If we start with the number 7.

1. 7 is odd. We multiply it by 3 and add 1 leaving us with 22.
2. 22 is even. We divide it by 2 leaving us with 11.
3. 11 is odd. We multiply it by 3 and add 1 leaving us with 34.
4. Outcome is 17, then 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.
5. And now, the last 3 items in the sequence will always repeat. 4, 2, 1, 4, 2, 1...

## Build With
- [Typescript](https://www.typescriptlang.org/)
- [Node]()
- [ts-node]()
- [typescript]()

## Getting Started
1. To install all prerequisits, run: `npm install typescript ts-node`.
2. Options to run the script
    
    2.a. To run the script with an increasing index, run: `npx ts-node ./conjecture.ts`.
    
    2.b. To run the script with a random index between 1 and 1,000,000, run: `npx ts-node ./conjecture.ts random`.

### Contribution Guide
This repo is open for any additional changes, improvements or alterations. When you are making these changes, follow the coding conventions documented on the [Microsoft website](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions).

Any changes should be completed in your own fork and then PR'ed into the master branch.

## Roadmap

- [x] Add command line parameters for ordered vs random numbers
- [ ] Add visual aspect to graph our different variations

## Contact
Name: Josh Fletcher

Email: 10fletcherjosh@gmail.com

Socials: [Linkedin](https://www.linkedin.com/in/joshua-fletcher-ab4521b8/)