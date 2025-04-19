import {test} from '@playwright/test'

test.beforeAll(async({browser}) => {
    console.log('Before all block');
})

test.beforeEach(async({page}) => {
    console.log('Before each block');
})

test('Test 1', async({page}) => {
    console.log('Add items and checkout test');
})

test('Test 2', async({page}) => {
    console.log('Add items and remove from cart test');
})

test.afterEach(async({page}) => {
    console.log('After each block');
})

test.afterAll(async({browser}) => {
    console.log('After all block');
})