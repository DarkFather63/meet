import jest from 'jest';
import puppeteer from 'puppeteer';
import { mockComponent } from 'react-dom/test-utils';
import { mockData } from '../mock-data';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });


  test('An event element is collapsed by default', async () => {

    await page.waitForSelector('.event');

    const eventDetails = await page.$('.event_details');
    expect(eventDetails).toBe(null);
  });

  test('User can expand an event to see its details', async () => {
    await page.waitForSelector('.event');
    await page.click('.event .btn ');

    const eventDetails = await page.$('.event_details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.waitForSelector('.event');
    await page.click('.event .btn');

    const eventDetails = await page.$('.event_details');
    expect(eventDetails).toBe(null);
  });

})


//Will work on this test suite periodically - WIP
// describe('filter events by city', () => {
//   let browser;
//   let page;
//   beforeAll(async () => {
//     browser = await puppeteer.launch();
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000/');
//   });

//   afterAll(() => {
//     browser.close();
//   });

//   test('All locations are displayed by default', async () => {

//     await page.waitForSelector('.event-list');

//     const eventList = await page.$('.event-list li');
//     expect(eventList).toHaveLength(2);
//   });

// })