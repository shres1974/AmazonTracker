import { NextResponse } from "next/server";
import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/scraper/mongoose";
import { scrapeAndStoreProduct } from "@/lib/actions";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productUrl = searchParams.get("url");

    if (!productUrl) {
      return NextResponse.json({ error: "Product URL is required" }, { status: 400 });
    }

    const productId = await scrapeAndStoreProduct(productUrl);
    
    if (!productId) {
      return NextResponse.json({ error: "Scraping failed, try again later" }, { status: 500 });
    }

    return NextResponse.json({ message: "Product scraped successfully", id: productId });
  } catch (error: any) {
    console.error(`❌ API error: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
