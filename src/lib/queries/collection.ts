export const getCertainCollectionDailySingleNumberQuery = (collectionName: string) => `
with info as (
select 
  date_trunc('day', block_timestamp) as "day",
  sum(price_usd) as "sales volume",
  avg(price_usd) as "avg nft price",
  count(distinct buyer_address) as "unique buyers",
  count(distinct seller_address) as "unique sellers",
  count(distinct tx_hash) as "sales count"
from ethereum.core.ez_nft_sales
where 
  project_name = '${collectionName}' and 
  price_usd is not null 
group by 1
),
avg_info as (
select 
  avg("sales volume") as "daily sales volume (in usd)",
  avg("avg nft price") as "daily nft price (in usd)",
  avg("sales count") as "daily sales count",
  avg("unique buyers") as "daily unique buyers",
  avg("unique sellers") as "daily unique sellers"
from info 
)
select *
from avg_info
`


export const getCertainCollectionTotalSingleNumberQuery = (collectionName: string) =>
  `
select 
  sum(price_usd) as "total sales volume (in usd)",
  count(distinct buyer_address) as "total unique buyers",
  count(distinct seller_address) as "total unique sellers",
  count(distinct tx_hash) as "total sales count"
from ethereum.core.ez_nft_sales
where 
  project_name = '${collectionName}' and 
  price_usd is not null 
`
export const getCertainCollectioncurrentValueAndChangeRatherThanYesterdayQuery = (collectionName: string) => `
-- only show current value and change %
with change as (
select 
  date_trunc('day', block_timestamp) as "day",
  
  count(distinct tx_hash) as "24h sales count",  
  lag("24h sales count",1) over(order by "day") as "previous 24h sales count",
  (("24h sales count" - "previous 24h sales count") / "previous 24h sales count") * 100 as "change (%) sales count",
  
  sum(price_usd) as "24h sales volume (in usd)", 
  lag("24h sales volume (in usd)",1) over(order by "day") as "previous 24h sales volume",
  (("24h sales volume (in usd)" - "previous 24h sales volume") / "previous 24h sales volume") * 100 as "change (%) sales volume",
  
  count(distinct buyer_address) as "24h unique buyers", 
  lag("24h unique buyers",1) over(order by "day") as "previous 24h unique buyers",
  (("24h unique buyers" - "previous 24h unique buyers") / "previous 24h unique buyers") * 100 as "change (%) unique buyers",
  
  count(distinct seller_address) as "24h unique sellers", 
  lag("24h unique sellers",1) over(order by "day") as "previous 24h unique sellers",
  (("24h unique sellers" - "previous 24h unique sellers") / "previous 24h unique sellers") * 100 as "change (%) unique sellers"
from ethereum.core.ez_nft_sales
where 
  project_name = '${collectionName}' and 
  price_usd is not null 
group by 1
)
select * 
from change 
where "day" = current_date - 1
`

// 
export const getCertainCollectionNFTSellingQuery = (collectionName: string) =>
  `
with info as (
select 
  date_trunc('week', block_timestamp) as "day",
  sum(price_usd) as "sales volume",
  avg(price_usd) as "avg nft price",
  count(distinct buyer_address) as "unique buyers",
  count(distinct seller_address) as "unique sellers",
  count(distinct tx_hash) as "sales count",

  avg("sales volume") over (order by "day", "day" rows between 6 preceding and current row) as "ma7 sales volume",
  avg("sales count") over (order by "day", "day" rows between 6 preceding and current row) as "ma7 sales count",
  avg("avg nft price") over (order by "day", "day" rows between 6 preceding and current row) as "ma7 avg nft price",

  sum("sales volume") over (order by "day") as "cum sales volume",
  sum("sales count") over (order by "day") as "cum sales count"
from ethereum.core.ez_nft_sales
where 
  project_name = '${collectionName}' and 
  price_usd is not null 
group by 1
),
avg_info as (
select 
  avg("sales volume") as "avg sales volume",
  avg("avg nft price") as "total avg nft price",
  avg("sales count") as "avg sales count"
from info 
)
select *
from info, avg_info
order by "day"
`

export const getCertainCollectionMarketplacesComparisonQuery = (collectionName: string) =>
  `
select 
  -- date_trunc('week', block_timestamp) as "day",
  platform_name as "marketplace",
  sum(price_usd) as "sales volume",
  avg(price_usd) as "avg nft price",
  count(distinct buyer_address) as "unique buyers",
  count(distinct seller_address) as "unique sellers",
  count(distinct tx_hash) as "sales count"
from ethereum.core.ez_nft_sales
where 
  project_name = '${collectionName}' and 
  price_usd is not null 
group by 1
`

export const getCertainCollectionMarketplacesComparisonDailyAverageQuery = (collectionName: string) =>
  `
with info as (
select 
  date_trunc('day', block_timestamp) as "day",
  platform_name as "marketplace",
  sum(price_usd) as "sales volume",
  avg(price_usd) as "avg nft price",
  count(distinct buyer_address) as "unique buyers",
  count(distinct seller_address) as "unique sellers",
  count(distinct tx_hash) as "sales count"
from ethereum.core.ez_nft_sales
where 
  project_name = '${collectionName}' and 
  price_usd is not null 
group by 1, 2
),
avg_info as (
select 
  "marketplace",
  avg("sales volume") as "daily sales volume (in usd)",
  avg("avg nft price") as "daily nft price (in usd)",
  avg("sales count") as "daily sales count",
  avg("unique buyers") as "daily unique buyers",
  avg("unique sellers") as "daily unique sellers"
from info 
group by 1
)
select *
from avg_info
`