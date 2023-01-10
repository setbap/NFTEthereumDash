import { getCertainCollectioncurrentValueAndChangeRatherThanYesterdayQuery, getCertainCollectionDailySingleNumberQuery, getCertainCollectionMarketplacesComparisonDailyAverageQuery, getCertainCollectionMarketplacesComparisonQuery, getCertainCollectionNFTSellingQuery, getCertainCollectionTotalSingleNumberQuery } from "lib/queries/collection";
import { CertainCollectioncurrentValueAndChangeRatherThanYesterday, CertainCollectionDailySingleNumber, CertainCollectionMarketplacesComparison, CertainCollectionMarketplacesComparisonDailyAverage, CertainCollectionNFTSelling, CertainCollectionTotalSingleNumber, CollectionName } from "lib/types/types/collection";
import { flipsideQueryExecuter, getSimpleArrayData, getSimpleInfo } from "./utils";


// 1
export const getCertainCollectionDailySingleNumber = () =>
    getSimpleInfo<CertainCollectionDailySingleNumber>(
        "0a375a7e-d66b-41a0-a107-ed76b70671c2",
        "Daily Sales Volume(in USD),Daily NFT Price(in USD),Daily Sales Count,Daily Unique Buyers,Daily Unique Sellers"
    )
export const getCertainCollectionDailySingleNumberApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionDailySingleNumber[]>(getCertainCollectionDailySingleNumberQuery(collectionName));

// 2
export const getCertainCollectionTotalSingleNumber = () =>
    getSimpleInfo<CertainCollectionTotalSingleNumber>(
        "cfe76492-dd03-4be1-9239-74ac37cf177f",
        "Total Sales Volume(in USD),Total Unique Buyers,Total Unique Sellers,Total Sales Count"
    )

export const getCertainCollectionTotalSingleNumberNumberApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionTotalSingleNumber[]>(getCertainCollectionTotalSingleNumberQuery(collectionName));


// 3
export const getCertainCollectioncurrentValueAndChangeRatherThanYesterday = () =>
    getSimpleInfo<CertainCollectioncurrentValueAndChangeRatherThanYesterday>(
        "c86992b4-a9dc-4d0f-9fdb-f6c8558ebec5",
        "24h Sales Count,24h Sales Volume (in USD),24h Unique Buyers,24h Unique Sellers"
    )

export const getCertainCollectioncurrentValueAndChangeRatherThanYesterdayApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectioncurrentValueAndChangeRatherThanYesterday[]>(getCertainCollectioncurrentValueAndChangeRatherThanYesterdayQuery(collectionName));


// 4
export const getCertainCollectionNFTSelling = () =>
    getSimpleArrayData<CertainCollectionNFTSelling, CertainCollectionNFTSelling>(
        "600ce9f3-9155-46b1-948a-2e35c1b91ec4",
        "Weekly number of NFTs sold,Cumulative number of NFTs sold,Weekly volume(in USD) of NFTs sold,Weekly number of NFT buyers Vs.sellers,Cumulative volume(in USD) of NFTs sold,Weekly average NFT price(in USD)"
    )

export const getCertainCollectionNFTSellingApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionNFTSelling[]>(getCertainCollectionNFTSellingQuery(collectionName));



// 5
export const getCertainCollectionMarketplacesComparison = () =>
    getSimpleArrayData<CertainCollectionMarketplacesComparison, CertainCollectionMarketplacesComparison>(
        "1a47fbbe-7e31-4129-b1d6-70b958a1fe97",
        "Marketplaces share in volume of sale,Marketplaces share in number of sale"
    )

export const getCertainCollectionMarketplacesComparisonApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionMarketplacesComparison[]>(getCertainCollectionMarketplacesComparisonQuery(collectionName));

// 6
export const getCertainCollectionMarketplacesComparisonDailyAverage = () =>
    getSimpleArrayData<CertainCollectionMarketplacesComparisonDailyAverage, CertainCollectionMarketplacesComparisonDailyAverage>(
        "cb887e87-8c27-4f9b-a51d-d8c03e267552",
        "Daily average number of sales on each marketplace,Daily average volume of sales on each marketplace,Daily average unique buyers on each marketplace,Daily average unique sellers on each marketplace,Daily average NFT price on each marketplace"
    )

export const getCertainCollectionMarketplacesComparisonDailyAverageApi = (collectionName: string) =>
    flipsideQueryExecuter<CertainCollectionMarketplacesComparisonDailyAverage[]>(getCertainCollectionMarketplacesComparisonDailyAverageQuery(collectionName));

export const getCollectionNames = () =>
    getSimpleArrayData<CollectionName, CollectionName>(
        "c59d34ec-f5f8-4759-a74e-4ebcb3976dc4",
        "Collection Names"
    )