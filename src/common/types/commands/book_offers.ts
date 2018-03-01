import {
  TakerRequestAmount,
  OfferCreateTransaction,
  RippledAmount
} from '../objects'

export interface BookOffersRequest {
  taker?: string,
  taker_gets: TakerRequestAmount,
  taker_pays: TakerRequestAmount,
  ledger_hash?: string,
  ledger_index?: number | ('validated' | 'closed' | 'current'),
  limit?: number,
  marker?: any
}

export interface BookOffersResponse {
  offers: OrderBookOffer[],
  ledger_hash?: string,
  ledger_current_index?: number,
  ledger_index?: number,
  marker?: any
}

export interface OrderBookOffer extends OfferCreateTransaction {
  quality?: number
  owner_funds?: string,
  taker_gets_funded?: RippledAmount,
  taker_pays_funded?: RippledAmount
}
