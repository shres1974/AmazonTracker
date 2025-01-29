import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractCurrency, extractDescription, extractPrice } from '../utils';
import { Decimal } from 'decimal.js';

export async function scrapeAmazonProduct(url: string) {
    if (!url) return;

    // Brightdata configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 33335;
    const session_id = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: '${username}-session-${session_id}',
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    };

    try {
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        // Extract the Product title
        const title = $('#productTitle').text().trim();

        const currentPrice = new Decimal(extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('.a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base'),
            $('.priceToPay .a-price-whole .a-price-fraction')
        )).toDecimalPlaces(2); // Ensure 2 decimal places
        
        const originalPrice = new Decimal(extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen'),
            $('#listPrice'),
            $('#priceblock_dealprice'),
            $('.a-size-base.a-color-price')
        )).toDecimalPlaces(2); // Ensure 2 decimal places

        const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

          const images = 
        $('#imgBlkFront').attr('data-a-dynamic-image') || 
        $('#landingImage').attr('data-a-dynamic-image') ||
        '{}'

        const imageUrls = Object.keys(JSON.parse(images));
        const currency = extractCurrency($('.a-price-symbol'))
        const discountRate = $('.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage').text().replace(/[-%]/g, "");

        const description = extractDescription($)
        
        
        //console.log('Decimal Current Price:', currentPrice.toString()); // Log the Decimal value
        //console.log('Decimal Original Price:', originalPrice.toString()); // Log the Decimal value
        
        //console.log({ title, currentPrice, originalPrice, outOfStock, images, currency, discountRate});

        //Construct data object with scraped information
        const data = {
            url,
            currency: currency || '$',
            image: imageUrls[0],
            title,
            currentPrice: currentPrice.toNumber(), // Convert Decimal to number
            originalPrice: originalPrice.toNumber(), // Convert Decimal to number
            priceHistory: [],
            discountRate: Number(discountRate),
            category: 'category',
            reviewsCount: 100,
            stars: 4.5,
            isOutOfStock: outOfStock,
            description,
            lowestPrice: currentPrice.toNumber(), // Convert Decimal to number
            highestPrice: originalPrice.toNumber(), // Convert Decimal to number
            averagePrice: currentPrice.toNumber(), // Convert Decimal to number
        }
          return data;

    } catch (error: any) {
        throw new Error('Failed to scrape product: ${error.message}');
    }




}
