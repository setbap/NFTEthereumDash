import {
  NFT24HChange,
  NFTCollectionsTransactions,
  NFTCollectionsUniqueBuyers,
  NFTCollectionsVolume,
  NFTMarketplaceComparison,
  NFTSelling,
  NFTTotalDailyInfo,
  NFTTotalInfo,
} from "lib/types/types/overview";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

// 
export const getNFT24HChange = () =>
  getSimpleInfo<NFT24HChange>(
    "65ba0492-9962-492f-afbc-0b0a5ebca650",
    "24h Sales Count, 24h Sales Volume (in USD), 24h Unique Buyers, 24h Unique Sellers"
  );

// 
export const getNFTTotalInfo = () =>
  getSimpleInfo<NFTTotalInfo>(
    "2e23eaa2-e41d-48a3-bdab-b9b7a4cf4fdb",
    "Total Sales Volume (in USD),Total Unique Buyers,Total Unique Sellers,Total Sales Count"
  );

// 
export const getNFTTotalDailyInfo = () =>
  getSimpleInfo<NFTTotalDailyInfo>(
    "bd5c402d-f84c-4c86-8c65-c64f83b2bbf1",
    "Daily Sales Volume (in USD),Daily NFT Price (in USD),Daily Sales Count,Daily Unique Buyers,Daily Unique Sellers"
  );

// 
export const getNFTSelling = () =>
  getSimpleArrayData<NFTSelling, NFTSelling>(
    "fdf86031-f640-44ce-8495-e7082271e629",
    "Weekly volume (in USD) of NFTs sold,Cumulative volume (in USD) of NFTs sold,Cumulative number of NFTs sold,Weekly average NFT price (in USD),Weekly number of NFT  sellers,Weekly number of NFTs sold",
    "Day"
  );

// 
export const getNFTMarketplaceComparison = () =>
  getSimpleArrayData<NFTMarketplaceComparison, NFTMarketplaceComparison>(
    "56d4797a-51a5-4aef-acc0-eecd5c698975",
    "Marketplaces share in volume of sale,Marketplaces share in number of sale"
  );

//
export const getNFTCollectionsTransactions = () =>
  getSimpleArrayData<NFTCollectionsTransactions, NFTCollectionsTransactions>(
    "dbcbf12a-afdd-4f72-9b2f-30e45e3b636b",
    "Top 10 NFT collections based on sold count"
  );

// 
export const getNFTCollectionsVolume = () =>
  getSimpleArrayData<NFTCollectionsVolume, NFTCollectionsVolume>(
    "11614ed5-c3fb-4fcc-a794-d49b951e864b",
    "Top 10 NFT collections based on volume"
  );

// 
export const getNFTCollectionsUniqueBuyers = () =>
  getSimpleArrayData<NFTCollectionsUniqueBuyers, NFTCollectionsUniqueBuyers>(
    "720a24df-09f0-4383-913f-f427f15381b7",
    "Top 10 NFT collections based on unique buyers"
  );
