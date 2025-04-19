import {test} from '@playwright/test'

test.describe.serial('Suite 1', ()=> {
    test.beforeAll(async({browser}) => {
        console.log('Database connection setup');
    })
    
    test.beforeEach(async({page}) => {
        console.log('Clearing cookies');
    })
    
    test.afterEach(async({page}) => {
        console.log('Cache removal');
    })
    
    test.afterAll(async({browser}) => {
        console.log('Database connection disconnect');
    })
    test('Test 1', async({page}) => {
        console.log('Test 1 block');
    })
    
    test('Test 2', async({page}) => {
        console.log('Test 2 block');
    })
})
test.describe('Suite 2', ()=> {
    test('Test 3', async({page}) => {
        console.log('Test 3 block');
    })
    
    test('Test 4', async({page}) => {
        console.log('Test 4 block');
    })
})
